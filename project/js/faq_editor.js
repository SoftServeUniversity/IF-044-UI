'use strict'

document.querySelector('#faqBox').onclick = function(e) {
	var self = this;
	var target = e.target;
	var text;
	var currFaqObjId = target.getAttribute('data-obj');
	var faqs = Model.date.Faqs;

	function transformElem(elem) {
		text = target.innerHTML;
		var inputElem = document.createElement(elem);
		inputElem.value = text;
		inputElem.setAttribute('data-obj', currFaqObjId);
		target.parentNode.insertBefore(inputElem, target);
		target.parentNode.removeChild(target);
	}

	function createButtons(buttonName, eventHandler, elemForButt) {
		var button = document.createElement('button');
		button.className = 'btn btn-primary';
		button.innerHTML = buttonName;
		button.onclick = eventHandler;
		elemForButt.parentNode.appendChild(button);
	}

	function closeEditor(e) {
		var target = e.target;
		var objId = parseInt(target.parentNode.getAttribute('data-obj'), 10);
		var currentFaqObj;
		var buttons = target.parentNode.querySelectorAll('button');

		for(var i = 0; i<faqs.length; i++) {
			if(objId === faqs[i].id) {
				currentFaqObj = faqs[i];
				break;
			};
		};

		for(var k = 0; k<buttons.length; k++) {
			buttons[k].parentNode.removeChild(buttons[k]);
		};
		
	
		var questionBlock = document.createElement('h4');
		questionBlock.setAttribute('data-obj', objId);
		var answerBlock = document.createElement('p');
		var answerWrapp = document.createElement('div');
		answerWrapp.setAttribute('data-obj', objId);
		answerBlock.setAttribute('data-obj', objId);
		questionBlock.innerHTML = currentFaqObj.question;
		answerBlock.innerHTML = currentFaqObj.answer;
		answerWrapp.appendChild(answerBlock);
		
		if(document.querySelector('#faqBox input[data-obj="'+objId+'"]')) {
			self.insertBefore(questionBlock, document.querySelector('#faqBox input[data-obj="'+objId+'"]'));
		};

		if(document.querySelector('#faqBox div[data-obj="'+objId+'"]')) {
			self.insertBefore(answerWrapp, document.querySelector('#faqBox div[data-obj="'+objId+'"]'));
		};

		if(questionBlock.nextSibling){
			if(questionBlock.nextSibling.tagName === 'INPUT') {
				questionBlock.parentNode.removeChild(questionBlock.nextSibling);
			};
		}; 

		if(answerWrapp.nextSibling){
			if(answerWrapp.nextSibling.tagName === 'DIV') {
				answerWrapp.parentNode.removeChild(answerWrapp.nextSibling);
			}; 
		};
	}

	function saveFaqChanges(e) {
		var index = parseInt(e.target.parentNode.getAttribute('data-obj'), 10);
		if(self.querySelector('input[data-obj="'+parseInt(e.target.parentNode.getAttribute('data-obj'), 10)+'"]')) {
			var questionText = self.querySelector('input[data-obj="'+parseInt(e.target.parentNode.getAttribute('data-obj'), 10)+'"]').value;
		} else {};

		if(self.querySelector('textarea[data-obj="'+parseInt(e.target.parentNode.getAttribute('data-obj'), 10)+'"]')) {	
			var answerText = self.querySelector('textarea[data-obj="'+parseInt(e.target.parentNode.getAttribute('data-obj'), 10)+'"]').value;
		} else {};
		
		faqApp.saveFaq({
			faqObjIndex: index,
			question: questionText,
			answer: answerText
		});

		closeEditor(e);
	}

	function deleteFaq() {

	}

	function checkButtonsInit(elemForButt) {
		if(!elemForButt.nextSibling) {
			createButtons('Зберегти', saveFaqChanges, elemForButt);
			createButtons('Видалити', deleteFaq, elemForButt);
			createButtons('Відміна', closeEditor, elemForButt);
		} else {
			return false
		};
	}

	if(target.tagName === 'H4') {
		transformElem('input');
		checkButtonsInit(document.querySelectorAll('[data-obj="' + currFaqObjId + '"]')
			[document.querySelectorAll('[data-obj="' + currFaqObjId + '"]').length-1]);
	} else if(target.tagName === 'P') {
		transformElem('textarea');
		checkButtonsInit(document.querySelectorAll('[data-obj="' + currFaqObjId + '"]')
			[document.querySelectorAll('[data-obj="' + currFaqObjId + '"]').length-1]);
	} else {

	};
}