
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
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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

