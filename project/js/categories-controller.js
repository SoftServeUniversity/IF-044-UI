function CategoriesController() {
}

CategoriesController.prototype.renderHTML = function() {
	var categories = this.getCategories();
	var item;
	var parent;
	var child;
	var tests = [];

	parent = document.getElementById('categoriesContainer');

	for (item in categories) {
		if (Categories.hasOwnProperty(item)) {
			child = document.createElement('div');
			child.innerHTML = this.getHTML(categories[item].name);
			child.onclick = function(e) {
				alert(e.target.innerText + ' clicked');
				e.preventDefault();
			}
			parent.appendChild(child);
		}
	}
};

CategoriesController.prototype.getHTML = function(name) {
	var html = '';

	html += '<div class=" col-xs-8 col-xs-offset-2 text-left name-category">'
			+ name + '</div>';

	return html;
};

CategoriesController.prototype.getCategories = function() {
	if (Categories) {
		return Categories;
	}
};