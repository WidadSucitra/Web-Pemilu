let xlabel = [0];
let interval = 3000 * 60 * 60 ;


var ctx = document.getElementById('update1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: xlabel,
        datasets: [{
            backgroundColor: 'transparent',
            borderColor: 'black',
            data: [4, 7, 11, 15, 20, 21, 24]
        },{
            backgroundColor: 'transparent',
            borderColor: '#6397BD',
            data: [3, 6, 9, 12, 15, 19, 21]
        }]
    },
    options: {
        legend: {
        display: false,
        }
    }
});

chart.render();
setInterval(function() {waktu()}, 1000);

function waktu() {
let d = new Date();
let n = d.getHours();
xlabel.push(n)
document.getElementById('tes1').innerHTML = xlabel;
chart.render();
};



// CHART PEROLEHAN SUARA KETUA DMIF
var ctx = document.getElementById('update2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: xlabel,
        datasets: [{
            backgroundColor: 'transparent',
            borderColor: 'black',
            data: [4, 7, 11, 15, 20, 21, 24]
        },{
            backgroundColor: 'transparent',
            borderColor: '#6397BD',
            data: [3, 6, 9, 12, 15, 19, 21]
        }]
    },
    options: {
        legend: {
        display: false,
        }
    }
});
