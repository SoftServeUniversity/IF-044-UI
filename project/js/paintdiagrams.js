$(function () {
    $('#container').highcharts({
        title: {
            text: 'Статистика тесту ' + Tests[1].name,
            x: -20 //center
        },
        subtitle: {
            text: 'Тест додав ' + Users[0].username,
            x: -20
        },
        xAxis: {
            categories: ['10%', '20%', '30%', '40%', '50%', '60%',
                '70%', '80%', '90%', '100%']
        },
        yAxis: {
            title: {
                text: 'Правильних відповідей'
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
        series: [{
            name: 'Тест 1',
            data: [11, 23, 34, 41, 51, 46, 37, 28, 19, 10]

        }]
    });
});