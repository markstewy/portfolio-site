var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var facebookLogin = require('passport-facebook');
//npm init & then npm install --save all required modules
//.gitignore "node_modules" & "config.js"
var config = require('./config.js'); //session secret
var controller = require('./controller.js');

var app = express();

app.use(session({
    secret: config.sessionSecret
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public')); //end all of our static front-end files from our server.
passport.use(new facebookLogin({
    clientID: config.facebookKey,
    clientSecret: config.facebookSecret,
    callbackURL: "/auth/facebook/callback",
    profileField: ['id', 'displayName', 'photos', 'email']
}, function(token, refreshToken, profile, done) {
   //  console.log(profile);
    return done(null, profile);
}));


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
    //====================== POSTS ===================================================

app.post('/api/addposts', controller.checkAdmin, controller.addPost)
app.post('/api/addprojects', controller.checkAdmin, controller.addProject)
app.get('/api/posts', controller.getPostData)
app.get('/api/projects', controller.getProjectData)
app.delete('/api/deletepost/:id', controller.checkAdmin, controller.deletePost)
app.delete('/api/deleteproject/:id', controller.checkAdmin, controller.deleteProject)


// CONNECTIONS //
var mongoURI = config.mongoURI;
var port = config.port;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo DB at', mongoURI);
  app.listen(port, function() {
    console.log('Listening on port '+ port);
  });
});
