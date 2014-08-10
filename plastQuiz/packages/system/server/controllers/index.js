'use strict';
 
var mean = require('meanio');
var mongoose = require("mongoose");

var sendObj = [],
    cat,
    test_obj,
    Categories = mongoose.model('Categories', {}, 'Tests_categories'),
    Tests = mongoose.model('Tests', {}, 'Tests');
    


Categories.find().select('-_id').exec(function(err, doc) {
    cat = doc
});
Tests.find().select('category -_id').exec(function(err, doc) {
    test_obj = doc
});



exports.render = function(req, res) {
(function() {
        sendObj = [];
        for (var i = 0; i < cat.length; i++) {
            if (cat[i].get('parent_id') === 0) {
                var tempObj = {
                    tests: 0,
                    sub_cat: []
                };
                tempObj.cat_name = cat[i].get('name');
                tempObj.cat_id = cat[i].get("cat_id");
                for (var k = 0; k < test_obj.length; k++) {
                    if (cat[i].get("cat_id") === test_obj[k].get("category")) {
                        tempObj.tests++;
                    };
                };
                for (var k = 0; k < cat.length; k++) {
                    if (cat[k].get('parent_id') === cat[i].get('cat_id')) {
                        tempObj.sub_cat.push({
                            name: cat[k].get('name'),
                            id: cat[k].get('cat_id')
                        });
                    };
                };
                sendObj.push(tempObj);
            };
        };


    })()

    res.render('index', sendObj);
};
