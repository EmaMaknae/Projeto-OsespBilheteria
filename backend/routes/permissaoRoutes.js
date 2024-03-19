const express = require('express');
const router = express.Router();
const connection = require('../database');

// Rota para criar uma nova permissao
router.post('/', (req, res) => {
    const { idUsuario, idMenu } = req.body;
    connection.query('INSERT INTO tbpermissao (idUsuario, idMenu) VALUES (?, ?)', [idUsuario, idMenu], (error, results, fields) => {
        if (error) {
            console.error('Erro ao inserir permissão:', error);
            res.status(500).send('Erro ao inserir permissão');
            return;
        }
        res.json({ message: 'Permissão criada com sucesso', id: results.insertId });
    });
});

// Rota para listar todas as permissoes
router.get('/', (req, res) => {
    connection.query('SELECT * FROM tbpermissao', (error, results, fields) => {
        if (error) {
            console.error('Erro ao executar consulta:', error);
            res.status(500).send('Erro ao buscar permissões no banco de dados');
            return;
        }
        res.json(results);
    });
});

// Rota para obter detalhes de uma permissao específica
router.get('/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM tbpermissao WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Erro ao executar consulta:', error);
            res.status(500).send('Erro ao buscar permissão no banco de dados');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Permissão não encontrada');
            return;
        }
        res.json(results[0]);
    });
});

// Rota para atualizar os detalhes de uma permissao específica
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { idUsuario, idMenu } = req.body;
    connection.query('UPDATE tbpermissao SET idUsuario = ?, idMenu = ? WHERE id = ?', [idUsuario, idMenu, id], (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar permissão:', error);
            res.status(500).send('Erro ao atualizar permissão');
            return;
        }
        res.json({ message: 'Permissão atualizada com sucesso', id });
    });
});

// Rota para excluir uma permissao específica
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM tbpermissao WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Erro ao excluir permissão:', error);
            res.status(500).send('Erro ao excluir permissão');
            return;
        }
        res.json({ message: 'Permissão excluída com sucesso', id });
    });
});


module.exports = router;
