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

document.getElementById('answerpanel').innerHTML = "";
var place_for_answer = document.getElementById('answerpanel');
console.log(place_for_answer);

	function getCorrectAnswerByQuestionId(test_id, correct_answer_id){
		for(var i = 0;i<Model.date.Tests[0].answers.length;i++){
				if(Model.date.Tests[0].answers[i].id == correct_answer_id){
					var catchCorrectAnswer = Model.date.Tests[0].answers[i].text_answer;
					console.log(Model.date.Tests[0].answers[i].id+"<->"+correct_answer_id);
				}
				else{
				}
				console.log(catchCorrectAnswer);
		}	
		return catchCorrectAnswer;
	}

	function showAll(){
		var answerArray = JSON.parse(localStorage.QuestionObject);
		console.log(Model.date.Tests[0].question.length);

		var content_place = '';
		Model.load_localStorage();
		var number_question = 1;
		 for(var i = 0; i < Model.date.Tests[0].question.length; i++){
		 	for(var j = 0;j<Model.date.Tests[0].correct_answer.length;j++){
		 		if(Model.date.Tests[0].correct_answer[j].question_id == Model.date.Tests[0].question[i].id){
		 			var correct_answer_id = Model.date.Tests[0].correct_answer[j].answer_id;
		 			//console.log(correct_answer_id);
		 		}
		 	}

		 	content_place += "<div class='col-xs-12 blockcolor'><div class='col-xs-12 question'><strong>"+number_question+++"<span class='questiontext'>"+Model.date.Tests[0].question[i].text+"</span></strong></div></div><div class='col-xs-12 answer'><strong>Відповідь:<span class='result'>"+answerArray['question'+i]+"</span></strong></div><div class='col-xs-12 right-answer'><strong>Правильна відповідь:<span class='true'>"+getCorrectAnswerByQuestionId(0, correct_answer_id)+"</span></strong></div>"
		 }
		 place_for_answer.innerHTML = content_place;
	}
	showAll();

//  	var answerArray = {};
//  	answerArray = JSON.parse(localStorage.QuestionObject);
//  	var resulttext = document.getElementsByClassName('result');
//  		for( i = 0; i < resulttext.length; i++){
//  			resulttext[i].innerHTML = answerArray['question'+i];
//  		};


//  	var TestStructure = function(testNum){
//  	var testNum = 1;
 	
//  		var num = document.getElementsByClassName('questiontext');
//  		var rightanswer = document.getElementsByClassName('true')
//  			for(var i = 0; i < Tests[testNum].question.length; i++){
//  				num[i].innerHTML = Tests[testNum].question[i].text;
//  				for (var j = 0; j < Tests[testNum].correct_answers.length; i++) {
//  					rightanswer[i].innerHTML = Tests[testNum].answer_id.text;
//  				};
// };
// };
