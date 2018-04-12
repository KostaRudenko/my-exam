const RaportChart = {
    chart: {
        type: 'areaspline',
        spacingRight: 3,
        spacingLeft: 3,
        backgroundColor: '#2b2d3c',
        height: 450,
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            }
        }]
    },
    title: {
        text: false
    },
    xAxis: {
        categories: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ],
        tickWidth: 0,
        lineColor: 'transparent',
        gridLineWidth: 1,
        gridLineColor: '#4d5466',
        crosshair: {
            color: 'rgba(42, 153, 244, 0.05)'
        },
        labels: {
            style: {
                color: "#9ca1b2",
                fontSize: 16,
            },
            y: -10,
        },
    },
    yAxis: {
        title: {
            text: false
        },
        labels: {
            enabled: false,
        },
        gridLineWidth: 0,
        max: 100,
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.y}</b>',
    },
    plotOptions: {
        areaspline: {
            pointPlacement: 'on'
        },
        series: {
            lineWidth: 5,
            color: '#2196f3',
            marker: {
                enabled: false,
                states: {
                    hover: {
                        fillColor: '#fff',
                        lineWidth: 5,
                        lineColor: '#2f3242',
                    }
                }
            },
            fillColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, 'rgba(33, 150, 243, 0.3)'],
                    [1, 'rgba(33, 150, 243, 0)']
                ]
            }

        }
    },
    series: [{
        data: []
    }],
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
};

export default RaportChart;
