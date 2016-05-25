var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
   title: {type: String, required: true, unique: true, index: true},
   subtitle: {type: String, required: true},
   date: {type: String, required: true},//date: {type: Date, default: new Date()},
   fullpost: {type: String, required: true}
});

module.exports = mongoose.model("blogSchema", blogSchema);
