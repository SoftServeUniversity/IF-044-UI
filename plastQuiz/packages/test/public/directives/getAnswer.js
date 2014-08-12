'use strict';

angular.module('mean.test').service('getAnswer', function() {
    return {
        Answers: function() {
            
            var obj = {}; // пустий об*єкт, для запису відповідей, відповідно до запитання

            var a = document.getElementsByClassName('col-lg-12 answer-spase'); // вибираємо всі питання на сторінці
            for (var i = 0; i < a.length; i++) { //перебираємо всі питання на сторінці
                obj['question' + i] = []; //в об*єкті створюємо нове запитання, яке записуватиме правильні відповіді в массив
                for (var j = 0; j < a[i].children.length; j++) { //перебираємо варіанти відповідей
                    if (a[i].children[j].children[0].className === 'MyClass') // якщо відповідь  вибрана:
                    {
                        obj['question' + i].push(a[i].children[j].children[0].children[0].innerHTML);
                    } //дістаємо innerHTML відповіді з класом MyClass(відміченої), та записуємо її у масив, який відповідає № запитання, з яким на данний момент працює цикл

                }

            }
            
            return obj;
        }
        
    };



});
