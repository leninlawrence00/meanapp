var express = require('express');
var bodyParser = require('body-parser');
//var singuprouter = require('./routes/signup.js');

var app     = express();
//app.use('/signup',singuprouter);
//app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine','ejs');


var port = process.env.port||8080;

app.get('/',function(req,res){
    //res.send('home');
    res.render('home');
});
app.get('/login',function(req,res){
    res.render('login');
});

app.listen(port,function(){
    console.log("The server is listening on the port %s",port);
});
app.post('/signupprocess',function(req,res){
    //var name = req.body.name;
    //console.log(name);
    //res.send("Hello world");
    console.log(JSON.stringify(req.body));
    //res.json(req.body);
    // res.send("sssssssssss");
});