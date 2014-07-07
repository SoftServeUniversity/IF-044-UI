var Users = Model.date.Users;
var place_for_table = document.getElementById('usersTable');
var place_for_blacklist = document.getElementById('blacklist');
var place_for_administration = document.getElementById('administrationlist');
var search_user = document.getElementById('search-input');
var search_banned_user = document.getElementById('blacklist_search-input');

var search_for_user = [];
var g; // current user for change status
var l; // current user for delete user
var f; // current user for banned
var number; // capcha generation


function UsersTabComboboxChangeController() {

    var filter = document.getElementById('filter');
    var current_filter = filter.selectedIndex;
    // console.log(current_filter);
    var n;
    if (search_user.value == '') {
        n = new Array(Users);
    } else {
        n = new Array(search_for_user);
    }
    var usersSorted = n[0].sort(function (a, b) {
        switch (current_filter) {
        case 0:
            return a.firstName.localeCompare(b.firstName);
            break;
        case 1:
            return a.email.localeCompare(b.email);
            break;
        };
    });




    var content_table = '';
    for (var i = 0; i < usersSorted.length; i++) { //перебір масиву юзерів
        for (j = 0; j < Model.date.User_roles.length; j++) { // перебір ролей цих юзерів в системі
            if (usersSorted[i].role_id == Model.date.User_roles[j].id) { // якщо ай ді ролі юзера співпада з роллю в системі, то ми присвоюємо юзеро значення цієї ролі
                var role_name_user = Model.date.User_roles[j].role_name;
                if (usersSorted[i].role_id == 1 && usersSorted[i].banned == 0) {

                    content_table += "<tr><td><span id='firstName'>" + usersSorted[i].firstName + "</span></td><td><span id='mail'>" + usersSorted[i].email + "</span></td><td><span class='user'><strong>" + role_name_user + "</strong></span></td><td></td><td><a href='#myModal' data-toggle='modal' data-target='#change_status_user' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-xs button_change_status' onclick=chengestatus(" + usersSorted[i].id + ") id_user='" + usersSorted[i].id + "'>ЗМІНИТИ СТАТУС</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#banned' id='login-button2' onclick='loginModule()'><button class='btn btn-warning btn-xs button_banned_user'onclick=button_banned_users(" + usersSorted[i].id + ")  id_user='" + usersSorted[i].id + "'>ВНЕСТИ В ЧОРНИЙ СПИСОК</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user(" + usersSorted[i].id + ")  id_user='" + usersSorted[i].id + "'>ВИДАЛИТИ</button></a></td></tr>";
                }
            }
        }
    }


    place_for_table.innerHTML = content_table;
}
UsersTabComboboxChangeController();


function BlackListUsersTabController() {

    var filter = document.getElementById('filterforblacklist');
    var current_filter = filter.selectedIndex;
    console.log(current_filter);

    var n = new Array(Users);
    var usersSorted = n[0].sort(function (a, b) {
        switch (current_filter) {
        case 0:
            return a.firstName.localeCompare(b.firstName);
            break;
        case 1:
            return a.email.localeCompare(b.email);
            break;
        };
    });

    var content_table = '';
    for (var i = 0; i < usersSorted.length; i++) { //перебір масиву юзерів
        for (j = 0; j < Model.date.User_roles.length; j++) { // перебір ролей цих юзерів в системі
            if (usersSorted[i].role_id == Model.date.User_roles[j].id) { // якщо ай ді ролі юзера співпада з роллю в системі, то ми присвоюємо юзеро значення цієї ролі
                var role_name_user = Model.date.User_roles[j].role_name;
                if (usersSorted[i].banned == 1) {

                    content_table += "<tr><td><span id='firstName'>" + usersSorted[i].firstName + "</span></td><td><span id='mail'>" + usersSorted[i].email + "</span></td><td><span class='user'><strong>" + role_name_user + "</strong></span></td> <td></td><td></td></td><td><a href='#myModal' data-toggle='modal' data-target='#banned' id='login-button2' onclick='loginModule()'><button class='btn btn-warning btn-xs button_banned_user' onclick=button_banned_users(" + usersSorted[i].id + ") id_user='" + usersSorted[i].id + "'>ВИНЕСТИ З ЧОРНИЙ СПИСОК</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user(" + usersSorted[i].id + ")  id_user='" + usersSorted[i].id + "'>ВИДАЛИТИ</button></a></td></tr>";
                }
            }
        }
    }
    place_for_blacklist.innerHTML = content_table;
}
BlackListUsersTabController();


function AdministrationUsersTabController() {

    var content_table = '';
    for (var i = 0; i < Users.length; i++) { //перебір масиву юзерів
        for (j = 0; j < Model.date.User_roles.length; j++) { // перебір ролей цих юзерів в системі
            if (Users[i].role_id == Model.date.User_roles[j].id) { // якщо ай ді ролі юзера співпада з роллю в системі, то ми присвоюємо юзеро значення цієї ролі
                var role_name_user = Model.date.User_roles[j].role_name;
                if (Users[i].role_id != 1) {

                    content_table += "<tr><td><span id='firstName'>" + Users[i].firstName + "</span></td><td><span id='mail'>" + Users[i].email + "</span></td><td><span class='user'><strong>" + role_name_user + "</strong></span></td> <td></td><td><a href='#myModal' data-toggle='modal' data-target='#change_status_user' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-xs' onclick=chengestatus(" + Users[i].id + ") id_user='" + Users[i].id + "'>ЗМІНИТИ СТАТУС</button></a></td><td></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user(" + Users[i].id + ")  id_user='" + Users[i].id + "'>ВИДАЛИТИ</button></a></td></tr>";
                }
            }
        }
    }
    place_for_administration.innerHTML = content_table;
}
AdministrationUsersTabController();


// function UserTabController() {

//  document.getElementById('filter').onchange = UsersTabComboboxChangeController();

//     var buttons_status = document.querySelectorAll('.button_change_status');
//     for (var i = 0; i < buttons_status.length; i++) {
//         buttons_status[i].onclick = chengestatus();
//     }

//     var button_banned_user = document.querySelectorAll('.button_banned_user');
//     for (var i = 0; i < button_banned_user.length; i++) {
//         button_banned_user[i].onclick = button_banned_users();
//     }

//     var button_delete_user = document.querySelectorAll('.button_delete_user');
//     for (var i = 0; i < button_delete_user.length; i++) {
//     button_delete_user[i].onclick = button_delete_user();
//     }

// }


function capcha() {

    var a = Math.ceil(Math.random() * 9);
    var b = Math.ceil(Math.random() * 9);
    var c = Math.ceil(Math.random() * 9);
    var d = Math.ceil(Math.random() * 9);
    var e = Math.ceil(Math.random() * 9);
    var code = a * b * c * d * e;
    number = code;
}


function resetCapcha() {
    if (document.getElementById('txtInput').value) {
        document.getElementById('txtInput').value = "";
    }
    if (document.getElementById('txtInput_delete').value) {
        document.getElementById('txtInput_delete').value = "";
    }
    if (document.getElementById('txtInput_banned').value) {
        document.getElementById('txtInput_banned').value = "";
    }
}

function chengestatus(id) {
    console.log('id');
    var attribute = id;
    var current_user = get_user_by_id(attribute);
    var first_name = current_user.firstName;
    g = current_user;
    document.getElementById('name_of_user').innerHTML = "<strong>" + first_name + "</strong>";
    var carrent_user_status = current_user.role_id;
    var j = carrent_user_status - 1;
    console.log(carrent_user_status);
    document.getElementById('select_status').options[j].selected = true;

    result();
    document.getElementById("txtCaptcha").value = number;
    document.getElementById("txtCaptchaDiv").innerHTML = number;
}


function changestatus() {
    var new_status = document.getElementById('select_status');
    var change_status_user = new_status.options[new_status.selectedIndex].getAttribute("role_id");
    var current_user = g;
    console.log(current_user);
    var str1 = document.getElementById('txtCaptcha').value;
    var str2 = document.getElementById('txtInput').value;
    if (str1 == str2) {
        current_user.role_id = change_status_user;
        document.getElementById('txtInput').value = "";
        console.log("id=>" + current_user.role_id);
        Model.save_localStorage();
        UsersTabComboboxChangeController();
        BlackListUsersTabController();
        AdministrationUsersTabController();

    }
}

function button_banned_users(id) {
    var attribute = id;
    var current_user = get_user_by_id(attribute);
    if (current_user.banned == 1) {
        document.getElementById('change_status_blacklist').innerHTML = "Винести";
        document.getElementById('myModalLabel_blacklist').innerHTML = "Винести з чорного списку";
    } else {
        document.getElementById('change_status_blacklist').innerHTML = "Внести";
        document.getElementById('myModalLabel_blacklist').innerHTML = "Внести до чорного списку";
    }
    f = current_user;
    document.getElementById('name_of_user_banned').innerHTML = current_user.firstName;
    console.log(current_user);

    result();
    document.getElementById("txtCaptcha_banned").value = number;
    document.getElementById("txtCaptchaDiv_banned").innerHTML = number;
}

function banned() {
    var str1 = document.getElementById('txtCaptcha_banned').value;
    var str2 = document.getElementById('txtInput_banned').value;
    var current_user = f;
    console.log(current_user)
    if (str1 == str2) {
        if (current_user.banned == 0) {
            for (var i = 0; i < Model.date.Users.length; i++) {
                if (current_user == Model.date.Users[i]) {
                    Model.date.Users[i].banned = 1;
                    document.getElementById('txtInput_banned').value = "";
                }
            }
        } else {
            for (var i = 0; i < Model.date.Users.length; i++) {
                if (current_user == Model.date.Users[i]) {
                    Model.date.Users[i].banned = 0;
                    document.getElementById('txtInput_banned').value = "";
                }
            }
        }
    } else {
        document.getElementById('txtInput_banned').value = "";
    }

    Model.save_localStorage();
    UsersTabComboboxChangeController();
    BlackListUsersTabController();
    AdministrationUsersTabController();
}

function button_delete_user(id) {
    var attribute = id;
    var current_user = get_user_by_id(attribute);
    console.log(current_user);
    l = current_user;
    document.getElementById('name_of_user_delete').innerHTML = current_user.firstName;
    for (j = 0; j < Model.date.User_roles.length; j++) {
        if (current_user.role_id == Model.date.User_roles[j].id) {
            var current_user_status = Model.date.User_roles[j].role_name;
        }
    }
    document.getElementById('main_status_of_user').innerHTML = current_user_status;

    result();
    document.getElementById("txtCaptcha_delete").value = number;
    document.getElementById("txtCaptchaDiv_delete").innerHTML = number;
}

function deleteuser() {
    var str1 = document.getElementById('txtCaptcha_delete').value;
    var str2 = document.getElementById('txtInput_delete').value;
    console.log(str1, str2);
    var current_user = l;
    console.log(current_user);
    for (var i = 0; i < Model.date.Users.length; i++) {
        if (str1 == str2) {
            if (current_user == Model.date.Users[i]) {
                document.getElementById('txtInput_delete').value = "";
                Model.date.Users.splice(i, 1)
            }
        } else {
            document.getElementById('txtInput_delete').value = "";
        }
    }
    Model.save_localStorage();
    UsersTabComboboxChangeController();
    BlackListUsersTabController();
    AdministrationUsersTabController();
}


function get_user_by_id(user_id) {
    var Users = Model.date.Users;
    for (var i = 0; i < Users.length; i++) {
        if (Users[i].id == user_id) {
            var catch_user = Users[i];
            break;
        }
    }
    return catch_user;
    console.log(catch_user)
}

search_user.addEventListener("keyup", function () {
    place_for_table.innerHTML = '';
    var content_table = '';
    var value = search_user.value;
    if (value.replace(/^\s+|\s+$/g, '') === '') {
        UsersTabComboboxChangeController();
    } else {
        for (var i = 0; i < Users.length; i++) {
            if (Users[i].role_id == 1 && Users[i].banned == 0) {
                if (Users[i].firstName.toString().toLowerCase().indexOf(value.toLowerCase()) + 1) {
                    for (j = 0; j < Model.date.User_roles.length; j++) {
                        if (Users[i].role_id == Model.date.User_roles[j].id) {
                            var role_name_user = Model.date.User_roles[j].role_name;

                            // search_for_user.push(Users[i]);


                            content_table += "<tr><td><span id='firstName'>" + Users[i].firstName + "</span></td><td><span id='mail'>" + Users[i].email + "</span></td><td><span class='user'><strong>" + role_name_user + "</strong></span></td><td></td><td><a href='#myModal' data-toggle='modal' data-target='#change_status_user' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-xs button_change_status' onclick=chengestatus(" + Users[i].id + ") id_user='" + Users[i].id + "'>ЗМІНИТИ СТАТУС</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#banned' id='login-button2' onclick='loginModule()'><button class='btn btn-warning btn-xs button_banned_user'onclick=button_banned_users(" + Users[i].id + ")  id_user='" + Users[i].id + "'>ВНЕСТИ В ЧОРНИЙ СПИСОК</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user(" + Users[i].id + ")  id_user='" + Users[i].id + "'>ВИДАЛИТИ</button></a></td></tr>";
                        }
                    }
                }
            }
        }
        place_for_table.innerHTML = content_table;
        console.log(search_for_user);
    }
})

search_banned_user.addEventListener("keyup", function () {
    place_for_blacklist.innerHTML = '';
    var content_blacklist = '';
    var value = search_banned_user.value;

    if (value.replace(/^\s+|\s+$/g, '') === '') {
        BlackListUsersTabController();
    } else {
        for (var i = 0; i < Users.length; i++) {
            if (Users[i].banned == 1) {
                if (Users[i].firstName.toString().toLowerCase().indexOf(value.toLowerCase()) + 1) {
                    for (j = 0; j < Model.date.User_roles.length; j++) {
                        if (Users[i].role_id == Model.date.User_roles[j].id) {
                            var role_name_user = Model.date.User_roles[j].role_name;
                            content_blacklist += "<tr><td><span id='firstName'>" + Users[i].firstName + "</span></td><td><span id='mail'>" + Users[i].email + "</span></td><td><span class='user'><strong>" + role_name_user + "</strong></span></td> <td></td><td></td></td><td><a href='#myModal' data-toggle='modal' data-target='#banned' id='login-button2' onclick='loginModule()'><button class='btn btn-warning btn-xs button_banned_user' onclick=button_banned_users(" + Users[i].id + ") id_user='" + Users[i].id + "'>ВИНЕСТИ З ЧОРНИЙ СПИСОК</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user(" + Users[i].id + ")  id_user='" + Users[i].id + "'>ВИДАЛИТИ</button></a></td></tr>";
                        }
                    }
                }
            }
        }
        place_for_blacklist.innerHTML = content_blacklist;
    }
})