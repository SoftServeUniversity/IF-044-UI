var rowCounter = 0;

function searchTests() {
    if (Model.date.session_user_role == 2) {
        var tableId = "search-table"
        var table = document.getElementById(tableId);
        if (rowCounter > 0) {
            deletetabRows();
        }
        for (var i = 0; i < Model.date.Tests.length; i++) {
            if (Model.date.Tests[i].status.id == 1 ) {creatTable(i);}
        }
    }
    else {  var noModerator = document.getElementById("no-login").innerHTML = "НЕМАЄ ПРАВ МОДЕРАТОРА"; }
}

function creatTable(index) {
    var tableId = "search-table"
    var table = document.getElementById(tableId);
    var row;
    var cell = [];
    var i = index;
    var numberOfRow = 1;
    var numberOfCell = 0;
    var categoryId = Model.date.Tests_categories[Model.date.Tests[i].subcategory-1].parent_id;
    row = table.insertRow(numberOfRow);

    cell[numberOfCell] = row.insertCell(numberOfCell);
    cell[numberOfCell].innerHTML = Model.date.Tests[i].name;
    numberOfCell += 1;

    cell[numberOfCell] = row.insertCell(numberOfCell);
    cell[numberOfCell].innerHTML = Model.date.Tests_categories[categoryId-1].name;
    numberOfCell += 1;

    cell[numberOfCell] = row.insertCell(numberOfCell);
    cell[numberOfCell].innerHTML = Model.date.Tests_categories[Model.date.Tests[i].subcategory-1].name;
    numberOfCell += 1;

    cell[numberOfCell] = row.insertCell(numberOfCell);
    cell[numberOfCell].innerHTML = '<div><button  class="btn btn-success btn-xs sendToModerator"   data-testid="' + Model.date.Tests[i].id + '" onclick="toGo(this)">Редагувати</button></div>';
    numberOfCell += 1;

    cell[numberOfCell] = row.insertCell(numberOfCell);
    cell[numberOfCell].innerHTML = '<div><button class="btn btn-danger btn-xs" data-rownumber="' + numberOfCell + '" onclick="deleteTrin(this)" >Видалити</button></div>';

    rowCounter = rowCounter +  1;

    return rowCounter;
}

function appFilter(element) {
    if (rowCounter > 0) {
        deletetabRows();
    }
    if (element.value != "") {
        if (document.getElementById('radio-names').checked == true) {
            for (var i = 0; i < Model.date.Tests.length; i++) {
                if (Model.date.Tests[i].name.toString().toLowerCase().indexOf(element.value.toLowerCase()) != -1) {
                    if (Model.date.Tests[i].status.id == 1 ) {creatTable(i);}
                }
            }
        } else if (document.getElementById('radio-categories').checked == true) {
            for (var j = 0; j < Model.date.Tests.length; j++) {
                var categoryId = Model.date.Tests_categories[Model.date.Tests[j].subcategory - 1].parent_id;
                if (Model.date.Tests_categories[categoryId - 1].name.toString().toLowerCase().indexOf(element.value.toLowerCase()) != -1) {
                    if (Model.date.Tests[j].status.id == 1 ) {creatTable(j);}

                }

            }
        } else {
            for (var y = 0; y < Model.date.Tests.length; y++) {
                if (Model.date.Tests_categories[Model.date.Tests[y].subcategory - 1].name.toString().toLowerCase().indexOf(element.value.toLowerCase()) != -1) {
                    if (Model.date.Tests[y].status.id == 1 ) {creatTable(y);}
                }
            }
        }
    }
}

function toGo(element) {
    var test_id = element
    var t_id = test_id.dataset.testid;
    Model.date.Moderator_test_id = t_id;
    Model.save_localStorage();
    window.location = "moderatrPage.html";
}

function deletetabRows() {
    var tableId = "search-table";
    var table = document.getElementById(tableId);
    for (var j = 1; j <= rowCounter; j++) {
        table.deleteRow(1);
    }
    rowCounter = 0;
}

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
    rowCounter = rowCounter - 1;
}

function getParentTr(removeButton) {
    var trParrent = removeButton;
    do {
        trParrent = trParrent.parentNode;
        if (trParrent.tagName == 'TR') {
            return trParrent;
        }
        if (trParrent.tagName =='BODY') {return undefined; }
    } while (true)
}


