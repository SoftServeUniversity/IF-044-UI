'use strict';
angular.module('mean.test').controller('ScoreController', ['$scope', 'Data',
function($scope, Data){
	$scope.data = Data.getdata();
}
]);