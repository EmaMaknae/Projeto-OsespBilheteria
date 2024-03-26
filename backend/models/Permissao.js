
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Permissao = sequelize.define('Permissao', {
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idMenu: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Permissao;
