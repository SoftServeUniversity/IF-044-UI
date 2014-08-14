// window.onload = admin_panel();
// function admin_panel(){
function redirect() {
    if (Model.date.session_user_id) {
        var current = Model.date.session_user_id;
        if (Model.date.Users[current].id.role_id == 3) {
            window.location = '404.html';
        }
    } else {
        window.location = '404.html';
    }
}
redirect();



var default_step_value = 10;
var shorten_start_length = 10;
var active_item_neighborhood = 2;

var Users = Model.date.Users;
var Users_simple;
var Users_black;
var place_for_administration = document.getElementById('administrationlist');
var place_for_blacklist = document.getElementById('blacklist');

/*------------------------------------------------*/

var search_user = document.getElementById('search-input');
var search_banned_user = document.getElementById('blacklist_search-input');
search_user.addEventListener("keyup", function() {


    var value = search_user.value;
    var Users_search;
    var search = [];
    console.log(value);
    if (value.replace(/^\s+|\s+$/g, '') === '') {
        current_pages = 0;
        init();
    } else {
        for (var i = 0; i < Users_simple.length; i++) {
            if (Users_simple[i].firstName.toString().toLowerCase().indexOf(value.toLowerCase()) + 1) {
                search.push(Users_simple[i]);

            }
        }
        Users_search = search;
        current_pages = 0;
        init(Users_search);
    }
})

search_banned_user.addEventListener("keyup", function() {


    var value = search_banned_user.value;
    var Users_search;
    var search = [];
    console.log(value);
    if (value.replace(/^\s+|\s+$/g, '') === '') {
        current_pages = 0;
        init_blacklist();
    } else {
        for (var i = 0; i < Users_black.length; i++) {
            if (Users_black[i].firstName.toString().toLowerCase().indexOf(value.toLowerCase()) + 1) {
                search.push(Users_black[i]);

            }
        }
        Users_search = search;
        current_pages = 0;
        init_blacklist(Users_search);
    }
})

/*------------------------------------------------------------*/
function UsersTabComboboxChangeFilter() {
    UsersTabComboboxChangeController();
    init();
}

function BlackListUsersTabFilter() {
    BlackListUsersTabController();
    init_blacklist();
}


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
    var usersSorted = n[0].sort(function(a, b) {
        switch (current_filter) {
            case 0:
                return a.firstName.localeCompare(b.firstName);
                break;
            case 1:
                return a.email.localeCompare(b.email);
                break;
        };
    });



    var user_table = [];
    for (var i = 0; i < usersSorted.length; i++) { //перебір масиву юзерів
        for (j = 0; j < Model.date.User_roles.length; j++) { // перебір ролей цих юзерів в системі
            if (usersSorted[i].role_id == Model.date.User_roles[j].id) { // якщо ай ді ролі юзера співпада з роллю в системі, то ми присвоюємо юзеро значення цієї ролі
                var role_name_user = Model.date.User_roles[j].role_name;
                if (usersSorted[i].role_id == 1 && usersSorted[i].banned == 0) {
                    user_table.push(usersSorted[i]);
                }
            }
        }
    }
    Users_simple = user_table;
    console.log(Users_simple);


}
UsersTabComboboxChangeController();




function BlackListUsersTabController() {

    var filter = document.getElementById('filterforblacklist');
    var current_filter = filter.selectedIndex;


    var n = new Array(Users);
    var usersSorted = n[0].sort(function(a, b) {
        switch (current_filter) {
            case 0:
                return a.firstName.localeCompare(b.firstName);
                break;
            case 1:
                return a.email.localeCompare(b.email);
                break;
        };
    });

    var blacklist_table = [];
    for (var i = 0; i < usersSorted.length; i++) { //перебір масиву юзерів
        for (j = 0; j < Model.date.User_roles.length; j++) { // перебір ролей цих юзерів в системі
            if (usersSorted[i].role_id == Model.date.User_roles[j].id) { // якщо ай ді ролі юзера співпада з роллю в системі, то ми присвоюємо юзеро значення цієї ролі
                var role_name_user = Model.date.User_roles[j].role_name;
                if (usersSorted[i].banned == 1) {
                    blacklist_table.push(usersSorted[i]);
                }
            }
        }
    }
    Users_black = blacklist_table;
    console.log(blacklist_table);
}
BlackListUsersTabController();

// function getParams(){
//     var params = {};
//     var b = current_pages;
//     params.start = b.toString();
//     params.step = '10';
//     return(params);
// }

/*----------------------------------------------*/


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

/*-------------------------------------------------------------*/


var objForUrl = {
    getUrlParams: function() {
        var urlForParse = decodeURIComponent(window.location.search);
        var objectParams = {},
            key, value;
        if (urlForParse.length) {
            var arrayUrlForParse = urlForParse.split('&');
            for (var i = 0; i < arrayUrlForParse.length; i++) {
                key = arrayUrlForParse[i].split('=')[0];
                value = arrayUrlForParse[i].split('=')[1];
                if (i == 0) {
                    objectParams[key.substring(1)] = value;
                } else {
                    objectParams[key] = value;
                }

            }
        }else{
            objectParams = {start:0,
                            step:10    
                            }
        }
        return objectParams;
    },
    parseUrlForSearch: function() {
        if (window.location.search) {
            var searchQuery = this.getUrlParams().searchQuery;
            this.search_input.value = searchQuery;
            this.showAllcontaining(searchQuery, this.getUrlParams().currentpage, 4);
        }
    }
}
var current_pages = (objForUrl.getUrlParams().start) ? objForUrl.getUrlParams().start : 0;

/*--------------------------------------------------*/

objForUrl.getUrlParams();


function init(search_result) {
    var result;
    var current_result = search_result
    if (current_result != 0 && current_result != undefined) {
        result = current_result;
    } else {
        result = Users_simple;
    }

    var step = 10;
    var pages = Math.ceil(result.length / step);
    document.getElementById('usersTable').innerHTML = initialize(result, pages);
    current_result = result;
    current_pages = pages;
    return result;
}
init();

function init_blacklist(search_result) {
    var result;
    var current_result = search_result
    if (current_result != 0 && current_result != undefined) {
        result = current_result;
    } else {
        result = Users_black;
    }

    var step = 10;
    var pages = Math.ceil(result.length / step);
    document.getElementById('blacklist').innerHTML = initialize(result, pages);
    current_result = result;
    current_pages = pages;
    return result;
}

init_blacklist();

// 
// function for returning portion of result set
// based on the input array, start-element and number 
// of elements to return - step
// 
function sliceTheSet(array, start, step) {

        var step = step || default_step_value;
        start = start * step;
        var end = parseInt(start) + parseInt(step);
        if (end < array.length) {

            return array.slice(start, end);
        } else {
            return array.slice(start, end);
        }
    }
    // 
    // function that returns the limited set of result_set
    // 
    // @result_set - result of filtering, search etc.
    // 

function currentSelection(result_set, par_step) {

    var params = objForUrl.getUrlParams();
    console.log(params);
    var start, step;
    if (params["start"] == undefined || params["start"] == null) {
        start = 0;
        step = par_step;
    } else {
        start = params["start"];
        step = params["step"];
    }
    return sliceTheSet(result_set, start, step);
}

//
// fuction that builds the table of results
function build_table(data, step) {
    var data = currentSelection(data, step);

    var result = "";
    for (var i = 0; i < data.length; i++) {
        for (j = 0; j < Model.date.User_roles.length; j++) {
            if (data[i].role_id == Model.date.User_roles[j].id) {
                var role_name_user = Model.date.User_roles[j].role_name;
                if (data[i].banned == 0) {
                    result += "<tr><td><span id='firstName'>" + data[i].firstName + "</span></td><td><span id='mail'>" + data[i].email + "</span></td><td><span class='user'><strong>" + role_name_user + "</strong></span></td><td></td><td><a href='#myModal' data-toggle='modal' data-target='#change_status_user' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-xs button_change_status' onclick=chengestatus(" + data[i].id + ") id_user='" + data[i].id + "'>ЗМІНИТИ СТАТУС</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#banned' id='login-button2' onclick='loginModule()'><button class='btn btn-warning btn-xs button_banned_user'onclick=button_banned_users(" + data[i].id + ")  id_user='" + data[i].id + "'>ВНЕСТИ В ЧОРНИЙ СПИСОК</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user(" + data[i].id + ")  id_user='" + data[i].id + "'>ВИДАЛИТИ</button></a></td></tr>";
                } else {
                    result += "<tr><td><span id='firstName'>" + data[i].firstName + "</span></td><td><span id='mail'>" + data[i].email + "</span></td><td><span class='user'><strong>" + role_name_user + "</strong></span></td> <td></td><td></td></td><td><a href='#myModal' data-toggle='modal' data-target='#banned' id='login-button2' onclick='loginModule()'><button class='btn btn-warning btn-xs button_banned_user' onclick=button_banned_users(" + data[i].id + ") id_user='" + data[i].id + "'>ВИНЕСТИ З ЧОРНОГО СПИСКУ</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user(" + data[i].id + ")  id_user='" + data[i].id + "'>ВИДАЛИТИ</button></a></td></tr>";
                }
            }
        }
    }
    return result;
}

// 
// function to create clickable link to specified thing
// 
// @text - thind that must be decorated
// @start - (position for paginator of linked page) parameter of the link
// @step - (number of results per page) parameter of the link
//
function decorateLink(active, text, start, step) {
    var href = location.toString();
    href = href.split("?")[0];
    var step = step || default_step_value;
    href += "?start=" + start + "&step=" + step;
    var result = "<a href=" + href + ">" + text + "</a>\n";
    if (active + 1 === text) {
        result = "<li class=\"active\">\n" + result + "</li>\n";
    } else {
        result = "<li>\n" + result + "</li>\n";
    }
    return result;
}

// 
// function that creates the array of objects that represent the pagination bar
// 
// @active - number of active start position
// @pages - number of pages ( elements / step_size )
//
function create_pagination_bar(active, pages) {
    var result = [];
    var neighbour = active_item_neighborhood;

    if (pages > 1) {
        if (pages <= shorten_start_length) {
            for (var i = pages; i >= 1; i--) {
                result.unshift(i);
            };
        } else {
            // test for the beginning of pagination
            if (active - neighbour <= neighbour) {
                result = ["...", pages - 2, pages - 1, pages]
                var count = shorten_start_length - result.length;
                for (var i = count; i > 0; i--) {
                    result.unshift(i);
                };

            } else if (active + neighbour >= pages) {
                result = [1, 2, 3, "..."];
                var count = shorten_start_length - result.length;
                for (var i = pages - count; i <= pages; i++) {
                    result.push(i);
                };

            } else {
                result = [1, "..."];
                var start = active - neighbour;
                var end = active + neighbour;
                for (var i = start; i <= end; i++) {
                    result.push(i);
                }
                result = result.concat(["...", pages]);
            }
        }
    }
    return result;
}

//
// function to print numbers in a row
// 

function printNavigation(active, pages) {
        var thumbs = create_pagination_bar(active, pages);
        var result = "";
        for (var i = 0; i < thumbs.length; i++) {
            var text = thumbs[i];
            var step = default_step_value;
            if (text === "...") {
                result += "<li class=\"disabled\">\n";
                result += "<a>" + text + "</a>";
                result += "</li>\n";
            } else {
                result += decorateLink(active, text, text - 1, 10);
            }
        }
        result = "<ul class=\"pagination\"> \n" + result + "</ul>\n";


        return result;
    }
    // function that bind all pagination logic in one place
    // 
    // @pages - number of pages ( elements / step_size )
    // 

function initialize(data, pages) {
    var result;
    var params = objForUrl.getUrlParams();

    var start = parseInt(params["start"]);

    if (params["start"] != undefined) {
        if (start < 0 || start > pages) {
            result = "Invalid input parameters";
        } else {
            result = build_table(data, 10)
            result += "\n";
            result += printNavigation(start, pages);
        }
    } else {
        result = build_table(data, 20)
        result += "\n";
        result = printNavigation(1, pages);
    }

    return result;
}

/*===========================================================*/



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
        init();
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
    init_blacklist();
    init();
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
    init();
    init_blacklist();
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