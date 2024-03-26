const express = require('express');
const router = express.Router();
const roleController = require('../controllers/routes/roleController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para criar uma nova permissão (apenas administradores podem acessar)
router.post('/', authMiddleware.isAdmin, async (req, res, next) => {
  try {
    await roleController.createRole(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para listar todas as permissões (apenas administradores podem acessar)
router.get('/', authMiddleware.isAdmin, async (req, res, next) => {
  try {
    await roleController.getAllRoles(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para obter detalhes de uma permissão específica (apenas administradores podem acessar)
router.get('/:roleId', authMiddleware.isAdmin, roleController.getRoleById);

// Rota para atualizar os detalhes de uma permissão específica (apenas administradores podem acessar)
router.put('/:roleId', authMiddleware.isAdmin, roleController.updateRole);

// Rota para excluir uma permissão específica (apenas administradores podem acessar)
router.delete('/:roleId', authMiddleware.isAdmin, roleController.deleteRole);

module.exports = router;
