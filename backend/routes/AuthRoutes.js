const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

// Rota para autenticar um usuário
router.post('/api/login', authController.login);

module.exports = router;
