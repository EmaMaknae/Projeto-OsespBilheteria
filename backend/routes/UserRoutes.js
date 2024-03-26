const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/authMiddleware');
const Joi = require('joi');

// Schema de validação para criar um novo usuário
const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

// Middleware de validação para criar um novo usuário
const validateCreateUser = (req, res, next) => {
  const { error } = createUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

// Rota para criar um novo usuário (apenas administradores podem acessar)
router.post('/', authMiddleware.isAdmin, validateCreateUser, userController.createUser);


// Rota para listar todos os usuários (apenas administradores podem acessar)
router.get('/', authMiddleware.isAdmin, userController.getAllUsers);

// Rota para obter detalhes de um usuário específico (apenas administradores podem acessar)
router.get('/:userId', authMiddleware.isAdmin, userController.getUserById);

// Rota para atualizar os detalhes de um usuário específico (apenas administradores podem acessar)
router.put('/:userId', authMiddleware.isAdmin, userController.updateUser);

// Rota para excluir um usuário específico (apenas administradores podem acessar)
router.delete('/:userId', authMiddleware.isAdmin, userController.deleteUser);

module.exports = router;
