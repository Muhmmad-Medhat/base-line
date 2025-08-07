// 8th Page - Department Awareness Distribution
// Horizontal Stacked Bar Chart

// Initialize amCharts when ready
am4core.ready(function () {
  // Use animated theme
  am4core.useTheme(am4themes_animated);

  // Create horizontal stacked bar chart
  drawStackedBarChart();
});

function drawStackedBarChart() {
  try {
    // Create XY chart
    var chart = am4core.create('stackedChart', am4charts.XYChart);

    // Set chart data
    chart.data = [
      {
        department: 'Department #4',
        digital: 35,
        information: 20,
        social: 10,
        physical: 10,
        fraud: 25,
      },
      {
        department: 'Department #3',
        digital: 10,
        information: 25,
        social: 10,
        physical: 40,
        fraud: 15,
      },
      {
        department: 'Department #2',
        digital: 25,
        information: 20,
        social: 5,
        physical: 25,
        fraud: 15,
      },
      {
        department: 'Department #1',
        digital: 10,
        information: 25,
        social: 20,
        physical: 20,
        fraud: 25,
      },
    ];

    // Create category axis (Y-axis for horizontal bars)
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'department';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.labels.template.fontSize = 12;
    categoryAxis.renderer.labels.template.fill = am4core.color('#4dd0e1');
    categoryAxis.renderer.labels.template.fontWeight = '600';
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.line.strokeOpacity = 0;

    // Create value axis (X-axis for horizontal bars)
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.renderer.grid.template.strokeDasharray = '2,2';
    valueAxis.renderer.grid.template.stroke = am4core.color('#e0e0e0');
    valueAxis.renderer.grid.template.strokeOpacity = 1;
    valueAxis.renderer.grid.template.strokeWidth = 1;
    valueAxis.renderer.labels.template.fontSize = 11;
    valueAxis.renderer.labels.template.fill = am4core.color('#37474f');
    valueAxis.renderer.labels.template.fontWeight = '500';
    valueAxis.renderer.line.strokeOpacity = 0;
    valueAxis.renderer.labels.template.adapter.add('text', function (text) {
      return text + ' %';
    });
    // Set grid interval to 10%
    valueAxis.renderer.minGridDistance = 30;
    valueAxis.step = 10;

    // Create series for each category
    function createSeries(field, name, color) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = 'department';
      series.name = name;
      series.columns.template.fill = am4core.color(color);
      series.columns.template.stroke = am4core.color('#ffffff');
      series.columns.template.strokeWidth = 1;
      series.columns.template.strokeOpacity = 0.8;
      series.stacked = true;
      series.columns.template.height = am4core.percent(60);

      // Add value labels
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = '{valueX}%';
      labelBullet.label.fontSize = 11;
      labelBullet.label.fontWeight = '600';
      labelBullet.label.fill = am4core.color('#ffffff');
      labelBullet.label.hideOversized = false;
      labelBullet.label.truncate = false;
      labelBullet.locationX = 0.5;

      // Hide labels for small values
      labelBullet.label.adapter.add('text', function (text, target) {
        if (target.dataItem && target.dataItem.valueX < 8) {
          return '';
        }
        return text;
      });

      return series;
    }

    // Create all series with matching colors
    createSeries('digital', 'Digital and Online Security', '#2196f3');
    createSeries(
      'information',
      'Information Protection and Data Security',
      '#ff9800'
    );
    createSeries(
      'social',
      'Social Engineering and Threat Awareness',
      '#9e9e9e'
    );
    createSeries('physical', 'Physical and Environment Security', '#ffc107');
    createSeries('fraud', 'Fraud', '#4dd0e1');

    // Disable cursor
    chart.cursor = undefined;

    // Add subtle animation
    chart.events.on('ready', function () {
      chart.series.each(function (series) {
        series.columns.template.defaultState.transitionDuration = 1000;
      });
    });
  } catch (error) {
    console.error('Error drawing stacked bar chart:', error);
    document.getElementById('stackedChart').innerHTML =
      '<div style="text-align: center; padding: 50px; color: #00838f; font-size: 16px;">Stacked Bar Chart Loading...</div>';
  }
}

// Fallback if amCharts fails to load
setTimeout(() => {
  if (typeof am4core === 'undefined') {
    console.warn('amCharts failed to load, using fallback');
    document.getElementById('stackedChart').innerHTML =
      '<div style="text-align: center; padding: 50px; color: #00838f; font-size: 16px;">Horizontal Stacked Bar Chart (amCharts required)</div>';
  }
}, 10000);
