'use strict'

function redirect() {

    if (location.search.split('=').slice(1)[0] === undefined) {

        window.location = '404.html';
    }
    if (Model.date.session_user_id) {
        return
    } else {
        window.location = '404.html';
    }
}
window.onload = redirect();

function test() {
    this.id = parseInt(location.search.split('=').slice(1)[0]);
    this.category = function(id) {
        for (var i = 0; i < Model.date.Tests_categories.length; i++) {
            // console.log(i);
            if (id === Model.date.Tests_categories[i].id) {
                var name = Model.date.Tests_categories[i].name;
            }
        };
        return name;
    }
    this.subcategory = function(id) {
        for (var i = 0; i < Model.date.Tests_categories.length; i++) {
            // console.log(i);
            if (id == Model.date.Tests_categories[i].id) {
                var subcatname = Model.date.Tests_categories[i].name;
            };
        }
        return subcatname;
    }
    this.testObj = function(id) {
        for (var i = 0; i < Model.date.Tests.length; i++) {
            if (id === Model.date.Tests[i].id) {
                return Model.date.Tests[i];
            }
        };
    }
}
var testStatus =function() {
	if (test.testObj(test.id).status != 3) {
		 window.location = '404.html';
	};
}
var test = new test();
window.onload = testStatus();
function breadcrumbs_creation(num) {
    var name1 = document.getElementsByTagName('h2');
    var Category = document.getElementById('Category');
    var SubCategory = document.getElementById('SubCategory');
    name1[0].innerHTML = Model.date.Tests[num].name;
    Category.innerHTML = test.category(Model.date.Tests[num].category);
    SubCategory.innerHTML = test.subcategory(Model.date.Tests[num].subcategory);
    Category.parentElement.parentElement.href = "category.html?id=" + Model.date.Tests[num].category + "";
    SubCategory.parentElement.parentElement.href = "category.html?id=" + Model.date.Tests[num].subcategory + "";
}


var testStructure = function(obj) {
    var page = document.getElementsByClassName('page');
    for (var i = 0; i < test.testObj(test.id).question.length; i++) {
  
        page[0].innerHTML += '<div class="row"><div class="col-lg-10 col-sm-offset-1"><div class="pos"></div><div class="question"><br></div><div class="col-lg-10 answer-spase"></div></div></div><br />'
    }
    var num = document.getElementsByClassName('pos');
    var question = document.getElementsByClassName('question');
    var answer = document.getElementsByClassName("col-lg-10 answer-spase");
    for (var i = 0; i < test.testObj(test.id).question.length; i++) {
        num[i].innerHTML = "<strong>" + (i + 1) + '.' + '</strong>';
        question[i].innerHTML = test.testObj(test.id).question[i].text;
        for (var k = 0; k <test.testObj(test.id).answers.length; k++) {
            if (test.testObj(test.id).answers[k].question_id === (i + 1)) {
                answer[i].innerHTML += '<label onClick="answer(this)" class="aq1">' + test.testObj(test.id).answers[k].text_answer + '</label><br>';

            }
        }
    }
}


document.onload = testStructure(test.testObj(test.id));
document.onload = breadcrumbs_creation(test.id);

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
            if (document.getElementsByClassName('alert alert-danger')[0] === undefined) {
                var newel = document.createElement('div');
                newel.className = 'row';
                newel.innerHTML = '<div class="col-sm-4 col-md-4 col-sm-offset-1"><div class="alert alert-danger"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true"> ×</button> <p> Дайте відповідь на усі питання!</p> </div></div>';
                document.getElementsByClassName("col-lg-12 page")[0].parentElement.insertBefore(newel, document.getElementsByClassName("col-lg-12 page")[0]);
                
                document.getElementById("next").href = '#'; //перехід не відбувається
                return;
                break;

            } else {
                document.getElementById("next").href = '#';
                return;
                break;
                
            }
        } else {
            document.getElementById("next").href = 'score.html'; // якщо всі відповіді відмічені, прехід на сторінку результату
        }
    };

    localStorage.setItem('QuestionObject', JSON.stringify(obj)); //результат записуємо у localStorage, для подальшої роботи можна скористатись var question = localStorage.getItem('QuestionObject') для зручності роботи з об*єктом

}
