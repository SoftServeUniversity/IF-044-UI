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
    Category.innerHTML = category(test.testObj(test.id).category);
    SubCategory.innerHTML = subcategory(test.testObj(test.id).subcategory);
    Category.parentElement.parentElement.href = "category.html?id=" + test.testObj(test.id).category + "";
    SubCategory.parentElement.parentElement.href = "subcategory.html?id=" + test.testObj(test.id).subcategory + "";
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
                answer[i].innerHTML += '<label onClick="answer(this)" >' + currentTest.answers[k].text_answer + '</label><br>';

            }
        }
    }
}

testStructure();
breadcrumbs_creation();

function removeChildren(elem) {
    try {
        elem.innerHTML = '';
    } catch (e) {
        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
    }
}

var delteClass = function(element, className) {
    element.className = element.className.replace(
        new RegExp('(^|\\s+)' + className + '(\\s+|$)', 'g'),
        '$1'
    );

}

var answer = function(el) {
    if (el.className === "MyClass") {
        el.className = ""
    } else {
        el.className = "MyClass";
    }
    var questionBlock = el.parentElement.parentElement;
    if (questionBlock.className.indexOf('alertMessage') != -1) {
        delteClass(questionBlock, 'alertMessage');
        
        questionBlock.removeChild(questionBlock.firstChild);
    };
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
        for (var j = 0; j < a[i].children.length; j++) {
            if (a[i].children[j].className === "MyClass") {
                var answerExist = true;
                break;
            } else {
                var answerExist = false;
            }
        }
        if (!answerExist) { // якщо відповідь відстуня
            if (document.getElementsByClassName("col-lg-10 col-sm-offset-1")[i + 1].children[0].className != 'alertmess') {
                document.getElementsByClassName("col-lg-10 col-sm-offset-1")[i + 1].className += " alertMessage"
                var newel = document.createElement('div');
                newel.className = 'alertmess';
                newel.innerHTML = '<span class="star">* </span>   <i>vuberit xochab 1 vidpovid!</i>';
                document.getElementsByClassName("pos")[i].parentElement.insertBefore(newel, document.getElementsByClassName("pos")[i]);
                document.getElementById("next").href = 'javascript:void(0)'; //перехід не відбувається
                document.getElementsByClassName("alertmess")[0].scrollIntoView(true)
            } else {
                document.getElementById("next").href = 'javascript:void(0)';
                document.getElementsByClassName("alertmess")[0].scrollIntoView(true);
            }
        }

    }
    localStorage.setItem('QuestionObject', JSON.stringify(obj));
    if (!document.getElementsByClassName('alertmess')[0]) {
        document.getElementById("next").href = 'score.html'; // якщо всі відповіді відмічені, прехід на сторінку результату
    }
    //результат записуємо у localStorage, для подальшої роботи можна скористатись var question = localStorage.getItem('QuestionObject') для зручності роботи з об*єктом
}

// http://www.youtube.com/watch?v=TRrL5j3MIvo
// http://www.youtube.com/watch?v=1Sy3vWJ1N2U
//http://www.youtube.com/watch?v=XwSFg8nqBFA
