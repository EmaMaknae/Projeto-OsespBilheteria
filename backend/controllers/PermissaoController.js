const connection = require('../database');

// Função para criar um novo usuário
exports.createPermissao = (req, res) => {
    const { idUsuario, idMenu } = req.body;
    connection.query('INSERT INTO tbpermissao (idUsuario, idMenu) VALUES (?, ?)', [idUsuario, idMenu], (error, results, fields) => {
        if (error) {
            console.error('Erro ao criar permissão:', error);
            res.status(500).send('Erro ao criar permissão');
            return;
        }
        res.json({ message: 'Permissão criado com sucesso', id: results.insertId });
    });
};

// Função para listar todos os usuários
exports.getAllPermissao = (req, res) => {
    connection.query('SELECT * FROM tbpermissao', (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar permissão:', error);
            res.status(500).send('Erro ao buscar permissão');
            return;
        }
        res.json(results);
    });
};

// Função para obter detalhes de uma permissão específico
exports.getPermissaoById = (req, res) => {
    const permissaoId = req.params.userId;
    connection.query('SELECT * FROM tbpermissao WHERE id = ?', [idUsuario], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar permissão:', error);
            res.status(500).send('Erro ao buscar permissão');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Permissão não encontrado');
            return;
        }
        res.json(results[0]);
    });
};

// Função para atualizar os detalhes de uma permissão específica
exports.updatepermissao = (req, res) => {
    const permissaoId = req.params.permissaoId;
    const { idUsuario, idMenu } = req.body;
    connection.query('UPDATE tbpermissao SET idUsuario = ?, idMenu = ? WHERE id = ?', [idUsuario, idMenu, permissaoId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar permissão:', error);
            res.status(500).send('Erro ao atualizar permissão');
            return;
        }
        res.json({ message: 'Permissão atualizado com sucesso', id: permissaoId });
    });
};

// Função para excluir um usuário específico
exports.deletePermissao = (req, res) => {
    const permissaoId = req.params.permissaoId;
    connection.query('DELETE FROM tbpermissao WHERE id = ?', [permissaoId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao excluir permissão:', error);
            res.status(500).send('Erro ao excluir permissão');
            return;
        }
        res.json({ message: 'Permissão excluída com sucesso', id: permissaoId });
    });
};
