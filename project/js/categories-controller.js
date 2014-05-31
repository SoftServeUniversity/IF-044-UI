function CategoriesController() {
	this.categories = this.getCategories();
}

CategoriesController.prototype.renderHTML = function() {
	
	var category;
	var parent;
	var child;
	var tests = [];

	parent = document.getElementById('categoriesContainer');

	for (category in this.categories) {
		if (this.categories.hasOwnProperty(category)) {
			child = document.createElement('div');
			
			if (this.categories[category].parent_id == 0) {
				child.innerHTML = this.getCategoryHTML(this.categories[category].name);
				
				var subCategories = this.getSubCategories(this.categories[category].id);
				
				for (var i=0; i < subCategories.length; i++) {
					var subCategoryElement = document.createElement('div');
					subCategoryElement.innerHTML = this.getSubCategoryHTML(subCategories[i].name);
					child.appendChild(subCategoryElement);
					
					this.bindEvents(child, function(e) {
						if(e.target.className.indexOf('categorySelected') > -1) {
							e.target.className = e.target.className.replace('categorySelected', '');
						} else {
							e.target.className = e.target.className + " categorySelected";
						}
						
						e.preventDefault();
	
					});
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
	//TODO getSubCategories with parent id = id
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

CategoriesController.prototype.getSubCategoryHTML = function(name) {
	var html = '';

	html += '<div class="row"><div class=" col-xs-8 col-xs-offset-1 text-center">'
			+ name + '</div></div>';

	return html;
};

CategoriesController.prototype.getCategories = function() {
	if (Categories) {
		return Categories;
	}
};