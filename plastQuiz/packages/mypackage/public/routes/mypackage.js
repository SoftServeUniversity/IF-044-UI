'use strict';

angular.module('mean.mypackage').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('mypackage example page', {
            url: '/mypackage/example',
            templateUrl: 'mypackage/views/index.html'
        });
    }
]);
