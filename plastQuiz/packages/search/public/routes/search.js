'use strict';

angular.module('mean.search').config(['$stateProvider',
    function($stateProvider, $state) {
        $stateProvider.state('search default', {
            url: '/search',
            templateUrl: 'search/views/index.html',
			 reloadOnSearch: false,
        });	
        $stateProvider.state('search  with params', {
            url: '/search/:searchQuery/:currentPage',
            templateUrl: 'search/views/index.html',
			reloadOnSearch: false
        });
        $stateProvider.state('advanced_search', {
            url: '/advanced_search',
            templateUrl: 'search/views/advanced_search.html',
			reloadOnSearch: false
        });   
        $stateProvider.state('advanced_search_with_params', {
            url: '/advanced_search/:searchQuery/:currentPage',
            templateUrl: 'search/views/advanced_search.html',
			reloadOnSearch: false
        });         
    }
]);
