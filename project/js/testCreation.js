'use strict'

var questionAdd = function(el){ //фунткція додає нове запитання до списку
var mat = '<div class="col-lg-11 col-md-11"> <div class="form-group"> <label> <h4>Запитання</h4> </label> <button class="btn btn-danger btn-xs" > <span class="glyphicon glyphicon-minus"></span> </button> <br> <textarea placeholder="Запитання" class="textarea quest"></textarea> </div> </div> <div class="col-lg-11 col-md-11"> <div class="form-group"> <label >Відповідь 1</label> <button class="btn btn-danger btn-xs" title="Видалити відповідь"> <span class="glyphicon glyphicon-minus"></span> </button> <button class="btn btn-default btn-xs" title="Правильна відповідь" onClick="rightAnswer(this)"> <span class="glyphicon glyphicon-ok"></span> </button> <br> <textarea placeholder="Відповідь" class="textarea answer"></textarea> </div> <div class="form-group"> <label >Відповідь 2</label> <button class="btn btn-success btn-xs" onClick="ansadd(this)" title="Додати відповідь"> <span class="glyphicon glyphicon-plus"></span> </button> <button class="btn btn-default btn-xs" title="Правильна відповідь" onClick="rightAnswer(this)"> <span class="glyphicon glyphicon-ok"></span> </button> <br> <textarea placeholder="Відповідь" class="textarea answer"></textarea> </div> </div>';
var newdiv = document.createElement('div');
newdiv.innerHTML = mat;
el.parentNode.insertBefore(newdiv, el) ;

}

var ansadd = function(el){	//функція додає нову відповідь в запитанні
	
	if (el.childNodes[1].className === 'glyphicon glyphicon-plus') { //умова перевіряє чи був натиск на кнопці +
	var ans = el.parentNode.innerHTML;
	var newdiv = document.createElement('div');
	newdiv.className = 'form-group lastq'
	newdiv.innerHTML = ans;
	el.parentNode.parentNode.appendChild(newdiv);
	el.childNodes[1].className = "glyphicon glyphicon-minus";
	el.className = 'btn btn-danger btn-xs';
	el.parentNode.className = 'form-group';
	}
	else {
		return false;
	}
}

var rightAnswer = function(el){//відмічаються правильні відповіді
	if (el.className === 'btn btn-default btn-xs') {
		el.className = 'btn btn-success btn-xs rightAnswer'
	}
	else{
		el.className = 'btn btn-default btn-xs'
	}
}

var formTest = function(){//формування результату
var	Tests = {};
Tests.question = [];
Tests.answer = [];
 var question = document.getElementsByClassName('quest');
var answers = document.getElementsByClassName('answer');
 for (var i = 0; i < question.length; i++) {
 	if (question[i].value === "") {
 		alert('Заповніть всі поля!')
 		break;
 	} else {
Tests.question.push({});
Tests.question[i].text = question[i].value;
Tests.question[i].id = i+1;
for (var j = 0; j < answers.length; j++) {
	if (answers[j].value === "") {
 		alert('Заповніть всі поля!')
 		break;
 	} else {
Tests.answer.push({});
Tests.answer[j].id = j+1;
Tests.answer[j].question_id = i+1;
Tests.answer[j].text = answers[j].value;
 	}
	};
 	}

 };
 console.log(Tests);
}