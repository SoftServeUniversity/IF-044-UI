                    function addComment(e) {
                        var comment = e.querySelectorAll('textarea')[0].value;
                        var newDiv = document.createElement('div');
                        newDiv.className = "col-lg-10 text-justify";
                        newDiv.innerHTML = comment;
                        document.querySelectorAll('.place_for_comment')[0].insertBefore(newDiv, e.parentNode);
                    }
                    window.onload = function () {
                        console.log("document.onload");
                        var place_for_test = document.querySelectorAll('.content-test')[0];
                        var content = '';
                        content += '<h3 class="title-post-name col-xs-12 edit-content testDouble" style="float: none">' + Tests[0].name + '</h3>';
                        var number_question = 0;
                        for (var i = 0; i < Tests[0].question.length; i++) {
                            var number_answer = 0;
                            number_question++;
                            var question_id = Tests[0].question[i].id
                            content += '<div class="row well"><div class="col-lg-12 text-justify testDouble">' + number_question + '. ' + Tests[0].question[i].text + '</div>';
                            for (var j = 0; j < Tests[0].answers.length; j++) {
                                number_answer++;
                                if (Tests[0].answers[j].question_id == question_id) {
                                    content += '<div class="col-lg-10 col-lg-offset-2 text-justify testDouble">' + number_answer + ') ' + Tests[0].answers[j].text_answer + '</div>';
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
                                    var changeText = document.querySelectorAll('.edit-textarea')[0].value;
                                    if (window.event.srcElement.className !== 'edit-textarea') {
                                        document.querySelectorAll('.edit-textarea')[0].parentNode.removeChild(document.querySelectorAll('.edit-textarea')[0]);
                                        that.textContent = changeText;
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
                            console.log(place_for_comment);
                        })()

                    }