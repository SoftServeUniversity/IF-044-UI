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
