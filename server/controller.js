var mongoose = require('mongoose');
var Product = require('./schema.js');

module.exports = {

    addProduct: function(req, res) { //expres allows req.body to be passed in
        Product.create(req.body, function(err, response) { //Product is the schema and .create is mongoose
            return err ? res.status(500).send(err) : res.send(response); //express
        });
    },

    getProduct: function(req, res, next) {
        Product.find(req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    getOneProduct: function(req, res) {
        Product.findById(req.params.id, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    changeProduct: function(req, res) {
        Product.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    deleteProduct: function(req, res) {
        Product.findByIdAndRemove(req.params.id, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    }
};
