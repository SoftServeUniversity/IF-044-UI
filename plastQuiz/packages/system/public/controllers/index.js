'use strict';

angular.module('mean.system').controller('IndexController', ['$scope','$http', function ($scope, $http) {
  
	    $http.get('http://localhost:3000/indexdata').success(function(result) {
            $scope.tests = result;
	    });
}]);