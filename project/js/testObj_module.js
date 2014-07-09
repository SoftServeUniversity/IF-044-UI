function test() {
    this.id = parseInt(location.search.split('=').slice(1)[0]);
    this.testObj = function(id) {
        for (var i = 0; i < Model.date.Tests.length; i++) {
            if (id === Model.date.Tests[i].id) {
                return Model.date.Tests[i];
            }
        };
    }
    
}

var test = new test();
