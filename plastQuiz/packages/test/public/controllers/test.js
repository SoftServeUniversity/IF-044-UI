'use strict';

angular.module('mean.test').controller('TestController', ['$scope', '$http', '$stateParams', 'getAnswer', 'Data', 'Validation', '$state',
    function($scope, $http, $stateParams, getAnswer, Data, Validation, $state) {


        $scope.load = false;
        $scope.show = true;

        $http.get('/test/' + $stateParams.id).success(function(result) {
            $scope.show = false;
            $scope.load = true;
            $scope.tests = result[0];
            $scope.name = result[1];
        });

        $scope.answer = function(elem) {
            var el = elem.target;
            var questionBlock = el.parentElement.parentElement.parentElement.parentElement;
            if (questionBlock.className.indexOf('alertMessage') !== -1) {
                angular.element(questionBlock).removeClass('alertMessage');
                // delteClass(questionBlock, 'alertMessage');

                questionBlock.removeChild(questionBlock.children[0]);
            }
        };

        $scope.getAnswer = function() {

            if (Validation.validation()) {
                $state.go('result', 'id : tests.test_id');
            }
            var a = getAnswer.Answers();
            Data.adddata(a);
        };
    }
]);
