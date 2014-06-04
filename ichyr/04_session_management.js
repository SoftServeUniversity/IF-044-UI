function SessionManager() {

    var current_user = null;
    var warnings = "";
    var that = this;

    return function() {

        // функція для логування
        // 
        // якщо існує користувач з таким імене і паролем
        // встановлюється актуальний користувач на такого користувача
        // повертається true;
        // 
        // в інших випадках повертаєтьcя false
        // та встановлюється допоміжне повідомлення про невірні дані
        // 

        that.login = function(username, password) {
            for (var i = Users.length - 1; i >= 0; i--) {
                if (Users[i].username == username) {
                    if (Users[i].password == password) {
                        current_user = Users[i];
                        return true;
                    } else {
                        warnings = "Введено невірне ім’я користувача чи пароль!"
                        return false;
                    }
                };
            };

            warnings = "Введено невірне ім’я користувача чи пароль!"
            return false;
        };

        that.logout = function(username, function) {
            current_user = null;
        }

        that.current_user = function() {
            return current_user;
        }

        that.get_current_user_id = function() {
            return current_user.id;
        }

        that.get_current_user_role = function() {
            return current_user.role;
        }
    }

}