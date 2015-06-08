var express = require('express');
var bodyParser = require('body-parser');
var singuprouter = require('./routes/signup.js');
var app     = express();
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
var port    = process.env.port || 8080;
app.set('view engine','ejs');
app.use('/signup',singuprouter);

app.listen(port,function(){
    console.log("The server is listening on the port %s",port);
});
