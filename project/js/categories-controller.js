var testsResult = []

var addTest = function(item) {
	if(testsResult.indexOf(item) == -1) {
		testsResult.push(item);
	}
}

function printResult () {
	//console.log(testsResult[0][0].name);
	var table = document.getElementById("table_result");
    for(i=0; i < testsResult.length;i++) {
      var row = table.insertRow(table.rows.length);
      var cell = row.insertCell(-1);
      cell.innerHTML = testsResult[i][i].name;
      var cell = row.insertCell(-1);
      cell.innerHTML = testsResult[i][i].author;
      var cell = row.insertCell(-1);
      cell.innerHTML = '<a href=" '+ testsResult[i][i].url +' ">Перевірити</a>';
      
    }
}

var removeTest = function(item) {
	if(testsResult.indexOf(item) > -1) {
		testsResult.splice(testsResult.indexOf(item), 1);
	}
}

var getTest = function (id, category) {
	var tests = [];
	for(var i=0; i<Tests.length; i++) {
		if(category) {
			if(Tests[i].category == id) {
				tests.push(Tests[i]);		
			}
		} else {
			if(Tests[i].subcategory == id) {
				tests.push(Tests[i]);		
			}
		}
	
	}

	return tests
}

var getSubCategoriesGlob = function(id) {
	var subCategories = [];
	for (category in Categories) {
		if (Categories[category].parent_id == id) {
			subCategories.push(Categories[category]);
		}
	}
	return subCategories;
};


function CategoriesController() {
	this.categories = this.getCategories();
	this.tests = [];
}

CategoriesController.prototype.renderHTML = function() {

	var category;
	var parent;
	var child;

	parent = document.getElementById('categoriesContainer');

	for (category in this.categories) {
		if (this.categories.hasOwnProperty(category)) {
			child = document.createElement('div');

			if (this.categories[category].parent_id == 0) {
				child.innerHTML = this.getCategoryHTML(this.categories[category].name);
				
				child.onclick = (function(data) {
					
					return function(e) {
						if (e.target.className.indexOf('categoryParentSelected') > -1) {
							e.target.className = e.target.className
									.replace('categoryParentSelected', '');
							
							var	sCat = getSubCategoriesGlob(data.id);
							
							for (var ii in sCat) {
								removeCSSClass(document.getElementById('sub' + sCat[ii].id),' categorySelected')
							}
							
							removeTest(data);
						} else {
							e.target.className = e.target.className
									+ " categoryParentSelected";
							
							var sCat = getSubCategoriesGlob(data.id);
							
							for (var ii in sCat) {
								addCSSClass(document.getElementById('sub' + sCat[ii].id),' categorySelected')
							}
							//alert(data.id)
							addTest(getTest(data.id, true));
						}
						e.preventDefault();
					}
				})(this.categories[category])
			
				var subCategories = this
						.getSubCategories(this.categories[category].id);

				for (var i = 0; i < subCategories.length; i++) {
					var subCategoryElement = document.createElement('div');
					subCategoryElement.innerHTML = this
							.getSubCategoryHTML(subCategories[i].name, 'sub' + subCategories[i].id);
					child.appendChild(subCategoryElement);

					subCategoryElement.onclick = (function(data, e) {
						return function(e) {
							if (e.target.className.indexOf('categorySelected') > -1) {
								e.target.className = e.target.className
										.replace('categorySelected', '');
								removeTest(data);
							} else {
								e.target.className = e.target.className
										+ " categorySelected";							
								addTest(getTest(data.id, false));
								//alert(data.id)
							}
							e.preventDefault();
						}
						e.preventDefault();
					})(subCategories[i])
				}

			}

			parent.appendChild(child);
		}
	}
};

CategoriesController.prototype.bindEvents = function(element, calback) {
	element.onclick = calback;
};

CategoriesController.prototype.getSubCategories = function(id) {
	var subCategories = [];
	for (category in this.categories) {
		if (this.categories[category].parent_id == id) {
			subCategories.push(this.categories[category]);
		}
	}
	return subCategories;
};

CategoriesController.prototype.getCategoryHTML = function(name) {
	var html = '';

	html += '<div class="col-xs-12"><div class=" col-xs-8 col-xs-offset-2 text-left name-category">'
			+ name + '</div></div>';

	return html;
};

CategoriesController.prototype.getSubCategoryHTML = function(name, id) {
	var html = '';

	html += '<div id="' + id + '" class="row"><div class=" col-xs-8 col-xs-offset-1 text-center">'
			+ name + '</div></div>';

	return html;
};
CategoriesController.prototype.getCategories = function() {
	if (Categories) {
		return Categories;
	}
};
var addCSSClass = function(element, cssClass) {
	if(element) {
		element.className += cssClass
	}
}
var removeCSSClass = function(element, cssClass) {
	if(element) {
		element.className = element.className.replace(cssClass,'')
	}
}