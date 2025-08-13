// 10th Page - Risk Assessment and Department Comparison Charts
// Risk Donut Chart and Department Column Chart

// Initialize amCharts when ready
am4core.ready(function () {
  // Disable animations globally
  if (am4core && am4core.options) {
    am4core.options.animationsEnabled = false;
  }

  // Draw both charts
  drawRiskChart();
  drawDepartmentChart();
});

function drawRiskChart() {
  try {
    // Create 3D pie chart
    var chart = am4core.create('riskChart', am4charts.PieChart3D);
    chart.rtl = true;
  chart.interactionsEnabled = false;

    // Set chart data
    chart.data = [
      {
        category: 'Very High Risk',
        value: 33.3,
        color: am4core.color('#00838f'),
      },
      {
        category: 'High Risk',
        value: 33.3,
        color: am4core.color('#4dd0e1'),
      },
      {
        category: 'Medium Risk',
        value: 33.4,
        color: am4core.color('#00bcd4'),
      },
    ];

    // Set inner radius to create donut effect
    chart.innerRadius = am4core.percent(40);

    // Configure 3D settings
    chart.depth3D = 30;
    chart.angle = 15;

    // Hide legend
    chart.legend = undefined;

    // Create pie series
    var pieSeries = chart.series.push(new am4charts.PieSeries3D());
  // Disable interactivity
  pieSeries.slices.template.interactionsEnabled = false;
  pieSeries.labels.template.interactionsEnabled = false;
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'category';

    // Configure slice appearance
    pieSeries.slices.template.propertyFields.fill = 'color';
    pieSeries.slices.template.stroke = am4core.color('#FFFFFF');
    pieSeries.slices.template.strokeWidth = 0;
    pieSeries.slices.template.strokeOpacity = 0;

    // Configure labels
    pieSeries.labels.template.disabled = false;
    pieSeries.labels.template.text = '{value.percent.formatNumber("#.0")}%';
    pieSeries.labels.template.fontSize = 14;
    pieSeries.labels.template.fontWeight = '700';
    pieSeries.labels.template.fill = am4core.color('#00838f');
    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.textAlign = 'middle';
    pieSeries.labels.template.textValign = 'middle';

    // Configure label ticks (connecting lines)
    pieSeries.ticks.template.disabled = false;
    pieSeries.ticks.template.stroke = am4core.color('#4dd0e1');
    pieSeries.ticks.template.strokeWidth = 2;
    pieSeries.ticks.template.strokeOpacity = 0.8;
    pieSeries.ticks.template.strokeDasharray = '2,2';

    // Chart is ready for display
    chart.events.on('ready', function () {
      console.log('Risk chart ready');
    });
  } catch (error) {
    console.error('Error drawing risk chart:', error);
    document.getElementById('riskChart').innerHTML =
      '<div style="text-align: center; padding: 50px; color: #00838f;">Risk Chart Loading...</div>';
  }
}

function drawDepartmentChart() {
  try {
    // Create 3D column chart
    var chart = am4core.create('columnChart', am4charts.XYChart3D);
  chart.interactionsEnabled = false;

    // Set chart data
    chart.data = [
      {
        department: 'Rewan Department 1',
        value: 55,
        color: '#00838f',
      },
      {
        department: 'Rewan Department 2',
        value: 50,
        color: '#4dd0e1',
      },
    ];

    // Configure 3D settings
    chart.angle = 30;
    chart.depth3D = 60;

    // Add padding to accommodate labels
    chart.paddingTop = 30;
    chart.paddingBottom = 50; /* Increased bottom padding for better label visibility */
    chart.paddingLeft = 25; /* Increased left padding for Y-axis labels */
    chart.paddingRight = 25;

    // Create category axis
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'department';
    categoryAxis.renderer.labels.template.fontSize = 12;
    categoryAxis.renderer.labels.template.fill = am4core.color('#4dd0e1');
    categoryAxis.renderer.labels.template.fontWeight = '600';

    // Improve label alignment with columns
    categoryAxis.renderer.labels.template.horizontalCenter = 'middle';
    categoryAxis.renderer.labels.template.textAlign = 'center';
    categoryAxis.renderer.labels.template.maxWidth = 120;
    categoryAxis.renderer.labels.template.wrap = true;
    categoryAxis.renderer.labels.template.paddingTop = 5;

    categoryAxis.renderer.grid.template.strokeOpacity = 0.1;
    categoryAxis.renderer.line.strokeOpacity = 0;

    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.labels.template.fontSize = 12;
    valueAxis.renderer.labels.template.fill = am4core.color('#37474f');
    valueAxis.renderer.labels.template.fontWeight = '500';
    valueAxis.renderer.grid.template.strokeDasharray = '2,2';
    valueAxis.renderer.grid.template.stroke = am4core.color('#e0e0e0');
    valueAxis.renderer.grid.template.strokeOpacity = 1;
    valueAxis.renderer.line.strokeOpacity = 0;

    // Set step interval to 10 units (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
    valueAxis.step = 10;
    valueAxis.renderer.minGridDistance = 10;

    // Create column series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
  // Disable interactivity on series columns/labels
  series.columns.template.interactionsEnabled = false;
  series.bulletsContainer.interactionsEnabled = false;
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'department';
    series.name = 'Department Score';
    series.columns.template.propertyFields.fill = 'color';
    series.columns.template.stroke = am4core.color('#ffffff');
    series.columns.template.strokeWidth = 2;
    series.columns.template.strokeOpacity = 0.8;

    // Configure 3D column appearance for uniform square look
    series.columns.template.depth3D = 80;
    series.columns.template.angle3D = 10;
    series.columns.template.width = am4core.percent(25);
    series.columns.template.maxWidth = 50;

    // Ensure columns have uniform appearance with equal proportions
    series.columns.template.column3D.stroke = am4core.color('#ffffff');
    series.columns.template.column3D.strokeWidth = 2;

    // Add value labels on top of columns
    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = '{valueY}';
    labelBullet.label.fontSize = 16;
    labelBullet.label.fontWeight = '700';
    labelBullet.label.fill = am4core.color('#00838f');

    // Ensure labels are centered and properly aligned with columns
    labelBullet.locationY = 0;
    labelBullet.locationX = 0.5;
    labelBullet.label.horizontalCenter = 'middle';
    labelBullet.label.verticalCenter = 'bottom';
    labelBullet.label.textAlign = 'center';
    labelBullet.label.hideOversized = false;
    labelBullet.dy = -8; // Move labels slightly above columns

  // Disable cursor & interactivity
  chart.cursor = undefined;
  } catch (error) {
    console.error('Error drawing department chart:', error);
    document.getElementById('columnChart').innerHTML =
      '<div style="text-align: center; padding: 50px; color: #00838f;">Department Chart Loading...</div>';
  }
}

// Fallback if amCharts fails to load
setTimeout(() => {
  if (typeof am4core === 'undefined') {
    console.warn('amCharts failed to load, using fallback');
    document.getElementById('riskChart').innerHTML =
      '<div style="text-align: center; padding: 50px; color: #00838f; font-size: 14px;">3D Risk Chart (amCharts required)</div>';
    document.getElementById('columnChart').innerHTML =
      '<div style="text-align: center; padding: 50px; color: #00838f; font-size: 14px;">3D Column Chart (amCharts required)</div>';
  }
}, 10000);
