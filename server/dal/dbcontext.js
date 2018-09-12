// Database connection

var Sequelize = require('sequelize');


// Database connection 

export var sequelize = new Sequelize('cbproject', 'root', '', {
    dialect: 'mysql'
  });