var express = require('express');
var bodyParser = require('body-parser');
// var session = require('express-session');
// var mongoose = require('mongoose');
//npm init & then npm install --save all required modules
//.gitignore "node_modules" & "config.js"
var config = require('./config.js'); //session secret
var controller = require('./controller.js');
var Product = require("./schema.js");

      var app = express();

      // app.use(session({secret: config.sessionSecret}))
      app.use(bodyParser.json());
      app.use(express.static(__dirname + '/../public'));  //end all of our static front-end files from our server.



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

//===============================================================

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

var port = config.port;
app.listen(port, function() {
   console.log('listening on port ', port);
})
