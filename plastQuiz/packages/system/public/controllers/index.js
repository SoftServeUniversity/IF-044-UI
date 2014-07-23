'use strict';
 
	var app = angular.module('app', []).controller('AppCtrl', function($http) {
	    var app = this;
	    $http.get("http://localhost:3000").success(function(result) {
	        app.tests = result;

	    })
	})
