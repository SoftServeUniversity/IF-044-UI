'use strict'

//видаляє всіх нащадків(для підкатегорій)
function removeChildren(elem) {
    try {
        elem.innerHTML = '';
    } catch (e) {
        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
    }
}

//визначення кількості тестів в базі, для стводення останнього в кінці
function TestLength() {
    var test = Application.Tests.length;
    return test
}


//знаходить елемент за ід
function elID(id) {
    return document.getElementById(id);
}

//шаблон для вставлення відповідей
function answerPattern() {
    var mat = '<div class="col-sm-11 col-sm-offset-1" > <div class="input-group"> <input type="text" class="form-control answer"  placeholder="Відповідь" required> <span class="btn input-group-addon default" title="Правильна відповідь" onclick="correctAnswer(this)"> <span class="glyphicon glyphicon-ok"></span> </span> <span class="btn input-group-addon danger" title="Видалити відповідь" onclick="answerRemove(this)"> <span class="glyphicon glyphicon-remove"></span> </span> </div> </div>'
    return mat;
}

function textarea(element) {
    var chalLength = element.value.length;
    var parent = element.parentNode;
    var inp = parent.innerHTML;
    if (chalLength > 50) {
        parent.removeChild(element);
        parent.innerHTML += '<textarea id="' + element.id + '" class = "textarea">' + element.value + '</textarea>';
        element = null;
    }

}

//функція додає нове запитання до списку
var questionAdd = function (el) {

    var mat = '<div class="col-sm-11 well"><div class="row"> <div class="col-md-12"> <div class="input-group"> <input type="text" class="form-control question" placeholder="Текст запитання"  required> <span class="btn input-group-addon danger" onclick="questionremove(this)" title="Видалити відповідь" > <span class="glyphicon glyphicon-remove"></span> </span> </div> </div> </div> <div class="row"> <div class="col-sm-12"> <div class="row margintop">' + answerPattern() + '</div> <div class="row margintop">' + answerPattern() + '</div> <button type="button" class="btn btn-sm btn-info margintop col-sm-offset-1" onclick="ansAdd(this)" style="float:left"><span class="glyphicon glyphicon-plus ss"></span>Додати відповідь</button> </div> </div></div>'
    var newdiv = document.createElement('div');
    newdiv.className = 'row';
    newdiv.innerHTML = mat;
    el.parentNode.parentNode.insertBefore(newdiv, el.parentNode);

}


//функція додає нову відповідь для запитання
var ansAdd = function (el) {
    var mat = answerPattern()
    var newdiv = document.createElement('div');
    newdiv.className = 'row margintop';
    newdiv.innerHTML = mat;
    el.parentNode.insertBefore(newdiv, el);
}


//функція видаляє запитанння і віднімає позиції питання та всі відовіді питання
var questionremove = function (el) {

    if (document.getElementsByClassName('question').length == 1) {
        alert('Тест має містити мінімум 1 питання!');
    } else {
        var Child = el.parentNode.parentNode.parentNode.parentNode;
        var Node = Child.parentNode;
        Node.removeChild(Child);

    }
}

//видаляє відповідь
var answerRemove = function (el) {
    var a = el.parentNode.parentNode.parentNode.parentNode.childElementCount
    if (a === 3) {
        alert("У питання має бути мінімум 2 відповіді!")
    } else {
        var Child = el.parentNode.parentNode.parentNode;
        var Node = Child.parentNode;
        Node.removeChild(Child);

    }
}

//Знаходить категорії в базі
var categoryCreation = function () {
    for (var i = 1; i < Application.Tests_categories.length; i++) {

        if (Application.Tests_categories[i - 1].parent_id === 0) {
            var p = document.createElement("option");
            var elem = elID('category').appendChild(p);
            elem.innerHTML = Application.Tests_categories[i - 1].name;
        }

    }
};


//За обраною категорією заповняє підкатегорії, якщо категорія не обрана поле підкатегорії не активне
var Subcat = function (el) {
    if (el.value === 'Оберіть категорію') {
        elID('subCategory').disabled = true;

    } else {
        elID('subCategory').disabled = false;
    }
    var category = elID('category').value;
    var subCategory = elID('subCategory')
    for (var i = 0; i < Application.Tests_categories.length; i++) {
        if (Application.Tests_categories[i].name === category) {
            var subCat = Application.Tests_categories[i].getSubcategories;
            var res = subCat((i + 1));
        }
    };
    removeChildren(elID('subCategory'));
    for (var key in res) {
        var p = document.createElement("option");
        var elem = elID('subCategory').appendChild(p);
        elem.innerHTML = res[key].name;
    }
}

//Змінює стилі кнопки вибору правильної відповіді
var correctAnswer = function (el) {
    if (el.className === 'btn input-group-addon default') {
        el.className = 'btn input-group-addon success'
    } else {
        el.className = 'btn input-group-addon default'
    }
}

//Знаходить ід категорії
function categorySearch(category) {
    for (var i = 0; i < Application.Tests_categories.length; i++) {
        if (Application.Tests_categories[i].name === category) {
            var categoryId = Application.Tests_categories[i].id
        }
    }
    return categoryId;
}

//Знаходить ід підкатегорії
function subCategorySearch(subCategory) {
    for (var i = 0; i < Application.Tests_categories.length; i++) {
        if (Application.Tests_categories[i].name === subCategory) {
            var categoryId = Application.Tests_categories[i].id
        }
    }
    return categoryId;
}


//заповнює категорії
window.onload = categoryCreation();


function QuestionSave(obj, question, answer) {
    obj.question = [];
    obj.answer = [];
    obj.correct_answer = [];
    for (var i = 0; i < question.length; i++) {
        var a = question[i].parentElement.parentElement.parentElement.parentElement.children[1].children[0].children;
        for (var s = 0; s < a.length; s++) {
            if (a[s].className === "row margintop") {
                a[s].children[0].children[0].children[0].setAttribute('data-qid', i + 1);
            };
        };
        obj.question.push({});
        obj.question[i].id = i + 1;
        obj.question[i].text = question[i].value;
        for (var j = 0; j < answer.length; j++) {
            answer[j].setAttribute('aid', (j + 1))
            if (parseInt(answer[j].getAttribute('data-qid')) == i + 1) {
                obj.answer.push({});
                obj.answer[obj.answer.length - 1].text = answer[j].value;
                obj.answer[obj.answer.length - 1].id = j + 1;
                obj.answer[obj.answer.length - 1].question_id = i + 1;
                if (answer[j].parentElement.children[1].className == 'btn input-group-addon success') {
                    obj.correct_answer.push({});
                    obj.correct_answer[obj.correct_answer.length - 1].answer_id = j + 1;
                    obj.correct_answer[obj.correct_answer.length - 1].question_id = i + 1;
                };
            };

        };
    };

}

//Збирає данні з інпутів по ід і записує їх у базу
var send = function (id) {
    var l = TestLength();
    var category = elID('category').value;
    var subcategory = elID('subCategory').value;
    var newTest = {};
    QuestionSave(newTest, document.getElementsByClassName('question'), document.getElementsByClassName('answer'));
    newTest.user_owner_id = 3;
    newTest.name = elID('name').value;
    newTest.description = elID('description').value;
    newTest.categoryId = categorySearch(category);
    newTest.subcategory = subCategorySearch(subcategory);
    newTest.status = id;
    newTest.tags = elID('tags').value.split(',');
    newTest.date = Date.parse(new Date());
    Application.Tests.push(newTest);
}