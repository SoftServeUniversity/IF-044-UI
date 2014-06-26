// 
// This model represents the user and has
// @name
// @surname
// @username
// @password
// @dob         - date of birth
// @rank
// 
// 
function User(name) {
    this.name = "default";
    this.surname = "default";
    this.username = "default";
    this.password = "default";
    this.dob = new Date();
    this.rank = "default";
    // create a random User with all relevant to seed information
    // e.g. name and role will be tranfered
    this.seed = function(n) {
        var utlt = new Utility()
        return utlt.createRandomUser(n)
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
        var utlt = new Utility();
        for (var i = 0; i < n; i++) {
            var temp = utlt.createRandomUser(i)
            this.addElement(temp)
        }
    }
}