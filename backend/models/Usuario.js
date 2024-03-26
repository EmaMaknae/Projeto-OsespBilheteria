const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const PerfilUsuario = require('../models/PerfilUsuario');

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idPerfilUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

// Define a associação com o modelo PerfilUsuario
Usuario.belongsTo(PerfilUsuario, { foreignKey: 'idPerfilUsuario' });

module.exports = Usuario;
