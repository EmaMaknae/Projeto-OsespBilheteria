// // ResetPasswordController.js

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const connection = require('../database');

// // Função para solicitar a redefinição de senha
// exports.forgotPassword = (req, res) => {
//     const { email } = req.body;

//     // Aqui você pode implementar a lógica para enviar um e-mail com um link para redefinir a senha
//     // Gere um token exclusivo para identificar a solicitação de redefinição de senha
//     // Envie o e-mail com o link contendo o token para o usuário
//     // O link pode ter a seguinte estrutura: https://seusite.com/reset-password/token-aqui
//     // Salve o token no banco de dados com o e-mail do usuário para verificar sua validade posteriormente

//     res.json({ message: 'E-mail para redefinição de senha enviado com sucesso' });
// };

// // Função para redefinir a senha com base no token enviado por e-mail
// exports.resetPassword = (req, res) => {
//     const { token } = req.params;
//     const { newPassword } = req.body;

//     // Verifique se o token é válido e não expirou
//     // Decodifique o token para obter o e-mail do usuário e verificar sua validade

//     // Atualize a senha do usuário no banco de dados com a nova senha fornecida
//     // Lembre-se de criptografar a nova senha antes de armazená-la no banco de dados

//     res.json({ message: 'Senha redefinida com sucesso' });
// };
