
    'use strict'
    redirect.testExist();
    redirect.idNotFound();


    var category = function(id) {
        for (var i = 0; i < Model.date.Tests_categories.length; i++) {
            // console.log(i);
            if (id === Model.date.Tests_categories[i].id) {
                var name = Model.date.Tests_categories[i].name;
            }
        };
        return name;
    }
    var subcategory = function(id) {
        for (var i = 0; i < Model.date.Tests_categories.length; i++) {
            // console.log(i);
            if (id == Model.date.Tests_categories[i].id) {
                var subcatname = Model.date.Tests_categories[i].name;
            };
        }
        return subcatname;
    }



    var breadcrumbs_creation = function() {

        var name1 = document.getElementsByTagName('h2');
        var Category = document.getElementById('Category');
        var SubCategory = document.getElementById('SubCategory');
        name1[0].innerHTML = test.testObj(test.id).name;
        Category.innerHTML = category(test.id);
        SubCategory.innerHTML = subcategory(test.id);
        Category.parentElement.parentElement.href = "category.html?id=" + Model.date.Tests[test.id].category + "";
        SubCategory.parentElement.parentElement.href = "category.html?id=" + Model.date.Tests[test.id].subcategory + "";
    }


    var testStructure = function() {
        var currentTest = test.testObj(test.id);
        var page = document.getElementsByClassName('page');

        for (var i = 0; i < currentTest.question.length; i++) {
            page[0].innerHTML += '<div class="row"><div class="col-lg-10 col-sm-offset-1"><div class="pos"></div><div class="question"><br></div><div class="col-lg-10 answer-spase"></div></div></div><br />'
        }
        var num = document.getElementsByClassName('pos');
        var question = document.getElementsByClassName('question');
        var answer = document.getElementsByClassName("col-lg-10 answer-spase");
        for (var i = 0; i < currentTest.question.length; i++) {
            num[i].innerHTML = "<strong>" + (i + 1) + '.' + '</strong>';
            question[i].innerHTML = currentTest.question[i].text;
            for (var k = 0; k < currentTest.answers.length; k++) {
                if (currentTest.answers[k].question_id === (i + 1)) {
                    answer[i].innerHTML += '<label onClick="answer(this)" class="aq1">' + currentTest.answers[k].text_answer + '</label><br>';

                }
            }
        }
    }

    testStructure();
    breadcrumbs_creation();

    var answer = function(el) {
        if (el.className === "MyClass") {
            el.className = "noclass"
        } else {
            el.className = "MyClass";
        }
    }

    var result = function() {
        var Test_id = parseInt(location.search.split('=').slice(1)[0]); // зміна для зберігання і передавання id тесту який проходиться
        var obj = {}; // пустий об*єкт, для запису відповідей, відповідно до запитання
        obj['Test_id'] = Test_id;
        var a = document.getElementsByClassName("col-lg-10 answer-spase"); // вибираємо всі питання на сторінці
        for (var i = 0; i < a.length; i++) { //перебираємо всі питання на сторінці
            obj['question' + i] = []; //в об*єкті створюємо нове запитання, яке записуватиме правильні відповіді в массив
            for (var j = 0; j < a[i].childNodes.length; j++) { //перебираємо варіанти відповідей
                if (a[i].childNodes[j].className === "MyClass") // якщо відповідь  вибрана:
                {
                    obj['question' + i].push(a[i].childNodes[j].innerHTML)
                } //дістаємо innerHTML відповіді з класом MyClass(відміченої), та записуємо її у масив, який відповідає № запитання, з яким на данний момент працює цикл

            }

        };
        for (var i = 0; i < a.length; i++) { //перевіряємо чи дав користувач відповіді на всі запитання
            if (obj['question' + i].length === 0) { // якщо масив відповіді пустий
                if (document.getElementsByClassName("col-lg-10 col-sm-offset-1")[i + 1].parentElement.children[0].className != 'col-sm-offset-5 alertmess') {
                    var newel = document.createElement('div');
                    newel.className = 'col-sm-offset-5 alertmess';
                    newel.innerHTML = '<strong>Дайте відповідь на запитання!</strong>';
                    document.getElementsByClassName("col-lg-10 col-sm-offset-1")[i + 1].parentElement.insertBefore(newel, document.getElementsByClassName("col-lg-10 col-sm-offset-1")[i + 1]);
                    document.getElementById("next").href = 'javascript:void(0)'; //перехід не відбувається
                    document.getElementsByClassName("col-sm-offset-5 alertmess")[i].scrollIntoView(true)
                    return;
                    break;

                } else {
                    document.getElementById("next").href = 'javascript:void(0)';
                    document.getElementsByClassName("col-sm-offset-5 alertmess")[i].scrollIntoView(true);
                    return;
                    break;

                }
            } else {
                document.getElementById("next").href = 'javascript:void(0)'; // якщо всі відповіді відмічені, прехід на сторінку результату
            }
        };

        localStorage.setItem('QuestionObject', JSON.stringify(obj)); //результат записуємо у localStorage, для подальшої роботи можна скористатись var question = localStorage.getItem('QuestionObject') для зручності роботи з об*єктом
    }

// http://www.youtube.com/watch?v=TRrL5j3MIvo
// http://www.youtube.com/watch?v=1Sy3vWJ1N2U
//http://www.youtube.com/watch?v=XwSFg8nqBFA