'use strict';

var mongoose = require('mongoose');

var Tests_passing = mongoose.model('Tests_passing', {}, 'Tests');
var Categories_passing = mongoose.model('Categories_passing', {}, 'Tests_categories');

exports.render = function(req, res) {
    var sendObj = [];
    Tests_passing.find({
        test_id: parseInt(req.params.id)
    }).select('-_id -author -data -description -info -passed_date -user_owner_id').exec(function(err, test) {
        Categories_passing.find({
            cat_id: test[0].get('category')
        }).select('name cat_id -_id').exec(function(err, cat) {
            Categories_passing.find({
                cat_id: test[0].get('subcategory')
            }).select('name cat_id -_id').exec(function(err, subcat) {
                sendObj.push(test[0]);
                sendObj.push({
                    cat_name: cat[0].get('name'),
                    cat_id:cat[0].get('cat_id'),
                    sub_name: subcat[0].get('name'),
                    sub_id: subcat[0].get('cat_id')
                });

                res.send(sendObj);

            });

        });


    });
};
