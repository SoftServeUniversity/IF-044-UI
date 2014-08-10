var redirect = function() {
    this.idNotFound = function() {
        if (!location.search.split('=').slice(1)[0]) {
            window.location = '404.html';
        }
    }
    this.testExist = function() {
        if (!test.testObj(test.id)) {
            window.location = '404.html';
        }
    }
    this.categoryExist = function() {
        for (var i = 0; i < Model.date.Tests_categories.length; i++) {
            if (Model.date.Tests_categories[i].id === test.id) {
                return
            } else {
                window.location = '404.html';
            }
        };
    }
    this.userPermission = function() {
        if (test.testObj(test.id).user_owner_id != Model.date.session_user_id) {
            window.location = '404.html';
        };
    }
    this.userLogin = function() {
        if (Model.date.session_user_id) {
            return
        } else {
            window.location = '404.html';
        }
    }
    this.publicTest = function() {
        if (test.testObj(test.id).status != 3) {
            window.location = '404.html';
        };
    }
}
var redirect = new redirect()
