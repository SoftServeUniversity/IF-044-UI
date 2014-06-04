// Видалення цілого елементу <tr>
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
    //document.getElementById('test-to-remove').innerHTML = objectForTest.name;
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
    //document.getElementById('test-to-remove').innerHTML = objectForTest.name;
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

window.onload = function generateObjects(){
    var table1 = "t1", table2 = "t2", table3 = "t3", table4 = "t4";
    var numberOfObjects = Tests.length;
    var countStatus=3;
    for (var tableSwap = 1; tableSwap <= 4; tableSwap++) {
        var row;
        var cell = [];
        var tableId = 't' + tableSwap;
        var table = document.getElementById(tableId);
        var numberOfRow = 1;
        for (var i = 0; i < numberOfObjects; i++) {

            if ( Tests[i].status == countStatus){

                var numberOfCell = 0;
                row = table.insertRow(numberOfRow);

                cell[numberOfCell] = row.insertCell(numberOfCell);
                cell[numberOfCell].innerHTML = Tests[i].name;
                numberOfCell += 1;

                cell[numberOfCell] = row.insertCell(numberOfCell);
                cell[numberOfCell].innerHTML = Tests[i].category;
                numberOfCell += 1;

                cell[numberOfCell] = row.insertCell(numberOfCell);
                cell[numberOfCell].innerHTML = Tests[i].subcategory;
                numberOfCell += 1;

                cell[numberOfCell] = row.insertCell(numberOfCell);
                cell[numberOfCell].innerHTML = '<a href="moderatrPage.html">Редагувати</a>';
                numberOfCell += 1;

                cell[numberOfCell] = row.insertCell(numberOfCell);
                cell[numberOfCell].innerHTML = '<div><button  class="btn-danger btn-xs" data-row-number="' + numberOfCell + '" onclick="deleteTrin(this)" >ВИДАЛИТИ</button></div>';
                numberOfRow = numberOfRow + 1;
            }
        }
        countStatus= countStatus -1 ;
    }

}