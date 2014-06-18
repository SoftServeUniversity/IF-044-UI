var place_for_category = document.getElementById('usersCategories');
console.log(Model.date.Tests_categories);

Categories = Model.date.Tests_categories;
var p; //current category

function button_delete(id){
  var attribute = id;
  console.log(attribute);
 var current_category = get_category_by_id(attribute);
 console.log(current_category);
    for( var i =0; i < Categories.length; i++){
      if(current_category == Categories[i]){
        Categories.splice(i, 1)
      }
    }
 Model.save_localStorage();
   ShowAll();
}

function ShowAll(){
	var category_table = '';
  var list_categories = [];
  var number_categories = 1;
	for (var i = 0; i < Categories.length; i++) {
	 if (Categories[i].parent_id == 0) {
            list_categories.push({
                name: Categories[i].name,
                id: Categories[i].id

            });
       }
   }
   for (var j = 0; j < Categories.length; j++) {
    if (Model.date.Tests_categories[j]){
        // console.log(Model.date.Tests_categories[j]);

      category_table += '<tr><td><strong>'+ number_categories +++'</strong></td><td><strong>' + Categories[j].name + '</strong></td>';
       for (var l = 0; l < list_categories.length; l++){
         if (Categories[j].parent_id == list_categories[l].id) {
             category_table += '<td><strong>'+list_categories[l].name+'<strong></td>';
          }
          else{
            if (Categories[j].parent_id == 0 ) {
              category_table += '<td><strong>'+('---')+'<strong></td>';
              break;
              } 
          }

        }
        category_table += " <td></td><td></td><td></td><td><button class='btn btn-danger btn-xs' onclick=button_delete("+Model.date.Tests_categories[j].id+") id_category='"+Model.date.Tests_categories[j].id+"'>ВИДАЛИТИ</button><a href='#myModal' data-toggle='modal' data-target='#myModal3' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-small btn-xs' onclick=ReEditModul("+Model.date.Tests_categories[j].id+") id_category='"+Model.date.Tests_categories[j].id+"'>РЕДАГУВАТИ</button></a></td></tr>";
     
    
     }
   }
    place_for_category.innerHTML = category_table;
}
ShowAll();


function get_category_by_id(category_id){
  var Tests_categories = Model.date.Tests_categories;
  for(var i = 0; i<Tests_categories.length;i++){
    if(Tests_categories[i].id == category_id){
      var catch_category = Tests_categories[i];
      break;
    }
  }
  return catch_category;
}

// edit button below
function editbutton(){
  var obj = {};
  var length = Model.date.Tests_categories.length;
  var new_category = document.getElementById('input_of_cotegory').value;
  var main_category = document.getElementById('select');
  var new_category_main_category = main_category.options[main_category.selectedIndex].value;
  var parant = main_category.options[main_category.selectedIndex].getAttribute("parant_id");
  var parant_id = parseInt(parant, 10);
  if (document.getElementById('input_of_cotegory').value == '') {
    document.getElementById('input_of_cotegory').style.border = "solid 1px #FC141B";
    document.getElementById('input_of_cotegory').focus(); 

  }
    else{
  obj.id = length+1;
  obj.name = new_category;
  obj.parent_id = parant_id;
  Model.date.Tests_categories.push(obj);
  console.log(Model.date.Tests_categories.length);
  Model.save_localStorage();
  document.getElementById('input_of_cotegory').value = '';
  document.getElementById('select').options[3].selected = true;
  document.getElementById('input_of_cotegory').style.border = '';
  ShowAll();

  }

}
 function hideModalBox() {
        loginButton.setAttribute('data-dismiss', 'modal');
    }

//--------------------------------------------

function ReEditModul(id){
  var attribute = id;
  var current_category = get_category_by_id(attribute);
  p = current_category;
  document.getElementById('name_of_cotegory').value = current_category.name;
  var h = current_category.parent_id;
  document.getElementById('select_reedit').options[h].selected = true;
// console.log(h);
}

function ReEditButton(){
  var new_change = document.getElementById('name_of_cotegory').value;
  var choose_category = document.getElementById('select_reedit');
  var new_choose_category = choose_category.options[choose_category.selectedIndex].getAttribute("parant_id");
  var current_category = p;
  for (var i = 0; i < Categories.length; i++) {
      if (current_category == Model.date.Tests_categories[i]) {
        Categories[i].name = new_change;
        Categories[i].parent_id = new_choose_category;
      }
  }
  Model.save_localStorage();
  ShowAll();
}





