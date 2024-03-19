const express = require('express');
const app = express();
const routes = require('../backend/routes/Routes');

// Outros middlewares e configurações do Express

// Middlewares para processar JSON e urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Monta as rotas definidas no arquivo Routes.js
app.use('/api', routes);

// Outros middlewares e configurações do Express

// Middleware para lidar com rotas não encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

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
