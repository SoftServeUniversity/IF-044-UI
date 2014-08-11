'use strict';

angular.module('mean.test').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        .state('test', {
            url: '/test/:id',
            templateUrl: 'test/views/test.html'
        })
        .state('result', {
            url: '/test/:id/result',
            templateUrl: 'test/views/result.html'
        });
    }
]);
