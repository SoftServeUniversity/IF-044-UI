var place_for_table = document.getElementById('usersCategories');
console.log(Model.date.Tests_categories);

Categories = Model.date.Tests_categories;

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
   showAll();
}

function showAll(){
	var content_table = '';
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

      content_table += '<tr><td><strong>'+ number_categories +++'</strong></td><td><strong>' + Categories[j].name + '</strong></td>';
       for (var l = 0; l < list_categories.length; l++){
         if (Categories[j].parent_id == list_categories[l].id) {
             content_table += '<td><strong>'+list_categories[l].name+'<strong></td>';
          }
          else{
            if (Categories[j].parent_id == 0 ) {
              content_table += '<td><strong>'+('---')+'<strong></td>';
              break;
              } 
          }

        }
        content_table += " <td></td><td></td><td></td><td><button class='btn btn-danger btn-xs onclick=button_delete("+Model.date.Tests_categories[j].id+") id_category='"+Model.date.Tests_categories[j].id+"'>ВИДАЛИТИ</button><a href='#myModal' data-toggle='modal' data-target='#myModal3' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-small btn-xs onclick=ReEditModul("+Model.date.Tests_categories[j].id+") id_category='"+Model.date.Tests_categories[j].id+"'>РЕДАГУВАТИ</button></a></td></tr>";
     
     place_for_table.innerHTML = content_table;
     }
     else{  
     }
   }
}
showAll();


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


function editbutton(){
  var new_category = document.getElementById('input_of_cotegory').value;
  var main_category = document.getElementById('select');
  var new_category_main_category = main_category.options[main_category.selectedIndex].value;
  console.log(new_category_main_category);
}

function ReEditModul(id){
  console.log('some');
  var attribute = id;
  console.log(attribute);
  var current_category = get_category_by_id(attribute);
  console.log(current_category);
}