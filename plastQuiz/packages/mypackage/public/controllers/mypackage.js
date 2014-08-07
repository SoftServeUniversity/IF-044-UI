'use strict';

angular.module('mean.mypackage').controller('MypackageController', ['$scope', 'Global', 'Mypackage',
    function($scope, Global, Mypackage) {
        $scope.global = Global;
        $scope.package = {
            name: 'mypackage'
        };
    }
]);
