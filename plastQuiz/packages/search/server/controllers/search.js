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
    var searchResult = [];
    test.find().select('-_id').exec(function(err, result) {
        for(var i = 0;i<result.length;i++){
           for(var j = 0;j<result[i].get('tags').length;j++){
               if(result[i].get('tags')[j].toString().toLowerCase().indexOf(req.body.searchQuery.toString().toLowerCase()) +1){
                   searchResult.push(result[i]);
                   break;
               }
           }
        }
   res.send(searchResult);    
    //res.send(req.body.searchQuery);    
    });
    };
