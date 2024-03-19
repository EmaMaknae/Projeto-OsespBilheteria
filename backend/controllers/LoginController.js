const connection = require('../database');

// Função para fazer login
exports.login = (req, res) => {
    const { email, senha } = req.body;

    // Verificar as credenciais do usuário no banco de dados
    connection.query('SELECT * FROM tbUsuario WHERE login = ? AND senha = ?', [email, senha], (error, results, fields) => {
        if (error) {
            console.error('Erro ao fazer login:', error);
            return res.status(500).send('Erro interno ao fazer login');
        }

        // Se não encontrou nenhum usuário com as credenciais fornecidas, retorna erro de credenciais inválidas
        if (results.length === 0) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Se encontrou um usuário, retorna os dados do usuário
        const user = results[0];

        // Recuperar as permissões do usuário
        connection.query('SELECT * FROM perfilUsuario WHERE id = ?', [user.idPerfilUsuario], (error, results, fields) => {
            if (error) {
                console.error('Erro ao recuperar permissões do usuário:', error);
                return res.status(500).send('Erro interno ao fazer login');
            }

            // Se não encontrou perfil de usuário, retorna erro interno
            if (results.length === 0) {
                return res.status(500).send('Perfil de usuário não encontrado');
            }

            // Retorna os dados do usuário e suas permissões
            const perfil = results[0];
            res.json({
                id: user.id,
                nome: user.nome,
                email: user.login,
                isAdmin: perfil.administrador === 1 // Verifica se o usuário é administrador
            });
        });
    });
};
