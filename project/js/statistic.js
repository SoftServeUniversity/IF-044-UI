'use strict'


function statisticmodule () {	
	var People = document.getElementById('result');
	var Score = document.getElementById('result1');		
	
  var avarege, scoreSum,globalScore,globalUser;

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
   

var all = function() {
	globalScore=0;
	for(var i = 0; i < Users.length;  i++){
		if (Users[i].testScore) {
		globalScore+=(summa(Users[i].testScore)/Users[i].testScore.length);
		};
	}
	return globalScore;
}
var userPast = function(){
globalUser=0;
for(var i = 0; i < Users.length;  i++){
	if (Users[i].testScore) {
globalUser++;
	}
}
return globalUser;
}

avarege = (all()/userPast());
scoreadd(avarege);
peopleadd(userPast());


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
                categories: ['1день', '2день', '3день', '4день', '5день', '6день','7день']
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
                data: [userPast()]
            }, {
            name: 'Середній бал',
                data: [avarege = (all()/userPast())]
            }]
        });
    });
    
}