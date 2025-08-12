// 5th Page - Department Awareness Levels
// 3D Column Chart with Color-Coded Performance

// Initialize amCharts when ready
am4core.ready(function () {
  // Use animated theme
  am4core.useTheme(am4themes_animated);

  // Create 3D column chart
  drawDepartmentChart();
});

function drawDepartmentChart() {
  try {
    // Create 3D column chart
    var chart = am4core.create('departmentChart', am4charts.XYChart3D);
    chart.rtl = true;

    // Set chart data
    chart.data = [
      {
        department: 'Department #1',
        value: 94,
        color: '#4caf50', // Green for high performance
        riskLevel: 'High',
      },
      {
        department: 'Department #2',
        value: 43,
        color: '#f44336', // Red for low performance
        riskLevel: 'Very Low',
      },
      {
        department: 'Department #3',
        value: 72,
        color: '#f44336', // Red for low performance
        riskLevel: 'Low',
      },
      {
        department: 'Department #4',
        value: 81,
        color: '#ff9800', // Orange/Yellow for moderate performance
        riskLevel: 'Moderate',
      },
    ];

    // Configure 3D settings
    chart.angle = 30;
    chart.depth3D = 60;

    // Create category axis (X axis)
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'department';
    categoryAxis.renderer.labels.template.fontSize = 12;
    categoryAxis.renderer.labels.template.fontWeight = '600';
    categoryAxis.renderer.labels.template.fill = am4core.color('#37474f');
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;

    // Enable X-axis grid lines
    categoryAxis.renderer.grid.template.strokeOpacity = 1;
    categoryAxis.renderer.grid.template.stroke = am4core.color('#e0e0e0');
    categoryAxis.renderer.grid.template.strokeWidth = 1;
    categoryAxis.renderer.grid.template.strokeDasharray = '2,2';

    // Create value axis (Y axis)
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.renderer.labels.template.fontSize = 12;
    valueAxis.renderer.labels.template.fill = am4core.color('#37474f');
    valueAxis.renderer.grid.template.strokeDasharray = '3,3';
    valueAxis.renderer.grid.template.stroke = am4core.color('#e0e0e0');
    valueAxis.renderer.grid.template.strokeOpacity = 1;

    // Create 3D column series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'department';
    series.name = 'Awareness Level';

    // Configure column appearance
    series.columns.template.propertyFields.fill = 'color';
    series.columns.template.stroke = am4core.color('#ffffff');
    series.columns.template.strokeWidth = 2;
    series.columns.template.strokeOpacity = 0.8;

    // Minimize column width to make them taller and narrower
    series.columns.template.width = am4core.percent(30);
    series.columns.template.maxWidth = 40;

    // Add 3D depth and styling
    series.columns.template.depth3D = 20;
    series.columns.template.angle3D = 10;

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

    // Add hover effects
    series.columns.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'bottom';
    chart.legend.paddingTop = 20;
    chart.legend.labels.template.fontSize = 11;
    chart.legend.labels.template.fill = am4core.color('#37474f');

    // Create custom legend items
    chart.legend.data = [
      {
        name: '%69-0 Very Low',
        fill: am4core.color('#f44336'),
      },
      {
        name: '%79-70 Low',
        fill: am4core.color('#f44336'),
      },
      {
        name: '%89-80 Moderate',
        fill: am4core.color('#ff9800'),
      },
      {
        name: '%100-90 High',
        fill: am4core.color('#4caf50'),
      },
    ];

    // Hide default legend
    series.hiddenInLegend = true;
  } catch (error) {
    console.error('Error drawing department chart:', error);
    document.getElementById('departmentChart').innerHTML =
      '<div style="text-align: center; padding: 50px; color: #00838f;">Chart Loading...</div>';
  }
}

// Fallback if amCharts fails to load
setTimeout(() => {
  if (typeof am4core === 'undefined') {
    console.warn('amCharts failed to load, using fallback');
    document.getElementById('departmentChart').innerHTML =
      '<div style="text-align: center; padding: 50px;"><div style="color: #4dd0e1; font-size: 18px; font-weight: bold;">Department Awareness Levels</div><div style="margin-top: 20px; color: #00838f;">Dept #1: 94% | Dept #2: 43% | Dept #3: 72% | Dept #4: 81%</div></div>';
  }
}, 10000);
