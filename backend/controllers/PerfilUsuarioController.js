const connection = require('../database');

// Função para criar um novo Perfil de Usuario
exports.createPerfilUsuario = (req, res) => {
    const { descricao, administrador } = req.body;
    connection.query('INSERT INTO tbPerfilUsuario (descricao, administrador) VALUES (?, ? )', [descricao, administrador], (error, results, fields) => {
        if (error) {
            console.error('Erro ao criar perfil de usuário:', error);
            res.status(500).send('Erro ao criar perfil de usuário');
            return;
        }
        res.json({ message: 'Perfil de usuário criado com sucesso', id: results.insertId });
    });
};

// Função para listar todos os perfis de usuarios
exports.getAllPerfilUsuario = (req, res) => {
    connection.query('SELECT * FROM tbPerfilUsuario', (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar Perfil de usuários:', error);
            res.status(500).send('Erro ao buscar perfil de usuários');
            return;
        }
        res.json(results);
    });
};

// Função para obter detalhes de um perfil de usuário específico
exports.getPerfilUsuarioById = (req, res) => {
    const PerfilUsuarioIdId = req.params.userId;
    connection.query('SELECT * FROM tbPerfilUsuario WHERE id = ?', [PerfilUsuarioId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar perfil de usuário:', error);
            res.status(500).send('Erro ao buscar perfil de usuário');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Perfil de usuário não encontrado');
            return;
        }
        res.json(results[0]);
    });
};

// Função para atualizar os detalhes de um perfil de usuário específico
exports.updatePerfilUsuario = (req, res) => {
    const PerfilUsuarioId = req.params.PerfilUsuarioId;
    const { descricao, administrador} = req.body;
    connection.query('UPDATE tbPerfilUsuario SET descricao = ?, administrador = ? WHERE id = ?', [descricao, administrador, PerfilUsuarioId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar perfil de usuário:', error);
            res.status(500).send('Erro ao atualizar perfil de usuário');
            return;
        }
        res.json({ message: 'Perfil de usuário atualizado com sucesso', id: PerfilUsuarioId });
    });
};

// Função para excluir um perfil de usuário específico
exports.deletePerfilUsuario = (req, res) => {
    const PerfilUsuarioId = req.params.userId;
    connection.query('DELETE FROM tbPerfilUsuario WHERE id = ?', [PerfilUsuarioId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao excluir perfil de usuário:', error);
            res.status(500).send('Erro ao excluir perfil de usuário');
            return;
        }
        res.json({ message: 'Perfil de usuário excluído com sucesso', id: PerfilUsuarioId });
    });
};
