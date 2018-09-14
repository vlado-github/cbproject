
// Database connection

var Sequelize = require('sequelize');

var sequelize = new Sequelize({
  database: 'cbproject',
  username: 'root',
  password: null,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 50, 
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;


// Finished