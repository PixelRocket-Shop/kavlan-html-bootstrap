import Chart from 'chart.js';

(function () {


  // Yearly Income chart
  const chartYearlyIncome = document.querySelector('#chartYearlyIncome');
  if (chartYearlyIncome) {
    new Chart(chartYearlyIncome, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            data: [45, 55, 60, 65, 48, 41, 60, 50, 52],
            fill: false,
            borderColor: '#ff5a5a',
            pointRadius: 0
          },
          {
            data: [23, 43, 48, 40, 66, 39, 70, 50, 40],
            fill: false,
            borderColor: '#c9c9ce',
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: false
        },
        hover: {
          mode: null
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            gridLines: {
              color: '#363a4a',
              drawBorder: false,
              zeroLineColor: '#363a4a'
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10,
              fontSize: 12,
              fontColor: '#64748b',
              fontFamily: 'Overpass, sans-serif',
              padding: 10,
              callback: function(value, index, values) {
                return `${value}%`;
              }
            }
          }],
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              fontSize: 12,
              fontColor: "#64748b",
              fontFamily: "Overpass, sans-serif",
              padding: 5
            }
          }]
        }
      }
    });
  }

  // Sales by region
  const chartSalesRegion = document.querySelector('#chartSalesRegion');
  if (chartSalesRegion) {
    new Chart(chartSalesRegion, {
      type: 'doughnut',
      data: {
        labels: ['USD', 'USD', 'USD'],
        datasets: [{
          data: [45, 25, 30],
          backgroundColor: ['#ffed03', '#19b8a2', '#0dcaf0'],
          borderWidth: 10,
          borderColor: '#24293b'
        }]
      },
      options: {
        responsive: true,
        cutoutPercentage: 70,
        maintainAspectRatio: false,
        tooltips: {
          enabled: false
        },
        hover: {
          mode: null
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: false
          }],
          xAxes: [{
            display: false
          }]
        }
      }
    });
  }


})();