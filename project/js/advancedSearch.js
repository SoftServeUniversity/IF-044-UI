window.onload = function() {

    Categories = Model.date.Tests_categories;

    var place_for_filter = document.querySelectorAll('.filter-search')[0];
    var content = '';
    var list_categories = [];
    for (var i = 0; i < Categories.length; i++) {
        if (Categories[i].parent_id == 0) {
            list_categories.push({
                name: Categories[i].name,
                id: Categories[i].id
            });
        }
    }
    for (var i = 0; i < list_categories.length; i++) {
        content +=
            '<div class="col-xs-12"><div class=" col-xs-8 col-xs-offset-2 text-left name-category">' +
            list_categories[i].name + '</div>';
        for (var j = 0; j < Categories.length; j++) {
            if (Categories[j].parent_id == list_categories[i].id) {
                content +=
                    '<div class="row"><div class="col-xs-8 col-xs-offset-1 text-center" sub_categ ="' +
                    Categories[j].id + '"  categ ="' + Categories[j].parent_id +
                    '">    ' + Categories[j].name + '</div></div>';
            }
        }
        content += '</div>';
    }
    place_for_filter.innerHTML += content;

    function hasClass(target, className) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(
            target.className);
    }
    var filter_category = document.querySelectorAll('.name-category');




    //console.log(filter_category);
    for (var i = 0; i < filter_category.length; i++) {

        var sub_siblings = Array.prototype.filter.call(filter_category[i].parentNode
            .children, function(child) {
                return child !== this;
            });
        for (var j = 1; j < sub_siblings.length; j++) {

            sub_siblings[j].querySelectorAll('div')[0].addEventListener(
                'click', function() {
                    if (document.querySelectorAll('.div-reset-active').length) {
                        document.querySelectorAll('.div-reset-active')[
                            0].classList.remove('div-reset-active');
                    }
                    if (hasClass(this, "curent-filter")) {
                        //console.log('true');
                        this.classList.remove("curent-filter");
                    } else {
                        this.classList.add("curent-filter");
                    }
                });
        }



        filter_category[i].addEventListener('click', function() {
            var check_siblings = false;
            if (document.querySelectorAll('.div-reset-active').length) {
                document.querySelectorAll('.div-reset-active')[0].classList
                    .remove('div-reset-active');
            }
            var siblings = Array.prototype.filter.call(this.parentNode
                .children, function(child) {
                    return child !== this;
                });
            for (var i = 1; i < siblings.length; i++) {

                if (hasClass(siblings[i].querySelectorAll('div')[0],
                    "curent-filter")) {
                    // console.log('true');
                    check_siblings += 1;
                    siblings[i].querySelectorAll('div')[0].classList
                        .remove("curent-filter");
                } else {
                    siblings[i].querySelectorAll('div')[0].classList
                        .add("curent-filter");
                }
            }
            //console.log(siblings[i]);
            if (check_siblings) {
                for (var i = 1; i < siblings.length; i++) {
                    siblings[i].querySelectorAll('div')[0].classList
                        .remove("curent-filter");
                }
            }


        });


    }
    var reset = document.querySelectorAll('.reset')[0];
    reset.addEventListener('click', function() {
        console.log(this.parentNode);
        this.parentNode.classList.add('div-reset-active');
        var curent_filter = document.querySelectorAll(
            '.curent-filter');
        for (var i = 0; i < curent_filter.length; i++) {
            curent_filter[i].classList.remove("curent-filter");
        }
    });
    document.getElementById('applyFilter').addEventListener('click',
        function() {
            event = document.createEvent('HTMLEvents');
            event.initEvent('keyup', true, false);
            document.getElementById('search_input').dispatchEvent(event);
        })

}
