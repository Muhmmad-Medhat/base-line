// 6th Page - Cybersecurity Awareness Results by Category
// 3D Column Chart with Performance Indicators

// Initialize amCharts when ready
am4core.ready(function () {
  // Disable animations globally
  if (am4core && am4core.options) {
    am4core.options.animationsEnabled = false;
  }

  // Create 3D column chart
  drawColumnChart();
});

function drawColumnChart() {
  try {
    // Create 3D column chart
  var chart = am4core.create('columnChart', am4charts.XYChart3D);
  chart.rtl = (window.ChartStore && ChartStore.DEFAULTS.rtl) || true;
  chart.interactionsEnabled = (window.ChartStore && ChartStore.DEFAULTS.interactivity) || false;

    // Set chart data with colors matching 5th page style
    if (window.ChartStore) {
      chart.data = ChartStore.DATA.categoryAwareness;
    }

    // Configure 3D settings
  chart.angle = (window.ChartStore && ChartStore.DEFAULTS.xy3d.angle) || 30;
  chart.depth3D = (window.ChartStore && ChartStore.DEFAULTS.xy3d.depth3D) || 60;

    // Create category axis with grid lines (matching 5th page style)
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.labels.template.fontSize = 10;
    categoryAxis.renderer.labels.template.fill = am4core.color('#37474f');
    categoryAxis.renderer.labels.template.fontWeight = '600';
    categoryAxis.renderer.labels.template.textAlign = 'middle';
    categoryAxis.renderer.labels.template.maxWidth = 120;
    categoryAxis.renderer.labels.template.wrap = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;

    // Enable X-axis grid lines (matching 5th page)
    categoryAxis.renderer.grid.template.strokeOpacity = 1;
    categoryAxis.renderer.grid.template.stroke = am4core.color('#e0e0e0');
    categoryAxis.renderer.grid.template.strokeWidth = 1;
    categoryAxis.renderer.grid.template.strokeDasharray = '2,2';
    categoryAxis.renderer.line.strokeOpacity = 0;

    // Create value axis (matching 5th page style)
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.renderer.labels.template.fontSize = 12;
    valueAxis.renderer.labels.template.fill = am4core.color('#37474f');
    valueAxis.renderer.labels.template.fontWeight = '600';
    valueAxis.renderer.grid.template.strokeDasharray = '3,3';
    valueAxis.renderer.grid.template.stroke = am4core.color('#e0e0e0');
    valueAxis.renderer.grid.template.strokeOpacity = 1;
    valueAxis.renderer.grid.template.strokeWidth = 1;
    valueAxis.renderer.line.strokeOpacity = 0;
    valueAxis.renderer.labels.template.adapter.add('text', function (text) {
      return text + ' %';
    });

    // Create column series (matching 5th page style)
    var series = chart.series.push(new am4charts.ColumnSeries3D());
  // Disable interactivity on series columns/labels
  series.columns.template.interactionsEnabled = false;
  series.bulletsContainer.interactionsEnabled = false;
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'category';
    series.name = 'Awareness Level';
    series.columns.template.propertyFields.fill = 'color';
    series.columns.template.stroke = am4core.color('#ffffff');
    series.columns.template.strokeWidth = 2;
    series.columns.template.strokeOpacity = 0.8;

    // Minimize column width to make them taller and narrower (matching 5th page)
  series.columns.template.width = am4core.percent((window.ChartStore && ChartStore.DEFAULTS.xy3d.column.widthPercent) || 30);
  series.columns.template.maxWidth = (window.ChartStore && ChartStore.DEFAULTS.xy3d.column.maxWidth) || 40;

    // Configure 3D column appearance (matching 5th page)
  series.columns.template.depth3D = (window.ChartStore && ChartStore.DEFAULTS.xy3d.column.depth3D) || 20;
  series.columns.template.angle3D = (window.ChartStore && ChartStore.DEFAULTS.xy3d.column.angle3D) || 10;

    // Add data labels on top of columns
    series.columns.template.adapter.add('fill', function (fill, target) {
      return am4core.color(target.dataItem.dataContext.color);
    });

    // Configure data labels (value on top, same color as column)
    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = '{valueY}%';
    labelBullet.label.fontSize = 14;
    labelBullet.label.fontWeight = '700';
    // labelBullet.locationY = 0.5; // top of the column
    labelBullet.dy = -12; // place above the column
    labelBullet.label.hideOversized = false;
    labelBullet.label.truncate = false;
    // Match label color to column color
    labelBullet.label.adapter.add('fill', function (fill, target) {
      return am4core.color(
        target.dataItem && target.dataItem.dataContext
          ? target.dataItem.dataContext.color
          : '#1b0de5ff'
      );
    });

  // Disable cursor & all interactivity
  chart.cursor = undefined;
  } catch (error) {
    console.error('Error drawing column chart:', error);
    document.getElementById('columnChart').innerHTML =
      '<div style="text-align: center; padding: 50px; color: #00838f;">3D Chart Loading...</div>';
  }
}

// Fallback if amCharts fails to load
setTimeout(() => {
  if (typeof am4core === 'undefined') {
    console.warn('amCharts failed to load, using fallback');
    document.getElementById('columnChart').innerHTML =
      '<div style="text-align: center; padding: 50px; color: #00838f; font-size: 18px;">3D Column Chart (amCharts required)</div>';
  }
}, 10000);
