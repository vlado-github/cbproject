
var sequelize = require('../dbcontext');
var Sequelize = require('sequelize');

// Route entity
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
  created: {
    type: Sequelize.DATE
  }
}
);


module.exports = Route;  