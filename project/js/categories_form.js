var place_for_table = document.getElementById('usersCategories');
console.log(Model.date.Tests_categories);

Categories = Model.date.Tests_categories;

function button_delete(e){
  var attribute = e.target.getAttribute('category_id');
  var current_category = get_category_by_id(attribute);
  console.log(current_category);
  delete current_category.id;
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
    if (Model.date.Tests_categories[j].id){
        // console.log(Model.date.Tests_categories[j]);

      content_table += '<tr><td><strong>'+ number_categories +++'</strong></td><td><strong>' + Categories[j].name + '</strong></td>';
       for (var l = 0; l < list_categories.length; l++) {
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
        content_table += " <td></td><td></td><td></td><td><button class='btn btn-danger btn-xs button_delete' id_category='"+Model.date.Tests_categories[j]+"'>ВИДАЛИТИ</button><button class='btn btn-success btn-small btn-xs'>РЕДАГУВАТИ</button></td></tr>";
     
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

