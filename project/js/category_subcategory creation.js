function catName(){
	var Result = [];
	for (var i = 0; i < Application.Tests_categories.length; i++) {
		if (Application.Tests_categories[i].parent_id == 0) {Result.push(Application.Tests_categories[i].name);};

	};
	return Result
	
}

function catId(){
	var Result = [];
	for (var i = 0; i < Application.Tests_categories.length; i++) {
		if (Application.Tests_categories[i].parent_id == 0) {Result.push(Application.Tests_categories[i].id);};

	};
	return Result
	console.log(Result);
}

function getTests(name){
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

function insertList(categories,id){
	Model.load_localStorage();	
	var catName = categories;
	var catId = id;

	for (var i = 0; i < catName.length; i++) {
		var newdiv = document.createElement('div');
		newdiv.className = "col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-3";	
		newdiv.innerHTML +='<strong>Категорія <a href="category.html?id='+catId[i]+'"> <u>'+catName[i]+'</u> </a> <br></strong> <span class="count">Тестів: '+getTests(catName[i])+'</span>';
		document.getElementsByClassName('col-sm-9 col-sm-offset-2')[0].appendChild(newdiv);
		var newul = document.createElement('ul');
		newul.className = ('cat list-unstyled col-sm-offset-1');
		document.getElementsByClassName('col-sm-4 col-sm-offset-0 col-xs-12 col-xs-offset-3')[i].appendChild(newul);
}
	var catEl = document.getElementsByClassName('cat');	
	for (var i = 0; i< catEl.length; i++) {		
		var subcat = Application.Tests_categories[i].getSubcategories(i+1);
		console.log(subcat);
		for (var j = 0; j < subcat.length; j++) {
			var newdiv = document.createElement('li');
			newdiv.innerHTML = '<a href="subcategory.html?id='+subcat[j].id+'">'+subcat[j].name+'</a>';
			catEl[i].appendChild(newdiv);
		};
		
	};
}

window.onload = insertList(catName(),catId());