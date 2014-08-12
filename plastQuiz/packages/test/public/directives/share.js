'use strict';

angular.module('mean.test').service('Data', function() {
    var data = [];

    var adddata = function(newObj) {
        data = [];
        data.push(newObj);
    };

    var getdata = function() {
        return data;
    };

    return {
        adddata: adddata,
        getdata: getdata
    };
});
