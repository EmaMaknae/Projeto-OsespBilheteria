const express = require('express');
const router = express.Router();
const connection = require('../database');
const { verifyToken } = require('../controllers/AuthController');

router.use(verifyToken);

// Rota para criar um novo item de menu
router.post('/', (req, res) => {
  const { descricao, link, idpai, ordem, ativo } = req.body;

  // Validação dos campos de entrada
  if (!descricao || !link || !idpai || !ordem || !ativo) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  if (ativo !== 'S' && ativo !== 'N') {
    return res.status(400).json({ error: "O valor do campo 'ativo' deve ser 'S' ou 'N'" });
  }

  // Inserção do item de menu no banco de dados
  connection.query('INSERT INTO tbmenu (descricao, link, idpai, ordem, ativo) VALUES (?, ?, ?, ?, ?)', [descricao, link, idpai, ordem, ativo], (error, results, fields) => {
    if (error) {
      console.error('Erro ao inserir item de menu:', error);
      return res.status(500).json({ error: 'Erro ao inserir item de menu' });
    }
    res.json({ message: 'Item de menu criado com sucesso', id: results.insertId });
  });
});

// Rota para obter todos os itens de menu
router.get('/', (req, res) => {
  connection.query('SELECT * FROM tbmenu', (error, results, fields) => {
    if (error) {
      console.error('Erro ao executar consulta:', error);
      return res.status(500).json({ error: 'Erro ao buscar menu no banco de dados' });
    }
    res.json(results);
  });
});

// Rota para atualizar um item de menu
router.put('/:id', (req, res) => {
  const { descricao, link, idpai, ordem, ativo } = req.body;
  const { id } = req.params;

  // Atualização do item de menu no banco de dados
  connection.query('UPDATE tbmenu SET descricao = ?, link = ?, idpai = ?, ordem = ?, ativo = ? WHERE id = ?', [descricao, link, idpai, ordem, ativo, id], (error, results, fields) => {
    if (error) {
      console.error('Erro ao atualizar item de menu:', error);
      return res.status(500).json({ error: 'Erro ao atualizar item de menu' });
    }
    res.json({ message: 'Item de menu atualizado com sucesso', id });
  });
});

// Rota para excluir um item de menu
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  // Exclusão do item de menu no banco de dados
  connection.query('DELETE FROM tbmenu WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      console.error('Erro ao excluir item de menu:', error);
      return res.status(500).json({ error: 'Erro ao excluir item de menu' });
    }
    res.json({ message: 'Item de menu excluído com sucesso', id });
  });
});

module.exports = router;
