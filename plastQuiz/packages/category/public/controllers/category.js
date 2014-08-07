'use strict';

angular.module('mean.category').controller('categoryCtrl', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {
    	$http.get('/category/' + $stateParams.id).success(function(result) {
            $scope.category = result[0];
            
        });
    	
        
    }
]);
