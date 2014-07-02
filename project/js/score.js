window.onload = calculate;

function calculate() {
    var questions = document.getElementsByClassName('question').length;
    var b = 100 / questions;
    var h = Math.round(b);
    var result;
    var rightAnswers = document.getElementsByClassName('blockcolor').length;
    if (rightAnswers != questions) {
        result = rightAnswers * h;
    } else {
        result = rightAnswers * b;
    }
    var correctPercentage = (rightAnswers * 100) / questions;
    var rightEl = document.getElementById('right');
    var wrongEl = document.getElementById('wrong');
    var total = document.getElementById('total');
    total.innerHTML = result + ' зі ' + 100;
    rightEl.style.width = correctPercentage + '%';
    wrongEl.style.width = (100 - correctPercentage) + '%';
}

document.getElementById('answerpanel').innerHTML = "";
var place_for_answer = document.getElementById('answerpanel');
//console.log(place_for_answer);
var answerArray = JSON.parse(localStorage.QuestionObject);

// test id starts with 1, but array elements start with 0
var n = answerArray.Test_id - 1;

function getCorrectAnswerByQuestionId(test_id, correct_answer_id) {

    for (var i = 0; i < Model.date.Tests[n].answers.length; i++) {
        if (Model.date.Tests[n].answers[i].id == correct_answer_id) {
            var catchCorrectAnswer = Model.date.Tests[n].answers[i].text_answer;
            console.log(Model.date.Tests[n].answers[i].id + "<->" +
                correct_answer_id);
        } else {}

    }
    return catchCorrectAnswer;
}

function ChooseCorrectAnswer(test_id, correct_answer_id) {

    console.log(answerArray.length);

    document.getElementById('name_for_test').innerHTML = Model.date.Tests[n].name;
    var categoty;
    var subcategory;
    for (var i = 0; i < Model.date.Tests_categories.length; i++) {
        if (Model.date.Tests[n].category == Model.date.Tests_categories[i].id) {
            categoty = Model.date.Tests_categories[i].name;
        } else {
            if (Model.date.Tests[n].subcategory == Model.date.Tests_categories[i].id) {
                subcategory = Model.date.Tests_categories[i].name;
            }
        }
    }

    document.getElementById('name_for_test_categoty').innerHTML = categoty;
    document.getElementById('name_for_test_subcategoty').innerHTML = subcategory;

    for (var l = 0; l < Model.date.Tests[n].question.length; l++) {
        for (var i = 0; i < Model.date.Tests[n].answers.length; i++) {
            if (Model.date.Tests[n].answers[i].id == correct_answer_id) {
                var ChooseCorrectAnswer = Model.date.Tests[n].answers[i].text_answer;

                var empty = [];
                for (var k = 0; k < Model.date.Tests[n].question.length; k++) {
                    empty.push(answerArray['question' + k][0]);
                }
                for (var x = 0; x < empty.length; x++) {
                    if (empty[x] == Model.date.Tests[n].answers[i].text_answer) {
                        var color = 'blockcolor';
                        // console.log(color);
                        break;
                    } else {
                        var color = 'blockcolorwrong';
                        // console.log(color);
                    }
                }

            } else {

            }
        }

    }
    return color;
}

function showAll() {


    var content_place = '';
    Model.load_localStorage();
    var number_question = 1;
    for (var i = 0; i < Model.date.Tests[n].question.length; i++) {
        for (var j = 0; j < Model.date.Tests[n].correct_answer.length; j++) {
            if (Model.date.Tests[n].correct_answer[j].question_id == Model.date.Tests[
                n].question[i].id) {
                var correct_answer_id = Model.date.Tests[n].correct_answer[j].answer_id;
                //console.log(correct_answer_id);
            }

        }


        content_place += "<div class='col-xs-12 " + ChooseCorrectAnswer(0, correct_answer_id) + "'>";
        content_place += "<div class='col-xs-12 question'><strong>" + number_question++;
        content_place += ('. ') + "</strong><span class='questiontext'>";
        content_place += Model.date.Tests[n].question[i].text;
        content_place += "</span></div><div class='col-xs-12 answer'>";
        content_place += "<strong>Ваша відповідь: </strong><span class='result'>";
        content_place += answerArray['question' + i];
        content_place += "</span></div>";
        content_place += "<div class='col-xs-12 right-answer'>";
        content_place += "<strong>Правильна відповідь: </strong>";
        content_place += "<span class='true'>" + getCorrectAnswerByQuestionId(0, correct_answer_id);
        content_place += "</span></div><div class='more-about'><strong>Пояснення: </strong><span>";
        content_place += Model.date.Tests[n].question[i].question_description;
        content_place += "</span></div></div>"
    }
    place_for_answer.innerHTML = content_place;
}
showAll();

function pass_again() {
    window.location = 'Test.html?id=' + (n + 1) + ''
}