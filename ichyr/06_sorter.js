// 
// We suppose that the page must to be reloaded when sorting occured
// so we need to pass active columns and ordening type in get parameters
// 
// GET parameters
// 
// @column=value        -   active column value // must be urlEncoded
// @order=[asc|desc]    -   ordering rule
// 
function SortingController() {};

// 
// asc - ascending sorting of the column
// desc - descending sorting of the column
// 
SortingController.default_sorting = 'asc';
SortingController.active_column = null;
SortingController.active_order = null;

// function that changes the order of the sorting
// 
// @temp - current ordering direction verb
// 
SortingController.change_direction = function(temp) {
    return temp === 'asc' ? 'desc' : 'acs';
}

//
// function to concatenate new parameters and form new url string
// 
// @url     -   old location
// @params  -   object of new parameters
// 
SortingController.create_new_link = function(url, params) {
    var result = url;
    result = result.split("?");
    result[1] = UrlParams.createUrlParams(params);
    result = result.join("?");
    return result;
}


// 
// function that decorates the links
// if the active sorting is on specified column
// it should draw a triangular thing
// 
// @text - text to be decorated
// @link - link to be changed
// @active - sets the active selection of the sorting
// 
SortingController.decorateLink = function(text, link, active) {
    var current_link = location.toString(),
        result = "",
        params = UrlParams.getData(),
        active_column = params["column"],
        active_order = params["order"];


    result += "<a href=";
    // if no sorting is applied
    if (active_column == undefined || active_column == null) {
        active_column = text;

    } else {
        if (text == active) {
            result += current_link + "as";
        } else {
            result += current_link + "as";
        }
    }



    // if sorting is applied to clicked column
    // sorting is applied to other column



    result += ">\n" + text + "\n";
    if (text == active && SortingController.active_order === 'asc') {
        result += "<span class=\"glyphicon glyphicon glyphicon-chevron-down\"> </span>\n";
    } else {
        result += "<span class=\"glyphicon glyphicon glyphicon-chevron-up\"> </span>\n";
    }

    result += "</a>\n";

    return result;
}

// function to sort by arbitrary filed of the object
//
// @data - array of data
// @field - field name of the coumn to sort by
// @order - order of sorting
SortingController.sort = function(data, field, order) {
    var sorting = function(a, b) {
        if (a[field] > b[field])
            return order == "asc" ? 1 : -1;
        if (a[field] < b[field])
            return order == "asc" ? -1 : 1;
        return 0;
    }
    return data.sort(sorting);
}