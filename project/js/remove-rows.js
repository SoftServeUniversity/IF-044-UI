// Видалення цілого елементу <tr>
//window.onload = function myProfile(){

function deleteTr1(element) {
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
        document.getElementById("t1").deleteRow(parentRow.rowIndex);
        $("#remove-dialog").modal("hide");
    }
    $("#remove-dialog").modal();
}

function deleteTr4(element) {
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
        document.getElementById("t4").deleteRow(parentRow.rowIndex);
        $("#remove-dialog").modal("hide");
    }
    $("#remove-dialog").modal();
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

function showTestByStatus(){
    var loginUserId = Model.date.session_user_id;
    var author = Model.date.Users[loginUserId-1].username;
    var numberOfObjects = Model.date.Tests.length;
    var countStatus = 3;
    for (var tableSwap = 1; tableSwap <= 4; tableSwap++) {
        var row;
        var cell = [];
        var tableId = 't' + tableSwap;
        var table = document.getElementById(tableId);
        var numberOfRow = 1;
        for (var i = 0; i < numberOfObjects; i++) {
            var subcatid = Model.date.Tests[i].subcategory;
            var categoryId = Model.date.Tests_categories[subcatid - 1].parent_id;
            if (Model.date.Tests[i].author == author ) {

                if (Model.date.Tests[i].status.id == countStatus) {
                    var jol =3;
                    createTables(i, tableSwap);

                }
            }
        }
        countStatus= countStatus - 1 ;
    }

    function createTables (index, numberOfTable) {
        var i = numberOfTable;
        var numberOfCell = 0;
        row = table.insertRow(numberOfRow);

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = Model.date.Tests[index].name;
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = Model.date.Tests_categories[categoryId - 1].name;
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = Model.date.Tests_categories[subcatid - 1].name;
        numberOfCell += 1;

        if ( tableSwap == 2 ) {
            cell[numberOfCell] = row.insertCell(numberOfCell);
            cell[numberOfCell].innerHTML = '<div><a class="btn btn-success btn-xs" href = "TestEdit.Html" >Редагувати</a></div>';
            numberOfCell += 1;
        }

        if ( tableSwap == 4 ) {
            cell[numberOfCell] = row.insertCell(numberOfCell);
            cell[numberOfCell].innerHTML = '<div><button  class="btn btn-success btn-xs sendToModerator"   data-currenttestid="' + Model.date.Tests[index].id + '" onclick="sendForModeration(this)">Відправити на модерацію</button></div>';
            //cell[numberOfCell].innerHTML = '<div><a class="btn btn-success btn-xs" href = "#" >Відправити на модерацію</a></div>';
            numberOfCell += 1;

            cell[numberOfCell] = row.insertCell(numberOfCell);
            cell[numberOfCell].innerHTML = '<div><button  class="btn btn-success btn-xs sendToModerator"   data-testid="' + Model.date.Tests[i].id + '" onclick="toGo(this)">Редагувати</button></div>';
            numberOfCell += 1;
        }

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = '<div><button  class="btn btn-danger btn-xs" data-row-number="' + numberOfCell + '" onclick="deleteTr'+i+'(this)" >Видалити</button></div>';
        numberOfRow = numberOfRow + 1;
    }
}

function toGo(element) {
    var test_id = element;
    var t_id = test_id.dataset.testid;
    console.log(t_id);
    Model.date.Moderator_test_id = t_id;
    Model.save_localStorage();
    window.location = "Testedit.html";
}

function sendForModeration(element){
    var currentElement = element;
    var currenrTestId = currentElement.dataset.currenttestid;
    console.log(currenrTestId);
    for (i=0; i<=Model.date.Tests.length; i++) {
        if (Model.date.Tests[i].id == currenrTestId){
            Model.date.Tests[i].status.id = 1;
            Model.date.Tests[i].status.name_status = "відправлений";
            Model.date.TestIdForModaration = currenrTestId;
            Model.save_localStorage();
            window.location = "user_my_test_nyarytc.html";

        }
    }


}
function deleteTr3(element) {
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
        document.getElementById("t3").deleteRow(parentRow.rowIndex);
        $("#remove-dialog").modal("hide");
    }
    $("#remove-dialog").modal();
    //document.getElementById('test-to-remove').innerHTML = objectForTest.name;
}