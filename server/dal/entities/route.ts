// Route entity

var sequelize = require('../dbcontext.ts');
var Sequelize = require('sequelize');

// Create Table: routes

var routeSave = sequelize.define('routes', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    grade: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gymID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    image_type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image_route: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    image_data: {
      type: Sequelize.BLOB('long')
    }
  
});

module.exports = routeSave;  