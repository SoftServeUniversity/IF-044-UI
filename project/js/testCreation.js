'use strict'
var getUsersPermission = function() {
    if (Model.date.session_user_id) {
        return
    } else {
        window.location = '404.html';
    }
}



//рухає курсор в кінець textarea 

    function moveCaretToEnd(el) {
        if (typeof el.selectionStart == "number") {
            el.selectionStart = el.selectionEnd = el.value.length;
        } else if (typeof el.createTextRange != "undefined") {
            el.focus();
            var range = el.createTextRange();
            range.collapse(false);
            range.select();
        }
    }

    //створення масиву тегів

    function getTag() {
        var tags = [];
        for (var i = 0; i < Model.date.Tests.length; i++) {

            for (var j = 0; j < Model.date.Tests[i].tags.length; j++) {
                tags.push(Model.date.Tests[i].tags[j]);

            };
        };
        var i = tags.length;
        tags.sort();
        while (i--) {
            if (tags[i] == tags[i - 1]) {
                tags.splice(i, 1);
            }
        }
        return tags
    }
    //Повертає підкатегорії категорії
var getSubcategories = function(id) {
    var result = [];
    for (var i = 0; i < Application.Tests_categories.length; i++) {
        if (Application.Tests_categories[i].parent_id === id) {
            result.push(Application.Tests_categories[i]);
        };
    };
    return result;
}
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
        var test = Model.date.Tests.length;
        return test
    }


    //знаходить елемент за ід

    function elID(id) {
        return document.getElementById(id);
    }

    //шаблон для вставлення відповідей

    function answerPattern() {
        var mat = '<div class="col-sm-11 col-sm-offset-1" > <div class="input-group"> <input type="text" class="form-control answer"  placeholder="Відповідь" onclick="newclass(this)" onclick="newclass(this)"> <span class="btn input-group-addon default" title="Правильна відповідь" onclick="correctAnswer(this)"> <span class="glyphicon glyphicon-ok"></span> </span> <span class="btn input-group-addon danger" title="Видалити відповідь" onclick="answerRemove(this)"> <span class="glyphicon glyphicon-remove"></span> </span> </div> </div>'
        return mat;
    }

    function textarea(element) {
        var chalLength = element.value.length;
        var parent = element.parentNode;
        var inp = parent.innerHTML;
        var id = element.id;
        if (chalLength > 50) {
            parent.removeChild(element);
            parent.innerHTML += '<textarea id="' + element.id + '" class = "textarea" onclick="newclass(this)">' + element.value + '</textarea>';
            element = null;
            var textarea = document.getElementById(id);
            textarea.focus();



            moveCaretToEnd(textarea);

            // Work around Chrome's little problem

            window.setTimeout(function() {
                moveCaretToEnd(textarea);
            }, 1);

        }

    }

    //функція додає нове запитання до списку
var questionAdd = function(el) {

    var mat = '<div class="col-sm-11 well"><div class="row"> <div class="col-md-12"> <div class="input-group"> <input type="text" class="form-control question" placeholder="Текст запитання"  onclick="newclass(this)"> <span class="btn input-group-addon danger" onclick="questionremove(this)" title="Видалити відповідь" > <span class="glyphicon glyphicon-remove"></span> </span> </div> <div class="col-sm-11 col-sm-offset-1 nopadding" > <textarea placeholder="Опис Запитання" onclick="newclass(this)" class="form-control margintop questionDescription"></textarea> </div></div> </div> <div class="row"> <div class="col-sm-12"> <div class="row margintop">' + answerPattern() + '</div> <div class="row margintop">' + answerPattern() + '</div> <button type="button" class="btn btn-sm btn-info margintop col-sm-offset-1" onclick="ansAdd(this)" style="float:left"><span class="glyphicon glyphicon-plus ss"></span>Додати відповідь</button> </div> </div></div>'
    var newdiv = document.createElement('div');
    newdiv.className = 'row';
    newdiv.innerHTML = mat;
    el.parentNode.parentNode.insertBefore(newdiv, el.parentNode);

}


//функція додає нову відповідь для запитання
var ansAdd = function(el) {
    var mat = answerPattern()
    var newdiv = document.createElement('div');
    newdiv.className = 'row margintop';
    newdiv.innerHTML = mat;
    el.parentNode.insertBefore(newdiv, el);
}


//функція видаляє запитанння і віднімає позиції питання та всі відовіді питання
var questionremove = function(el) {

    if (document.getElementsByClassName('question').length == 1) {
        if (document.getElementsByClassName('alert alert-danger q')[0] === undefined) {
            var newel = document.createElement('div');
            newel.className = 'col-sm-5 col-md-5 col-sm-offset-3';
            newel.innerHTML = '<div class="alert alert-danger q"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true"> ×</button> <p> Тест має містити мінімум 1 питання!</p> </div>';
            el.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(newel, el.parentNode.parentNode.parentNode.parentNode);
        } else {
            return
        }
    } else {
        var Child = el.parentNode.parentNode.parentNode.parentNode.parentNode;
        console.log(Child);
        var Node = Child.parentNode;
        console.log(Node);
        Node.removeChild(Child);

    }
}

//видаляє відповідь
var answerRemove = function(el) {

    var a = el.parentNode.parentNode.parentNode.parentNode.childElementCount
    if (a === 3) {
        if (document.getElementsByClassName('alert alert-danger a')[0] === undefined) {
            var newel = document.createElement('div');
            newel.className = 'col-sm-5 col-md-5 col-sm-offset-3';
            newel.innerHTML = '<div class="alert alert-danger a"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true"> ×</button> <p> Питання має містити мінімум 2 відповіді!</p> </div>';
            el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(newel, el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        } else {
            if (el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].className != "col-sm-5 col-md-5 col-sm-offset-3") {
                var newel = document.createElement('div');
            newel.className = 'col-sm-5 col-md-5 col-sm-offset-3';
            newel.innerHTML = '<div class="alert alert-danger a"> <button type="button" class="close" data-dismiss="alert" aria-hidden="true"> ×</button> <p> Питання має містити мінімум 2 відповіді!</p> </div>';
            el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(newel, el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        }else{
            return
        }
        }
    } else {
        var Child = el.parentNode.parentNode.parentNode;
        var Node = Child.parentNode;
        Node.removeChild(Child);

    }
}

//Знаходить категорії в базі
var categoryCreation = function() {
    for (var i = 1; i < Model.date.Tests_categories.length; i++) {

        if (Model.date.Tests_categories[i - 1].parent_id === 0) {
            var p = document.createElement("option");
            var elem = elID('category').appendChild(p);
            elem.innerHTML = Model.date.Tests_categories[i - 1].name;
        }

    }
};


//За обраною категорією заповняє підкатегорії, якщо категорія не обрана поле підкатегорії не активне
var Subcat = function(el) {
    if (el.value === 'Оберіть категорію') {
        elID('subCategory').disabled = true;

    } else {
        elID('subCategory').disabled = false;
    }
    var category = elID('category').value;
    var subCategory = elID('subCategory')
    for (var i = 0; i < Model.date.Tests_categories.length; i++) {
        if (Model.date.Tests_categories[i].name === category) {

            var res = getSubcategories((i + 1));
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
var correctAnswer = function(el) {
    if (el.className === 'btn input-group-addon default') {
        el.className = 'btn input-group-addon success'
    } else {
        el.className = 'btn input-group-addon default'
    }
}

//class remove{   

    function newclass(element) {
        element.className = element.className.replace(
            new RegExp('(^|\\s+)' + 'validation' + '(\\s+|$)', 'g'),
            '$1'
        );

    }
    //validation function

    function validation(el) {
        if (el.value === "") {
            el.className += " validation";
        }

    }

    //Знаходить ід категорії

    function categorySearch(category) {
        for (var i = 0; i < Model.date.Tests_categories.length; i++) {
            if (Model.date.Tests_categories[i].name === category) {
                var categoryId = Model.date.Tests_categories[i].id
            }
        }
        return categoryId;
    }

    //Знаходить ід підкатегорії

    function subCategorySearch(subCategory) {
        for (var i = 0; i < Model.date.Tests_categories.length; i++) {
            if (Model.date.Tests_categories[i].name === subCategory) {
                var categoryId = Model.date.Tests_categories[i].id
            }
        }
        return categoryId;
    }


    //заповнює категорії
window.onload = categoryCreation();
window.onload = getUsersPermission();


function QuestionSave(obj, question, answer) {
    obj.question = [];
    obj.answers = [];
    obj.correct_answer = [];
    for (var i = 0; i < question.length; i++) {
        //if (question[i].value == "") {alert('Текст питання порожній')}
        // else{if (question[i].parentElement.parentElement.children[1].children[0].value == "") {alert('Опис питання порожній')}
        //  else{

        var a = question[i].parentElement.parentElement.parentElement.parentElement.children[1].children[0].children;
        for (var s = 0; s < a.length; s++) {
            if (a[s].className === "row margintop") {
                a[s].children[0].children[0].children[0].setAttribute('data-qid', i + 1);
            };
        };
        obj.question.push({});
        obj.question[i].id = i + 1;
        obj.question[i].text = question[i].value;
        obj.question[i].question_description = question[i].parentElement.parentElement.children[1].children[0].value;


        for (var j = 0; j < answer.length; j++) {
            answer[j].setAttribute('aid', (j + 1))
            if (parseInt(answer[j].getAttribute('data-qid')) == i + 1) {
                obj.answers.push({});
                obj.answers[obj.answers.length - 1].text_answer = answer[j].value;
                obj.answers[obj.answers.length - 1].id = j + 1;
                obj.answers[obj.answers.length - 1].question_id = i + 1;
                if (answer[j].parentElement.children[1].className == 'btn input-group-addon success') {
                    obj.correct_answer.push({});
                    obj.correct_answer[obj.correct_answer.length - 1].answer_id = j + 1;
                    obj.correct_answer[obj.correct_answer.length - 1].question_id = i + 1;
                    // };
                    //  };

                };
            }
        };
    };
}


function allFieldvalidation() {
    var inp = document.getElementsByTagName('input');
    validation(elID('name'), 'validation');
    validation(elID('description'), 'validation');
    validation(elID('subCategory'), 'validation');
    for (var i = 0; i < document.getElementsByClassName('question').length; i++) {
        validation(document.getElementsByClassName('question')[i], 'validation');
    };
    for (var i = 0; i < document.getElementsByClassName('answer').length; i++) {
        validation(document.getElementsByClassName('answer')[i], 'validation');
    };
    for (var i = 0; i < document.getElementsByClassName('questionDescription').length; i++) {
        validation(document.getElementsByClassName('questionDescription')[i], 'validation');
    };
    for (var i = 3; i < inp.length; i++) {

        if (inp[i].className.indexOf('validation') === -1) {
            return true
        } else {
            if (document.getElementsByClassName('row')[1].children[1]) {
                window.scrollTo(0, 0);
                return
            } else {
                var li = document.createElement('div');
                li.className = 'alertmessage margintop';
                li.innerHTML = '<h4>Заповніть всі поля!</h4>';
                document.getElementsByClassName('row')[1].appendChild(li);
                window.scrollTo(0, 0);
                return false
            }

        }
    }
}
//Збирає данні з інпутів по ід і записує їх у базу
var send = function(id, el) {
    if (allFieldvalidation()) {
        el.parentElement.href = "user_my_test_nyarytc.html";
        var l = TestLength();
        var category = elID('category').value;
        var subcategory = elID('subCategory').value;
        var newTest = {};
        QuestionSave(newTest, document.getElementsByClassName('question'), document.getElementsByClassName('answer'));
        newTest.user_owner_id = Model.date.session_user_id;
        newTest.name = elID('name').value;
        newTest.id = Model.date.Tests.length;
        newTest.description = elID('description').value;
        newTest.category = categorySearch(category);
        newTest.subcategory = subCategorySearch(subcategory);
        newTest.status = id;
        newTest.tags = elID('tags').value.split(',');
        newTest.date = Date.parse(new Date());
        Model.date.Tests.push(newTest);
        Model.save_localStorage();
    };

};
