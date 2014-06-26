function Application() {};

Application.init = function() {
    var temp = new User();
    var data = new Collection(User);
    var users = data.seed(100);
    var step = 10;

    var options = {
        // date: [1401526596810]
        // date boundaries can be unset - equal to nil
        // this means that one/two boundaries are not included in search
        // rank: ['пл. неім.']
    };

    var active_filter = new FilterFactory(options);
    var result = data.filter(active_filter);
    console.log(result.length);

    var pages = Math.ceil(result.length / step);
    console.log(result);
    document.getElementById('content').innerHTML = Pagination.initialize(result, pages);
    return result;
}

var datum = Application.init();