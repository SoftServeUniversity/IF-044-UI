'use strict';

//Setting up route
angular.module('mean.system').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // For unmatched routes:
        $urlRouterProvider.otherwise('/');

        // states for my app
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'system/views/index.html'
            });
    
        $stateProvider
            .state('profile', {
                url: '/profile',
                templateUrl: 'system/views/edit_profile.html'
            });

        $stateProvider
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'users/views/contacts.html'
            });
    }
]).config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
