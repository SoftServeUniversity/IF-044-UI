'use strict'

function FaqController (options) {
	var self = this;
	var container = options.container;
	var faqs = Model.date.Faqs;
	parseFaqModel();

	function createFaqBlock(faqsObj) {
		var questionInner = faqsObj.question;
		var answerInner = faqsObj.answer;
		var questionBlock = document.createElement('h4');
		questionBlock.setAttribute('data-obj', faqsObj.id);
		var answerBlock = document.createElement('p');
		var answerWrapp = document.createElement('div');
		answerWrapp.setAttribute('data-obj', faqsObj.id);
		answerBlock.setAttribute('data-obj', faqsObj.id);
		questionBlock.innerHTML = questionInner;
		answerBlock.innerHTML = answerInner;
		answerWrapp.appendChild(answerBlock);
		container.appendChild(questionBlock);
		container.appendChild(answerWrapp);
	}

	function parseFaqModel() {
		for(var i = 0; i < faqs.length; i++) {
			createFaqBlock(faqs[i]);
		};
	}

	this.saveFaq = function(obj) {
		var index = obj.faqObjIndex;
		var question = obj.question;
		var answer = obj.answer;

		for(var i = 0; i<faqs.length; i++) {
			if(faqs[i].id === index) {
				if(question){
					faqs[i].question = question;
				};
				if(answer) {
					faqs[i].answer = answer;
				};
			};
		};

		Model.save_localStorage();
	}

	this.deleteFaq = function() {

	}
}
