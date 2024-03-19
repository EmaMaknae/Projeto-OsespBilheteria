// Rota para obter todos os dados de permissao acesso
router.get('/', (req, res) => {
  connection.query('SELECT * FROM tbPerfilUsuario', (error, results, fields) => {
      if (error) {
          console.error('Erro ao executar consulta:', error);
          res.status(500).send('Erro ao buscar Perfil Usuario no banco de dados');
          return;
      }
      res.json(results);
  });
});

// Rota para obter dados de um único registro de perfil de usuario
router.get('/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM tbPerfilUsuario WHERE id = ?', [id], (error, results, fields) => {
      if (error) {
          console.error('Erro ao executar consulta:', error);
          res.status(500).send('Erro ao buscar Perfil usuário no banco de dados');
          return;
      }
      if (results.length === 0) {
          res.status(404).send('Perfil de usuário de acesso não encontrada');
          return;
      }
      res.json(results[0]);
  });
});

// Rota para criar um novo registro de perfil de usuário
router.post('/', (req, res) => {
  const { descricao, administrador } = req.body;
  connection.query('INSERT INTO tbPerfilUsuario (iddescricao, idadministrador) VALUES (?, ?)', [iddescricao, idadministrador], (error, results, fields) => {
      if (error) {
          console.error('Erro ao inserir perfil de usuário:', error);
          res.status(500).send('Erro ao inserir perfil de usuário');
          return;
      }
      res.json({ message: 'Perfil de usuário criado com sucesso', id: results.insertId });
  });
});

// Rota para atualizar um registro de perfil de usuário existente
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { descricao, administrador } = req.body;
    // Convertendo o valor booleano para 0 ou 1
    const administradorValue = administrador ? 1 : 0;
    connection.query('UPDATE tbPerfilUsuario SET descricao = ?, administrador = ? WHERE id = ?', [descricao, administradorValue, id], (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar perfil de usuário:', error);
            res.status(500).send('Erro ao atualizar perfil de usuário');
            return;
        }
        res.json({ message: 'Perfil de usuário atualizado com sucesso', id });
    });
  });
  
  

// Rota para excluir um registro de perfil de usuário
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM tbPerfilUsuario WHERE id = ?', [id], (error, results, fields) => {
      if (error) {
          console.error('Erro ao excluir perfil de usuário:', error);
          res.status(500).send('Erro ao excluir perfil de usuário');
          return;
      }
      res.json({ message: 'Perfil de usuario excluído com sucesso', id });
  });
});

module.exports = router;
