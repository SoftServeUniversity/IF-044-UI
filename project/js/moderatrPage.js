	(function() { // checking users permission
	    var getUsersPermission = function(session_user_id) {
	        if (!Model.date.session_user_id) {
	            return false;
	        } else {
	            var userRole = false;
	            for (var i = 0; i < Model.date.Users.length; i++) {
	                if (Model.date.Users[i].id == session_user_id && Model
	                    .date.Users[i].role_id == 2) {
	                    userRole = true;
	                    break;
	                }
	            }
	            return userRole;
	        }

	    }
	    if (!getUsersPermission(Model.date.session_user_id)) {
	        //if user is not authorized or is not moderator: redirect index page with alert about this
	        alert('нема прав!');
	        //window.location = 'index.html';		
	    }
	})();
	if (Model.date.Moderator_test_id) {
	    var get_test_id = Model.date.Moderator_test_id;
	} else {
	    var get_test_id = 2;
	}
	 //get_test_id - is var which will use for getting Test
	window.onload = function() {
	    // generateHtml - is object where describe generation tests in html
	    var generateHtml = {
	        place_for_test: document.querySelectorAll('.content-test')[0],
	        place_for_list_categories: document.getElementById(
	            'listCategories'),
	        place_for_list_subCategories: document.getElementById(
	            'listSubCategories'),
	        place_for_comments: document.querySelectorAll(
	            '.place_for_comment')[0],
	        textarea_for_description: document.getElementById(
	            'descriptionTest'),
	        setTags: function() {
	            document.getElementById('tags').value = this.catchTestById(
	                get_test_id).tags.join();
	            $(document.getElementById('tags')).select2({
	                tags: []
	            });
	            document.getElementById('s2id_autogen1').style.width =
	                '200px';
	            $('.select2-choices').css({
	                'min-width': '200px'
	            });
	        },
	        setDescription: function() {
	            this.textarea_for_description.value = this.catchTestById(
	                get_test_id).description;
	        },
	        catchTestById: function(testId) { // catch needed tests
	            for (var i = 0; i < Model.date.Tests.length; i++) {
	                if (Model.date.Tests[i].id == testId) {
	                    var catchTest = Model.date.Tests[i];
	                    break;
	                }
	            }
	            return catchTest;
	        },
	        testBody: function(testId) { // method which print on page test
	            var content = '';
	            content +=
	                '<h3 class="title-post-name col-xs-12 edit-content testDouble" style="float: none" forLocalstorage="Model.date.Tests[' +
	                Model.date.Tests.indexOf(this.catchTestById(testId)) +
	                '].name">' + this.catchTestById(testId).name +
	                '</h3>';
	            var number_question = 0;
	            for (var i = 0; i < this.catchTestById(testId).question
	                .length; i++) {
	                var number_answer = '<b>-</b>';
	                number_question++;
	                var question_id = this.catchTestById(testId).question[
	                    i].id
	                content +=
	                    '<div class="row well"><div class="col-lg-1 col-xs-1 text-justify">' +
	                    number_question + '. ' +
	                    '</div><div class="col-lg-11 col-xs-11 text-justify testDouble" forLocalstorage="Model.date.Tests[' +
	                    Model.date.Tests.indexOf(this.catchTestById(
	                        testId)) + '].question[' + i + '].text">' +
	                    this.catchTestById(testId).question[i].text +
	                    '</div>';
	                for (var j = 0; j < this.catchTestById(testId).answers
	                    .length; j++) {
	                    //number_answer++;
	                    if (this.catchTestById(testId).answers[j].question_id ==
	                        question_id) {
	                        content +=
	                            '<div class="col-xs-1 col-xs-offset-2 col-lg-1 col-lg-offset-2 ">' +
	                            number_answer + '</div>' +
	                            '<div class="col-lg-9 col-xs-9 text-justify testDouble" forLocalstorage="Model.date.Tests[' +
	                            Model.date.Tests.indexOf(this.catchTestById(
	                                testId)) + '].answers[' + j +
	                            '].text_answer">' + this.catchTestById(
	                                testId).answers[j].text_answer +
	                            '</div>';
	                    }
	                }
	                content += '</div>';
	            }
	            this.place_for_test.innerHTML += content;
	        },
	        listCategories: function(testId) { // method which print on page tests listCategories
	            var list_option = '';
	            for (var i = 0; i < Model.date.Tests_categories.length; i++) {
	                if (Model.date.Tests_categories[i].parent_id == 0) {
	                    if (this.catchTestById(testId).category ==
	                        Model.date.Tests_categories[i].id) {
	                        list_option += '<option value="' + Model.date
	                            .Tests_categories[i].id +
	                            '" selected>' + Model.date.Tests_categories[
	                                i].name + '</option>'
	                    } else {
	                        list_option += '<option value="' + Model.date
	                            .Tests_categories[i].id + '">' + Model
	                            .date.Tests_categories[i].name +
	                            '</option>'
	                    }
	                }
	            }
	            this.place_for_list_categories.innerHTML = list_option;
	        },
	        listSubCategories: function(testId, categoryId) { // method which print on page tests listSubCategories
	            var list_option = '';
	            var categoryId;
	            categoryId = (categoryId) ? categoryId : this.catchTestById(
	                testId).category;
	            console.log("from method-->" + categoryId);
	            for (var i = 0; i < Model.date.Tests_categories.length; i++) {
	                if (Model.date.Tests_categories[i].parent_id ==
	                    categoryId) {
	                    if (this.catchTestById(testId).subcategory ==
	                        Model.date.Tests_categories[i].id) {
	                        list_option += '<option value="' + Model.date
	                            .Tests_categories[i].id +
	                            '" selected>' + Model.date.Tests_categories[
	                                i].name + '</option>';
	                    } else {
	                        list_option += '<option value="' + Model.date
	                            .Tests_categories[i].id + '">' + Model
	                            .date.Tests_categories[i].name +
	                            '</option>'
	                    }
	                }
	            }
	            this.place_for_list_subCategories.innerHTML =
	                list_option;
	        },
	        listComments: function() { // method which print on page comments created by moderator
	            var newDiv = document.createElement('div');
	            newDiv.className =
	                "col-lg-10 col-xs-10 text-justify div-list-comments";
	            if (Model.date.comment) {
	                for (var i = 0; i < Model.date.comment.length; i++) {
	                    if (get_test_id == Model.date.comment[i].test_id) {
	                        newDiv.innerHTML += "<b>" + Model.date.comment[
	                                i].comment + "</b><br />" +
	                            "<div class='text-left'><i>" + Model.date
	                            .comment[i].timeCreate +
	                            " Moderator</i></div>";
	                    }
	                }
	                this.place_for_comments.insertBefore(newDiv,
	                    document.getElementById("add-comment").parentNode
	                );
	            }
	        },
	        init: function(get_test_id) { //method which call all needed  methods for generation html
	            this.listCategories(get_test_id);
	            this.listSubCategories(get_test_id);
	            this.testBody(get_test_id);
	            this.listComments();
	            this.setTags();
	            this.setDescription();
	        }

	    }
	    generateHtml.init(get_test_id); // generation html page
	    function wrote(testId, textComment) {

	        if (Model.date.Comment === undefined) {
	            Model.date.Comment = [];
	            Model.date.Comment.push({
	                comment: [],
	                Date_creation: [],
	                Test_id: testId
	            });
	            var d = new Date().getTime()
	            Model.date.Comment[0].Date_creation.push(d);
	            Model.date.Comment[0].comment.push(textComment);
	            var dublicate = true;
	            Model.save_localStorage()
	        } else {
	            for (var i = 0; i < Model.date.Comment.length; i++) {
	                if (Model.date.Comment[i].Test_id === testId) {
	                    var q = new Date().getTime()
	                    Model.date.Comment[i].Date_creation.push(q);
	                    Model.date.Comment[i].comment.push(textComment);
	                    var dublicate = true;
	                    Model.save_localStorage()
	                } else {
	                    var dublicate = false;
	                }
	            };
	        }
	        if (!dublicate) {
	            alert(dublicate)
	            Model.date.Comment.length
	            Model.date.Comment.push({
	                comment: [],
	                Date_creation: [],
	                Test_id: testId
	            });
	            var c = new Date().getTime()
	            Model.date.Comment[Model.date.Comment.length - 1].Date_creation
	                .push(c);
	            Model.date.Comment[Model.date.Comment.length - 1].comment.push(
	                textComment);
	            Model.save_localStorage()
	        };
	    }
	    var Events = {
	        content_for_edit: document.querySelectorAll('.testDouble'),
	        dblClickForEditTest: function() {
	            function insertAfter(newElement, targetElement) {
	                //target is what you want it to go after. Look for this elements parent.
	                var parent = targetElement.parentNode;

	                //if the parents lastchild is the targetElement...
	                if (parent.lastchild == targetElement) {
	                    //add the newElement after the target element.
	                    parent.appendChild(newElement);
	                } else {
	                    // else the target has siblings, insert the new element between the target and it's next sibling.
	                    parent.insertBefore(newElement,
	                        targetElement.nextSibling);
	                }
	            }
	            for (var i = 0; i < this.content_for_edit.length; i++) {
	                this.content_for_edit[i].addEventListener(
	                    'dblclick', function(e) {
	                        var that = this;
	                        if (document.querySelectorAll(
	                            '.edit-textarea').length) {
	                            return false;
	                        }
	                        console.log(e.target.tagName);
	                        if (e.target.tagName == "H3") {
	                            var editText = document.createElement(
	                                'input')
	                        } else {
	                            var editText = document.createElement(
	                                'textarea')
	                        }
	                        editText.rows = '4';
	                        editText.cols = "60";
	                        editText.className =
	                            'edit-textarea col-xs-10 col-xs-offset-1 col-lg-10 col-lg-offset-1 col-md-10 col-sm-offset-1 col-md-10 col-sm-offset-1';
	                        if (e.target.tagName == "H3") {
	                            editText.value = this.textContent;
	                        } else {
	                            editText.textContent = this.textContent;
	                        }
	                        this.style.display = "none";
	                        insertAfter(editText, this);


	                        function saveChange(e) {
	                            var test = that.getAttribute(
	                                "forLocalstorage");
	                            var globalTests = Model.date.Tests;
	                            var changeText = document.querySelectorAll(
	                                '.edit-textarea')[0].value;
	                            console.log(changeText);
	                            var e = e || window.event;
	                            var validateLength = (that.tagName ==
	                                'H3') ? 5 : 25;
	                            console.log(e.target.className);
	                            console.log(e.target.className
	                                .indexOf(
	                                    'edit-textarea'));
	                            if (e.target.className.indexOf(
	                                    'edit-textarea') &&
	                                changeText.length >
	                                validateLength) {
	                                that.style.display =
	                                    "block";
	                                document.querySelectorAll(
	                                    '.edit-textarea')[
	                                    0].parentNode.removeChild(
	                                    document.querySelectorAll(
	                                        '.edit-textarea'
	                                    )[0]);
	                                that.textContent =
	                                    changeText;
	                                eval(test + '="' +
	                                    changeText + '"');
	                                document.querySelectorAll(
	                                    'body')[0].removeEventListener(
	                                    'click',
	                                    saveChange);
	                            } else {
	                                document.querySelectorAll(
	                                        '.edit-textarea')[
	                                        0].style.border =
	                                    (changeText.length <=
	                                        validateLength) ?
	                                    'solid 1px red' : '';

	                            }
	                        }
	                        document.querySelectorAll('body')[0].addEventListener(
	                            'click', saveChange);

	                    });

	            }

	        },
	        changeCategories: function() {
	            generateHtml.place_for_list_categories.addEventListener(
	                'change', function() {
	                    generateHtml.listSubCategories(get_test_id,
	                        this.value)
	                    console.log(this.value);
	                }
	            )
	        },
	        addComents: function() {
	            document.getElementById('add-comment').addEventListener(
	                'submit', function() {
	                    var element = document.querySelectorAll(
	                        '.div-list-comments')[0];
	                    if (element) {
	                        element.parentNode.removeChild(element);
	                    }
	                    var comment = document.querySelectorAll(
	                        'textarea')[0].value;
	                    var coments;
	                    var day = new Date();
	                    var month = [];
	                    var minutes = day.getMinutes();
	                    if (minutes < 10) minutes = '0' + minutes;
	                    month[0] = "січ";
	                    month[1] = "лют";
	                    month[2] = "бер";
	                    month[3] = "кві";
	                    month[4] = "тра";
	                    month[5] = "чер";
	                    month[6] = "лип";
	                    month[7] = "сер";
	                    month[8] = "вер";
	                    month[9] = "жов";
	                    month[10] = "лис";
	                    month[11] = "гру";
	                    var timeCreateComments = day.getDate() +
	                        " " + month[day.getMonth()] + " о " +
	                        day.getHours() + ":" + minutes;
	                    console.log(Model.date.comment);
	                    /*My old
						if(!Model.date.comment){
							Model.date.comment = [];
						}				
						Model.date.comment.push({
								comment: comment,
								test_id : get_test_id,
								timeCreate: timeCreateComments
							});*/
	                    wrote(get_test_id, comment); /* call function by Sergiy*/
	                    generateHtml.catchTestById(get_test_id).category =
	                        generateHtml.place_for_list_categories
	                        .value;
	                    generateHtml.catchTestById(get_test_id).subcategory =
	                        generateHtml.place_for_list_subCategories
	                        .value;
	                    generateHtml.catchTestById(get_test_id).status =
	                        2;
	                    Events.saveTags();
	                    Events.saveDescription();
	                    Model.save_localStorage();
	                    window.location =
	                        'moderator_filtertests_nyarytc.html';

	                });
	        },
	        publicTests: function() {
	            document.getElementById('public').addEventListener(
	                'click', function() {
	                    generateHtml.catchTestById(get_test_id).status =
	                        3;
	                    console.log(generateHtml.catchTestById(
	                        get_test_id));
	                    generateHtml.catchTestById(get_test_id).category =
	                        generateHtml.place_for_list_categories
	                        .value;
	                    generateHtml.catchTestById(get_test_id).subcategory =
	                        generateHtml.place_for_list_subCategories
	                        .value;
	                    Events.saveTags();
	                    Events.saveDescription();
	                    Model.save_localStorage();
	                    window.location =
	                        'moderator_filtertests_nyarytc.html';
	                })
	        },
	        unpublicTests: function() {
	            document.getElementById('unpublic').addEventListener(
	                'click', function() {
	                    generateHtml.catchTestById(get_test_id).status =
	                        2;
	                    generateHtml.catchTestById(get_test_id).category =
	                        generateHtml.place_for_list_categories
	                        .value;
	                    generateHtml.catchTestById(get_test_id).subcategory =
	                        generateHtml.place_for_list_subCategories
	                        .value;
	                    Events.saveTags();
	                    Events.saveDescription();
	                    Model.save_localStorage();
	                    window.location =
	                        'moderator_filtertests_nyarytc.html';
	                })
	        },
	        saveTags: function() {
	            //document.getElementById('tags');
	            console.log(document.getElementById('tags').value +
	                "should be tags");
	            generateHtml.catchTestById(get_test_id).tags = [].concat(
	                document.getElementById('tags').value.split(
	                    ','));
	            console.log(generateHtml.catchTestById(get_test_id).tags);
	        },
	        saveDescription: function() {
	            generateHtml.catchTestById(get_test_id).description =
	                generateHtml.textarea_for_description.value;
	        },
	        init: function() {
	            this.dblClickForEditTest();
	            this.changeCategories();
	            this.addComents();
	            this.publicTests();
	            this.unpublicTests();
	        }


	    }
	    Events.init();




	}
