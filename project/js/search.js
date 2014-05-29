function searchTests() {
    /*if(document.getElementById('radio-Name').checked == true) {
     var sizeObjectTests = Tests.length;
     console.log(sizeObjectTests);
     var inputText= document.getElementById('whatToSearch').value;
     for (var i=0; i<sizeObjectTests; i++){
     if (inputText == Tests[i].name){
     alert ("Знайшов");}
     else alert ("Незнайшов");
     }

     }

     else if (document.getElementById('radio-categories').checked == true) {
     console.log('cat');
     }

     else  if (document.getElementById('radio-subcategories').checked == true){
     console.log('subcat');
     }
     else {alert ("Виберіть тип пошуку")}
     */
}



/*  Tests
 var x = document.getElementById('whatToSearch').value;
 console.log(x);
 var y = Users.length;

 console.log(  y);*/

function searchTests () {
    if(document.getElementById('All').checked == true){
        var row;
        var cell = [];
        //var objectForTest = new Object();
        var tableId = "search-table"
        var table = document.getElementById(tableId);

        for (var i=0; i<Tests.length; i++) {
            var numberOfRow = i;
            var numberOfCell = 0;
            //var cell [];
            row = table.insertRow(numberOfRow+1);
            cell[numberOfCell] = row.insertCell(numberOfCell);
            cell[numberOfCell].innerHTML = Tests[i].name;
            numberOfCell += 1;

            cell[numberOfCell] = row.insertCell(numberOfCell);
            cell[numberOfCell].innerHTML = Tests[i].category;
            numberOfCell += 1;

            cell[numberOfCell] = row.insertCell(numberOfCell);
            cell[numberOfCell].innerHTML = Tests[i].subcategory;
            numberOfCell += 1;
            console.log("Знайшов on name - " + Tests[i].name);
            numberOfRow = numberOfRow + 1;
        }

    }
}
/*window.onload() = function cweqe() {
 document.getElementById('All').checked = true;
 document.getElementById('radio-Name').checked = false;
 document.getElementById('radio-categories').checked = false;
 document.getElementById('radio-subcategories').checked = false;
 }*/


function applyFilter(element) {


    var found = [];


    // search by name
    if (element.value != "") {
        var row;
        var cell = [];
        //var objectForTest = new Object();
        var tableId = "search-table"
        var table = document.getElementById(tableId);
        if(document.getElementById('radio-names').checked == true) {
            for (var i=0; i<Tests.length; i++){
                if (Tests[i].name.toString().toLowerCase().indexOf(element.value.toLowerCase) != -1){
                    found.push(Tests[i]);
                    creatTable();
                }

            }
        } else if (document.getElementById('radio-categories').checked == true) {
            for (var i=0; i<Tests.length; i++){
                if (Tests[i].category.toString().toLowerCase.indexOf(element.value.toLowerCase) != -1){
                    found.push(Tests[i]);
                    creatTable();
                }
            }
        } else {
            for (var i=0; i<Tests.length; i++){
                if (Tests[i].subcategory.toString().indexOf(element.value.toLowerCase) != -1){
                    found.push(Tests[i]);
                    creatTable();
                }
            }
        }
    } else {console.log("empty")}
    function creatTable() {
        var numberOfRow = 1;
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
        console.log("Знайшов on name - " + Tests[i].name);
        numberOfRow = numberOfRow + 1 ;
    }

}


