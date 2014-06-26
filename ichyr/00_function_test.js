function Pagination() {};

Pagination.default_step_value = 10;
Pagination.shorten_start_length = 10;
Pagination.active_item_neighborhood = 2;

// function that creates the array of objects that represent the pagination bar
Pagination.create_pagination_bar = function(active, pages) {
    var result = [];

    // test for enabling the complex regime
    if (pages <= Pagination.shorten_start_length) {
        for (var i = pages.length - 1; i >= 0; i--) {
            result.unshift(i);
        };
    } else {
        // test for the beginning of pagination
        if (active - Pagination.active_item_neighborhood < 1) {
            result = ["...", pages - 2, pages - 1, pages]
            var count = Pagination.shorten_start_length - result.length;
            for (var i = count; i > 0; i--) {
                result.unshift(pages);
            };
        } else if (active + Pagination.active_item_neighborhood > pages) {
            result.concat([1, 2, 3, "..."]);
            var count = Pagination.shorten_start_length - result.length;
            for (var i = pages - count; i <= pages; i++) {
                result.push(pages);
            };
        } else {
            result = [1, "..."];
            var start = active - Pagination.active_item_neighborhood;
            var end = active + Pagination.active_item_neighborhood;
            for (var i = start; i <= end; i++) {
                result.push(i);
            }
            result.concat = ["...", pages];
        }
    }

    return result;
}

Pagination.create_pagination_bar(1, 10);