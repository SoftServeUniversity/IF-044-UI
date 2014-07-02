function commentCreate(id_test) {

    document.getElementById('commentPlace').innerHTML = '';

    for (var i = 0; i < Model.date.Comment.length; i++) {

        if (Model.date.Comment[i].Test_id == id_test) {
            var div = document.createElement('div');
            div.className = 'col-lg-10 col-xs-10 text-justify div-list-comments';
            div.innerHTML = '<b id="comment"></b><div class="text-left"><i id="comment_date"></i></div>'
            document.getElementById('commentPlace').appendChild(div)
            document.getElementById('comment').innerHTML = Model.date.Comment[i].comment[Model.date.Comment[i].comment.length - 1];
            var date = new Date(Model.date.Comment[i].Date_creation[Model.date.Comment[i].Date_creation.length - 1]);
            document.getElementById('comment_date').innerHTML = date.toLocaleString();
        };
    };

}

function showAll(id_test) {

    document.getElementById('commentPlace').innerHTML = '';

    for (var i = 0; i < Model.date.Comment.length; i++) {

        if (Model.date.Comment[i].Test_id == id_test) {

            for (var j = 0; j < Model.date.Comment[i].comment.length; j++) {
                var div = document.createElement('div');
                div.className = 'col-lg-10 col-xs-10 text-justify div-list-comments';
                div.innerHTML = '<b id="comment' + j + '"></b><div class="text-left"><i id="comment_date' + j + '"></i></div>'
                document.getElementById('commentPlace').appendChild(div)
                var date = new Date(Model.date.Comment[i].Date_creation[j]);
                document.getElementById("comment" + j + "").innerHTML = Model.date.Comment[i].comment[j];
                document.getElementById('comment_date' + j + '').innerHTML += date.toLocaleString();
            };


        };

    };
}

function changeAll(el) {
    el.className = "btn btn-primary btn-xs pull-left ";
    el.parentElement.children[1].className = "btn btn-default btn-xs pull-left ";
    showAll(test.id)

}

function changeLast(el) {
    el.className = "btn btn-primary btn-xs pull-left";
    el.parentElement.children[2].className = "btn btn-default btn-xs pull-left ";
    commentCreate(test.id);
}
window.onload = commentCreate(test.id)
