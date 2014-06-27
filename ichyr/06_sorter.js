function SortingController() {};

// function to sort by arbitrary filed of the object
//
// @data - array of data
// @field - field name of the coumn to sort by
// @order - order of sorting
SortingController.sort = function(data, field, order) {
    var soting = function(a, b) {
        if (a[field] > b[field])
            return order == "asc" ? 1 : -1;
        if (a[field] < b[field])
            return order == "asc" ? -1 : 1;
        return 0;
    }
    return data.sort(sorting);
}