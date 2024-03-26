
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Permission = require('..models/Permissao'); // Importe o modelo Permission aqui

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Role.hasMany(Permission); // Associe Role com Permission aqui

module.exports = Role;
