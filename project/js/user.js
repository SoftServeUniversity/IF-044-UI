function User(name) {
    this.name = name || "default";

    this.change_user = function(name, age, password) {
        this.name = name
    }

    this.seed = function(controll_user) {

    }
}