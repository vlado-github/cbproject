
//Gym entity

var sequelize = require('../dbcontext.ts');
var Sequelize = require('sequelize');

var Gym = sequelize.define('gyms', {
  name: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  photo: {
    type: Sequelize.STRING
  }
});



module.exports = Gym;