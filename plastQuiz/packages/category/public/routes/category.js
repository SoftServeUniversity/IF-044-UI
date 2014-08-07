'use strict';

angular.module('mean.category').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('category', {
            url: '/category/:id',
            templateUrl: 'category/views/category.html'
        });
    }
]);
