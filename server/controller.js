var mongoose = require('mongoose');
var Postmodel = require('./schemas/blogSchema.js');
var Projectmodel = require('./schemas/projectSchema.js');
var nodemailer = require('nodemailer');
var config = require('./config');

module.exports = {

    checkAdmin: function(req, res, next) {
        console.log(req.user);
        if(!req.user) {
           res.sendStatus(403);
        }
        else if (req.user.id === config.userID) {
            console.log("You are admin")
            return next();
        }
        res.sendStatus(403);
    },
    addPost: function(req, res) {
        var post = new Postmodel(req.body);
        console.log(post)
        post.save(function(err, response) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.send(response);
            }
        });
    },
    addProject: function(req, res) {
        var project = new Projectmodel(req.body);
        console.log(project)
        project.save(function(err, response) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.send(response);
            }
        });
    },
    getPostData: function(req, res) {
        Postmodel.find({}, function(err, response) { //capitalized POST?
           if (err) {
               return res.status(500).send(err);
           } else {
               return res.send(response);
           }
        })
    },
    getProjectData: function(req, res) {
        Projectmodel.find({}, function(err, response) {
           if (err) {
               return res.status(500).send(err);
           } else {
               return res.send(response);
           }
        })
    },
    deletePost: function(req, res) {
        Postmodel.findByIdAndRemove(req.params.id, function(err, response) {
           if (err) {
               return res.status(500).send(err);
           } else {
               return res.send(response);
           }
        })
    },
    deleteProject: function(req, res) {
        Projectmodel.findByIdAndRemove(req.params.id, function(err, response) {
           if (err) {
               return res.status(500).send(err);
           } else {
               return res.send(response);
           }
        })
    }


}; //end module export
