'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
/**
 * User Schema
 */
var mySchema = new Schema({});
/**
 * Methods
 */
mySchema.methods = {
		getData: function(){
			return this.data;
	}
};

//mongoose.model('Test', mySchema);

