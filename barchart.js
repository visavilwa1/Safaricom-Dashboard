// First Chart
const ctx1 = document.getElementById("myChart").getContext("2d");

new Chart(ctx1, {
    type: "bar",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "Layer 1",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1
            },
            {
                label: "Layer 2",
                data: [10, 15, 6, 8, 5, 4],
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            },
            {
                label: "Layer 3",
                data: [8, 12, 9, 11, 7, 5],
                backgroundColor: "rgba(255, 206, 86, 0.5)",
                borderColor: "rgba(255, 206, 86, 1)",
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                stacked: true
            }
        }
    }
});

// Second Chart
const ctx2 = document.getElementById('myChart2').getContext('2d');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',  // Red
                'rgba(54, 162, 235, 0.5)',  // Blue
                'rgba(255, 206, 86, 0.5)',  // Yellow
                'rgba(75, 192, 192, 0.5)',  // Green
                'rgba(153, 102, 255, 0.5)', // Purple
                'rgba(255, 159, 64, 0.5)'   // Orange
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',  // Red
                'rgba(54, 162, 235, 1)',  // Blue
                'rgba(255, 206, 86, 1)',  // Yellow
                'rgba(75, 192, 192, 1)',  // Green
                'rgba(153, 102, 255, 1)', // Purple
                'rgba(255, 159, 64, 1)'   // Orange
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
