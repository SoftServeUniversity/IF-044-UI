  (function() {
      var loginButton = document.getElementById('loginButton');
      var email = document.getElementById('inputEmail3');
      var password = document.getElementById('inputPassword3');
      var closeButton = document.getElementById('closeButton');
      var res1, res2, currentUser;
      var errorBlock = document.getElementsByClassName('error-block')[0]

      function errorWrite() {
          errorBlock.innerHTML = 'Не правильно уведенный Пароль або Пошта';
      };

      function postWishMsg() {
          alert('Вітаю ' + Users[currentUser].firstName + '!')
      }

      function clearForms() {

      }

      loginButton.onclick = function() {
          errorBlock.innerHTML = '';


          for (var i = 0; i < Users.length; i++) {
              if (email.value == Users[i].email) {
                  res1 = true;
                  currentUser = i;
                  break;
              } else if (email.value == Users[i].username) {
                  res1 = true;
                  currentUser = i;
                  break;
              } else {
                  res1 = false;
              };

          };

          if (currentUser >= 0) {
              if (Users[currentUser].password == password.value) {
                  res2 = true;
              } else {
                  res2 = false;
              };
          };




          var Error = false;


          if (res1 == false) {
              errorWrite();
              Error = true;
          };

          if (res2 == false) {
              errorWrite();
              Error = true;
          };

          if (!Error) {
              postWishMsg();
              clearForms();
          };
          return false;
      };
  })()