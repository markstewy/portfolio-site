var mongoose = require('mongoose');
var Post = require('./schema.js');
var nodemailer = require('nodemailer');
var config = require('./config');

module.exports = {

    checkAdmin: function(req, res, next) {
        console.log(req.user);
        if (req.user.id === config.userID) {
            console.log("You are admin")
            return next();
        }
        res.sendStatus(403);
    },
    addPost: function(req, res) {
        var post = new Post(req.body);
        post.save(function(err, response) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.send(response);
            }
        });
    },
    getPostData: function(req, res) {
        Post.find({}, function(err, response) {
            res.json(response);
        })
    }


}; //end module export





// module.exports = {
//
//     addProduct: function(req, res) { //expres allows req.body to be passed in
//         Product.create(req.body, function(err, response) { //Product is the schema and .create is mongoose
//             return err ? res.status(500).send(err) : res.send(response); //express
//         });
//     },
//
//     getProduct: function(req, res, next) {
//         Product.find(req.body, function(err, response) {
//             return err ? res.status(500).send(err) : res.send(response);
//         });
//     },
//
//     getOneProduct: function(req, res) {
//         Product.findById(req.params.id, function(err, response) {
//             return err ? res.status(500).send(err) : res.send(response);
//         });
//     },
//
//     changeProduct: function(req, res) {
//         Product.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
//             return err ? res.status(500).send(err) : res.send(response);
//         });
//     },
//
//     deleteProduct: function(req, res) {
//         Product.findByIdAndRemove(req.params.id, function(err, response) {
//             return err ? res.status(500).send(err) : res.send(response);
//         });
//     }
//
// };
