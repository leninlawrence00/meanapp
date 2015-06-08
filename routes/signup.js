var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(function timeLog(req,res,next){
    console.log("The time is "+Date.now());
    next();
});

router.post('/signupprocess',function(req,res){
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
