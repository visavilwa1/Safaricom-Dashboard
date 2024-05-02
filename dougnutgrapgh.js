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
        labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
        datasets: [{
            data: [57.60, 41.37, 1.01, 0.02],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(153, 102, 255)'
            ]
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            cutout: 50,
            plugins: {
                legend: {
                    display: false // Hide Chart.js default legend
                }
            }
        }
    };

    // Draw chart
    var myChart = new Chart(ctx, config);

    // Custom legend
    const legendData = [
        { label: 'Desktop', value: '57.60%', color: 'rgb(255, 99, 132)' },
        { label: 'Mobile', value: '41.37%', color: 'rgb(54, 162, 235)' },
        { label: 'Tablet', value: '1.01%', color: 'rgb(255, 205, 86)' },
        { label: 'Other', value: '0.02%', color: 'rgb(153, 102, 255)' }
    ];
    const legendContainer = document.getElementById('legendContainer');
    legendData.forEach(item => {
        const legendItem = document.createElement('p');
        const colorSquare = document.createElement('span');
        colorSquare.style.display = 'inline-block';
        colorSquare.style.width = '10px';
        colorSquare.style.height = '10px';
        colorSquare.style.backgroundColor = item.color;
        colorSquare.style.marginRight = '5px';
        legendItem.appendChild(colorSquare);
        legendItem.textContent = `${item.label} ${item.value} sessions`;
        legendContainer.appendChild(legendItem);
    });
});
