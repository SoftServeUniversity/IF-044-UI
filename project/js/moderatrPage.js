	if(Model.date.Moderator_test_edit){
		var currentIndexTest = Model.date.Moderator_test_edit;
	}else{
		//var currentIndexTest = Math.floor(Math.random() * ((Tests.length-1)+ 1));
		var currentIndexTest = 0;
    }
		console.log(currentIndexTest);
		
function printComments(e, place_for_comment, lastIndexComment, comments) {
    var newDiv = document.createElement('div');
    newDiv.className = "col-lg-10 text-justify";
    if (comments && lastIndexComment) {
        if (lastIndexComment === true) lastIndexComment = 0;
        for (var i = lastIndexComment; i < comments.length; i++) {
            if(currentIndexTest == comments[i].test_id){
                newDiv.innerHTML += "<b>" + comments[i].comment + "</b><br />" + "<div class='text-left'><i>" + comments[i].timeCreate + " Moderator</i></div>";
            }
        }
        document.querySelectorAll(place_for_comment)[0].insertBefore(newDiv, e.parentNode);
    }
};

function addComment(e) {
    var comment = e.querySelectorAll('textarea')[0].value;
    var coments;
    var day = new Date();
    var month = [];
    month[0] = "січ"; month[1] = "лют";  month[2] = "бер";  month[3] = "кві"; month[4] = "тра"; month[5] = "чер"; month[6] = "лип"; month[7] = "сер"; month[8] = "вер"; month[9] = "жов"; month[10] = "лис"; month[11] = "гру";
    var timeCreateComments = day.getDate() + " " + month[day.getMonth()] + " о " + day.getHours() + ":" + day.getMinutes();
    console.log(timeCreateComments);
    if (Model.date.comment) {
        console.log('local true');
        commentArray = Model.date.comment;
        commentArray.push({
            comment: comment,
            test_id : currentIndexTest,
            timeCreate: timeCreateComments
        })
        //console.log(commentArray);
        //localStorage.comment = JSON.stringify(commentArray);
		Model.save_localStorage();
    } else {
        console.log('local false');
        var commentArray = [{
            comment: comment,
            test_id : currentIndexTest,
            timeCreate: timeCreateComments
        }];
		Model.date.comment = commentArray;
		Model.save_localStorage();
        //localStorage.comment = JSON.stringify(commentArray);
    }
    comments = Model.date.comment;
    console.log(coments);
    var lastIndexComment = comments.length - 1;
    if (lastIndexComment == 0) {
        var lastIndexComment = true;
    }
    try {
        printComments(e, '.place_for_comment', lastIndexComment, comments);
    } catch (e) {
        console.log(e);
    }
	return false;

}
window.onload = function() {
    if (Model.date.comment) {
        var lastIndexComment = true;
        var comments = Model.date.comment;
    } else {
        var comments = null;
    }
    console.log(comments);
    printComments(document.getElementById("add-comment"), '.place_for_comment', lastIndexComment, comments);
    console.log("document.onload");
    if (!Model.date.Tests) {
        console.log('tests storage false');
        localStorage.Tests = JSON.stringify(Tests);
    }
    //Tests = JSON.parse(localStorage.Tests);
    Tests = Model.date.Tests;


    var place_for_test = document.querySelectorAll('.content-test')[0];
    var content = '';
    content += '<h3 class="title-post-name col-xs-12 edit-content testDouble" style="float: none" forLocalstorage="globalTests[0].name">' + Tests[currentIndexTest].name + '</h3>';
    var number_question = 0;
    for (var i = 0; i < Tests[currentIndexTest].question.length; i++) {
        var number_answer = 0;
        number_question++;
        var question_id = Tests[currentIndexTest].question[i].id
        content += '<div class="row well"><div class="col-lg-1 text-justify">' + number_question + '. ' + '</div><div class="col-lg-11 text-justify testDouble" forLocalstorage="globalTests['+currentIndexTest+'].question[' + i + '].text">' + Tests[currentIndexTest].question[i].text + '</div>';
        for (var j = 0; j < Tests[currentIndexTest].answers.length; j++) {
            number_answer++;
            if (Tests[currentIndexTest].answers[j].question_id == question_id) {
                content += '<div class="col-lg-1 col-lg-offset-2">' + number_answer + ') ' + '</div>' + '<div class="col-lg-9 text-justify testDouble" forLocalstorage="globalTests['+currentIndexTest+'].answers[' + j + '].text_answer">' + Tests[currentIndexTest].answers[j].text_answer + '</div>';
            }
        }
        content += '</div>';
    }
    place_for_test.innerHTML += content;

    function insertAfter(newElement, targetElement) {
        //target is what you want it to go after. Look for this elements parent.
        var parent = targetElement.parentNode;

        //if the parents lastchild is the targetElement...
        if (parent.lastchild == targetElement) {
            //add the newElement after the target element.
            parent.appendChild(newElement);
        } else {
            // else the target has siblings, insert the new element between the target and it's next sibling.
            parent.insertBefore(newElement, targetElement.nextSibling);
        }
    }





    var content_for_edit = document.querySelectorAll('.testDouble');
    for (var i = 0; i < content_for_edit.length; i++) {
        content_for_edit[i].addEventListener('dblclick', function() {
            var that = this;
            var editText = document.createElement('textarea')
            editText.rows = '4';
            editText.cols = "60";
            editText.className = 'edit-textarea';
            editText.textContent = this.textContent;
            insertAfter(editText, this);

            function saveChange(e) {
                var test = that.getAttribute("forLocalstorage");
//                var globalTests = JSON.parse(localStorage.Tests);
                var globalTests = Model.date.Tests;
                var changeText = document.querySelectorAll('.edit-textarea')[0].value;
                var e = e||window.event;
                console.log(e);
                console.log(e.target.className);
                if (e.target.className !== 'edit-textarea') {
                    document.querySelectorAll('.edit-textarea')[0].parentNode.removeChild(document.querySelectorAll('.edit-textarea')[0]);
                    that.textContent = changeText;
                    eval(test + '="' + changeText + '"');
                    //console.log(test + '="' + changeText + '"');
                    //console.log('_______');
                   // console.log(globalTests);
//                    localStorage.Tests = JSON.stringify(globalTests);
					  Model.date.Tests = globalTests;
					  Model.save_localStorage();
					  
                    
                    document.querySelectorAll('body')[0].removeEventListener('click', saveChange);
                }
            }
            document.querySelectorAll('body')[0].addEventListener('click', saveChange);

        });

    }
    (function() {
        var place_for_comment = document.querySelectorAll('.place_for_comment')[0];
        if (localStorage.getItem('listComment')) {
            var listComment = JSON.parse(localStorage.getItem('listComment'));
            console.log(listComment);
        }
        //console.log(place_for_comment);
    })()
    document.getElementById('public1').addEventListener('click',function(){
//        var globalTests = JSON.parse(localStorage.Tests);
        var globalTests = Model.date.Tests;
        globalTests[currentIndexTest].status.id = 4;
		globalTests[currentIndexTest].status.name_status = "опублікований";
		Model.save_localStorage();
        //localStorage.Tests = JSON.stringify(globalTests);
    })
    document.getElementById('public0').addEventListener('click',function(){
        var globalTests = Model.date.Tests;
        globalTests[currentIndexTest].status.id = 0;
        globalTests[currentIndexTest].status.name_status = "завернутий";
		Model.save_localStorage();
        //localStorage.Tests = JSON.stringify(globalTests);
    })    

}