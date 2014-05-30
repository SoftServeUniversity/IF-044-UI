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

      function changeLoginStatus() {
        Users[currentUser].login_status = 1;
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
              changeLoginStatus();
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


  function searchModule() {
    var searchInput = document.getElementById('searchForm');
    var textBox = document.getElementById('testBox');
    
    textBox.innerHTML = '';

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

    for(var i = 0; i<Tests.length; i++) {
      if(Tests[i].name.toLowerCase().indexOf(searchInput.value.toLowerCase()) >= 0) {
        createTestElement(i)
      };
    };
   
    return false;
  }



  function generalStatisticModule() {
      var dateStartInput = document.getElementById('dp1');
      var dateEndInput = document.getElementById('dp2');
      var dateInterval = {
         start: dateStartInput.value,
         end: dateEndInput.value
      };
      var categories = [[],[],[]];
      var monthObjectsArr = [];
      var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var variableYear;
      var tempArr = [];


        /* обєкт який ми передаємо в highcharts */
           
            var GlobalObj = {
            title: {
                text: 'Кількість пройдених тестів',
                x: -20 //center
            },
            subtitle: {
                text: 'По часу та категоріях',
                x: -20
            },
            xAxis: {
                categories: []
            },            
            yAxis: {
                title: {
                    text: 'Кількість тестів'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'шт'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Категорія 1',
                data: []
            }, {
                name: 'Категорія 2',
                data: []
            }, {
                name: 'Категорія 3',
                data: []
            }]
        };
      

     /* розкидує дати проходження тестів по категоріях до яких вони належать*/

      (function dateSortByCategories() {
        for(var i = 0; i<Tests.length; i++) {

          if(Tests[i].category === 1) {

             for(var k = 0; k<Tests[i].passed_date.length; k++){
                categories[0].push(Tests[i].passed_date[k]);
             };


          } else if(Tests[i].category === 2) {

             for(var l = 0; l<Tests[i].passed_date.length; l++){
                categories[1].push(Tests[i].passed_date[l]);
             };

          } else if(Tests[i].category === 3) {

             for(var m = 0; m<Tests[i].passed_date.length; m++){
                categories[2].push(Tests[i].passed_date[m]);
             };

          };
        };

        dateParser();
        
        checkDateInterval();

        monthParser();

        passedTestsCounter();

      })();

     /* створює в обєкті dateInterval ще два свойства - початок і кінець інтервалу в мілісекундах*/

      function dateParser() {
        var arr1 = dateInterval.start.split('/');
        var newstr1 = arr1[2] + '-' + arr1[1] + '-' + arr1[0]; 
        var arr2 = dateInterval.end.split('/');
        var newstr2 = arr2[2] + '-' + arr2[1] + '-' + arr2[0];

        dateInterval.startMiliseconds = Date.parse(newstr1);
        dateInterval.endMiliseconds = Date.parse(newstr2);
      }

   /*     парсить масиви категорій - підставляє дати проходження тесту в інтервал вибраного часу
        якщо дата не попадає у вибраний інтервал то міняє її на пусту строку(щоб не змінювати довжину масиву)
        другим циклом видаляє всі пусті строки і залишає тільки ті дати які попадають у вибраний інтервал*/
        
      function checkDateInterval() {
        for(var i = 0; i<categories.length; i++ ) {
           for(var k = 0; k<categories[i].length; k++ ){
            if(dateInterval.endMiliseconds < categories[i][k] || categories[i][k] < dateInterval.startMiliseconds) {
               categories[i].splice(k, 1, '');
            };
           };
        }; 

         for(var i = 0; i<categories.length; i++ ) {
          var a = categories[i].length;
          var newArr = []
           for(var k = 0; k<a; k++ ){
            if(categories[i][k] !== '') {
              var b = categories[i].slice(k, k+1);
              newArr.push(b[0]);
              };
            if(k === a-1){
              categories[i] = newArr;              
            };
           };
        };     
      }

/*       модуль бере дату початку пошуку і дату кінця, заповнює простір між ними потрібними місяцями і
       відсортовує кожну дату проходження тесту по приналежності до певного місяця*/

      function monthParser() {
     

         var startDateArr = new Date(dateInterval.startMiliseconds).toDateString().split(' ');
         var startDateObj = {
          startMonth: startDateArr[1],
          startYear: parseInt(startDateArr[3], 10)
        };

         var endDateArr = new Date(dateInterval.endMiliseconds).toDateString().split(' ');
         var endDateObj = {
          endMonth: endDateArr[1],
          endYear: parseInt(endDateArr[3], 10)
        };
        variableYear  = startDateObj.startYear;
         var newArr = [];

         top:

         if(startDateObj.startMonth === endDateObj.endMonth && startDateObj.startYear === endDateObj.endYear) {
           newArr.push({ month: startDateObj.startMonth,
                         year: startDateObj.startYear
                       });
         } else if(startDateObj.startYear !== endDateObj.endYear) {
               for(var i = 0; i<monthArr.length; i++) {
                 if(startDateObj.startMonth === monthArr[i]) {
                        newArr.push({
                                     month: monthArr[i],
                                     year: variableYear
                                   });
                    for(var k = i + 1; monthArr[k] !== startDateObj.endMonth; k++) {

                       newArr.push({
                                     month: monthArr[k],
                                     year: variableYear
                                   });
                       if(monthArr[k] === 'Dec' && endDateObj.endYear !== variableYear ){
                           k = -1, variableYear +=  1;
                        };
                       if(monthArr[k] === endDateObj.endMonth && endDateObj.endYear === variableYear ){
                         break top;               
                       };
                    };
                  };
               };              
               
         } else {
          for(var i = 0; i<monthArr.length; i++) {
            if(startDateObj.startMonth === monthArr[i]) {
              newArr.push({
                             month: monthArr[i],
                             year: variableYear
                          });
              for(var k = i + 1; monthArr[k] !== startDateObj.endMonth; k++) {
                       newArr.push({
                                     month: monthArr[k],
                                     year: variableYear
                                   });
                if(monthArr[k] === endDateObj.endMonth){
                  break top;
                };
             };
           };
          }; 
        };
          tempArr = newArr;
          for(var i = 0; i<newArr.length; i++){
           GlobalObj.xAxis.categories.push(newArr[i].month);
          };
      }


      function passedTestsCounter() {
         for(var m = 0; m<tempArr.length; m++){
            var newArr = []

              for(var i = 0; i<categories.length; i++){
                 for(var k = 0; k<categories[i].length; k++) {
                    var val = new Date(categories[i][k]).toDateString().split(' ');                
                    if(val[1] === tempArr[m].month && parseInt(val[3], 10) === tempArr[m].year){
                      newArr.push(categories[i][k]);
                  };
              };

              GlobalObj.series[i].data.push(newArr.length);
              newArr = [];
            };

         };
      }



      $('#main-content').highcharts(GlobalObj);
  }




 /* {
            title: {
                text: 'Кількість зданих тестів',
                x: -20 //center
            },
            subtitle: {
                text: 'По часу та категоріях',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Кількість тестів'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Категорія 1',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'Категорія 2',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Категорія 3',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }]
        }*/