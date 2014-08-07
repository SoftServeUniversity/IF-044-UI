'use strict';

var mean = require('meanio');
var mongoose = require('mongoose');


exports.render = function(req, res) {

    var modules = [];
    // Preparing angular modules list with dependencies
    for (var name in mean.modules) {
        modules.push({
            name: name,
            module: 'mean.' + name,
            angularDependencies: mean.modules[name].angularDependencies
        });
    }


    function isAdmin() {
        return req.user && req.user.roles.indexOf('admin') !== -1;
    }

    // Send some basic starting info to the view    
    res.render('index', {
        user: req.user ? {
            name: req.user.name,
            _id: req.user._id,
            username: req.user.username,
            roles: req.user.roles
        } : {},
        modules: modules,
        isAdmin: isAdmin,
        adminEnabled: isAdmin() && mean.moduleEnabled('mean-admin')
    });
};

var sendObj = [],
        Categories = mongoose.model('Categories', {}, 'Tests_categories'),
        Tests = mongoose.model('Tests', {}, 'Tests');


exports.getdata = function(req, res) {

    Categories.find().select('-_id').exec(function(err, cat) {
        Tests.find().select('category -_id').exec(function(err, test_obj) {
            sendObj = [];
            for (var i = 0; i < cat.length; i++) {
                if (cat[i].get('parent_id') === 0) {
                    var tempObj = {
                        tests: 0,
                        sub_cat: []
                    };
                    tempObj.cat_name = cat[i].get('name');
                    tempObj.cat_id = cat[i].get('cat_id');
                    for (var k = 0; k < test_obj.length; k++) {
                        if (cat[i].get('cat_id') === test_obj[k].get('category')) {
                            tempObj.tests++;
                        }
                    }
                    for (var j = 0; j < cat.length; j++) {
                        if (cat[j].get('parent_id') === cat[i].get('cat_id')) {
                            tempObj.sub_cat.push({
                                name: cat[j].get('name'),
                                id: cat[j].get('cat_id')
                            });
                        }
                    }
                    sendObj.push(tempObj);

                }
            }
            res.send(sendObj);
        });
    });

};
