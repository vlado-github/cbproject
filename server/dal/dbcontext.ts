
// Database connection

var Sequelize = require('sequelize');

var DATABASE_NAME = 'test_db';
var DB_USERNAME = 'root';
var DB_PASSWORD = '';

var sequelize = new Sequelize(
	DATABASE_NAME,
	DB_USERNAME, 
	DB_PASSWORD, {
		host:'localhost',
		port:3306,
		dialect:'mysql',
		define: {
			freezeTableName: true
		}
});

//Connect to Database
sequelize.authenticate().then(function (e) {
	if(e) {
		console.log('There is connection ERROR');
	} else {
		console.log('Connection has been established successfully');
	}
});



module.exports = sequelize;


// Finished