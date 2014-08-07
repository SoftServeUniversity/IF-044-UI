'use strict';

angular.module('mean.category').controller('CategoryController', ['$scope', 'Global', 'Category',
    function($scope, Global, Category) {
        $scope.global = Global;
        $scope.package = {
            name: 'category'
        };
    }
]);
