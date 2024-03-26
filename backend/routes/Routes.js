const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// const ResetPasswordController = require('../controllers/ResetPasswordController'); // Verifique se esta linha está presente e correta


// // // Rota para solicitar redefinição de senha
// router.post('/forgot-password', ResetPasswordController.forgotPassword);

// // // Rota para redefinir a senha usando o token
// router.post('/reset-password/:token', ResetPasswordController.resetPassword);

const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const MenuController = require('../controllers/MenuController');
const PerfilUsuarioController = require('../controllers/PerfilUsuarioController');
const PermissaoController = require('../controllers/PermissaoController');

router.post('/login', AuthController.login);

router.post('/users', UserController.createUsers);
router.get('/users', UserController.getAllUsers);
router.get('/users/:userId', UserController.getUserById);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

router.post('/menu', MenuController.createMenu);
router.get('/menu', MenuController.getAllMenus);
router.get('/menu/:menuId', MenuController.getMenuById);
router.put('/menu/:menuId', MenuController.updateMenu);
router.delete('/menu/:menuId', MenuController.deleteMenu);

router.post('/PerfilUsuario', PerfilUsuarioController.createPerfilUsuario);
router.get('/PerfilUsuario', PerfilUsuarioController.getAllPerfilUsuario);
router.get('/PerfilUsuario/:PerfilUsuarioId', PerfilUsuarioController.getPerfilUsuarioById);
router.put('/PerfilUsuario/:PerfilUsuarioId', PerfilUsuarioController.updatePerfilUsuario);
router.delete('/PerfilUsuario/:PerfilUsuarioId', PerfilUsuarioController.deletePerfilUsuario);

router.post('/permissao', PermissaoController.createPermissao);
router.get('/permissao', PermissaoController.getAllPermissao);
router.get('/permissao/:permissaoId', PermissaoController.getPermissaoById);
router.put('/permissao/:permissaoId', PermissaoController.updatepermissao);
router.delete('/permissao/:permissaoId', PermissaoController.deletePermissao);

module.exports = router;
