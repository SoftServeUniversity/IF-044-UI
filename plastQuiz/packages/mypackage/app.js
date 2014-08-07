'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Mypackage = new Module('mypackage');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Mypackage.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Mypackage.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Mypackage.menus.add({
        title: 'mypackage example page',
        link: 'mypackage example page',
        roles: ['authenticated'],
        menu: 'main'
    });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Mypackage.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Mypackage.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Mypackage.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Mypackage;
});
