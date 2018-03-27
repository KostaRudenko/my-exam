const SalesReportChart = {
    chart: {
        type: 'column',
        backgroundColor: '#2f3242',
        height: 300
    },
    title: {
        text: false
    },
    xAxis: {
        tickWidth: 0,
        gridLineWidth: 0,
        lineColor: "#505464",
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    },
    yAxis: {
        title: {
            text: false
        },
        gridLineColor: "#505464",
        tickInterval: 50,

    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            color: '#505464',
            states: {
                hover: {
                    color: "#2196f3"
                }
            },
            borderColor: '#505464',
            pointWidth: 30,
        },
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.y}</b>',
    },
    series: [{
        data: [],

    }],
};

export default SalesReportChart;