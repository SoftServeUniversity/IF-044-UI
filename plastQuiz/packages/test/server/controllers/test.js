'use strict';

var mongoose = require('mongoose');

var Tests_passing = mongoose.model('Tests_passing', {}, 'Tests');

exports.render = function(req, res) {
    Tests_passing.find({test_id: parseInt(req.params.id)}).select('-_id').exec(function(err, test) {
        res.send(test);
    });
};




