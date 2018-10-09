//Gym entity

var sequelize = require('../dbcontext.ts');
var Sequelize = require('sequelize');


//Create Table: gyms

var addGym = sequelize.define('gyms', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image_type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.BLOB('long'),
    allowNull: false
  }
});



module.exports = addGym;