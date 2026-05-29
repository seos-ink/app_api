const { Sequelize } = require('sequelize');

// Substitua pelos dados do seu banco de dados
const sequelize = new Sequelize('db_apiconnect', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;