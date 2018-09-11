var mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 100,
    host:'localhost',
    user:'root',
    password:'',
    database:'cbproject', //izmjena iz devish u cbproject (naziv baze)
    port: 3306,
    debug: false,
    multipleStatements: true
});

module.exports.connection = connection;