(function() {

    var testCategories = Model.date.Tests_categories,
        tests = Model.date.Tests;

    var testName = function() {
        var Result = [];
        for (var i = 0; i < testCategories.length; i++) {
            if (testCategories[i].parent_id == 0) {
                Result.push(testCategories[i].name);
            };

        };
        return Result;

    }

    var testId = function() {
        var Result = [];
        for (var i = 0; i < testCategories.length; i++) {
            if (testCategories[i].parent_id == 0) {
                Result.push(testCategories[i].id);
            };

        };
        return Result;

    }

    var categoryTestCount = function(id) {
        var count = 0;
        for (var i = 0; i < testCategories.length; i++) {
            if (testCategories[i].id == id)
                for (var j = 0; j < tests.length; j++) {
                    if (testCategories[i].id == tests[j].category) {
                        if (tests[j].status === 3) {
                            count++
                        };
                        
                    };
                };

        };
        return count
    }

    var getSubcategories = function(id) {
        var result = [];
        for (var i = 0; i < testCategories.length; i++) {
            if (testCategories[i].parent_id === id) {
                result.push(testCategories[i]);
            };
        };
        return result;
    }

    var listCreation = function(categories, id) {

        var catName = categories;
        var catId = id;

        for (var i = 0; i < catName.length; i++) {
            var newdiv = document.createElement('div');
            newdiv.className = "col-xs-12 col-sm-3 col-lg-3 contact col-sm-offset-1";
            newdiv.innerHTML += '<div class="row"> <div class="col-xs-5 col-sm-10 col-sm-offset-1 col-xs-offset-4 block-contact"> <div class="contact-person"><a href="category.html?id=' + catId[i] + '">' + catName[i] + '</a> </div> <div class="row"> <ul class="list-unstyled col-xs-offset-1 col-sm-offset-1"><li><span class="text-center count">Тестів:  ' + categoryTestCount(catId[i]) + ' </span></li> </ul> </div> </div> </div>';
            document.getElementById('category').appendChild(newdiv);

        }
        var catEl = document.getElementsByClassName('list-unstyled col-sm-offset-1');
        for (var i = 0; i < catEl.length; i++) {
            var subcat = getSubcategories(i + 1);
            for (var j = 0; j < subcat.length; j++) {
                var newdiv = document.createElement('li');
                newdiv.innerHTML = '<a href="subcategory.html?id=' + subcat[j].id + '">' + subcat[j].name + '</a>';
                catEl[i].appendChild(newdiv);
            };

        };
    }
    listCreation(testName(), testId())

})()
