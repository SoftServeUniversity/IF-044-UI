// 'use strict';

// angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
//     $scope.global = Global;
// }]);
'use strict';

angular.module('mean.system').controller('IndexController', ['$scope','$http', function ($scope, $http) {
  
	    $http.get('/indexdata').success(function(result) {
	        $scope.tests = result;
	    });
}]);