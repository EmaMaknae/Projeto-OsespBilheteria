
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PerfilUsuario = sequelize.define('PerfilUsuario', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  administrador: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = PerfilUsuario;
