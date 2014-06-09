'use strict'

//видаляє всіх нащадків(для підкатегорій)
function removeChildren(elem) {
  try {
    elem.innerHTML = '';
  } catch(e) {
    while(elem.firstChild) { 
      elem.removeChild(elem.firstChild);
    }
  }
}


//знаходить елемент за ід
function elID(id){
return	document.getElementById(id);
}


//шаблон для вставлення відповідей
function answerPattern(answer,question,test){
	var mat = '<div class="col-sm-11" > <div class="input-group"> <input type="text" class="form-control answer" text="Application.Tests['+test+'].answers['+answer+'].text_answer" qid="Application.Tests['+test+'].answers['+answer+'].question_id" data-qid="'+question+'" aid="Application.Tests['+test+'].answers['+answer+'].id" placeholder="Відповідь" required><span class="btn input-group-addon danger" title="Видалити відповідь" onclick="answerRemove(this)"> <span class="glyphicon glyphicon-remove"></span> </span> <span class="btn input-group-addon default" title="Правильна відповідь" onclick="correctAnswer(this)"> <span class="glyphicon glyphicon-ok"></span> </span> </div> </div>'
	return mat;
}


//шаблон для вставлення питань
function answerPatternForQuestion(answer,question,test){
	var mat = '<div class="col-sm-11" > <div class="input-group"> <input type="text" class="form-control answer" text="Application.Tests['+test+'].answers['+answer+'].text_answer" qid="Application.Tests['+test+'].answers['+answer+'].question_id" data-qid="'+question+'" aid="Application.Tests['+test+'].answers['+answer+'].id" placeholder="Відповідь" required> <span class="btn input-group-addon default" title="Правильна відповідь" onclick="correctAnswer(this)"> <span class="glyphicon glyphicon-ok"></span> </span> </div> </div>'
	return mat;
}


//визначення кількості тестів в базі, для стводення останнього в кінці
function TestLength(){
	var test =  Application.Tests.length;
	return test
}


//Змінні для визначення позицій питання(i) та відповідей (j)
var i = 1;
var j = 1;

//функція додає нове запитання до списку
var questionAdd = function(el){ 
	var mat = '<div class="row col-sm-offset-1"> <label style="float:left">Питання</label> <div class="col-md-11"> <div class="input-group"> <input type="text" class="form-control question" placeholder="Відповідь" text="Application.Tests['+TestLength()+'].question['+i+'].text" aid="Application.Tests['+TestLength()+'].question['+i+'].id" required> <span class="btn input-group-addon danger" onclick="questionremove(this)" title="Видалити відповідь" > <span class="glyphicon glyphicon-remove"></span> </span> </div> </div> </div> <br> <div class="row col-md-offset-2"> <div class="col-sm-11 " > <div class="row"> '+answerPatternForQuestion((j+1),(i+1),TestLength())+' </div> <div class="row margintop"> '+answerPatternForQuestion((j+2),(i+1),TestLength())+' </div> <button type="button" class="btn btn-sm btn-success margintop" onClick="ansAdd(this)" style="float:left">Додати відповідь</button> </div> </div>'
	var newdiv = document.createElement('div');
	newdiv.className = 'col-sm-11 well';
	newdiv.innerHTML = mat;
	el.parentNode.insertBefore(newdiv, el) ;
	i++;
	j+=2;
	
}


//функція додає нову відповідь для запитання
var ansAdd = function(el){
	j++
	var qdata = parseInt(el.parentNode.childNodes[1].childNodes[1].childNodes[1].childNodes[1].getAttribute('data-qid'));
	var mat = answerPattern(j,qdata,TestLength())
	var newdiv = document.createElement('div');
	newdiv.className = 'row margintop';
	newdiv.innerHTML = mat;
	el.parentNode.insertBefore(newdiv, el) ;	
	}
	

//функція видаляє запитанння і віднімає позиції питання та всі відовіді питання
var questionremove = function(el){
	var Child = el.parentNode.parentNode.parentNode.parentNode;
	var Node = Child.parentNode;	
	Node.removeChild(Child);		
	var index = 1;
	var a = el.parentNode.parentNode.parentNode.parentNode.childNodes[4].childNodes[1].childNodes;
	for (var x = 0; x < a.length; x++) {		
		if((a[x].className === 'row') || (a[x].className === 'row margintop')){
			index++;
		}
	};
	j-=(index-1);
	i--;
	console.log(i);
}


//видаляє відповідь
var answerRemove = function (el){
	var Child = el.parentNode.parentNode.parentNode;
	var Node = Child.parentNode;
	Node.removeChild(Child);	
	j--
}


//Знаходить категорії в базі
var categoryCreation =  function (){
	for (var i = 1; i < Application.Tests_categories.length; i++) {
		
		if (Application.Tests_categories[i-1].parent_id === 0) {
			var p = document.createElement("option");
			var elem = elID('category').appendChild(p);
			elem.innerHTML = Application.Tests_categories[i-1].name;
		}
		
	}
};


//За обраною категорією заповняє підкатегорії, якщо категорія не обрана поле підкатегорії не активне
var Subcat = function(el){
if (el.value === 'Оберіть категорію') {
	elID('subCategory').disabled = true;
	
}
else {
elID('subCategory').disabled = false;
}
var category = elID('category').value;
var subCategory = elID('subCategory')
for (var i = 0; i < Application.Tests_categories.length; i++) {
	if (Application.Tests_categories[i].name === category) {		
	var subCat = Application.Tests_categories[i].getSubcategories;
	var res =  subCat((i+1));
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
var correctAnswer = function(el){
	if (el.className === 'btn input-group-addon default') 
		{el.className = 'btn input-group-addon success'}
else{el.className = 'btn input-group-addon default'}
}

//Знаходить ід категорії
function categorySearch(category){
for (var i = 0; i < Application.Tests_categories.length; i++) {
	if (Application.Tests_categories[i].name === category){
		var categoryId = Application.Tests_categories[i].id
	}
}
return categoryId;
}

//Знаходить ід підкатегорії
function subCategorySearch(subCategory){
for (var i = 0; i < Application.Tests_categories.length; i++) {
	if (Application.Tests_categories[i].name === subCategory){
		var categoryId = Application.Tests_categories[i].id
	}
}
return categoryId;
}


//заповнює категорії
 window.onload = categoryCreation();


//Збирає данні з інпутів по ід і записує їх у базу
var sendForModeration = function(){
var l = TestLength();
var category = elID('category').value;
var subcategory = elID('subCategory').value;
var newTest = {};
newTest.user_owner_id = 3;
newTest.name = elID('name').value;
newTest.description = elID('description').value;
newTest.categoryId = categorySearch(category);
newTest.subcategory = subCategorySearch(subcategory);
newTest.status = 'На модерації';
newTest.tags = elID('tags').value.split(',');
newTest.date = Date.parse(new Date());
Application.Tests.push(newTest);

//Записує питання в базу
Application.Tests[l].question = [];
var Question = document.getElementsByClassName('question');
for (var z = 0; z < Question.length; z++) {
Application.Tests[l].question.push({});
var questionPath = Question[z].getAttribute('text');
var questionId = Question[z].getAttribute('aid');
var questionText = Question[z].value;
eval(questionPath + '=" '+questionText+'"');
eval(questionId + '=" '+(z+1)+'"');
};

//записує відповіді в базу
Application.Tests[l].answers = [];
var answer = document.getElementsByClassName('answer');
for (var i = 0; i < answer.length; i++) {
	Application.Tests[l].answers.push({});
};
for (var x = 0; x < answer.length; x++) {
var answerPath = answer[x].getAttribute('text');
var answerId = answer[x].getAttribute('aid');
var questionPath = answer[x].getAttribute('qid');
var questionId = answer[x].getAttribute('data-qid');
var answerText = answer[x].value;
answer[x].setAttribute('ans-data', (x+1));
eval(answerPath + '=" '+answerText+'"');
eval(answerId + '=" '+(x+1)+'"');
eval(questionPath + '=" '+questionId+'"');
};

//записує правильні відповіді в базу
var correctAnswers = document.getElementsByClassName('btn input-group-addon success');
Application.Tests[l].correct_answer = [];
for (var i = 0; i < correctAnswers.length; i++) {
	Application.Tests[l].correct_answer.push({});
	var elem = correctAnswers[i].parentNode.childNodes[1];
	var answerId = elem.getAttribute('ans-data');
	var questionId = elem.getAttribute('data-qid');
	eval('Application.Tests[l].correct_answer[i].question_id="'+questionId+'"');
	eval('Application.Tests[l].correct_answer[i].answer_id="'+answerId+'"');
	
};
//Model.save_localStorage();
}

var saveCopy = function(){
var l = TestLength();
var category = elID('category').value;
var subcategory = elID('subCategory').value;
var newTest = {};
newTest.user_owner_id = 3;
newTest.name = elID('name').value;
newTest.description = elID('description').value;
newTest.categoryId = categorySearch(category);
newTest.subcategory = subCategorySearch(subcategory);
newTest.status = 'Чорновик';
newTest.tags = elID('tags').value.split(',');
newTest.date = Date.parse(new Date());
Application.Tests.push(newTest);

//Записує питання в базу
Application.Tests[l].question = [];
var Question = document.getElementsByClassName('question');
for (var z = 0; z < Question.length; z++) {
Application.Tests[l].question.push({});
var questionPath = Question[z].getAttribute('text');
var questionId = Question[z].getAttribute('aid');
var questionText = Question[z].value;
eval(questionPath + '=" '+questionText+'"');
eval(questionId + '=" '+(z+1)+'"');
};

//записує відповіді в базу
Application.Tests[l].answers = [];
var answer = document.getElementsByClassName('answer');
for (var i = 0; i < answer.length; i++) {
	Application.Tests[l].answers.push({});
};
for (var x = 0; x < answer.length; x++) {
var answerPath = answer[x].getAttribute('text');
var answerId = answer[x].getAttribute('aid');
var questionPath = answer[x].getAttribute('qid');
var questionId = answer[x].getAttribute('data-qid');
var answerText = answer[x].value;
answer[x].setAttribute('ans-data', (x+1));
eval(answerPath + '=" '+answerText+'"');
eval(answerId + '=" '+(x+1)+'"');
eval(questionPath + '=" '+questionId+'"');
};

//записує правильні відповіді в базу
var correctAnswers = document.getElementsByClassName('btn input-group-addon success');
Application.Tests[l].correct_answer = [];
for (var i = 0; i < correctAnswers.length; i++) {
	Application.Tests[l].correct_answer.push({});
	var elem = correctAnswers[i].parentNode.childNodes[1];
	var answerId = elem.getAttribute('ans-data');
	var questionId = elem.getAttribute('data-qid');
	eval('Application.Tests[l].correct_answer[i].question_id="'+questionId+'"');
	eval('Application.Tests[l].correct_answer[i].answer_id="'+answerId+'"');
	
};
//Model.save_localStorage();
}