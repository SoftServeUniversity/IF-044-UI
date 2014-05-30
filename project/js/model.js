// Цей об’єкт відповідає за взаємодію з базою даних.
// 
// Контрольним об’єктом у системі є об’єкт app.state,
// де лежать дані.

function Model(controll) {

    var controll_object = controll;
    // записує у контрольний об’єкт

    return function() {
        this.seed = function() {
            User.seed(controll_object)
        }

        this.save = function() {
            var temp = controll_object
            temp = JSON.strigify(temp)
            localStorage.yunak_quiz = temp
        }

        this.load = function() {
            var temp = localStorage.yunak_quiz
            temp = JSON.parse(temp)
            controll_object = temp
        }
    }
}

app.Model = new Model();