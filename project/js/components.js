'use strict'

function loginModule(e) {
    var loginButton = document.getElementById('loginButton');
    var email = document.getElementById('inputEmail3');
    var password = document.getElementById('inputPassword3');
    var closeButton = document.getElementById('closeButton');
    var res1, res2, currentUser;
    var errorBlock = document.getElementsByClassName('error-block')[0];
    errorBlock.style.visibility = 'hidden';
    var userMenuButton = document.getElementById('userMenuButton');
    loginButton.removeAttribute('data-dismiss');

    function errorWrite() {
        errorBlock.style.visibility = '';
        errorBlock.innerHTML = 'Не правильно уведенный Пароль або Пошта';
    };


    function changeLoginStatus() {
        Model.date.session_user_id = Model.date.Users[currentUser].id;
        console.log(Model.date.Users[currentUser].id);
        Model.date.session_user_role = Model.date.Users[currentUser].role_id;
        Model.save_localStorage();
    }

    function clearForms() {
        email.value = '';
        password.value = '';
    }

    function hideModalBox() {
        loginButton.setAttribute('data-dismiss', 'modal');
    }

    loginButton.onclick = function () {
        errorBlock.innerHTML = '';

        
        for (var i = 0; i < Model.date.Users.length; i++) {
            if (email.value === Model.date.Users[i].email) {
                res1 = true;
                currentUser = i;
                break;
            } else if (email.value == Model.date.Users[i].username) {
                res1 = true;
                currentUser = i;
                break;
            } else {
                res1 = false;
            };

        };

        if (currentUser >= 0) {
            if (Model.date.Users[currentUser].password == password.value) {
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
            hideModalBox();
            changeLoginStatus();
            clearForms();
            changeLoginPic();
            changeUserNavPanel()
        };

        return false;
    };
}

function headerUserNavPanel() {
    var MenuButton = document.getElementById('userMenuButton');
    var NavPanel = document.getElementById('userNavPanel');

    if(NavPanel.style.display === 'none' || NavPanel.style.display === '') {
        NavPanel.style.display = 'block';
    } else {
        NavPanel.style.display = 'none';
    }
}

function getCurrrentUserName() {
    if(Model.date.session_user_id){
       for(var i = 0; i< Model.date.Users.length; i++) {
          if(Model.date.Users[i].id === Model.date.session_user_id){
             userMenuButton.innerHTML = Model.date.Users[i].username;
          };
       };
     } else {return};
 }

 function changeLoginPic() {
    var loginUserPic = document.getElementById('login-button');
    var NavPanel = document.getElementById('userNavPanel');

    if(Model.date.session_user_id){

        loginUserPic.style.display = 'none';
        userMenuButton.style.display = 'inline-block';
        getCurrrentUserName();
        changeUserNavPanel();

    } else {
            loginUserPic.style.display = 'block';
            userMenuButton.style.display = 'none';
            NavPanel.style.display = 'none';
    };
}

  function changeUserNavPanel() {
    var currentUser;
    var changedA = document.getElementById('changedA')
      for (var i = 0 ; i< Model.date.Users.length; i++) {
        if(Model.date.Users[i].id === Model.date.session_user_id){
            currentUser = Model.date.Users[i];
        };
      };

      if(currentUser.role_id === 1){
        changedA.style.display = 'none';
      } else if(currentUser.role_id === 2){
         changedA.style.display = 'inline-block';
         changedA.innerHTML = 'Кабінет Модератора';
         changedA.href = 'moderator_filtertests_nyarytc.html';
      } else if(currentUser.role_id === 3){
          changedA.style.display = 'inline-block';
          changedA.innerHTML = 'Панель Адміністратора';
          changedA.href = 'administration_panel.html';
      } else {return}
  }

function logOutModule() {
    delete Model.date.session_user_id;
    Model.date.session_user_role = null;
    Model.save_localStorage();
    changeLoginPic();
    window.location = 'index.html';
    return false;
}

function expandMenuModule() {
    var expandMenu = document.getElementById('expand-header-menu');
    var headerMenu = document.getElementById('header-menu');
    var header = document.getElementsByTagName('header')[0];
    var loginButton = document.getElementById('login-button');
    var userMenuButton = document.getElementById('userMenuButton');
    var NavPanel = document.getElementById('userNavPanel');


    expandMenu.appendChild(headerMenu);

    expandMenu.appendChild(loginButton);
    loginButton.style.bottom = '85px';
    loginButton.style.right = '85px';

    expandMenu.appendChild(userMenuButton);
    userMenuButton.style.bottom = '95px';
    userMenuButton.style.right = '85px';

    if(expandMenu.className.indexOf('active-bar') <= 0) {

        expandMenu.className = expandMenu.className + ' active-bar';
        header.className = header.className + ' main-expand';
        headerMenu.className = headerMenu.className + ' header-menu-visibility';
    } else {
        expandMenu.className = expandMenu.className.substr(0, expandMenu.className.indexOf(' '));
        header.className = header.className.substr(0, header.className.indexOf(' '));
        headerMenu.className = headerMenu.className.substr(0, headerMenu.className.indexOf(' '));
        NavPanel.style.display = 'none';
    }


}













function testsFilter() {

    var textBox = document.getElementById('testBox');
    var select = document.getElementById('selectForm');
    var newTestsArr = [];
    var testsCategoryId = parseInt(getLocation(), 10);
    var subcatTitle = document.querySelector('.sub-category b');

    function createTestElement(i) {
        var newDiv = document.createElement('div');
        newDiv.className = 'test';
        var h3 = document.createElement('h3');
        var a = document.createElement('a');
        a.innerHTML = Model.date.Tests[i].name;
        a.href = 'Test.html?t_id=' + newTestsArr[i].id;
        var p = document.createElement('p');
        p.innerHTML = Model.date.Tests[i].description;
        h3.appendChild(a);
        newDiv.appendChild(h3);
        newDiv.appendChild(p);
        textBox.appendChild(newDiv);
    };
    
    function getLocation() {
       var loc = location.search.split('=');
       return loc[1];
    }

    function titleWrite() {
        for(var i = 0; i< Model.date.Tests_categories.length; i++) {
            if(Model.date.Tests_categories[i].id === testsCategoryId) {
               subcatTitle.innerHTML = 'Пошук тестів у ' + Model.date.Tests_categories[i].name;
            };
        };
    };

    for(var i = 0; i<Model.date.Tests.length; i++) {
        console.log(Model.date.Tests[i].subcategory);
        if(Model.date.Tests[i].subcategory === testsCategoryId) {
           newTestsArr.push(Model.date.Tests[i]);
        };
    };
    
    titleWrite();
    newTestsArr.sort(function (a, b) {
        return a.date - b.date
    });

    for (var i = 0; i < newTestsArr.length; i++) {
        createTestElement(i);
    };

    selectForm.onchange = function () {
        textBox.innerHTML = '';

        if (this.value === '1') {

            newTestsArr.sort(function (a, b) {
                return a.date - b.date
            });

            for (var i = 0; i < newTestsArr.length; i++) {
                createTestElement(i);
            };

        };

        if (this.value === '2') {

            newTestsArr.sort(function (a, b) {
                return a.name > b.name
            });

            for (var i = 0; i < newTestsArr.length; i++) {
                createTestElement(i);
            };
        };

    };

}


function searchModule() {
    var searchInput = document.getElementById('searchForm');
    var textBox = document.getElementById('testBox');

    textBox.innerHTML = '';

    function createTestElement(i) {
        var newDiv = document.createElement('div');
        newDiv.className = 'test';
        var h3 = document.createElement('h3');
        var a = document.createElement('a');
        a.innerHTML = Model.date.Tests[i].name;
        var p = document.createElement('p');
        p.innerHTML = Model.date.Tests[i].description;
        h3.appendChild(a);
        newDiv.appendChild(h3);
        newDiv.appendChild(p);
        textBox.appendChild(newDiv);
    };

    for (var i = 0; i < Model.date.Tests.length; i++) {
        if (Model.date.Tests[i].name.toLowerCase().indexOf(searchInput.value.toLowerCase()) >= 0) {
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
    var categories = [
    ];
    var monthObjectsArr = [];
    var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    var variableYear;
    var tempArr = [];
    var tabs = document.getElementsByClassName('tabs');
    var checkboxes;


    /* обєкт який ми передаємо в highcharts */

    var GlobalObj = {
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: []
    };
     
     if(tabs[0].className === 'tabs active') {

        graphicTitles('Кількість пройдених тестів', 'По часу та категоріях', 'Кількість тестів', 'шт');

        dateSortByCategories();

        dateParser();

        checkDateInterval();

        monthParser();

        passedTestsCounter();

        $('#stat1').highcharts(GlobalObj);

    } else if(tabs[1].className === 'tabs active') {

        graphicTitles('Загальний середній бал', 'По часу', 'Середній бал', '');

        crateSingleSeries('заг. сер. бал');

        dateParser();

        fillSeries();

        monthParser();
       
        generalScorePerMonth();

        $('#stat2').highcharts(GlobalObj);
         
    } else if(tabs[2].className === 'tabs active') {

        graphicTitles('Загальний середній бал', 'По часу та віку', 'Середній бал', '');

        activeCheckboxChecking('ageList-checkbox');

        dateParser();

        fillSeries2();

        monthParser();

        generalScorePerMonth();

        clearEmptySeries();

        $('#stat3').highcharts(GlobalObj);


    } else if(tabs[3].className === 'tabs active') {

        graphicTitles('Загальний середній бал', 'По часу та ступені', 'Середній бал', '');

        activeCheckboxChecking('gradeList-checkbox');

        dateParser();

        fillSeries3();

        monthParser();

        generalScorePerMonth();

        clearEmptySeries();

        $('#stat4').highcharts(GlobalObj);

    };
  
  // перебирає масив чекбоксів і якшо чекбокс - чекед, пушає відповідну серію з глобал обєкта і ню аррей і потім заміняє ним серії в глобал обєкті 

    function clearEmptySeries() {
        var newArr = []
        for(var i = 0; i< checkboxes.length; i++){
           if(checkboxes[i].checked) {
               newArr.push(GlobalObj.series[i]);

           };

        };
      
        GlobalObj.series = newArr;  
    }


    function generalScorePerMonth() {
        for(var i = 0; i<tempArr.length; i++) {


            for(var k = 0; k<categories.length; k++){
                var newArr = [];
                var a = 0;
                for(var m = 0; m<categories[k].length; m++){
                    var val = new Date(categories[k][m].passed_date).toDateString().split(' ');
                    if (val[1] === tempArr[i].month && parseInt(val[3], 10) === tempArr[i].year) {
                        newArr.push(categories[k][m].score);
                };
            };

                for(var l = 0; l<newArr.length; l++){
                    a += newArr[l];
                }
                
              if(a === 0){a = 0} else {a = a / newArr.length};

                GlobalObj.series[k].data.push(a);
                newArr = []; 
            };    
        };
    };
 

     
//  перебирає обєкт Резалт і вертає всі його дочерні обєкти які попадають по часу складення тесту у вибраний інтервал часу

     function fillSeries() {
        for(var i = 0; i<Model.date.Result.length; i++) {
            if(dateInterval.startMiliseconds < Model.date.Result[i].passed_date && Model.date.Result[i].passed_date < dateInterval.endMiliseconds) {
                categories[0].push(Model.date.Result[i]);
            };
        };
     };



     function fillSeries2() {
        for(var i = 0; i<Model.date.Result.length; i++) {
            if(dateInterval.startMiliseconds < Model.date.Result[i].passed_date && Model.date.Result[i].passed_date < dateInterval.endMiliseconds) {
               for(var k = 0; k<Model.date.Users.length; k++) {
                  if(Model.date.Result[i].u_id === Model.date.Users[k].id){
                       var valDate = Model.date.Users[k].birthday.split('-');
                       var nowDate = new Date().getFullYear();
                       var res = parseInt(nowDate, 10) - parseInt(valDate[2], 10);
                       if(checkboxes[0].checked && res <= 14){

                           categories[0].push(Model.date.Result[i]);

                       } else if(checkboxes[1].checked && 15 <= res && res <= 18) {

                           categories[1].push(Model.date.Result[i]);
                            
                       } else if(checkboxes[2].checked && 19 <= res && res <= 25) {

                           categories[2].push(Model.date.Result[i]);
                            
                       } else if(checkboxes[3].checked && 25 <= res) {

                           categories[3].push(Model.date.Result[i]);
                            
                       } else { 

                           console.log('не коректно вказано вік ' + Model.date.Users[k].firstName + ' ' + Model.date.Users[k].lastName)
                       };
                   };
                };
            };
        };
     };

//  перевіряє ступінь користувача в результатах і заповнює відповідні масиви категорій

    function fillSeries3() {
            for(var i = 0; i<Model.date.Result.length; i++) {
                 if(dateInterval.startMiliseconds < Model.date.Result[i].passed_date && Model.date.Result[i].passed_date < dateInterval.endMiliseconds) {
                      
                      if(checkboxes[0].checked && Model.date.Result[i].user_rank === 1){

                           categories[0].push(Model.date.Result[i]);

                       } else if(checkboxes[1].checked && Model.date.Result[i].user_rank === 2) {

                           categories[1].push(Model.date.Result[i]);
                            
                       } else if(checkboxes[2].checked && Model.date.Result[i].user_rank === 3) {

                           categories[2].push(Model.date.Result[i]);
                            
                       } else if(checkboxes[3].checked && Model.date.Result[i].user_rank === 4) {

                           categories[3].push(Model.date.Result[i]);
                            
                       } else { 

                           console.log('не коректно вказана категорія')
                       };
                 } 
            }           
    }    

    
    function crateSingleSeries(elemName) {

            createSeriesElem(elemName);
            categories.push([]);

    }

    function graphicTitles(titleText, subtitleText, yAxisTitle, tooltip) {
        GlobalObj.title.text = titleText;
        GlobalObj.subtitle.text = subtitleText;
        GlobalObj.yAxis.title.text = yAxisTitle;
        GlobalObj.tooltip.valueSuffix = tooltip;

    }

// приймає назву класа чекбокса і в залежності від неї роздає імена серіям глобального обєкта і утворює потрібну кількість масивів в масиві категорії

    function activeCheckboxChecking(className){
        checkboxes = document.getElementsByClassName(className);

        for(var i =0; i<checkboxes.length; i++) {
            categories.push([]);
            if(className === 'ageList-checkbox'){
                  createSeriesElem(checkboxes[i].parentNode.childNodes[1].data);  
            } else {
                createSeriesElem(Model.date.Ranks[i].name);
            };      
        };  
    }


// Функція створює і записує елементи series обєкта GlobalObj

     function createSeriesElem(elemName) {
        var a = {
            name: elemName,
            data: []
        };
        GlobalObj.series.push(a);
     }
    

    /* розкидує дати проходження тестів по категоріях до яких вони належать*/

    function dateSortByCategories() {
     
// створюєму потрібну кількість категорій

        for (var i = 0; i < 3; i++) {
            var elemName = 'Категорія ' + (i+1);
            createSeriesElem(elemName);
            categories.push([]);
        };

/*        var roots = Model.date.Categories.getSubcategories(null);
        var root_subcategories = [];
        for (var i = roots.length - 1; i >= 0; i--) {
            root_subcategories[i] = Model.date.Categories.getSubcategories(roots[i]);
        };*/

        for (var i = 0; i < Model.date.Tests.length; i++) {

/*            for (var j = 0; j < roots.length ; j++) {
                if (root_subcategories[j].indexOf(Model.date.Tests[i].subcategory) >= 0) {
                    
                    for (var k = 0; k < Model.date.Tests[i].passed_date.length; k++) {
                        categories[j].push(Model.date.Tests[i].passed_date[k]);
                    };

                };
            };*/
            


            if (Model.date.Tests[i].category === 1) {

                for (var k = 0; k < Model.date.Tests[i].passed_date.length; k++) {
                    categories[0].push(Model.date.Tests[i].passed_date[k]);
                };


            } else if (Model.date.Tests[i].category === 2) {

                for (var l = 0; l < Model.date.Tests[i].passed_date.length; l++) {
                    categories[1].push(Model.date.Tests[i].passed_date[l]);
                };

            } else if (Model.date.Tests[i].category === 3) {

                for (var m = 0; m < Model.date.Tests[i].passed_date.length; m++) {
                    categories[2].push(Model.date.Tests[i].passed_date[m]);
                };

            };
        
        }

    }

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
        for (var i = 0; i < categories.length; i++) {
            for (var k = 0; k < categories[i].length; k++) {
                if (dateInterval.endMiliseconds < categories[i][k] || categories[i][k] < dateInterval.startMiliseconds) {
                    categories[i].splice(k, 1, '');
                };
            };
        };

        for (var i = 0; i < categories.length; i++) {
            var a = categories[i].length;
            var newArr = []
            for (var k = 0; k < a; k++) {
                if (categories[i][k] !== '') {
                    var b = categories[i].slice(k, k + 1);
                    newArr.push(b[0]);
                };
                if (k === a - 1) {
                    categories[i] = newArr;
                };
            };
        };
    }

    /*       модуль бере дату початку пошуку і дату кінця, заповнює простір між ними потрібними місяцями */

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
        variableYear = startDateObj.startYear;
        var newArr = [];

        top:

        if (startDateObj.startMonth === endDateObj.endMonth && startDateObj.startYear === endDateObj.endYear) {
            newArr.push({
                month: startDateObj.startMonth,
                year: startDateObj.startYear
            });
        } else if (startDateObj.startYear !== endDateObj.endYear) {
            for (var i = 0; i < monthArr.length; i++) {
                if (startDateObj.startMonth === monthArr[i]) {
                    newArr.push({
                        month: monthArr[i], 
                        year: variableYear
                    });
                    for (var k = i + 1; monthArr[k] !== startDateObj.endMonth; k++) {

                        newArr.push({
                            month: monthArr[k],
                            year: variableYear
                        });
                        if (monthArr[k] === 'Dec' && endDateObj.endYear !== variableYear) {
                            k = -1, variableYear += 1;
                        };
                        if (monthArr[k] === endDateObj.endMonth && endDateObj.endYear === variableYear) {
                            break top;
                        };
                    };
                };
            };

        } else {
            for (var i = 0; i < monthArr.length; i++) {
                if (startDateObj.startMonth === monthArr[i]) {
                    newArr.push({
                        month: monthArr[i],
                        year: variableYear
                    });
                    for (var k = i + 1; monthArr[k] !== startDateObj.endMonth; k++) {
                        newArr.push({
                            month: monthArr[k],
                            year: variableYear
                        });
                        if (monthArr[k] === endDateObj.endMonth) {
                            break top;
                        };
                    };
                };
            };
        };
        tempArr = newArr;
        for (var i = 0; i < newArr.length; i++) {
            GlobalObj.xAxis.categories.push(newArr[i].month);
        };
    }


 /*      відсортовує кожну дату проходження тесту по приналежності до певного місяця*/

    function passedTestsCounter() {
        for (var m = 0; m < tempArr.length; m++) {
            var newArr = []

            for (var i = 0; i < categories.length; i++) {
                for (var k = 0; k < categories[i].length; k++) {
                    var val = new Date(categories[i][k]).toDateString().split(' ');
                    if (val[1] === tempArr[m].month && parseInt(val[3], 10) === tempArr[m].year) {
                        newArr.push(categories[i][k]);
                    };
                };

                GlobalObj.series[i].data.push(newArr.length);
                newArr = [];
            };

        };
    }
}


 
    
function changeCssOnElements() {

    var filtersBox = document.getElementById('filtersBox');
    var tabs = document.getElementsByClassName('tabs');
    var tabsNav = document.getElementsByClassName('nav-tabs')[0];

    //   делегує подію з чекбокса на загального батька, і роздає або забирає лейблам бекгрунд-колор
    // відповідно до того на якому чекбоксі відбулась подія

    filtersBox.onclick = function(e) {
        var target = e && e.target || event.srcElement;

         if (target.nodeName != 'LABEL') return;

         if(target.children[0].checked) {
                    target.parentNode.style.backgroundColor = '#5bc0de'
         } else {
                    target.parentNode.style.backgroundColor = '#0490ba';
                };
    };


    // провіряє наявність класу в певного обєкта і видаляє його
    
    function removeClass(obj, cls) {
        var classes = obj.className.split(' ');
 
        for(var i=0; i<classes.length; i++) {
           if (classes[i] == cls) {
              classes.splice(i, 1); // удалить класс  

               i--; // (*)
            }
        }
  obj.className = classes.join(' ');
    
}


  // перевіряє таби на наявність класу Актів і в відповідності до нього відображає/скриває сорт лісти

    tabsNav.onclick = function(e) {
        var ageList = document.getElementById('ageList');
        var gradeList = document.getElementById('gradeList');
        
            if(tabs[0].className === 'tabs active' || tabs[1].className === 'tabs active' ) {
                gradeList.className += ' hideElem';
                ageList.className += ' hideElem';
            } else if(tabs[2].className === 'tabs active') {
                gradeList.className += ' hideElem';
                removeClass(ageList, 'hideElem');
            } else if(tabs[3].className === 'tabs active') {
                ageList.className += ' hideElem';
                removeClass(gradeList, 'hideElem');
                fillGradeList();
            } else if(tabs[4].className === 'tabs active') {
                gradeList.className += ' hideElem';
                ageList.className += ' hideElem';
                sortByPassedQuantity();
            } else if(tabs[5].className === 'tabs active') {
                gradeList.className += ' hideElem';
                ageList.className += ' hideElem';
                sortByAverageScore();
            };

        };


    function fillGradeList() {
       var labels = document.querySelectorAll('#gradeList label');

       for(var i = 0; i<labels.length; i++) {
        labels[i].lastChild.data = '';
        if(i === Model.date.Ranks[i].id - 1) {
            labels[i].innerHTML += Model.date.Ranks[i].name;
          };
       };
    }

    function sortByAverageScore() {
        var newPassedTestsArr = [];

        newPassedTestsArr = fillTheNewTestsArr(newPassedTestsArr);
        newPassedTestsArr.sort(function(a, b){
            var currAScore = 0;
            var currBScore = 0;
            for(var i = 0; i<a.length; i++){
               currAScore += a[i].score;
            }
            if(currAScore !== 0){
                currAScore = currAScore / a.length;
            } else {
                currAScore = 0;
            };

            for(var k = 0; k<b.length; k++){
               currBScore += b[k].score;
            }
            if(currBScore !== 0){
                currBScore = currBScore / b.length;
            } else {
                currBScore = 0;
            };

            return currBScore - currAScore;
        });
        createTableElements(newPassedTestsArr, '#Table2 tbody', '#Table2 tbody tr td');
    }   


    function sortByPassedQuantity() {
        var newPassedTestsArr = [];

        newPassedTestsArr = fillTheNewTestsArr(newPassedTestsArr);
        newPassedTestsArr.sort(function(a, b){return b.length - a.length});
        createTableElements(newPassedTestsArr, '#Table1 tbody', '#Table1 tbody tr td');

    } 

    function fillTheNewTestsArr(newTestsArr) {
        var newArr = Model.date.Result;
        newArr.sort(function(a, b){return a.test_id - b.test_id});

        for(var i = 0; i<newArr[newArr.length-1].test_id; i++) {
           newTestsArr.push([]);
        }

        for(var k = 0; k<newArr.length; k++){
           newTestsArr[newArr[k].test_id-1].push(newArr[k]);
        }

        return newTestsArr;
    } 


    function createTableElements(newTestsArr, tableSelector, indicator) {

        if(!document.querySelector(indicator)){
            for (var i = 0; i<newTestsArr.length; i++) {
                if(newTestsArr[i].length > 0){
                    buildTableElements(newTestsArr[i], i, tableSelector);
                };
            };
        } else {
            return;
        };    
    }

    function buildTableElements(newTestsArrElement, i, tableSelector) {
        var table = document.querySelector(tableSelector);
        var a = 0;

     
           var elem1 = document.createElement('td')
           elem1.innerHTML = i + 1;
           table.children[i].appendChild(elem1);
           var elem2 = document.createElement('td')
           elem2.innerHTML = '<a href="TestPastPage.html?t_id=' + newTestsArrElement[0].test_id + '">' + newTestsArrElement[0].name + '</a>';
           table.children[i].appendChild(elem2);
           var elem3 = document.createElement('td')
           elem3.innerHTML = newTestsArrElement.length;
           table.children[i].appendChild(elem3);
           var elem4 = document.createElement('td')
           for(var k = 0; k<newTestsArrElement.length; k++){
              a += newTestsArrElement[k].score;
           }
           a = a / newTestsArrElement.length;

           elem4.innerHTML = a.toPrecision(3);
           table.children[i].appendChild(elem4);
           var elem5 = document.createElement('td')
           var elem6 = document.createElement('td')
           for(var k = 0; k<newTestsArrElement.length; k++) {
               for (var m = 0; m<Model.date.Tests.length; m++) {
                   if(newTestsArrElement[k].test_id === Model.date.Tests[m].id){
                       elem5.innerHTML = Model.date.Tests[m].subcategory;
                       for(var l = 0; l<Model.date.Tests_categories.length; l++){
                           if(Model.date.Tests[m].subcategory === Model.date.Tests_categories[l].id){
                               elem6.innerHTML = Model.date.Tests_categories[l].parent_id;
                           };
                       };
                   };
               };
           };
           table.children[i].appendChild(elem5);
           table.children[i].appendChild(elem6);
        
        
    }

}









//
//
//
//
//



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


 