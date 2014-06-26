function Application() {};

Application.init = function() {
    var data = new Collection(User);
    var users = data.seed(100);

    var options = {
        date: [1401526590454, 1401526596810]
        // date boundaries can be unset - equal to nil
        // this means that one/two boundaries are not included in search
    };

    var active_filter = new FilterFactory(options);
    var result = data.filter(active_filter);
    console.log(result.length);
}

Application.init();