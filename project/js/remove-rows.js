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
    var categories = ["Історія", "Географія", "Природа", "Столиці", "Музика", "Пустелі"];
    var objectsForTest = [];
    var numberOfObjects;


    var testName = document.getElementById("searchTest").value;
    //   numberOfObjects = 1;



    for (var tableSwap = 1; tableSwap <= 4; tableSwap++) {
        var row;
        var table1 = "t1", table2 = "t2", table3 = "t3", table4 = "t4";
        var cell = [];
        var objectForTest = new Object();
        var tableId = 't' + tableSwap;
        //   console.log(tableId);
        var table = document.getElementById(tableId);
        var numberOfObjects = Math.floor((Math.random() * 8) + 1) ;

        for (var i = 1; i <= numberOfObjects; i++) {
            var arrayStatus = [' ', 'deleted ','toedit ','notsend ']
            var j = 0;
            row = table.insertRow(i);



            objectForTest.name = "Test " + arrayStatus[tableSwap-1] + i;
            cell[j] = row.insertCell(j);
            //if (tableId = table1) {
            cell[j].innerHTML = '<a class="test-name" href="#"> ' + objectForTest.name + '</a>'; //testName;
            cell[j].className = "test-name-col";
            //} else {cell[j].innerHTML = objectForTest.name;}
            j += 1;

            objectForTest.category_name = categories[ Math.floor((Math.random() * 5) + 1)];
            cell[j] = row.insertCell(j);
            cell[j].innerHTML = objectForTest.category_name;
            j += 1;

            objectForTest.subcategory_name = "Підкатегорія " + Math.floor((Math.random() * 4) + 1);
            cell[j] = row.insertCell(j);
            cell[j].innerHTML = objectForTest.subcategory_name
            j += 1;

            if (tableId != table2) {
                if (tableId != table3 && tableId != table4) {
                    cell[j] = row.insertCell(j);
                    cell[j].innerHTML = '<a href="#">Статистика</a>';
                    j += 1;
                }

                cell[j] = row.insertCell(j);
                cell[j].innerHTML = '<a href="#">Редагувати</a>';
                j += 1;


                cell[j] = row.insertCell(j);
                if (tableId == table1)
                {cell[j].innerHTML = '<div><button  class="btn-danger btn-xs" data-row-number="' + i + '" onclick="deleteTr1(this)" >ВИДАЛИТИ</button></div>';}
                else if(tableId == table3)
                { cell[j].innerHTML = '<div><button  class="btn-danger btn-xs" data-row-number="' + i + '" onclick="deleteTr3(this)" >ВИДАЛИТИ</button></div>';}
                else
                {cell[j].innerHTML = '<div><button  class="btn-danger btn-xs" data-row-number="' + i + '" onclick="deleteTr4(this)" >ВИДАЛИТИ</button></div>';}

                objectsForTest.push(objectForTest);

            }

        }
    }
}