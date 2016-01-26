/**
 * http://usejsdoc.org/
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var locSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('Location', locSchema);