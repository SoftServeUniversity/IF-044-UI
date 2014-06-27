function makePage() {
    var firstname = Model.date.Users[Model.date.session_user_id].firstName
    var lastname = Model.date.Users[Model.date.session_user_id].lastName;
    document.getElementById('username2').innerHTML = firstname + " " + lastname;


    if (document.getElementById('userMenuButton').textContent){
        for (var i = 0; i < Model.date.Tests.length; i++) {
            if (Model.date.Tests[i].status.id == 1){
                listOfPassedTests(i);
            }
        }

        for (var j = 0; j < Model.date.Result.length; j++) {
            if (Model.date.session_user_id == Model.date.Result[j].u_id ){
                lastPassedTests(j);
            }
        }
    }
    else {document.getElementById('username1').innerHTML = "Авторизуйтесь";} ;

    function listOfPassedTests(index1){
        var row;
        var cell = [];
        var tableId = "s1";
        var table = document.getElementById(tableId);
        var numberOfRow = 1;
        var numberOfCell = 0;
        var i = index1;

        row = table.insertRow(numberOfRow);
        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = Model.date.Tests[i].name ;
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = i+2;
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = i+3;

        numberOfRow = numberOfRow + 1;

    }
    function lastPassedTests(index) {
        var row;
        var cell = [];
        console.log(Model.date.Result.length);
        var tableId = "s2";
        var table = document.getElementById(tableId);
        var numberOfRow = 1;
        var numberOfCell = 0;
        var j = index;
        row = table.insertRow(numberOfRow);

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = Model.date.Result[j].name ;
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        var passed_date = new Date(Model.date.Result[j].passed_date);
        cell[numberOfCell].innerHTML = passed_date;
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = Model.date.Result[j].score;

        numberOfRow = numberOfRow + 1;
    }

}



