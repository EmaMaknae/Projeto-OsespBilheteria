const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../database');

exports.login = (req, res) => {
    const { email, password } = req.body;
    
    connection.query('SELECT * FROM tbUsuario WHERE email = ?', [email], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar usuário:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        const user = results[0];
        // Verifique se a senha fornecida corresponde à senha armazenada no banco de dados
        bcrypt.compare(password, user.senha, (err, result) => {
            if (err) {
                console.error('Erro ao comparar senhas:', err);
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }
            if (!result) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }
            // Se a autenticação for bem-sucedida, você pode enviar uma resposta com status 200 e uma mensagem de sucesso
            res.status(200).json({ message: 'OK' });
        });
    });
};
