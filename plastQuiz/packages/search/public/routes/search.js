'use strict';

angular.module('mean.search').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('search default', {
            url: '/search/example',
            templateUrl: 'search/views/index.html',
			 reloadOnSearch: false
        });	
        $stateProvider.state('search example page', {
            url: '/search/example/:searchQuery/:currentPage',
            templateUrl: 'search/views/index.html',
			reloadOnSearch: false
        });
    }
]);
