var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;



var apiRouter = require('./routes/book');

var app = express();

//iz Tominog
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
///
app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/climboard')));
app.use('/', express.static(path.join(__dirname, 'dist/climboard')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});



//kopirano iz Toninog
//  var Users = require('./routes/Users');

// app.use('/users', Users);

// // app.get('/', function (req, res) {  
// //     res.sendFile('dist/register.html', { root: __dirname });
// //  });

// //  app.get('/login', function (req, res) {  
// //     res.sendFile('dist/login.html', { root: __dirname });
// //  });



 
// app.listen(port,function(){
//     console.log("Server is running on port: "+port);
// });
// ///
module.exports = app;