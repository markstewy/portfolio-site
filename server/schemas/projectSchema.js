var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
   title: {type: String, required: true, unique: true, index: true},
   subtitle: {type: String, required: true},
   date: {type: String, required: true},
   fullpost: {type: String, required: true}
});

module.exports = mongoose.model("projectSchema", projectSchema);
