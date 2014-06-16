function makePage() {

    console.log(Model.date.Moderator_test_id);
    if (document.getElementById('userMenuButton').textContent){
        console.log(Model.date.session_user_id);
        //document.getElementById('username1').innerHTML = document.getElementById('userMenuButton').textContent;
        var row;
        var cell = [];
        var tableId = "s1";
        var table = document.getElementById(tableId);
        var Moderator_test_edit;

        var numberOfRow = 1;
        for (var i = 0; i < Model.date.Tests.length; i++) {
            var numberOfCell = 0;
            if (Model.date.Tests[i].status.id == 1){
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
        }
        var firstname = Model.date.Users[Model.date.session_user_id].firstName
        var lastname = Model.date.Users[Model.date.session_user_id].lastName;
        document.getElementById('username1').innerHTML = firstname + " " + lastname;


    }
    else {document.getElementById('username1').innerHTML = "Авторизуйтесь";} ;

}



