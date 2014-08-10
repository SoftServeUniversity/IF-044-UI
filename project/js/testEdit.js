(function() {
    redirect.testExist();
    redirect.idNotFound();
    redirect.userPermission();


    
    function id(selector) {
        return document.getElementsByClassName(selector);
    }

    function selAnsById(test_id, id) {
        var array = [];
        for (var i = 0; i < test.testObj(test.id).answers.length; i++) {
            if (test.testObj(test.id).answers[i].question_id == id) {
                array.push(test.testObj(test.id).answers[i]);
            };
        };
        return array
    }

    function AnsAdd(value) {
        var mat = '<div class="col-sm-11 col-sm-offset-1" > <div class="input-group"> <input type="text"  value="' + value + '" class="form-control answer"  placeholder="Відповідь" required> <span class="btn input-group-addon default glyphicon glyphicon-ok" title="Правильна відповідь" > </span> <span class="btn input-group-addon danger glyphicon glyphicon-remove" title="Видалити відповідь" >  </span> </div> </div>';
        var newdiv = document.createElement('div');
        newdiv.className = 'row margintop';
        newdiv.innerHTML = mat;
        return newdiv
    }

    function getText(id) {
        for (var i = 0; i < Model.date.Tests_categories.length; i++) {
            if (Model.date.Tests_categories[i].id == id) {
                var a = Model.date.Tests_categories[i].name;
            }
        };
        return a;
    }

    var testEdit = function() {
        for (var i = 0; i < test.testObj(test.id).question.length; i++) {
            var newdiv = document.createElement('div');
            newdiv.className = 'row col-lg-offset-1';
            newdiv.innerHTML = '<div class="col-sm-12 col-md-12 well"> <div class="row "> <div class="col-md-12"> <div class="input-group"> <input type="text"  class="form-control question" placeholder="Текст запитання" required value="' + test.testObj(test.id).question[i].text + ' "> <span class="btn input-group-addon danger" title="Видалити питання" > <span class="glyphicon glyphicon-remove"></span> </span> </div> <div class="col-sm-11 col-sm-offset-1 nopadding" > <textarea placeholder="Пояснення до питання" class="form-control margintop questionDescription" >' + test.testObj(test.id).question[i].question_description + '</textarea> </div></div> </div> <div class="row"> <div class="col-sm-12 "> <button type="button" class="btn btn-sm btn-info margintop col-sm-offset-1" " style="float:left"><span class="glyphicon glyphicon-plus ss"></span>Додати відповідь</button> </div> </div> </div>';
            var el = id('btn btn-md btn-default width')[0].parentElement.parentElement;
            el.parentElement.parentElement.insertBefore(newdiv, el.parentElement);
            var arrayAns = selAnsById(test.id - 1, i + 1);
            var but = id('btn btn-sm btn-info margintop col-sm-offset-1');
            for (var j = 0; j < arrayAns.length; j++) {
                but[i].parentElement.insertBefore(AnsAdd(arrayAns[j].text_answer), but[i]);
            };
        };
        var input = id('form-control answer');
        var corAns = [];
        for (var i = 0; i < test.testObj(test.id).correct_answer.length; i++) {
            for (var j = 0; j < test.testObj(test.id).answers.length; j++) {
                if (test.testObj(test.id).correct_answer[i].answer_id == test.testObj(test.id).answers[j].id) {
                    corAns.push(test.testObj(test.id).answers[j].text_answer);
                };

            };
        };
        for (var i = 0; i < input.length; i++) {
            for (var j = 0; j < corAns.length; j++) {
                if (input[i].value == corAns[j]) {
                    input[i].parentElement.children[1].className = 'btn input-group-addon success glyphicon glyphicon-ok';
                };
            };

        };
        elID('category').value = getText(test.testObj(test.id).category);
        elID('subCategory').disabled = false;
        Subcat(elID('category'));
        elID('subCategory').value = getText(test.testObj(test.id).subcategory);
        elID('name').value = test.testObj(test.id).name;
        textarea(elID('name'));
        elID('description').value = test.testObj(test.id).description;
        textarea(elID('description'));
        


    }

    var save = function(id, el) {
        if (allFieldvalidation()) {
    
                                
            var newTest = {};
            newTest.name = elID('name').value;
            newTest.id = test.id;
            newTest.description = elID('description').value;
            QuestionSave(newTest, document.getElementsByClassName('question'), document.getElementsByClassName('answer'));
            newTest.user_owner_id = Model.date.session_user_id;
            newTest.category = categoryId(elID('category').value);
            newTest.subcategory = categoryId(elID('subCategory').value);
            newTest.id = test.id;
            newTest.tags = elID('tags').value.split(',');
            newTest.date = Date.parse(new Date());
            for (var i = 0; i < Model.date.Tests.length; i++) {
                if (test.id === Model.date.Tests[i].id) {
                    Model.date.Tests[i] = newTest;
                };
            };
            Model.save_localStorage();
        };

    };

    testEdit();

    function addEvents() {
        var senddraft = elID('draftbtn'),
            sendrewiew = elID('sendtbtn');
           
        senddraft.addEventListener("click", save);
        sendrewiew.addEventListener("click", save);

    };

    addEvents();
})();
