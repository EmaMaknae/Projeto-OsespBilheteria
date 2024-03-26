const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const connection = require('../backend/database');
const axios = require('axios'); // Importe o Axios

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:8080', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Adicione um interceptor Axios para incluir o token JWT em todas as solicitações
axios.interceptors.request.use(config => {
  const token = req.headers.authorization; // Pegue o token do cabeçalho da solicitação
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// Rotas
const AuthController = require('../backend/controllers/AuthController');
const UserController = require('../backend/controllers/UserController');
const MenuController = require('../backend/controllers/MenuController');
const PerfilUsuarioController = require('../backend/controllers/PerfilUsuarioController');
const PermissaoController = require('../backend/controllers/PermissaoController');

app.post('/api/login', AuthController.login);

app.get('/api/users', UserController.getAllUsers);
app.get('/api/users/:userId', UserController.getUserById);
app.put('/api/users/:userId', UserController.updateUser);
app.delete('/api/users/:userId', UserController.deleteUser);

app.post('/api/menu', MenuController.createMenu);
app.get('/api/menu', MenuController.getAllMenus);
app.get('/api/menu/:menuId', MenuController.getMenuById);
app.put('/api/menu/:menuId', MenuController.updateMenu);
app.delete('/api/menu/:menuId', MenuController.deleteMenu);

app.post('/api/perfilUsuario', PerfilUsuarioController.createPerfilUsuario);
app.get('/api/perfilUsuario', PerfilUsuarioController.getAllPerfilUsuario);
app.get('/api/perfilUsuario/:PerfilUsuarioId', PerfilUsuarioController.getPerfilUsuarioById);
app.put('/api/perfilUsuario/:PerfilUsuarioId', PerfilUsuarioController.updatePerfilUsuario);
app.delete('/api/perfilUsuario/:PerfilUsuarioId', PerfilUsuarioController.deletePerfilUsuario);

app.post('/api/permissao', PermissaoController.createPermissao);
app.get('/api/permissao', PermissaoController.getAllPermissao);
app.get('/api/permissao/:permissaoId', PermissaoController.getPermissaoById);
app.put('/api/permissao/:permissaoId', PermissaoController.updatepermissao);
app.delete('/api/permissao/:permissaoId', PermissaoController.deletePermissao);

// Middleware para lidar com erros internos do servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
