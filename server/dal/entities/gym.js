var sequelize = require('../dbcontext');
//Gym entity

var Sequelize = require('sequelize');

const Gym = sequelize.define('gyms', {
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