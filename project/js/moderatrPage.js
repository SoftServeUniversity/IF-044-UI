	if(Model.date.Moderator_test_id){
		//var get_test_id = Model.date.Moderator_test_id;
		var get_test_id = Model.date.Moderator_test_id;
	}else{
		//var currentIndexTest = Math.floor(Math.random() * ((Tests.length-1)+ 1));
		var get_test_id = 2;
    }
window.onload = function() {
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
var generateHtml = {
	place_for_test: document.querySelectorAll('.content-test')[0],
	place_for_list_categories: document.getElementById('listCategories'),	
    place_for_list_subCategories: document.getElementById('listSubCategories'),
	place_for_comments: document.querySelectorAll('.place_for_comment')[0],
	catchTestById: function(testId){
		for(var i = 0;i<Model.date.Tests.length;i++){
			if(Model.date.Tests[i].id == testId){
				var catchTest = Model.date.Tests[i];
				break;
			}
		}
		return catchTest;
	},
	testBody: function(testId){
		var content = '';
		content += '<h3 class="title-post-name col-xs-12 edit-content testDouble" style="float: none" forLocalstorage="Model.date.Tests['+Model.date.Tests.indexOf(this.catchTestById(testId))+'].name">' + this.catchTestById(testId).name + '</h3>';
		var number_question = 0;
		for (var i = 0; i < this.catchTestById(testId).question.length; i++) {
			var number_answer = 0;
			number_question++;
			var question_id = this.catchTestById(testId).question[i].id
			content += '<div class="row well"><div class="col-lg-1 text-justify">' + number_question + '. ' + '</div><div class="col-lg-11 text-justify testDouble" forLocalstorage="Model.date.Tests['+Model.date.Tests.indexOf(this.catchTestById(testId))+'].question[' + i + '].text">' + this.catchTestById(testId).question[i].text + '</div>';
			for (var j = 0; j < this.catchTestById(testId).answers.length; j++) {
				number_answer++;
				if (this.catchTestById(testId).answers[j].question_id == question_id) {
					content += '<div class="col-lg-1 col-lg-offset-2">' + number_answer + ') ' + '</div>' + '<div class="col-lg-9 text-justify testDouble" forLocalstorage="Model.date.Tests['+Model.date.Tests.indexOf(this.catchTestById(testId))+'].answers[' + j + '].text_answer">' + this.catchTestById(testId).answers[j].text_answer + '</div>';
				}
			}
			content += '</div>';
		}
		this.place_for_test.innerHTML += content;
	},
	listCategories: function(testId){
		var list_option = '';
		for(var i = 0;i<Model.date.Tests_categories.length;i++){
			if(Model.date.Tests_categories[i].parent_id == 0){
				if(this.catchTestById(testId).category == Model.date.Tests_categories[i].id){
					list_option+='<option value="'+Model.date.Tests_categories[i].id+'" selected>'+Model.date.Tests_categories[i].name+'</option>'
				}else{
					list_option+='<option value="'+Model.date.Tests_categories[i].id+'">'+Model.date.Tests_categories[i].name+'</option>'
				}
			}
		}
		this.place_for_list_categories.innerHTML = list_option;
	},
	listSubCategories: function(testId, categoryId){
		var list_option = '';
		var categoryId;
		categoryId = (categoryId)?categoryId:this.catchTestById(testId).category;
		console.log("from method-->"+categoryId);
		for(var i = 0;i<Model.date.Tests_categories.length;i++){
			if(Model.date.Tests_categories[i].parent_id == categoryId){
				if(this.catchTestById(testId).subcategory == Model.date.Tests_categories[i].id){
					list_option+='<option value="'+Model.date.Tests_categories[i].id+'" selected>'+Model.date.Tests_categories[i].name+'</option>';
				}else{
						list_option+='<option value="'+Model.date.Tests_categories[i].id+'">'+Model.date.Tests_categories[i].name+'</option>'
				}
			}
		}
		this.place_for_list_subCategories.innerHTML = list_option;
	},
	listComments: function(){
		var newDiv = document.createElement('div');
		newDiv.className = "col-lg-10 text-justify div-list-comments";
		if (Model.date.comment) {
			for (var i = 0; i < Model.date.comment.length; i++) {
				if(get_test_id == Model.date.comment[i].test_id){
					newDiv.innerHTML += "<b>" + Model.date.comment[i].comment + "</b><br />" + "<div class='text-left'><i>" + Model.date.comment[i].timeCreate + " Moderator</i></div>";
				}
			}
			this.place_for_comments.insertBefore(newDiv, document.getElementById("add-comment").parentNode);
		}
	},
	init: function(get_test_id){
		this.listCategories(get_test_id);
		this.listSubCategories(get_test_id);
		this.testBody(get_test_id);
		this.listComments();
	}
	
} 
//------------------------------------------------------------------------------------------------------------------------------------

    Tests = Model.date.Tests;
	generateHtml.init(get_test_id);
var Events = {
	content_for_edit: document.querySelectorAll('.testDouble'),
    dblClickForEditTest: function(){		
			for (var i = 0; i < this.content_for_edit.length; i++) {
				this.content_for_edit[i].addEventListener('dblclick', function() {
					var that = this;
					if(document.querySelectorAll('.edit-textarea').length){
						return false;
					}
					var editText = document.createElement('textarea')
					editText.rows = '4';
					editText.cols = "60";
					editText.className = 'edit-textarea';
					editText.textContent = this.textContent;
						this.style.display="none";
						insertAfter(editText, this);
					

					function saveChange(e) {
						var test = that.getAttribute("forLocalstorage");
						var globalTests = Model.date.Tests;
						var changeText = document.querySelectorAll('.edit-textarea')[0].value;
						console.log(changeText);
						var e = e||window.event;
						var validateLength = (that.tagName == 'H3')?5:25;
						if (e.target.className !== 'edit-textarea' && changeText.length>validateLength) {
							that.style.display="block";
							document.querySelectorAll('.edit-textarea')[0].parentNode.removeChild(document.querySelectorAll('.edit-textarea')[0]);
							that.textContent = changeText;
							eval(test + '="' + changeText + '"');
							//Model.save_localStorage();
							  
							
							document.querySelectorAll('body')[0].removeEventListener('click', saveChange);
						}else{
							document.querySelectorAll('.edit-textarea')[0].style.border=(changeText.length<=validateLength)?'solid 1px red': '' ;
						   
						}
					}
					document.querySelectorAll('body')[0].addEventListener('click', saveChange);

				});

			}
		
	},
	changeCategories: function(){
		generateHtml.place_for_list_categories.addEventListener('change',function(){
					generateHtml.listSubCategories(get_test_id,this.value)
					console.log(this.value);
				}
			)
	},
	addComents: function(){
		document.getElementById('add-comment').addEventListener('submit',function(){
				var element = document.querySelectorAll('.div-list-comments')[0];
				if(element){
					element.parentNode.removeChild(element);
				}
				var comment = document.querySelectorAll('textarea')[0].value;
				var coments;
				var day = new Date();
				var month = [];
				month[0] = "січ"; month[1] = "лют";  month[2] = "бер";  month[3] = "кві"; month[4] = "тра"; month[5] = "чер"; month[6] = "лип"; month[7] = "сер"; month[8] = "вер"; month[9] = "жов"; month[10] = "лис"; month[11] = "гру";
				var timeCreateComments = day.getDate() + " " + month[day.getMonth()] + " о " + day.getHours() + ":" + day.getMinutes();
				console.log(Model.date.comment);
				if(!Model.date.comment){
					Model.date.comment = [];
				}				
				Model.date.comment.push({
						comment: comment,
						test_id : get_test_id,
						timeCreate: timeCreateComments
					});
							generateHtml.listComments();
						
					});
	}

}
	Events.dblClickForEditTest();	
	Events.changeCategories();	
	Events.addComents();	
//------------------------------------------------------------------------------------------------------------------------   
    document.getElementById('public1').addEventListener('click',function(){
        generateHtml.catchTestById(get_test_id).status = 4;
		console.log(generateHtml.catchTestById(get_test_id));
		generateHtml.catchTestById(get_test_id).category = generateHtml.place_for_list_categories.value;
		generateHtml.catchTestById(get_test_id).subcategory = generateHtml.place_for_list_subCategories.value;
		Model.save_localStorage();
		
		history.back();
    })
    document.getElementById('public0').addEventListener('click',function(){
		generateHtml.catchTestById(get_test_id).status = 0;
		generateHtml.catchTestById(get_test_id).category = generateHtml.place_for_list_categories.value;
		generateHtml.catchTestById(get_test_id).subcategory = generateHtml.place_for_list_subCategories.value;		
		Model.save_localStorage();
		history.back();
    })    

}