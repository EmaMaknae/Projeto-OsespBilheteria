const jwt = require('jsonwebtoken');
const connection = require('../database'); // Importe o módulo de conexão

exports.login = async (req, res) => {
    try {
        const { login, senha } = req.body;

        // Expressão regular para validar o formato do email
        const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

        if (!login || !senha || !EMAIL_REGEX.test(login)) {
            return res.status(400).json({ error: 'Credenciais inválidas' });
        }

        console.log('Recebido pedido de login com login:', login);

        const query = 'SELECT * FROM tbUsuario WHERE login = ?';
        console.log('Executando consulta:', query);

        // Execute a consulta no banco de dados
        connection.query(query, [login], (error, results) => {
            if (error) {
                console.error('Erro ao executar consulta:', error);
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }

            // Verifique se há resultados da consulta
            if (!results || results.length === 0) {
                console.log('Usuário não encontrado');
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const user = results[0];
            console.log('Usuário encontrado:', user);

            // Compare a senha fornecida com a senha armazenada no banco de dados
            if (senha !== user.senha) {
                console.log('Credenciais inválidas');
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            console.log('Login bem-sucedido');

            // Gerar um token JWT
            const token = jwt.sign({ id: user.id, login: user.login }, 'secreto', { expiresIn: '1h' }); // Altere 'secreto' para uma chave segura

            // Enviar o token como resposta
            res.status(200).json({ message: 'Login bem-sucedido', token });
        });
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};
