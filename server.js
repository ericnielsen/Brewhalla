var express=require('express');
var app=express();
var path=require('path');
var searchData=require('./public/dist/search.js');
//var locationData=require('./geoGet.js');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
//var userRouter = express.Router();
//userRouter.route('/users/:user_id');
//userRouter.use(function(req, res, next) {
//console.log('Somebody just came to our app!');
//next();
//});
app.use(cookieParser());
//app.use('/user',locationData);
app.use('/search',searchData);
app.use(express.static('public/dist/image/'));
app.use(function (req, res, next) {
  var cookie = req.cookies.cookieName;
  if (cookie === undefined)
  {
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
      res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
      console.log('New cookie created');
      mongoose.connect('mongodb://localhost/test');
      var db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function (callback) {
      });
      var userSchema = mongoose.Schema({
          name: Number,
          latitude: Number,
          longitude: Number
      });
      var User = mongoose.model('User', userSchema);
      var addUser = new User({ name: 1});
      addUser.save(function (err, addUser) {
      });
       addUser.name = randomNumber;
  }
  else
  {
    console.log('Cookie all ready exists', cookie);
  }
  next();
});

app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});
//userRouter.get('/user', function(req, res) {
//res.json({ message: 'Route works' });
//});
app.get('/default.css',function(req, res){
    res.sendFile(path.join(__dirname + '/default.css'));
});

app.get('/action.js',function(req, res){
    res.sendFile(path.join(__dirname + '/action.js'));
});
//app.get('/geoGet.js',function(req, res){
    //res.sendFile(path.join(__dirname + '/geoGet.js'));
//});

//app.get('/users', function(req, res) {
//res.send();
//});

//app.get('/users/:lat/:long', function(req, res) {
//res.send(req.params.lat + req.params.long);
//});

//app.post('/coordinates/:user/:lat/:long', function() {
 //req.params.lat
 //req.params.long
 //req.params.user
//})

app.listen(1339);
console.log('The port is working');