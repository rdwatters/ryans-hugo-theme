window.onload = renderCharts();

// window.onload = chartsDelayed;

// function chartsDelayed() {
//   setTimeout(digitalCharts(), 200);
// }

// function digitalCharts() {
function renderCharts() {
  var allCharts = document.querySelectorAll('canvas.capchart');
  if (allCharts.length < 1) {
    return;
  } else {
    console.log('chart rendering fired');
    Chart.defaults.global.defaultFontFamily = "sans-serif";
    var original = Chart.defaults.global.legend.onClick;
    //order of colors = cap-blue,cap-red,cap-orange,cap-green,cap-purple,cap-gray
    var digitalColors = ["rgb(0, 154, 191)", "rgb(178, 30, 40)", "rgb(222, 139, 5)", "rgb(0,96,112)", "rgb(89, 44, 130)", "rgb(195, 198, 200)"];
    var digitalBackgrounds = ["rgba(0, 154, 191,0.3)", "rgba(178, 30, 40,0.3)", "rgba(222, 139, 5,0.3)", "rgba(0,96,112,0.3)", "rgba(89, 44, 130,0.3)", "rgba(195, 198, 200,0.3)"];
    var defaultColors = ["rgb(0, 154, 191)", "rgba(0, 154, 191,0.3)"];
    var digitaloptions = {
      deferred: { // enabled by default
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 300 // delay of 400 ms after the canvas is considered inside the viewport
      },
      tooltips: {
        custom: function(tooltip) {
          if (!tooltip) {
            return;
          }
          tooltip.cornerRadius = 0;
        }
      }
    };
    for (var i = 0; i < allCharts.length; i++) {
      var chart = allCharts[i],
        labels = chart.dataset.labels.split(','),
        chartType = chart.dataset.charttype,
        chartId = document.getElementById(chart.id);
      if (/polar/.test(chartType)) {
        chartType = "polarArea";
      }
      if ((/(pie|doughnut|polar)/.test(chartType)) && !(/plural/.test(chartType))) {
        digitaloptions.scales = "";
        var chartData = chart.dataset.values.split(','),
          pieOrDoughnut = new Chart(chart, {
            type: chartType,
            data: {
              labels: labels,
              datasets: [{
                data: chartData,
                backgroundColor: digitalColors
              }]
            },
            options: digitaloptions
          });
      } else if ((/(line|bar)/.test(chartType)) && !(/plural/.test(chartType))) {
        digitaloptions.scales = {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        };
        var chartData = chart.dataset.values.split(','),
          label = chart.dataset.label,
          lineChart = new Chart(chart, {
            type: chartType,
            data: {
              labels: labels,
              datasets: [{
                label: label,
                data: chartData,
                backgroundColor: defaultColors[1],
                borderColor: defaultColors[0],
                pointBackgroundColor: defaultColors[0]
              }]
            },
            options: digitaloptions
          });
      } else if ((/plural/.test(chartType)) || /radar/.test(chartType)) {
        digitaloptions.scales = {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        };
        var sets = +chart.dataset.sets;
        var chartTArr = chartType.split('plural');
        chartType = chartTArr[0] !== "" ? chartTArr[0] : chartTArr[1];
        var dataArray = [];
        for (var j = 0; j < sets; j++) {
          var datasetObj = {},
            idx = j + 1,
            datalabel = "label".concat(idx),
            values = "values".concat(idx);
          datasetObj.label = chart.dataset[datalabel];
          datasetObj.data = chart.dataset[values].split(',');
          datasetObj.backgroundColor = digitalBackgrounds[j];
          datasetObj.borderColor = digitalColors[j];
          datasetObj.pointBackgroundColor = digitalColors[j];
          dataArray.push(datasetObj);
        }
        var pluralChart = new Chart(chart, {
          type: chartType,
          data: {
            labels: labels,
            datasets: dataArray
          },
          options: digitaloptions
        });
      }
    }
  }
}
