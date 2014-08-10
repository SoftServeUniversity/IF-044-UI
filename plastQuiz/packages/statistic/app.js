'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Statistic = new Module('statistic');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Statistic.register(function(app, auth, passport, database) {

    //We enable routing. By default the Package Object is passed to the routes
    // Statistic.routes(app, auth, database, passport);

    // //We are adding a link to the main menu for all authenticated users
    // // MeanUser.menus.add({
    // //     title: 'meanUser example page',
    // //     link: 'meanUser example page',
    // //     roles: ['authenticated'],
    // //     menu: 'main'
    // // });

    // Statistic.aggregateAsset('js', 'meanUser.js');

    
    // //Uncomment to use. Requires meanio@0.3.7 or above
    // // Save settings with callback
    // // Use this for saving data from administration pages
    // MeanUser.settings({
    //     'someSetting': 'some value'
    // }, function(err, settings) {
    //     //you now have the settings object
    // });

    // // Another save settings example this time with no callback
    // // This writes over the last settings.
    // MeanUser.settings({
    //     'anotherSettings': 'some value'
    // });

    // // Get settings. Retrieves latest saved settigns
    // MeanUser.settings(function(err, settings) {
    //     //you now have the settings object
    // });
    

    return Statistic;
});
