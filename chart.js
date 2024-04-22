
var ctx = document.getElementById('organicVsPaidChart').getContext('2d');
var data = {
  labels: ['Organic', 'Paid'],
  datasets: [{
    data: [70, 30], // 70% Organic, 30% Paid
    backgroundColor: [
      'rgb(35,197,95)',
      'rgb(255,115,68)'
    ]
  }]
};

var options = {
  responsive: true,
  maintainAspectRatio: false, 
};


var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});

var ctx = document.getElementById('lineChart').getContext('2d');
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09','10','11','12'],
        datasets: [{
          label: 'Sessions',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          fill: false
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

// Initialize user traffic chart
var userTrafficCtx = document.getElementById('userTrafficChart').getContext('2d');

var userTrafficChart = new Chart(userTrafficCtx, {
  type: 'bar',
  data: {
    labels: ['Kajiado', 'Nairobi', 'Mombasa', /* Add more counties */],
    datasets: [{
      label: 'Users',
      data: [9875, 8532, 7456 /* Add more user counts */],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        /* Add more colors as needed */
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        /* Add more colors as needed */
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
