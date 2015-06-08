var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

var router = express.Router();

router.use(function timeLog(req,res,next){
    console.log("The time is "+Date.now());
    next();
});

router.post('/signupprocess',function(req,res){
    //var name = req.body.username;
    //var age = req.body.age;
    //var email = req.body.email;
    //res.send(name+age+email);
    console.log(req.body);
    res.send("hello");
});
router.get('/signupprocess',function(req,res){
    res.send("signupprocess called with get");
});
router.get('/',function(req,res){
    res.render('signup');
});
module.exports = router;