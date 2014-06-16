function catName(){
	var Result = [];
	for (var i = 0; i < Application.Tests_categories.length; i++) {
		Result.push(Application.Tests_categories[i].name);
	};
	return Result
}

function insertList(categories){
	var catName = categories;
	var catEl = document.getElementsByClassName('cat');
	
	for (var i = 0; i < catEl.length; i++) {
		Model.load_localStorage();
		catEl[i].innerHTML = catName[i];
		var subcat = Application.Tests_categories[i].getSubcategories(i+1);
		console.log(subcat);
		for (var j = 0; j < subcat.length; j++) {
			var newdiv = document.createElement('li');
			newdiv.innerHTML = subcat[j].name;
			catEl[i].appendChild(newdiv);
		};
		
	};
}

window.onload = insertList(catName());