


var Users = require('./Routes/Users');

app.use('/users',Users);

app.get('/', function (req, res) {  
    res.sendFile('dist/register.html', { root: __dirname });
 });

 app.get('/login', function (req, res) {  
    res.sendFile('dist/login.html', { root: __dirname });
 });



 
app.listen(port,function(){
    console.log("Server is running on port: "+port);
});