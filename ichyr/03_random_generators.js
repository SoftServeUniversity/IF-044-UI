function Utility() {
    var names = ["Петро", "Василь", "Павло", "Іван", "Денис", "Артем", "Сергій", "Тарас", "Юрій", "Дмитро", "Ярема"];
    var surnames = ["Босий", "Великий", "Розумний", "Дикий", "Сильний", "Коваль", "Кушнір", "Глечик", "Кінь", "Сідельський"];

    var ranks = ["пл. неім.", "пл. прих.", "пл. уч.", "пл. розв.", "пл. скоб", "ст. пл. прих.", "ст. пл.", "ст. пл. скоб.", "пл. сен."];

    function returnRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function returnRandomDateInRange(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    this.createRandomUser = function(id) {
        var user = new User();
        user.name = names[returnRandomInt(0, names.length - 1)];
        user.surname = surnames[returnRandomInt(0, surnames.length - 1)];
        user.username = "user" + id;
        user.password = "qweqwe";
        // Date Of Birth => DOB
        user.dob = returnRandomDateInRange(new Date(1975, 0, 1), new Date(2003, 0, 1))
        user.rank = ranks[returnRandomInt(0, ranks.length - 1)];
        return user;
    }

    this.to_string = function(user) {
        return user.rank + " " + user.name + " " + user.surname + " народжений " + user.dob.getFullYear()
    }
}
// COUNT = 10;
// for (var i = 0; i < COUNT; i++) {
//     var temp = (new Utility).createRandomUser(1);
//     console.log((new Utility).to_string(temp));
// }