var data_ketude1 = "<?= $ketude1; ?>";
var data_ketude2 = "<?= $ketude2; ?>";
var data_ketum1 = "<?= $ketum1;  ?>";
var data_ketum2 = "<?= $ketum2;  ?>";

var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'graf',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 0,
            beta: 25,
            depth: 50,
            viewDistance: 50
        }
    },
    xAxis: {
        categories: ['Calon Pengurus']
    },
    yAxis: {
        title: {
            text: 'Total Suara'
        }

    },
    title: {
        text: 'Grafik Perhitungan Suara'
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        column: {
            depth: 150
        }
    },
    series: [{

        name: 'Ketum 1',
        data: [70]
    }, {
        name: 'Ketum 2',
        data: [18]
    }]

});


var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 0,
            beta: 25,
            depth: 50,
            viewDistance: 50
        }
    },
    xAxis: {
        categories: ['Calon Pengurus']
    },
    yAxis: {
        title: {
            text: 'Total Suara'
        }

    },
    title: {
        text: 'Grafik Perhitungan Suara'
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        column: {
            depth: 150
        }
    },
    series: [{
        name: 'Ketude 1',
        data: [50]
    }, {
        name: 'Ketude 2',
        data: [10]

    }]

});