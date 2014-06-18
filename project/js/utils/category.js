function Category() {};

Category.subcategory_path = "subcategory.html";
Category.test_path = "test.html";
Category.content_id = "category-page-content";
Category.list = Model.date.Tests_categories;
Category.test_list = Model.date.Tests;
Category.test_output_limit = 4;

// 
// Returns list of first child subcategories of a category with specified id
// 
//  category_id - id of a parent category
//  active_categories_list - array of actual categories
// 
Category.getSubcategories = function(category_id, active_categories_list) {
    var result = [];
    for (var i = active_categories_list.length - 1; i >= 0; i--) {
        if (active_categories_list[i].parent_id === category_id) {
            result.push(active_categories_list[i]);
        };
    };
    return result;
}

// 
// Returns list of root categories
// 
// active_categories_list - array of actual categories
// 
Category.getRootCategories = function(active_categories_list) {
    return Category.getSubcategories(0, active_categories_list);
}

//
//  Returns the list of tests that have the given subcategory as a parent
//
//  category   -  Object
// active_test_array - array of active tests in the system
//
Category.getSubCategoryTestsList = function(category, active_test_array) {
    // alert("getSubCategoryTestsList");
    var result = [];
    console.log("getSubCategoryTestsList ->");
    console.log("   category -> ", category);

    for (var i = active_test_array.length - 1; i >= 0; i--) {
        if (active_test_array[i].subcategory === category.id) {
            result.push(active_test_array[i]);
        };
    };

    console.log("   result -> ", result);
    return result;
}


Category.generate_category_page = function(category_id, active_category_list) {
    var subcategories = Category.getSubcategories(category_id, active_category_list);
    var content = document.getElementById(Category.content_id);
    var last_j = 0;

    console.log(subcategories);

    for (var i = 0; i < subcategories.length; i++) {
        var subcategory_test_list = Category.getSubCategoryTestsList(subcategories[i], Category.test_list);

        if (i % 3 == 0) {
            content.innerHTML += '<div class="row">\n';
        }
        content.innerHTML += Category.generate_one_view_item(subcategories[i], i);
        if (i % 3 == 2) {
            content.innerHTML += '</div>\n';
        }

        last_j = i;
    };

    if (last_j % 3 != 2) {
        content.innerHTML += '</div>\n';
    }
};


//
//  Function to get Category Object based on it's id
//
Category.get_by_id = function(id) {
    for (var i = 0; i < Category.list.length; i++) {
        if (Category.list[i].id == id) return Category.list[i];
    }
}

//
//  Generates one block of content for subcategory, count of tests
//  and number of test names-link-to-them that is regulated by
//  Category.test_output_limit cvariable in the top
// 
//  parent - Object of Subcategory ( Category type )
//  number - thing that forms three in the row subcategories block 
//
Category.generate_one_view_item = function(parent, number) {
    console.log(" Category.generate_one_view_item -> " + parent.name + "->")
    var items = Category.getSubCategoryTestsList(parent, Category.test_list);
    var result = "";

    switch (number % 3) {
        case 1:
            result += '<div class="col-sm-3 col-sm-offset-1 col-xs-12 col-xs-offset-3">';
            break;
        case 2:
            result += '<div class="col-sm-3 col-sm-offset-1 col-xs-12 col-xs-offset-3">';
            break;
        case 0:
            result += '<div class="col-sm-3 col-sm-offset-1 col-xs-12 col-xs-offset-3">';
    }

    result += "\n";
    result += "<strong>Підкатегорія ";
    result += '<a href="' + Category.subcategory_path + '?id=' + parent.id + '"> <u>'
    result += '</u>' + parent.name + ' </a>\n';
    result += '<br>\n</strong>\n';
    result += '<span class="text-center count">' + items.length + ' тестів</span>\n';
    result += '<ul class="list-unstyled">\n';

    for (var i = 0; i < items.length && i < Category.test_output_limit; i++) {
        result += '<a href="' + Category.test_path + '?id=' + parent.id + '"> <li>' + items[i].name + '</li> </a>\n';
    };

    result += '</ul>\n';
    result += '</div>\n';

    return result;
}

// 
// Obtains the number of the category from url of the page
// 
// input format ...?id=[value]
// 
// 
Category.getCategory_id = function() {
    var temp = location.search;
    temp = temp.slice(1);
    temp = temp.split("=")[1];
    return temp * 1;
}

// 
// Function sets the name of the category to the page
// and creates a link to it's statistics page
// 
Category.setActivePageTitle = function(active_category) {
    var title = document.getElementById("content-title-block");
    var stats = document.getElementById("content-title-stats");

    title.innerText = active_category.name;
    stats.href = "category-statistics.html?id=" + active_category.id;
}

// 
// Function generates the page content
// 
Category.generate_page = function() {
    var category_id = Category.getCategory_id() || 1;
    console.log("id = " + category_id);
    console.log("categories = " + Category.list);
    Category.setActivePageTitle(Category.get_by_id(category_id));
    Category.generate_category_page(category_id, Category.list);
};

function init() {
    Model.load_localStorage();
    Category.generate_page();
};

window.onload = init();