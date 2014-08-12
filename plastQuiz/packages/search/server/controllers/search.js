'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    test = mongoose.model('test',{},'Tests');


/**
 * Create user
 */

exports.searchTest = function(req, res, next){ 
	var searchWord = new RegExp(req.body.searchQuery);
    var filterSubcategories,filterCategories;
    if(req.body.subCategories && req.body.categories){
         filterSubcategories = req.body.subCategories;
         filterCategories = [];
        for(var index in req.body.categories){
            filterCategories.push({category:req.body.categories[index]})
        }
        
       test.find({tags: searchWord, $and:[{$or:filterCategories},{$or:filterSubcategories}], status:3}).select('-_id').exec(function(err, result) {
        res.send(result);      
       });           
    }else{
       test.find({tags: searchWord, status:3}).select('-_id').exec(function(err, result) {           
        res.send(result);      
       });         
    }     
    };
