'use strict';

angular.module('mean.test').controller('TestController', ['$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams) {
		$scope.checkResponse = true;
		$scope.loader = 'comming soon';
        $http.get('http://localhost:3000/test/' + $stateParams.id).success(function(result) {
			$scope.loader = '';
			$scope.checkResponse = false;
            $scope.tests = result[0];
            $scope.name = result[1];
        });

        function validation() {
            var answerExist;
            var a = document.getElementsByClassName('col-lg-10 answer-spase');
            for (var i = 0; i < a.length; i++) { //перевіряємо чи дав користувач відповіді на всі запитання
                for (var j = 0; j < a[i].children.length; j++) {
                    if (a[i].children[j].children[0].className === 'MyClass') {
                        answerExist = true;
                        break;
                    } else {
                        answerExist = false;
                    }
                }
                if (!answerExist) { // якщо відповідь відстуня
                    if (document.getElementsByClassName('col-lg-10 col-sm-offset-1')[i + 1].children[0].className !== 'alertmess') {
                        document.getElementsByClassName('col-lg-10 col-sm-offset-1')[i + 1].className += ' alertMessage';
                        var newel = document.createElement('div');
                        newel.className = 'alertmess';
                        newel.innerHTML = '<span class="star">* </span>   <i>Виберіть хоча б одну відповідь!</i>';
                        document.getElementsByClassName('poss')[i].parentElement.insertBefore(newel, document.getElementsByClassName('poss')[i]);
                        document.getElementById('next').href = 'javascript:void(0)'; //перехід не відбувається
                        document.getElementsByClassName('alertmess')[0].scrollIntoView(true);
                    } else {
                        document.getElementById('next').href = 'javascript:void(0)';
                        document.getElementsByClassName('alertmess')[0].scrollIntoView(true);
                    }
                }

            }
        }


        var delteClass = function(element, className) {
            element.className = element.className.replace(
                new RegExp('(^|\\s+)' + className + '(\\s+|$)', 'g'),
                '$1'
            );

        };

        $scope.answer = function(elem) {
            var el = elem.target;
            
            
            var questionBlock = el.parentElement.parentElement.parentElement.parentElement;
            if (questionBlock.className.indexOf('alertMessage') !== -1) {
                delteClass(questionBlock, 'alertMessage');

                questionBlock.removeChild(questionBlock.children[0]);
            }
        };




        document.getElementById('sendB').addEventListener('click', validation);
    }
]);
