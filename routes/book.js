var express = require('express');
var database = require('../server/database');
var router = express.Router();


// API root
router.get('/', function(req, res, next) {
  res.send("API root");
});
// TODO: This method should return array of gym object in bellow format
router.get('/getGyms', function(req, res, next) {
    res.send([{id: 1, name: "Extreme", city: "Banja Luka"},{id: 2, name: "Sokolski dom", city: "Banja Luka"},{id: 3, name: "Granit", city: "Beograd"}]);
});
router.post('/addRoute', function(req, res) {
    res.status(200).json(req.body);
    //res.send("Sacuvana ruta");
});


// Route for adding a climbing route 
router.post('/addRouteOLD', function(req, res) {
  var today = new Date();
  var appData = {
      "error": 1,
      "data": ""
  };
  var routeData = {
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
          connection.query('INSERT INTO routes SET ?', routeData, function(err, rows, fields) {
              if (!err) {
                  appData.error = 0;
                  appData["data"] = "Route successfully added!";
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