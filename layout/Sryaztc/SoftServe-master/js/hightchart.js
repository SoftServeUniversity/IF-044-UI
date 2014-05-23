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
                categories: ['1день', '2день', '3день', '4день', '5день', '6день','7день' ,'8день', '9день']
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
                data: [5, 6, 7, 1,2,5,6,7]
            }, {
            name: 'Середній бал',
                data: [3.25, 4.15, 6.42, 5, 4, 5,3,2]
            }]
        });
    });
    
