window.onload = calculate;
function calculate(){
 	var questions = document.getElementsByClassName('question').length;
 	var rightAnswers = document.getElementsByClassName('blockcolor').length;
 	var correctPercentage = (rightAnswers *100)/ questions;
 	var rightEl = document.getElementById('right');
 	var wrongEl = document.getElementById('wrong');
 	var total = document.getElementById('total');
 	total.innerHTML = rightAnswers + '/' + questions;
 	rightEl.style.width = correctPercentage + '%';
	wrongEl.style.width = (100 - correctPercentage) + '%';
 }

 
 	var answerArray = {};
 	answerArray = JSON.parse(localStorage.QuestionObject);
 	var resulttext = document.getElementsByClassName('result');
 		for( i = 0; i < resulttext.length; i++){
 			resulttext[i].innerHTML = answerArray['question'+i];
 		};

 	var TestStructure = function(testNum){

 		var num = document.getElementsByClassName('questiontext');
 		var rightanswer = document.getElementsByClassName('true')
 			for(var i = 0; i < Tests[testNum].question.length; i++){
 				num[i].innerHTML = Tests[testNum].question[i].text;
 				for (var j = 0; j < Tests[testNum].correct_answers.length; i++) {
 					rightanswer[i].innerHTML = Tests[testNum].answer_id.text;
 				};
};
};
