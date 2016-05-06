var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
// var mongoose = require('mongoose');
var passport = require('passport');
var facebookLogin = require('passport-facebook');
      //npm init & then npm install --save all required modules
      //.gitignore "node_modules" & "config.js"
var config = require('./config.js'); //session secret
var controller = require('./controller.js');
var Product = require("./schema.js");

      var app = express();

      app.use(session({secret: config.sessionSecret}))
      app.use(passport.initialize())
      app.use(passport.session())

      app.use(bodyParser.json());
      app.use(express.static(__dirname + '/../public'));  //end all of our static front-end files from our server.

      passport.use(new facebookLogin({
          clientID: config.facebookKey,
          clientSecret: config.facebookSecret,
          callbackURL: "/auth/facebook/callback",
          profileField:['id', 'displayName','photos','email']
      }, function(token, refreshToken, profile, done) {
         console.log(profile);
          return done(null, profile);
      }));

      // mongoose.connect("mongodb://localhost/products");
      // mongoose.set("debug", true); // log connection methods
      // mongoose.connection.once("open", function() {
      //    console.log("Connected to MongoDB");
      // });


//============ MONGO JS =================
// var mongojs = require('mongojs');
//       var db = mongojs('ecommerce');
//       var products = db.collection('collName');
//===========
// var cors = require('cors');
//       var corsOptions = {
//          origin: 'http://localhost:3000'
//       }
//       app.use(cors(corsOptions));
//========================================

//==================  LOGIN =============================================

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
   successRedirect: '/#/admin',
   failureRedirect: '/auth/facebook'
}));
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
app.get('/me', function(req, res) {
   res.send(req.user);
})
//=========================================================================

/*// app.post('/api/products', function(req, res, next){
   if (req.user.isAdmin()){
      next();
   }else{
      res.sendStatus(403);
   }
}
} controller.addProduct); */
// app.get('/api/products', controller.getProduct);
// app.get('/api/products/:id', controller.getOneProduct);
// app.put('/api/products/:id', controller.changeProduct);
// app.delete('/api/products/:id', controller.deleteProduct);



app.post('/api/posts', function(req, res, next){
   console.log(req.user);
   if (req.user && req.user.id === config.userID){
      console.log("You are admin")
      return next();
   }
   res.sendStatus(403);
}, function (req, res){
   //TODO add logic to make new blog post
   return res.sendStatus(200);
})

var port = config.port;
app.listen(port, function() {
   console.log('listening on port ', port);
})
