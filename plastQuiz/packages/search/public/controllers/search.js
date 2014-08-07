'use strict';

angular.module('mean.search').controller('SearchController', ['$scope', '$http',
    function($scope, $http) {
        $scope.searchQuery;
        $scope.package = {
            name: 'search'
        };
        $scope.searchResult;
        $scope.simpleSearch = function(){
            $http.post('/search/example/anyone',{
                searchQuery:$scope.searchQuery
            })
                .success(function(response){
                    console.log(response);
                    $scope.searchResult = response;
                })
        };
        $scope.changeQuerySearc = function(val){
            $scope.searchQuery = val;
            $scope.simpleSearch();
        };
       
    }
]);
