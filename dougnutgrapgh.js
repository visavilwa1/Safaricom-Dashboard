document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('chartContainer');
    const canvas = document.getElementById('sessionsChart');
    const ctx = canvas.getContext('2d');

    // Calculate dimensions based on the size of the container
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Set canvas dimensions to fit the container
    canvas.width = containerWidth;
    canvas.height = containerHeight;

    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            cutout: 50,
            plugins: {
                legend: {
                    position: 'bottom' // Place legend below the chart
                }
            }
        }
    };

    var myChart = new Chart(ctx, config);
});
