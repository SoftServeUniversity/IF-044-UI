function Category() {};

Category.subcategory_path = "subcategory.html";
Category.test_path = "test.html";
Category.content_id = "content";
Category.list = Model.date.Tests_categories;
Category.test_list = Model.date.Tests;

// 
// Returns list of first child subcategories of a category with specified id
// 
//  category_id - id of a parent category
//  active_categories_list - array of actual categories
// 
Category.getSubcategories = function(category_id, active_categories_list) {
  var result = active_categories_list;
  for (var i = result.length - 1; i >= 0; i--) {
    if (result[i].parent_id != category_id) {
      result.splice(i,1)
    }; 
  };
  return result;
}

// 
// Returns list of first child subcategories
// 
// active_categories_list - array of actual categories
// 
Category.getRootCategories = function(active_categories_list) {
  return Category.getSubcategories(0, active_categories_list);
}

Category.getSubCategoryTestsList = function(category, active_test_array) {
  var result = active_categories_list;
  for (var i = result.length - 1; i >= 0; i--) {
    if (result[i].subcategory != category) {
      result.splice(i,1)
    }; 
  };
  return result;
}

Category.generate_one_view_item = function(parent, number) {
  var items = getSubCategoryTestsList(parent, Category.test_list)
  var result = "";

  switch(number % 3) {
    case 1:
        result += '<div class="col-sm-2 col-sm-offset-2 col-xs-12 col-xs-offset-3">';
        break;
    case 2:
        result += '<div class="col-sm-2 col-sm-offset-1 col-xs-12 col-xs-offset-3">';
        break;
    default:
        result += '<div class="col-sm-3 col-sm-offset-1 col-xs-12 col-xs-offset-3">';
  }

  result += "\n";
  result += "<strong>Підкатегорія";
  result += '<a href="' + Category.subcategory_path + '?id=' + parent.id + '"> <u></u> </a>\n';
  result += '<br>\n</strong>\n';
  result += '<span class="count">' + items.length + ' тестів</span>\n';
  result += '<ul class="list-unstyled col-sm-offset-1">\n';

  for (var i = 0; i < items.length; i++) {
    result += '<a href="' + Category.test_path + '?id=' + parent.id + '"> <li>' + item.name + '</li> </a>\n';
  };

  result += '</ul>\n';
  result += '</div>\n';

  return result;
}

Category.generate_category_page = function(subcategory_id, active_test_list){
  var subcategories = Category.getRootCategories(subcategory_id, active_test_list);
  var content = document.getElementById(Category.content);

  for (var i = 0; i < subcategories.length; i++) {
    var sub_categories = subcategories[i].getSubCategoryTestsList(subcategories[i].id, active_test_list);

    for (var i = 0; i < sub_categories.length; i--) {
      content.innerHTML += Category.generate_one_view_item(sub_categories[i], i);
    };

  };
};

Category.getSubcategory_id = function() {
  var temp = location.search;
  temp = temp.slice(1);
  temp = temp.split("=")[1];
  return temp * 1;
}

function generate_page(){
  var subcategory_id = Category.getSubcategory_id();
  Category.generate_category_page(subcategory_id, Category.list);
};

window.onload = generate_page();

