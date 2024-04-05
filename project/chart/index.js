
var ctx = document.getElementById('line').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['--','January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'profit',
            data: [0,15, 30, 25, 25, 30, 35, 38],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)', 
            fill: true ,
            cubicInterpolationMode: 'monotone'
        }, {
            label: 'productivity',
            data: [0,22, 18, 20, 20, 30, 30, 30],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)', 
            fill: true ,
            cubicInterpolationMode: 'monotone'
        }]
    },
    options: {
        plugins: {
            afterDraw: function(chart) {
                var ctx = chart.ctx;
                ctx.save();
                ctx.textAlign = 'center';
                ctx.fillStyle = 'black';
                ctx.font = '14px Arial';
                ctx.fillText('Heading', chart.chart.width - 50, 20);
                ctx.restore();
            }
        }
    }
});

