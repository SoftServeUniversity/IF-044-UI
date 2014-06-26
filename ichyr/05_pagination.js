// Pagination must fullfill the following actions:
// 1. Read data from URL
// 2. Form a table
// 3. Form a bar below
// 4. Wrap result of the query

// 1. Read data from url
function UrlParams() {};

// Parse all get params into javascript object
// http://stackoverflow.com/questions/901115/how-can-i-
//                get-query-string-values-in-javascript
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
    var start = start * step;
    var end = parseInt(start) + parseInt(step);
    if (end < array.length) {
        return array.slice(start, end);
    } else {
        return array.slice(start, end);
    }
};

// 
// function that returns the limited set of result_set
// 
// @result_set - result of filtering, search etc.
// 
Pagination.currentSelection = function(result_set, par_step) {
    var params = UrlParams.getData();
    var start, step;
    if (params["start"] == undefined || params["start"] == null) {
        start = 0;
        step = par_step;
    } else {
        start = params["start"];
        step = params["step"];
    }

    return Pagination.sliceTheSet(result_set, start, step);
};

//
// fuction that builds the table of results
Pagination.build_table = function(data, step) {
    var data = Pagination.currentSelection(data, step);
    var result = "";

    result += "<table>\n";
    result += "<tr>\n";
    result += "<th>id</th>\n";
    result += "<th>name</th>\n";
    result += "<th>surname</th>\n";
    result += "<th>rank</th>\n";
    result += "<th>dob</th>\n";
    result += "</tr>\n";

    for (var i = 0; i < data.length; i++) {
        result += "<tr>\n";
        result += "<td>" + data[i].id + "</td>\n";
        result += "<td>" + data[i].name + "</td>\n";
        result += "<td>" + data[i].surname + "</td>\n";
        result += "<td>" + data[i].rank + "</td>\n";
        result += "<td>" + data[i].dob + "</td>\n";
        result += "</tr>\n";
    }

    result += "</table>\n";

    return result;
}

// 
// function to create clickable link to specified thing
// 
// @text - thind that must be decorated
// @start - (position for paginator of linked page) parameter of the link
// @step - (number of results per page) parameter of the link
//
Pagination.decorateLink = function(text, start, step) {
    var href = location.toString();
    href = href.split("?")[0];
    var step = step || Pagination.default_step_value;
    href += "?start=" + start + "&step=" + step;
    return "<a href=" + href + ">" + text + "</a>\n";
}

// 
// function that creates the array of objects that represent the pagination bar
// 
// @active - number of active start position
// @pages - number of pages ( elements / step_size )
//
Pagination.create_pagination_bar = function(active, pages) {
    var result = [];
    var neighbour = Pagination.active_item_neighborhood;

    // test for enabling the complex regime
    if (pages <= Pagination.shorten_start_length) {
        for (var i = pages; i >= 1; i--) {
            result.unshift(i);
        };
    } else {
        // test for the beginning of pagination
        if (active - neighbour <= neighbour) {
            result = ["...", pages - 2, pages - 1, pages]
            var count = Pagination.shorten_start_length - result.length;
            for (var i = count; i > 0; i--) {
                result.unshift(i);
            };
        } else if (active + neighbour >= pages) {
            result = [1, 2, 3, "..."];
            var count = Pagination.shorten_start_length - result.length;
            for (var i = pages - count; i <= pages; i++) {
                result.push(i);
            };
        } else {
            result = [1, "..."];
            var start = active - neighbour;
            var end = active + neighbour;
            for (var i = start; i <= end; i++) {
                result.push(i);
            }
            result = result.concat(["...", pages]);
        }
    }
    return result;
}

//
// function to print numbers in a row
// 
// @active - number of active start position
// @pages - number of pages ( elements / step_size )
//
// Return examples
// 
//  1 2 3 4 5
//  1 2 3 ... 10
//  1 ... 7 8 9 ... 13
//  1 ... 8 9 10
//
Pagination.printNavigation = function(active, pages) {
    var thumbs = Pagination.create_pagination_bar(active, pages);
    var result = "";
    for (var i = 0; i < thumbs.length; i++) {
        var text = thumbs[i];
        var step = Pagination.default_step_value;
        if (text === "...") {
            result += text;
        } else {
            result += Pagination.decorateLink(text, text - 1, 10);
        }
    }
    console.log("Bar contents :", result);
    return result;
};

// function that bind all pagination logic in one place
// 
// @pages - number of pages ( elements / step_size )
// 
Pagination.initialize = function(data, pages) {
    var result;
    var params = UrlParams.getData();
    var start = parseInt(params["start"]);

    if (params["start"] != undefined) {
        if (start < 0 || start > pages) {
            // error must occur
            result = "Invalid input parameters";
        } else {
            result = Pagination.build_table(data, 10)
            result += "\n";
            result += Pagination.printNavigation(start, pages);
        }
    } else {
        result = Pagination.build_table(data, 10)
        result += "\n";
        result = Pagination.printNavigation(1, pages);
    }

    return result;
}