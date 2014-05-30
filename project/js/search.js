var ri = 0;

function searchTests () {
    if(document.getElementById('All').checked == true){
        if (ri > 1) {
            deleteRows();
        }
        var row;
        var cell = [];
        var tableId = "search-table"
        var table = document.getElementById(tableId);
        var


            numberOfRow = 1;
        for (var i=0; i<Tests.length; i++) {
            var numberOfCell = 0;


            //var cell [];
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
            cell[numberOfCell].innerHTML = '<a href="#">Редагувати</a>';
            numberOfCell += 1;

            cell[numberOfCell] = row.insertCell(numberOfCell);
            cell[numberOfCell].innerHTML = '<div><button  class="btn-danger btn-xs" data-row-number="' + numberOfCell + '" onclick="deleteTrin(this)" >ВИДАЛИТИ</button></div>';
            numberOfRow = numberOfRow + 1;
            console.log(numberOfRow);

        }
        console.log(Tests.length);
        ri = Tests.length;
    }
    function deleteRows () {

        console.log(ri + "World");
        var h;
        for (h = 1; h <= ri; h++){table.deleteRow(1);}
        ri = 0;}
}

function applyFilter(element) {
    var tableId = "search-table"
    var table = document.getElementById(tableId);
    var h =0;
    var found = [];
    var tId = "search-table"
    var table1 = document.getElementById(tId);
    if (ri > 1) {
        deleteTableRows();
    }
// search by name
    if (element.value != "") {
        var row;
        var cell = [];

        if (document.getElementById('radio-names').checked == true) {
            for (var i = 0; i < Tests.length; i++) {
                if (Tests[i].name.toString().toLowerCase().indexOf(element.value.toLowerCase()) != -1) {
                    found.push(Tests[i]);
                    creatTable();
                }

            }
        } else if (document.getElementById('radio-categories').checked == true) {
            for (var i = 0; i < Tests.length; i++) {
                if (Tests[i].category.toString().toLowerCase().indexOf(element.value.toLowerCase()) != -1) {
                    found.push(Tests[i]);
                    creatTable();

                }

            }
        } else {
            for (var i = 0; i < Tests.length; i++) {
                if (Tests[i].subcategory.toString().toLowerCase().indexOf(element.value.toLowerCase()) != -1) {
                    found.push(Tests[i]);
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
        cell[numberOfCell].innerHTML = '<a href="#">Редагувати</a>';
        numberOfCell += 1;

        cell[numberOfCell] = row.insertCell(numberOfCell);
        cell[numberOfCell].innerHTML = '<div><button  class="btn-danger btn-xs" data-row-number="' + numberOfCell + '" onclick="deleteTrin(this)" >ВИДАЛИТИ</button></div>';

        console.log("Знайшов on name - " + Tests[i].name);
        ri = ri +  1;

    }
    return ri;
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
    ri= ri -1;
    console.log(ri);
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


