var express = require('express');
var database = require('../server/database');
var router = express.Router();


// Api home page
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});


// Route for adding a climbing route 
router.post('/addRoute', function(req, res) {
  var today = new Date();
  var appData = {
      "error": 1,
      "data": ""
  };
  var userData = {
      "routeName": req.body.routeName,
      "routeGrade": req.body.routeGrade,
      "routeGym": req.body.routeGym,
      "routePhoto": req.body.routePhoto,
      "created": today
  }

  database.connection.getConnection(function(err, connection) {
      if (err) {
          appData["error"] = 1;
          appData["data"] = "Internal Server Error";
          res.status(500).json(appData);
      } else {
          connection.query('INSERT INTO users SET ?', userData, function(err, rows, fields) {
              if (!err) {
                  appData.error = 0;
                  appData["data"] = "User registered successfully!";
                  res.status(201).json(appData);
              } else {
                  appData["data"] = "Error Occured!";
                  res.status(400).json(appData);
              }
          });
          connection.release();
      }
  });
});

module.exports = router;