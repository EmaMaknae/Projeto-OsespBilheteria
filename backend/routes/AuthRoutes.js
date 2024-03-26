const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Rota para autenticar um usuário
router.post('/api/login', AuthController.login);

module.exports = router;
