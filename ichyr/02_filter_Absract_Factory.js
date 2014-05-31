// This function ca be added to Collection as a member
// It can perform custom filtering of data based on filter/predicate/
// This is function that take element and returns true of element
// suites custom conditions and 

function Collection(model) {
    this.collection = [];
    this.model = new model();

    this.filter = function (predicate) {
        var result = [];
        var length = this.collection.length;

        for (var j = 0; j < length; j++) {
            if (predicate(this.collection[j]) === true) {
                result.push(this.collection[j]);
            }
        }
        return result;
    };
}

// Default filter functionality that always results in true
// the structure of options has is the following
//
options = {
    //ages that should be included as array e.g.
    age: [11, 12, 13],
    // ranks that should be included
    rank: [1, 2, 3],
    // date range - two dates - instances of Date() object
    // values should be primitive representation of Date
    // we can obtain one with Date.valueOf() method
    date: [1401526590454, 1401526596810]
    // date boundaries can be unset - equal to nil
    // this means that one/two boundaries are not included in search
};

// filter Object that accepts parameter-object with options
// and returns function that can do filtering of object based on
// options argument
function DefaultFilter(options) {
    return function (collection_element) {
        return true;
    };
}

// Filter that is active when only age option are utilized
function AgeFilter(options) {
    var temp = options.age;
    return function (collection_element) {
        return (temp.indexOf(collection_element.age) >= 0 ? true : false);
    };
}

// Filter that is active when only rank option are utilized
// rank = ступінь в організації
function RankFilter(options) {
    var temp = options.rank;
    return function (collection_element) {
        return (temp.indexOf(collection_element.rank) >= 0 ? true : false);
    };
}

// Filter for date
// 
function DateFilter(options) {
    var start = options.date[0];
    var end = options.date[1];
    if (start != null && end != null && start < end) {
        start = end
        end = options.date[1]
    }
    return function (collection_element) {
        var temp = collention_element.date;
        if (start != null && end != null) {
            if (end <= temp && temp <= start) {
                return true;
            } else {
                return false;
            }
        } else if (start != null || end != null) {
            if (start != null && temp <= start) {
                return true;
            } else if (end != null && temp >= end) {
                return true;
            } else {
                return false;
            }
        }

    };
}

// TODO maybe here we can implement other pattern
// we already have filters for Age nad Rank
// and here we only have combination of them
function AgeRankFilter(options) {
    var temp_age = options.age;
    var temp_rank = options.rank;
    return function (collection_element) {
        var first = temp_rank.indexOf(collection_element.rank) >= 0 ? true : false;
        var second = temp_age.indexOf(collection_element.age) >= 0 ? true : false;
        return first && second;
    };
}


// my own pattern =)
function FilterCompositionFactory(handlers, options) {
    var temp = handlers;
    for (var i = 0; i < handlers.length; i++) {
        temp[i] = handlers[i](options);
    }
    return function (collection_element) {
        result = true;
        for (var i = 0; i < handlers.length; i++) {
            result = result && temp[i](collection_element);
        };
        return result;
    }
}

// Abstract Factory - e.g. http://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript

function FilterFactory(control, options) {

    var handlers = [DefaultFilter];
    var properties = ["age", "rank", "date"];
    var possibleHanlders = [AgeFilter, RankFilter, DateFilter]
    for ( var i = 0 ; i < properties.length ; i++ ) {
        if ( options[properties[i]] !== null || options.properties[i].length !== 0 ) {
           handlers.push(possibleHanlders[i])
        }    
    }
    
    var result = new FilterCompositionFactory(handlers, options);

    return result;
}