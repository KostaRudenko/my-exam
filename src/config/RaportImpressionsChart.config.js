const RaportImpressionsChart = {
    chart: {
        type: 'pie',
        height: 110,
        width: 110,
        backgroundColor: '#2b2d3c'
    },
    title: {
        text: '',
        verticalAlign: 'middle',
        style: {
            fontFamily: 'Montserrat',
            color: '#2196f3',
            fontSize: '18',
            fontWeight: '400'
        }
    },
    plotOptions: {
        pie: {
            borderColor: false,
            colors: ['#2196f3', '#9ca1b2'],
        },
    },
    series: [{
        data: [],
        innerSize: '95%',
        dataLabels: {
            enabled: false
        }
    }],
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    }
};

export default RaportImpressionsChart;