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
		var answerBlock = document.createElement('p');
		var answerWrapp = document.createElement('div');
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

	this.saveFaq = function() {}

	this.editFaq = function() {}

	this.delateFaq = function() {}
}