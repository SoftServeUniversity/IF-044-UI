window.onload = calculate;
function calculate(){
 	var questions = document.getElementsByClassName('question').length;
 	var b = 100/questions;
 	var h = Math.round(b);
 	var rightAnswers = document.getElementsByClassName('blockcolor').length;
 	var result = rightAnswers*h;
 	var correctPercentage = (rightAnswers *100)/ questions;
 	var rightEl = document.getElementById('right');
 	var wrongEl = document.getElementById('wrong');
 	var total = document.getElementById('total');
 	total.innerHTML = result + ' з ' + 100;
 	rightEl.style.width = correctPercentage + '%';
	wrongEl.style.width = (100 - correctPercentage) + '%';
 }

document.getElementById('answerpanel').innerHTML = "";
var place_for_answer = document.getElementById('answerpanel');
//console.log(place_for_answer);
var answerArray = JSON.parse(localStorage.QuestionObject);

	function getCorrectAnswerByQuestionId(test_id, correct_answer_id){
		for(var i = 0; i<Model.date.Tests[0].answers.length; i++){
				if(Model.date.Tests[0].answers[i].id == correct_answer_id){
					var catchCorrectAnswer = Model.date.Tests[0].answers[i].text_answer;
					console.log(Model.date.Tests[0].answers[i].id+"<->"+correct_answer_id);
				}
				else{
				}
				//console.log(catchCorrectAnswer);
				// if (catchCorrectAnswer == answerArray['question'+i]) {
				// 	var val = answerArray['question'+i];
				// 	console.log(val);

				// };
		}	
		return catchCorrectAnswer;
	}

	function ChooseCorrectAnswer(test_id, correct_answer_id){
		for(var l = 0; l < Model.date.Tests[0].question.length; l++){
			for(var i = 0; i<Model.date.Tests[0].answers.length; i++){
						if(Model.date.Tests[0].answers[i].id == correct_answer_id){
							var ChooseCorrectAnswer = Model.date.Tests[0].answers[i].text_answer;
							if (ChooseCorrectAnswer == answerArray['question'+l]) {
								var color = 'blockcolor';
								console.log(color);
							}
							else{
								var color = 'blockcolorwrong';
								console.log(color);
							}
							//console.log(Model.date.Tests[0].answers[i].id+"<->"+correct_answer_id);
						}
						else{
						
						}
						//console.log(catchCorrectAnswer);
						
				}	
				
			}
			return color;
		}

	function showAll(){
		//console.log(Model.date.Tests[0].question.length);

		var content_place = '';
		Model.load_localStorage();
		var number_question = 1;
		 for(var i = 0; i < Model.date.Tests[0].question.length; i++){
		 	for(var j = 0; j < Model.date.Tests[0].correct_answer.length; j++){
		 		if(Model.date.Tests[0].correct_answer[j].question_id == Model.date.Tests[0].question[i].id){
		 			var correct_answer_id = Model.date.Tests[0].correct_answer[j].answer_id;
		 			//console.log(correct_answer_id);
		 		}

		 	}
		 	// getCorrectAnswerByQuestionId(0, correct_answer_id);
				// if (catchCorrectAnswer == answerArray['question'+i]) {
				// 	var color = blockcolor;}
				// 	else{
				// 		var color = blockcolor_wrong;
				// 	}
					

		 	content_place += "<div class='col-xs-12 "+ChooseCorrectAnswer(0, correct_answer_id)+"'><div class='col-xs-12 question'><strong>"+number_question+++('. ')+"<span class='questiontext'>"+Model.date.Tests[0].question[i].text+"</span></strong></div><div class='col-xs-12 answer'><strong>Відповідь: </strong><span class='result'>"+answerArray['question'+i]+"</span></div><div class='col-xs-12 right-answer'><strong>Правильна відповідь: </strong><span class='true'>"+getCorrectAnswerByQuestionId(0, correct_answer_id)+"</span></div><div class='more-about'><strong>Пояснення: </strong><span>"+Model.date.Tests[0].description+"</span></div></div>"
		 }
		 place_for_answer.innerHTML = content_place;
	}
	showAll();

	function pass_again(){
		localStorage.clear();
		window.location='Test.html?id=1'
	}

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
