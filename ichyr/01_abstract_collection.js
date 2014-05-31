function User(name) {
    // here supply the list of variables
    this.name = name;
    
    // create a random User with all relevant to seed information
    // e.g. name and role will be tranfered
    this.seed = function(n) {
        var name = "Name " + n;
        return new User(name)
    }
}

// Class for cretion of collection of concrete model
// with ability to add, remove, find and seed elements
function Collection(model) {
    this.collection = [];
    this.model = new model();

    this.addElement = function(element) {
        this.collection.push(element)
    }
    
    this.removeElement = function(element) {
        var index = this.collection.indexOf(element)
        if (index > -1) {
            this.collection = this.collection.splice(index, 1)
        }
    }
    
    this.findElement = function(id) {
        return this.collection[id]
    }
    
    // function for creation of seed data
    this.seed = function(n) {
        for (var i = 0; i < n ; i++ ) {
            var temp = this.model.seed(i)
            this.addElement(temp)
        }
    }
}

var a = new Collection(User)
a.seed(3)
console.log(a.collection.length)