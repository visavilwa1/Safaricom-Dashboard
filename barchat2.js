const ctx = document.getElementById("MyChart").getContext("2d");

new Chart(ctx, {
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
