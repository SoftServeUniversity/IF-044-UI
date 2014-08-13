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
    var resultArray = {};
	var searchWord = new RegExp(req.body.searchQuery);
    var filterSubcategories,filterCategories;
    var page = (req.body.page)?(req.body.page-1)*4:0;
    console.log(page);
    if(req.body.subCategories && req.body.categories){
         filterSubcategories = req.body.subCategories;
         filterCategories = [];
        for(var index in req.body.categories){
            filterCategories.push({category:req.body.categories[index]})
        }
        
       test.find({tags: searchWord, $and:[{$or:filterCategories},{$or:filterSubcategories}], status:3}).select('-_id').limit(4).skip(page).exec(function(err, result) {
        test.find({tags: searchWord, $and:[{$or:filterCategories},{$or:filterSubcategories}], status:3}).count().exec(function(err,count){
           console.log(count);
         resultArray.tests = result;
         resultArray.totalCount = count;
         res.send(resultArray);            
        })
      
       });           
    }else{
       test.find({tags: searchWord, status:3}).select('-_id').limit(4).skip(page).exec(function(err, result) {           
            test.find({tags: searchWord, status:3}).count().exec(function(err,count){
             resultArray.tests = result;
             resultArray.totalCount = count;
             res.send(resultArray);            
            })    
       });         
    }     
    };
