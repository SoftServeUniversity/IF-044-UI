function IndexPageController(){

this.testName = function (){
	var Result = [];
	for (var i = 0; i < Application.Tests_categories.length; i++) {
		if (Application.Tests_categories[i].parent_id == 0) {Result.push(Application.Tests_categories[i].name);};

	};
	return Result;
	
}

this.testId = function (){
	var Result = [];
	for (var i = 0; i < Application.Tests_categories.length; i++) {
		if (Application.Tests_categories[i].parent_id == 0) {Result.push(Application.Tests_categories[i].id);};

	};
	return Result;
	
}

this.categoryTestCount = function (name){
	var count = 0;
	for (var i = 0; i < Application.Tests_categories.length; i++) {
		if (Application.Tests_categories[i].name == name) 
			for (var j = 0; j < Application.Tests.length; j++) {
				if (Application.Tests_categories[i].id == Application.Tests[j].category) {
						{count++};
				};
			};
		
	};
	return count
}

this.listCreation = function (categories,id){
	
	var catName = categories;
	var catId = id;

	for (var i = 0; i < catName.length; i++) {
		var newdiv = document.createElement('div');
		newdiv.className = "col-xs-12 col-sm-3 col-lg-3 contact col-sm-offset-1";	
		newdiv.innerHTML += '<div class="row"> <div class="col-xs-10 col-xs-offset-1 block-contact"> <div class="contact-person"><a href="category.html?id='+catId[i]+'">'+catName[i]+'</a>: '+this.categoryTestCount(catName[i])+'</div> <div class="row"> <ul class="list-unstyled col-sm-offset-1"> </ul> </div> </div> </div>';
		document.getElementById('category').appendChild(newdiv);
		//newdiv.innerHTML +='<strong>Категорія <a href="category.html?id='+catId[i]+'"> <u>'+catName[i]+'</u> </a> <br></strong> <span class="count">Тестів: '+this.categoryTestCount(catName[i])+'</span>';
		// document.getElementsByClassName('col-sm-9 col-sm-offset-2')[0].appendChild(newdiv);
		// var newul = document.createElement('ul');
		// newul.className = ('cat list-unstyled col-sm-offset-1');
		// document.getElementsByClassName('col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-3')[i].appendChild(newul);
}
	var catEl = document.getElementsByClassName('list-unstyled col-sm-offset-1');	
	for (var i = 0; i< catEl.length; i++) {		
		var subcat = Application.Tests_categories[i].getSubcategories(i+1);
	for (var j = 0; j < subcat.length; j++) {
	var newdiv = document.createElement('li');
	newdiv.innerHTML = '<a href="subcategory.html?id='+subcat[j].id+'">'+subcat[j].name+'</a>';
	catEl[i].appendChild(newdiv);
		};
		
 };
}

}

var IndexPageController = new IndexPageController();


window.onload = IndexPageController.listCreation(IndexPageController.testName(),IndexPageController.testId());