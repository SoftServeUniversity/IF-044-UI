'use strict';

// The Package is past automatically as first parameter
module.exports = function(Category, app, auth, database) {
var category = require('../controllers/category');
    app.route('/category/:id')
        .get(category.render); 
};
