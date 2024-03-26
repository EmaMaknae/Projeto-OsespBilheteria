
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Menu = sequelize.define('menu', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idPai: {
    type: DataTypes.INTEGER
  },
  ordem: {
    type: DataTypes.INTEGER
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Menu;
