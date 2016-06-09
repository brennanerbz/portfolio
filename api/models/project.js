 var mongoose = require('mongoose');

 var ProjectSchema = new mongoose.Schema({
 	date: String,
 	name: String,
 	slug: String,
 	tags: Array,
 	coverPhoto: String,
 	markdown: String
 });

 module.exports = mongoose.model('Project', ProjectSchema)