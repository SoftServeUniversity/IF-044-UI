// Pagination must fullfill the following actions:
// 1. Read data from URL
// 2. Form a table
// 3. Form a bar below
// 4. Wrap result of the query

// 1. Read data from url
function UrlParams() {};

// Parse all get params into javascript object
// http://stackoverflow.com/questions/901115/how-can-i-
// 								get-query-string-values-in-javascript
// 
UrlParams.getData = function() {
    var urlParams = {};
    var match,
        pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function(s) {
            return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1);
    while (match = search.exec(query)) {
        urlParams[decode(match[1])] = decode(match[2]);
    }
    return urlParams;
};

// 
// function that forms a url-encoded string based on 
// the given object
// http://stackoverflow.com/questions/111529/create-query-parameters-in-javascript
// 
UrlParams.createUrlParams = function(data) {
    var result = [];
    for (var d in data) {
        result.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    }
    return result.join("&");
}


function Pagination() {};

Pagination.default_step_value = 10;
Pagination.shorten_start_length = 10;
Pagination.active_item_neighborhood = 2;

// 
// function for returning portion of result set
// based on the input array, start-element and number 
// of elements to return - step
// 
Pagination.sliceTheSet = function(array, start, step) {
    var step = step || Pagination.default_step_value;
    var end = start + step;
    if (end <= array.length) {
        return array.slice(start, start + step);
    } else {
        return array.slice(start, end);
    }

};

// 
// function that returns the limited set of result_set
// 
// result_set - result of filtering, search etc.
// 
Pagination.currentSelection = function(result_set) {
    var params = UrlParams.getData();
    var result = [];
    var start, step;
    if (params["start"] == undefined || params["start"] == null) {
        start = 0;
    } else {
        start = params["start"];
        step = params["step"];
    }
    return Pagination.sliceTheSet(result_set, start, step);
};

// function to create clickable link to specified thing
Pagination.decorateLink = function(text, start, step) {
    var href = location.toString();
    href += "?start=" + start + "&step=" + step;
    return "<a href=" + href + ">" + text + "</a>\n";
}

// function that creates the array of objects that represent the pagination bar
Pagination.create_pagination_bar = function(active, pages) {
    var result = [];

    // test for enabling the complex regime
    if (pages <= Pagination.shorten_start_length) {
        for (var i = pages.length - 1; i >= 0; i--) {
            result.push(pages[i]);
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

//
// function to print numbers in a row
//
//  1 2 3 4 5
//  1 2 3 ... 10
//  1 ... 7 8 9 ... 13
//  1 ... 8 9 10
Pagination.printNavigation = function(pages) {

};