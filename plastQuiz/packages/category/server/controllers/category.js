'use strict';

var mongoose = require('mongoose');

var Tests_cat = mongoose.model('ests_cat', {}, 'Tests');
var Categories_cat = mongoose.model('Categories_cat', {}, 'Tests_categories');

exports.render = function(req, res) {
    var sendObj = [],
        TempObj = {};
    Categories_cat.find({
        cat_id: parseInt(req.params.id)
    }).select('-_id').exec(function(err, cat) {
        Tests_cat.find().select('name subcategory test_id -_id').exec(function(err, test) {
            Categories_cat.find({
                parent_id: parseInt(req.params.id)
            }).select('-_id').exec(function(err, sub_cat) {

                TempObj.cat_name = cat[0].get('name');
                TempObj.subcat = [];
                TempObj.tests = [];
                for (var i = 0; i < sub_cat.length; i++) {
if (sub_cat[i].get('parent_id') === cat[0].get('cat_id')) {
                            TempObj.subcat.push({
                                subcat_name: sub_cat[i].get('name'),
                                subcat_id: sub_cat[i].get('cat_id'),
                                tests : 0
                                
                            });
                        }
                    for (var k = 0; k < test.length; k++) {
                        
                        if (sub_cat[i].get('cat_id') === test[k].get('subcategory')) {
                            TempObj.tests.push({
                                test_name: test[k].get('name'),
                                test_id: test[k].get('test_id'),
                                subcat_id: sub_cat[i].get('cat_id')
                            });
                        }
                    }
                }
                for (var x = 0; x < TempObj.subcat.length; x++) {
                    for (var y = 0; y <  TempObj.tests.length; y++) {
                        if (TempObj.tests[y].subcat_id === TempObj.subcat[x].subcat_id) {
                            TempObj.subcat[x].tests++
                        }
                    }
                }

                sendObj.push(TempObj);

                res.send(sendObj);
            });

        });

    });
};
