// Pagination must fullfill the following actions:
// 1. Read data from URL
// 2. Form a table
// 3. Form a bar below
// 4. Wrap result of the query

// 1. Read data from url
function UrlParams() {};

// variable that is the hash of current parameters get
UrlParams.active_get_params = "";

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