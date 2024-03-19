const connection = require('../database');

// Função para criar um novo usuário
exports.createUser = (req, res) => {
    const { name, email, password } = req.body;
    connection.query('INSERT INTO tbUsuario (nome, login, senha) VALUES (?, ?, ?)', [name, email, password], (error, results, fields) => {
        if (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).send('Erro ao criar usuário');
            return;
        }
        res.json({ message: 'Usuário criado com sucesso', id: results.insertId });
    });
};

// Função para listar todos os usuários
exports.getAllUsers = (req, res) => {
    connection.query('SELECT * FROM tbUsuario', (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar usuários:', error);
            res.status(500).send('Erro ao buscar usuários');
            return;
        }
        res.json(results);
    });
};

// Função para obter detalhes de um usuário específico
exports.getUserById = (req, res) => {
    const userId = req.params.userId;
    connection.query('SELECT * FROM tbUsuario WHERE id = ?', [userId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar usuário:', error);
            res.status(500).send('Erro ao buscar usuário');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Usuário não encontrado');
            return;
        }
        res.json(results[0]);
    });
};

// Função para atualizar os detalhes de um usuário específico
exports.updateUser = (req, res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;
    connection.query('UPDATE tbUsuario SET nome = ?, login = ?, senha = ? WHERE id = ?', [name, email, password, userId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).send('Erro ao atualizar usuário');
            return;
        }
        res.json({ message: 'Usuário atualizado com sucesso', id: userId });
    });
};

// Função para excluir um usuário específico
exports.deleteUser = (req, res) => {
    const userId = req.params.userId;
    connection.query('DELETE FROM tbUsuario WHERE id = ?', [userId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao excluir usuário:', error);
            res.status(500).send('Erro ao excluir usuário');
            return;
        }
        res.json({ message: 'Usuário excluído com sucesso', id: userId });
    });
};
