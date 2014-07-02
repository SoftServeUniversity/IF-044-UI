function BlackListUsersTabController() {};

function AdministrationUsersTabController() {};



function UsersTabComboboxChangeController() {
    var place_for_table = document.getElementById('usersTable');
    var Users = Model.date.Users;
    var filter = document.getElementById('filter');
    var current_filter = filter.selectedIndex;
    console.log(current_filter_blacklist);

    var n = new Array(Users);

    var usersSorted = n.sort(function (a, b) {
        switch (current_filter) {
        case 0:
            return a.firstname.localeCompare(b.firstname);
            break;
        case 1:
            return a.email.localeCompare(b.email);
            break;
        };
    });

    // filter for banned and admin
    // if user.role == user and user_banned == 0
    //

    var content_table = '';
    for (var i = 0; i < usersSorted.length; i++) { //перебір масиву юзерів
        for (j = 0; j < Model.date.User_roles.length; j++) { // перебір ролей цих юзерів в системі
            if (usersSorted[i].role_id == Model.date.User_roles[j].id) { // якщо ай ді ролі юзера співпада з роллю в системі, то ми присвоюємо юзеро значення цієї ролі
                var role_name_user = Model.date.User_roles[j].role_name;
                //console.log(role_name_user);
                if (usersSorted[i].role_id == 1) {
                  content_table += "<tr><td><span id='firstName'>" + usersSorted[i].firstName + "</span></td><td><span id='mail'>" + usersSorted[i].email + "</span></td><td><span class='user'><strong>" + role_name_user + "</strong></span></td><td></td><td><a href='#myModal' data-toggle='modal' data-target='#change_status_user' id='login-button2' onclick='loginModule()'><button class='btn btn-success btn-xs button_change_status' id_user='" + usersSorted[i].id + "'>ЗМІНИТИ СТАТУС</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#banned' id='login-button2' onclick='loginModule()'><button class='btn btn-warning btn-xs button_banned_user'  id_user='" + usersSorted[i].id + "'>ВНЕСТИ В ЧОРНИЙ СПИСОК</button></a></td><td><a href='#myModal' data-toggle='modal' data-target='#delete_user' id='login-button2' onclick='loginModule()'><button class='btn btn-danger btn-xs ' onclick=button_delete_user(" + usersSorted[i].id + ")  id_user='" + usersSorted[i].id + "'>ВИДАЛИТИ</button></a></td></tr>";
                }
          }
        }
    }


    place_for_table.innerHTML = content_table;
}

function UserTabController() {

		document.getElementById('filter').onchange = UsersTabComboboxChangeController();

    var buttons_status = document.querySelectorAll('.button_change_status');
    for (var i = 0; i < buttons_status.length; i++) {
        buttons_status[i].onclick = chengestatus();
    }

    var button_banned_user = document.querySelectorAll('.button_banned_user');
    for (var i = 0; i < button_banned_user.length; i++) {
        button_banned_user[i].onclick = button_banned_users();
    }
}