
// insert Sequelize
var Sequelize = require('sequelize');


// Database connection 

var sequelize = new Sequelize('cbproject', 'root', '', {
  dialect: 'mysql'
});


module.exports = sequelize;

