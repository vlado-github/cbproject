
// Route entity

var sequelize = require('../dbcontext');
var Sequelize = require('sequelize');

const Route = sequelize.define('routes', {
  name: {
    type: Sequelize.STRING
  },
  grade: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  photo: {
    type: Sequelize.STRING
  },
  gymID: {
    type: Sequelize.INTEGER
  },
});


module.exports = Route;  