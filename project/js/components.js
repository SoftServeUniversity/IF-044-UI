'use strict'

function loginModule() {
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
          email.value = '';
          password.value = '';
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
              clearForms();
              postWishMsg();
          };

          return false;
      };
  }



  function testsFilter() {

     var textBox = document.getElementById('testBox');
     var select = document.getElementById('selectForm');

     var subcategory1 = document.getElementById('vmil1');
     var subcategory2 = document.getElementById('vmil2');
     var subcategory3 = document.getElementById('vmil3');
     var subcategory4 = document.getElementById('vmil4');
     var subcategory5 = document.getElementById('vmil5');


     function createTestElement(i) {
       var newDiv = document.createElement('div');
       newDiv.className = 'test';
       var p = document.createElement('p');
       p.innerHTML = 'Тест: ';
       var a = document.createElement('a');
       a.innerHTML = Tests[i].name;
       p.appendChild(a);
       newDiv.appendChild(p);
       textBox.appendChild(newDiv);
     };

          Tests.sort(function (a, b) {return a.date - b.date});
       
          for(var i = 0; i<Tests.length; i++) {
            createTestElement(i);
          };     

     selectForm.onchange = function () {
      textBox.innerHTML = '';

        if(this.value === '1') {

         Tests.sort(function (a, b) {return a.date - b.date});
       
          for(var i = 0; i<Tests.length; i++) {
            createTestElement(i);
          };

        };

        if(this.value === '2') {
          
          Tests.sort(function (a, b) {return a.name > b.name});

            for(var i = 0; i<Tests.length; i++) {
            createTestElement(i);
          };
        };

        if(this.value === '3') {

          Tests.sort(function (a, b) {return a.category - b.category});
            
            for(var i = 0; i<Tests.length; i++) {
            createTestElement(i);
          };

        };

     }; 

     function showSubcategory() {
        textBox.innerHTML = '';

        if(this.id === 'vmil1'){

          for(var i = 0; i<Tests.length; i++) {
            if(Tests[i].subcategory === 8){
              createTestElement(i);
            }
          };
        };

        if(this.id === 'vmil2'){

          for(var i = 0; i<Tests.length; i++) {
            if(Tests[i].subcategory === 11){
              createTestElement(i);
            }
          };
        };

        if(this.id === 'vmil3'){

          for(var i = 0; i<Tests.length; i++) {
            if(Tests[i].subcategory === 1){
              createTestElement(i);
            }
          };
        };

        if(this.id === 'vmil4'){

          for(var i = 0; i<Tests.length; i++) {
            if(Tests[i].subcategory === 5){
              createTestElement(i);
            }
          };
        };

        if(this.id === 'vmil5'){

          for(var i = 0; i<Tests.length; i++) {
            if(Tests[i].subcategory === 7){
              createTestElement(i);
            }
          };
        };                          
          return false;      
     }

     subcategory1.onclick = showSubcategory;
     subcategory2.onclick = showSubcategory;
     subcategory3.onclick = showSubcategory;
     subcategory4.onclick = showSubcategory;
     subcategory5.onclick = showSubcategory;
  }