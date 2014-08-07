'use strict';

// The Package is past automatically as first parameter
module.exports = function(Test, app, auth, database) {
var test = require('../controllers/test');
    app.route('/test/:id')
        .get(test.render);
};
