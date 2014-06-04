'use strict'

var moderator_search_caterogies = [];
for (var i = 0; i <= Categories.length; i++) {
    moderator_search_caterogies[i] = 0;
}

window.onload = function CategoriesController() {
    var category = document.getElementById('categoriesContainer');
    var content = '';
    var cat_array = [];
    for (var i = 0; i < Categories.length; i++) {
        if (Categories[i].parent_id == 0) {
            cat_array.push({
                name: Categories[i].name,
                id: Categories[i].id
            });
        }
    }
    for (var i = 0; i < cat_array.length; i++) {
        content += '<div class="col-xs-12"><div class=" col-xs-8 col-xs-offset-2 text-left" onclick="change_moder_search_selected(' + cat_array[i].id + ')">' + cat_array[i].name + '</div>';
        for (var j = 0; j < Categories.length; j++) {
            if (Categories[j].parent_id == cat_array[i].id) {
                content += '<div class="row"><div class="col-xs-8 col-xs-offset-1 text-center" onclick="change_moder_search_selected(' + Categories[j].id + ')">' + Categories[j].name + '</div></div>';
            }
        }
        content += '</div>';
    }


    category.innerHTML += content;

    var table = document.getElementById("table_result");
    for (i = 0; i < Tests.length; i++) {
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(-1);
        cell.innerHTML = Tests[i].name;
        var cell = row.insertCell(-1);
        cell.innerHTML = Tests[i].author;
        var cell = row.insertCell(-1);
        cell.innerHTML = '<a href="moderatrPage.html" onclick="IndexTest(' + i + ')" id="test' + i + '">Перевірити</a>';
    }

}

function change_moder_search_selected(i) {
    var category_id = i;
    // 1 means category is selected
    if (moderator_search_caterogies[i] == 1) {
        moderator_search_caterogies[i] = 0;
    } else {
        moderator_search_caterogies[i] = 1;
    }
    console.log(moderator_search_caterogies)
}

function get_results() {
    var result = [];

    var indexes = [];
    for (var i = moderator_search_caterogies.length - 1; i >= 0; i--) {
        if (moderator_search_caterogies[i] != 0) {
            indexes.push(i);
        }
    };

    for (var i = Tests.length - 1; i >= 0; i--) {
        if (indexes.indexOf(Tests[i].category) >= 0) {
            result.push(Tests[i]);
        } else if (indexes.indexOf(Tests[i].subcategory) >= 0) {
            result.push(Tests[i]);
        }
    };

    console.log("Obtained " + result.length + " result!");
    console.log(result);
    console.log();

    return result;
}

function get_tests_number_by_category(id) {
    var result = 0;
    for (var i = Tests.length - 1; i >= 0; i--) {
        if (Tests[i].category == id || Tests[i].subcategory == id) result++;
    };
    return result;
}

function print_listing() {
    for (var i = Categories.length - 1; i >= 0; i--) {
        var result = "Category item " + Categories[i].id + " has ";
        result += get_tests_number_by_category(i) + " items there;"
        console.log(result);
    };
}