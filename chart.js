// CHART PEROLEHAN SUARA KETUA HMIF
var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgb(243, 35, 35)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    // Configuration options go here
    options: {
        tooltips: {
            mode: 'nearest'
        }
    }
});



// CHART PEROLEHAN SUARA KETUA DMIF
var ctx = document.getElementById('chart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgb(243, 35, 35)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    // Configuration options go here
    options: {
        tooltips: {
            mode: 'nearest'
        }
    }
});