'use strict';

angular.module('mean.test').service('Validation', function() {
    return {
        validation: function($scope) {
            var answerExist;
            var a = document.getElementsByClassName('col-lg-12 answer-spase');
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
                         document.getElementsByClassName('alertmess')[0].scrollIntoView(true);
                    } else {
                        
                        document.getElementsByClassName('alertmess')[0].scrollIntoView(true);
                    }
                } 

            }
            if (document.getElementsByClassName('alertmess').length === 0) {
                return true;
            } else{
                return false;
            }
        }


    };



});
