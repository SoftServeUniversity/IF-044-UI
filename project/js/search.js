var ri = 0;

function searchTests () {
    if (Model.date.session_user_role == 2) {
        if (document.getElementById('All').checked == true) {
            console.log(ri);
            if (ri > 0) {
                deletetabRows();
            }
            var row;
            var cell = [];
            var tableId = "search-table";
            var table = document.getElementById(tableId);


            var numberOfRow = 1;
            for (var i = 0; i < Model.date.Tests.length; i++) {
                var numberOfCell = 0;
                var categoryId = Model.date.Tests_categories[Model.date.Tests[i].subcategory - 1].parent_id;
                console.log(categoryId);
                //var cell [];
                row = table.insertRow(numberOfRow);
                cell[numberOfCell] = row.insertCell(numberOfCell);
                cell[numberOfCell].innerHTML = Model.date.Tests[i].name;
                numberOfCell += 1;

                cell[numberOfCell] = row.insertCell(numberOfCell);
                cell[numberOfCell].innerHTML = Model.date.Tests_categories[categoryId - 1].name;
                numberOfCell += 1;

                cell[numberOfCell] = row.insertCell(numberOfCell);
                cell[numberOfCell].innerHTML = Model.date.Tests_categories[Model.date.Tests[i].subcategory - 1].name;
                numberOfCell += 1;


                cell[numberOfCell] = row.insertCell(numberOfCell);
                cell[numberOfCell].innerHTML = '<div><button  class="sendToModerator" data-testid="' + Model.date.Tests[i].id + '" onclick="toGo(this)">Редагувати</button></div>';
                //'<a href="moderatrPage.html">Редагувати</a>';
                numberOfCell += 1;

                cell[numberOfCell] = row.insertCell(numberOfCell);
                cell[numberOfCell].innerHTML = '<div><button  class="btn-danger btn-xs" data-row-number="' + numberOfCell + '" onclick="deleteTrin(this)" >ВИДАЛИТИ</button></div>';
                numberOfRow = numberOfRow + 1;
                //console.log(numberOfRow);


                /*var buttons_send_moderator = document.querySelector('.sendToModerator');
                 console.log(buttons_send_moderator);
                 buttons_send_moderator.addEventListener('click',);
                 for (var f = 0; f < buttons_send_moderator.length; f++) {
                 console.log(buttons_send_moderator[f]);
                 ;

                 }
                 //   console.log(Model.date.Tests.length);*/
                ri = Model.date.Tests.length;
            }

        }
    } else {
        var s = document.getElementById("no-login").innerHTML = "НЕМАЄ ПРАВ МОДЕРАТОРА";
        console.log(s);

    }
}


function toGo(element) {
    var test_id = element
    console.log(test_id);
    var t_id = test_id.dataset.testid;
    console.log(Model.date);
    console.log(typeof Model.date);
    Model.date.Moderator_test_id=t_id;
    Model.save_localStorage();
    //Model.date.Moderator_test_id
   // localStorage.setItem("note", Moderator_test_id);

    //Model.save_localStorage();
   // var t_id = localStorage.getItem('note');
    console.log(t_id);
    window.location = "moderatrPage.html";
}

function deletetabRows() {
    var tableId = "search-table";
    var table = document.getElementById(tableId);
    console.log(ri + "World");
    for (var h = 1; h <= ri; h++) {
        table.deleteRow(1);
    }
    ri = 0;
}

function appFilter(element) {
    var tableId = "search-table"
    var table = document.getElementById(tableId);
    var h =0;
    var found = [];
    var tId = "search-table"
    var table1 = document.getElementById(tId);
    if (ri > 0) {
        deletetabRows();
    }
// search by name
    if (element.value != "") {
        var row;
        var cell = [];
        var catId = Model.date.Tests_categories[Tests[0].subcategory - 1].parent_id;
        console.log(Model.date.Tests_categories[catId - 1].name);

        if (document.getElementById('radio-names').checked == true) {
            for (var i = 0; i < Model.date.Tests.length; i++) {
                if (Model.date.Tests[i].name.toString().toLowerCase().indexOf(element.value.toLowerCase()) != -1) {
                    found.push(Model.date.Tests[i]);
                    creatTable();
                }


            }
        } else if (document.getElementById('radio-categories').checked == true) {
            for (var i = 0; i < Model.date.Tests.length; i++) {
                console.log(Model.date.Tests_categories[Tests[i].subcategory - 1].name);
                if (Model.date.Tests_categories[catId - 1].name.toString().toLowerCase().indexOf(element.value.toLowerCase()) != -1) {
                    //found.push(Model.date.Tests[i]);
                    creatTable();

                }

            }
        } else {
            for (var i = 0; i < Model.date.Tests.length; i++) {
                if (Model.date.Tests_categories[Tests[i].subcategory - 1].name.toString().toLowerCase().indexOf(element.value.toLowerCase()) != -1) {
                    found.push(Model.date.Tests[i]);
                    creatTable();
                }
            }
        }
    } else {
        console.log("empty");
    }


    function deleteTableRows () {

        console.log(ri + "World");
        var h;
        for (h = 1; h <= ri; h++){table.deleteRow(1);}
        ri = 0;
    }

    function creatTable() {
        var numberOfRow = 1;
        var numberOfCell = 0;
        var categoryId = Model.date.Tests_categories[Tests[i].subcategory-1].parent_id;
        console.log(categoryId);
        row = table.insertRow(numberOfRow);

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = Model.date.Tests[i].name;
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = Model.date.Tests_categories[categoryId-1].name;
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = Model.date.Tests_categories[Tests[i].subcategory-1].name;
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = '<div><button  class="sendToModerator"   onclick="toGo(+ Model.date.Tests[i].id +)">Редагувати</button></div>';
        //testId="' + Model.date.Tests[i].id + '"
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = '<div><button class="btn-danger btn-xs" data-rownumber="' + numberOfCell + '" onclick="deleteTrin(this)" >ВИДАЛИТИ</button></div>';
        console.log("Знайшов on name - " + Model.date.Tests[i].name);
        ri = ri +  1;
        function toGo () {
            console.log('mu tyt');
            //Model.date.Moderator_test_edit = ;
            //Model.save_localStorage()
        }

        return ri;
    }

}

;




function deleteTrin(element) {
    var parentRow = getParentTr(element);
    var currentTestNameCol = null;
    var currentTestName = "";
    for (var i = 0; i < parentRow.childNodes.length; i++) {
        if (parentRow.childNodes[i].className == "test-name-col") {
            currentTestNameCol = parentRow.childNodes[i];
            for (var j = 0; j < currentTestNameCol.childNodes.length; j++) {
                if (currentTestNameCol.childNodes[j].className == "test-name") {
                    currentTestName = currentTestNameCol.childNodes[j].text;
                    break;
                }
            }
            break;
        }
    }

    document.getElementById("test-to-remove").textContent = currentTestName;
    document.getElementById('accept-remove-test').onclick = function() {
        document.getElementById("search-table").deleteRow(parentRow.rowIndex);
        $("#remove-dialog").modal("hide");
    }
    $("#remove-dialog").modal();
    ri= ri -1;
}

function getParentTr(removeButton) {
    var n = removeButton;
    do {
        n = n.parentNode;
        if (n.tagName == 'TR') {
            return n;
        }
        if (n.tagName =='BODY') {return undefined; }
    } while (true)
}


