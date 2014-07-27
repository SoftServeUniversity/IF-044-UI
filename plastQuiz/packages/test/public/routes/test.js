'use strict';

angular.module('mean.test').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('test', {
            url: '/test/:id',
            templateUrl: 'test/views/test.html'
        });
    }
]);
