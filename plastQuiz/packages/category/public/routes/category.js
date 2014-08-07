'use strict';

angular.module('mean.category').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('category example page', {
            url: '/category/example',
            templateUrl: 'category/views/index.html'
        });
    }
]);
