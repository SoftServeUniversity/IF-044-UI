'use strict'


function statisticmodule () {	
	var People = document.getElementById('result');
	var Score = document.getElementById('result1');		
	
  var avarege, 
      scoreSum,
      globalScore,
      globalUser,
      todayDay,
      todayMonth,
      lastDay = [],
      Score = [],
      Users = []

    var summa = function(m) {
    for(var s = 0, k = m.length; k; s += m[--k]);//обрахунок сумми елементів массиву
    return s;
    };
	function peopleadd(b){
		People.innerHTML = 'Користувачів:'+b;
    }
    function scoreadd(a){
		Score.innerHTML = 'Середній бал:'+a;
    }
   

    
    var getDay = function(){
      var  j = 0
      var date = new Date();
        todayDay = date.getDate();
           for (var i = todayDay; i > (todayDay-7); i--) {
                lastDay[j] = i;
                j++
            }
            return lastDay
    } 

var getMonth = function () {
    var data= new Date();
    todayMonth = data.getMonth();
    return(todayMonth);
}   

var score = function(day,month) {
var dayScore=[], j = 0;
 for (var i = 0; i < Result.length; i++) {
     if (day == Result[i].day && month == Result[i].month) {
        dayScore[j] = Result[i].score;
        j++ 
     };
 };
var avarage = summa(dayScore)/dayScore.length;
Users.push(dayScore.length);
Score.push(avarage);
return(Score);
}
var result = function(){
    for (var i = 0; i < lastDay.length; i++) {
        score(lastDay[i],todayMonth);
    if (isNaN(Score[i])) {
            Score[i] = 0;
        
};
        
    };
    return
}



getDay();
getMonth();
result();    
 Math.min.apply({},Score) 
Math.max.apply({},Score)    


$(function () {
        $('#container').highcharts({
            title: {
                text: 'Фільтри(підкатегорія, вік, ступінь)',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: [lastDay[0]+'.'+(todayMonth+1), lastDay[1]+'.'+todayMonth, 
                lastDay[2]+'.'+todayMonth, lastDay[3]+'.'+todayMonth, 
                lastDay[4]+'.'+todayMonth, lastDay[5]+'.'+todayMonth,lastDay[6]+'.'+todayMonth]
            },
            yAxis: {
                title: {
                    text: 'Користувачів'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Користувачі',
                data: [Users[0],Users[1],Users[2],Users[3],Users[4],Users[5],Users[6],Users[7]]
            }, {
            name: 'Середній бал',
                data: [Score[0],Score[1],Score[2],Score[3],Score[4],Score[5],Score[6],Score[7]]
            }]
        });
    });
    
}

var filterLoad = function(){
    var scoreSubcat = [],
        testSubcat = [],
        daySubcat = [],
        monthSubcat = [],
        res = [];
    var fromDate = document.getElementById('date1').valueAsDate;
    var toDate = document.getElementById('date2').valueAsDate;
  
    var x = document.getElementById("subcat").selectedIndex;
var activeSubcat = parseInt(document.getElementsByTagName("option")[x].value) ;
/*for (var i = 0; i < Result.length; i++) {
    if (Result[i]) {
        res.push(i);
};*/



    var subcatlisten = function (){
        for (var i=0; i<Tests.length; i++){
            if (activeSubcat === Tests[i].subcategory) {
                testSubcat.push(Tests[i].name)
            }
        }
    }
var resultFind = function(){
    for (var i = 0; i < testSubcat.length; i++) {
            for (var item in Result) {
                if (testSubcat[i] === Result[item].name) {
                scoreSubcat.push(Result[item].score);
                daySubcat.push(Result[item].day);
                monthSubcat.push(Result[item].month);
                }
            }
        };
    };

subcatlisten();
resultFind(); 
$(function () {
        $('#container').highcharts({
            title: {
                text: 'Фільтри(підкатегорія, вік, ступінь)',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: [daySubcat[0]+'.'+monthSubcat[0], daySubcat[1]+'.'+monthSubcat[1]]
            },
            yAxis: {
                title: {
                    text: 'Користувачів'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Користувачі',
                data: [scoreSubcat[0],scoreSubcat[1]]
            }, {
            name: 'Середній бал',
                data: [scoreSubcat[0],scoreSubcat[1]]
            }]
        });
    });

}