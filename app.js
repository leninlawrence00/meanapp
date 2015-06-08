var express = require('express');
var bodyParser = require('body-parser');
var singuprouter = require('./routes/signup.js');
var app     = express();
app.use('/signup',singuprouter);
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
var port    = process.env.port || 8080;
app.set('view engine','ejs');

/*
app.get('/hello',function(req,res){
    var name = req.param('name');
    res.send(name);
});


app.get('/',function(req,res){
    res.render('signup');
});

app.post('/hello',function(req,res){
    var name = req.body.username;
    var age = req.body.age;
    var email = req.body.email;
    res.send(name+age+email);

});
*/
app.listen(port,function(){
    console.log("The server is listening on the port %s",port);
});