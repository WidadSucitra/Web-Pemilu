$(document).ready(function() {
    let xlabel = [0];
    let interval = 3000 * 60 * 60 ;

    var ctx = document.getElementById('chart1').getContext('2d');
    var data = {
        labels: xlabel,
        datasets: [{
            label: "Ketude 1",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0, 50, 100, 90, 30]
            
            }
            , {
            label: "Ketude 2",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [0, 100, 80, 55, 10] 
            
        }]
    };

    var options = {}

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
    
    setInterval(function() {
        waktu();
        
        var chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    }, 5000);

    function waktu() {
        let d = new Date();
        let n = d.getHours();
        xlabel.push(n)
        // document.getElementById('tes1').innerHTML = xlabel;
        chart.render();
    };
});

$(document).ready(function() {
    let xlabel = [0];
    let interval = 3000 * 60 * 60 ;

    var ctx = document.getElementById('chart2').getContext('2d');
    var data = {
        labels: xlabel,
        datasets: [{
            label: "Ketum 1",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0, 100, 80, 55, 10]
            
            }
            , {
            label: "Ketum 2",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [0, 70, 40, 105, 10] 
            
        }]
    };

    var options = {}

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
    
    setInterval(function() {
        waktu();
        
        var chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    }, 5000);

    function waktu() {
        let d = new Date();
        let n = d.getHours();
        xlabel.push(n)
        // document.getElementById('tes1').innerHTML = xlabel;
        chart.render();
    };
});
