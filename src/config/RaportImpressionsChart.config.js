const RaportImpressionsChart = {
    chart: {
        type: 'pie',
        height: 110,
        width: 110,
        backgroundColor: 'transparent'
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
            colors: ['#2196f3', '#3a3e52'],
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