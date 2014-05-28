function printComments(e,place_for_comment,lastIndexComment,comments) {
    var newDiv = document.createElement('div');
    newDiv.className = "col-lg-10 text-justify";
    if(comments && lastIndexComment){
        if(lastIndexComment === true)lastIndexComment = 0;
    for (var i = lastIndexComment; i < comments.length; i++) {
        newDiv.innerHTML += "<b>" + comments[i].comment + "</b><br />" + "<div class='text-left'><i>"  + comments[i].timeCreate  + " Moderator</i></div>";
    }
    document.querySelectorAll(place_for_comment)[0].insertBefore(newDiv, e.parentNode);
    }
};

function addComment(e) {
                        var comment = e.querySelectorAll('textarea')[0].value;
                        var coments; 
                        var day=new Date();
                        var month= [];
                        month[0]="січ";
                        month[1]="лют";
                        month[2]="бер";
                        month[3]="кві";
                        month[4]="тра";
                        month[5]="чер";
                        month[6]="лип";
                        month[7]="сер";
                        month[8]="вер";
                        month[9]="жов";
                        month[10]="лис";
                        month[11]="гру";                        
                        var timeCreateComments = day.getDate()+" " + month[day.getMonth()] + " о " +day.getHours() +":"+ day.getMinutes();
                        console.log(timeCreateComments);
                        //localStorage.comment = JSON.stringify(comment);
                        if(localStorage.comment){
                            console.log('local true');
                            commentArray = JSON.parse(localStorage.comment);
                            commentArray.push({comment:comment, timeCreate: timeCreateComments})
                            //console.log(commentArray);
                            localStorage.comment = JSON.stringify(commentArray);
                        }else{
                            console.log('local false');
                            var commentArray = [{comment:comment, timeCreate: timeCreateComments}];
                            localStorage.comment = JSON.stringify(commentArray);
                        }
                        comments = JSON.parse(localStorage.comment);
                        console.log(coments);
                        var lastIndexComment = comments.length - 1;
                        if(lastIndexComment == 0){
                            var lastIndexComment = true;
                        }    
try{
    printComments(e,'.place_for_comment',lastIndexComment,comments);
  } catch(e) {
    console.log(e);
  } 

                    }
                    window.onload = function () { 
                        if(localStorage.comment){
                            var lastIndexComment = true;
                            var comments = JSON.parse(localStorage.comment)
                        }else{
                            var comments = null;
                        }  
                        console.log(comments);
                        printComments(document.getElementById("add-comment"), '.place_for_comment', lastIndexComment, comments);                
                        console.log("document.onload");
if(localStorage.Tests == "undefined" || !localStorage.Tests){
    console.log('tests storage false');
    localStorage.Tests = JSON.stringify(Tests);    
}
 Tests = JSON.parse(localStorage.Tests);   
                        
                        
                        var place_for_test = document.querySelectorAll('.content-test')[0];
                        var content = '';
                        content += '<h3 class="title-post-name col-xs-12 edit-content testDouble" style="float: none" forLocalstorage="globalTests[0].name">' + Tests[0].name + '</h3>';
                        var number_question = 0;
                        for (var i = 0; i < Tests[0].question.length; i++) {
                            var number_answer = 0;
                            number_question++;
                            var question_id = Tests[0].question[i].id
                            content += '<div class="row well"><div class="col-lg-12 text-justify testDouble" forLocalstorage="globalTests[0].question['+i+'].text">' + number_question + '. ' + Tests[0].question[i].text + '</div>';
                            for (var j = 0; j < Tests[0].answers.length; j++) {
                                number_answer++;
                                if (Tests[0].answers[j].question_id == question_id) {
                                    content += '<div class="col-lg-10 col-lg-offset-2 text-justify testDouble" forLocalstorage="globalTests[0].answers['+j+'].text_answer">' + number_answer + ') ' + Tests[0].answers[j].text_answer + '</div>';
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
                            content_for_edit[i].addEventListener('dblclick', function () {
                                var that = this;
                                var editText = document.createElement('textarea')
                                editText.rows = '4';
                                editText.cols = "60";
                                editText.className = 'edit-textarea';
                                editText.textContent = this.textContent;
                                insertAfter(editText, this);

                                function saveChange() {
                                    var test = that.getAttribute("forLocalstorage");
                                    console.log(test);
                                    var globalTests = JSON.parse(localStorage.Tests);
                                    var changeText = document.querySelectorAll('.edit-textarea')[0].value;
                                    if (window.event.srcElement.className !== 'edit-textarea') {
                                        document.querySelectorAll('.edit-textarea')[0].parentNode.removeChild(document.querySelectorAll('.edit-textarea')[0]);
                                        that.textContent = changeText;
                                        eval(test+'="'+changeText+'"');
                                        console.log(test+'="'+changeText+'"');
                                        console.log('_______');
                                        console.log(globalTests);
                                        localStorage.Tests = JSON.stringify(globalTests);
                                        document.querySelectorAll('body')[0].removeEventListener('click', saveChange);
                                    }
                                }
                                document.querySelectorAll('body')[0].addEventListener('click', saveChange);

                            });

                        }
                        (function (){
                            var place_for_comment = document.querySelectorAll('.place_for_comment')[0];
                            if(localStorage.getItem('listComment')){
                                var listComment = JSON.parse(localStorage.getItem('listComment'));
                                console.log(listComment);
                            }
                            //console.log(place_for_comment);
                        })()

                    }