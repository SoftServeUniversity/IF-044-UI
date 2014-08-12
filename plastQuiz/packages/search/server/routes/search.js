'use strict';

var search = require('../controllers/search');
// The Package is past automatically as first parameter

module.exports = function(Search, app, auth, database) {
    app.route('/search/example/anyone')
        .post(search.searchTest);
//    app.get('/search/example/anyone', function(req, res, next) {
//        res.send('Anyone can access this');
//    });

    app.get('/search/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/search/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/search/example/render', function(req, res, next) {
        Search.render('index', {
            package: 'search'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
