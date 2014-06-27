function Application() {};

Application.result = [];
Application.current_pages = 0;

Application.seed_data = function(n) {
    var temp = new User();
    var data = new Collection(User);
    var users = data.seed(n);
    localStorage.data = JSON.stringify(users);
}

Application.init = function() {
    if (localStorage.data == undefined) {
        Application.seed_data(250);
    };
    var temp = new User();
    var data = new Collection(User);
    var store = JSON.parse(localStorage.data);
    for (var i = 0; i < store.length; i++) {
        data.addElement(store[i]);
    }
    var step = 10;

    var options = {
        // date: [1401526596810]
        // date boundaries can be unset - equal to nil
        // this means that one/two boundaries are not included in search
        rank: ['пл. неім.', 'ст. пл.']
    };

    var active_filter = new FilterFactory(options);
    var result = data.filter(active_filter);
    console.log(result.length);

    var pages = Math.ceil(result.length / step);
    console.log(result);
    document.getElementById('content').innerHTML = Pagination.initialize(result, pages);
    Application.current_result = result;
    Application.current_pages = pages;
    return result;
}

Application.change_page = function() {
    var result = Application.current_result;
    var pages = Application.current_pages;
    document.getElementById('content').innerHTML = Pagination.initialize(result, pages);
}


var datum = Application.init();