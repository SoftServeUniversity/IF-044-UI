'use strict';

angular.module('mean.search').controller('SearchController', ['$scope', '$http', '$stateParams', '$location',
    function($scope, $http, $stateParams, $location) {
        $scope.searchQuery;
        $scope.package = {
            name: 'search'
        };
		console.log($stateParams);
        $scope.searchResult;
        $scope.simpleSearch = function(){
            $http.post('/search/example/anyone',{
                searchQuery:$scope.searchQuery
            })
                .success(function(response){
					console.log(response.length);
                    console.log(response);
                    $scope.searchResult = response;
					//$stateParams.searchQuery = $scope.searchQuery;
					if(response.length){
						$location.path( "/search/example/"+$scope.searchQuery+'/');
					}
					//$location.path( "/search/example/"+$scope.searchQuery );
                })
        };
        $scope.changeQuerySearc = function(val){
            $scope.searchQuery = val;
            $scope.simpleSearch();
        };
       
    }
]);
