'use strict';

angular.module('mean.category').controller('categoryCtrl', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {
    	$scope.load = false;
        $scope.show = true;
        $http.get('/category/' + $stateParams.id).success(function(result) {
        	$scope.show = false;
            $scope.load = true;
            $scope.category = result[0];

        });


    }
]);
