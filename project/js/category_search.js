'use strict'

window.onload = function CategoriesController () {
	var category = document.getElementById('categoriesContainer');
	var content = '';
	var cat_array = [];
	for (var i = 0; i<Categories.length; i++){
		if (Categories[i].parent_id == 0){
		    cat_array.push({name:Categories[i].name,id: Categories[i].id}); 
		}
	}
	for(var i = 0; i<cat_array.length; i++){
	    content +='<div class="col-xs-12"><div class=" col-xs-8 col-xs-offset-2 text-left" id="cat'+i+'">'+cat_array[i].name+'</div>';
	    for(var j = 0;j<Categories.length;j++){
	    if(Categories[j].parent_id == cat_array[i].id){
	       content +='<div class="row"><div class="col-xs-8 col-xs-offset-1 text-center">'+Categories[j].name+'</div></div>';        
	    }
	    }
	     content += '</div>';
	}
	     category.innerHTML += content;
	    /////
	     var table = document.getElementById("table_result");
	     for(i=0; i < Tests.length;i++) {
	       var row = table.insertRow(table.rows.length);
	       var cell = row.insertCell(-1);
	       cell.innerHTML = Tests[i].name;
	       var cell = row.insertCell(-1);
	       cell.innerHTML = Tests[i].author;
	       var cell = row.insertCell(-1);
	       cell.innerHTML = '<a href="moderatrPage.html" onclick="IndexTest('+i+')" id="test'+i+'">Перевірити</a>';
	       
	     }
	     //for (i=0; i<cat_array.length; i++) {
	    //	 document.getElementById('cat'+i).onclick=function(){
	    //		 document.getElementById('cat'+i).classList.add('categorySelected');
	    //		 }
//currentIndexTest="'+i+'" onclick="redirectModerator)
	    	 //console.log(document.getElementById('cat'+i))

	   //  }
	     

}




	 