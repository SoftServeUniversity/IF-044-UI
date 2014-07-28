'use strict';

angular.module('mean.test').controller('TestController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {
        $http.get('http://localhost:3000/test/' + $stateParams.id).success(function(result) {
            $scope.tests = result[0];
            $scope.name = result[1];
        });
        
    }
]);
