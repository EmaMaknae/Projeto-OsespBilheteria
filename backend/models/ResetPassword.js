// // models/ResetPassword.js

// const mongoose = require('mongoose');

// const resetPasswordSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'User' // Referência ao modelo de usuário
//   },
//   token: {
//     type: String,
//     required: true
//   },
//   expiresAt: {
//     type: Date,
//     required: true
//   }
// });

// const ResetPassword = mongoose.model('ResetPassword', resetPasswordSchema);

// module.exports = ResetPassword;
