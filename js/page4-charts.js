// 4th Page - Executive Summary Charts
// Participation and Score Donut Charts

// Initialize amCharts when ready
am4core.ready(function () {
  // Use animated theme
  am4core.useTheme(am4themes_animated);

  // Initialize both charts
  drawParticipationChart();
  drawScoreChart();
});

function drawParticipationChart() {
  try {
    // Create 3D pie chart
    var chart = am4core.create('participationChart', am4charts.PieChart3D);
    chart.rtl = true;

    // Set chart data
    chart.data = [
      {
        category: 'Completed Assessment',
        value: 187,
        color: am4core.color('#4dd0e1'),
      },
      {
        category: 'Did not finish',
        value: 26,
        color: am4core.color('#00838f'),
      },
    ];

    // Set inner radius to create donut effect
    chart.innerRadius = am4core.percent(50);

    // Configure 3D settings
    chart.depth3D = 30;
    chart.angle = 15;

    // Hide legend
    chart.legend = undefined;

    // Create pie series
    var pieSeries = chart.series.push(new am4charts.PieSeries3D());
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'category';

    // Configure slice appearance
    pieSeries.slices.template.propertyFields.fill = 'color';
    pieSeries.slices.template.stroke = am4core.color('#FFFFFF');
    pieSeries.slices.template.strokeWidth = 0;
    pieSeries.slices.template.strokeOpacity = 0;

    // Configure labels using amCharts built-in system
    pieSeries.labels.template.disabled = false;
    pieSeries.labels.template.text = '{value}';
    pieSeries.labels.template.fontSize = 18;
    pieSeries.labels.template.fontWeight = 'bold';
    pieSeries.labels.template.fill = am4core.color('#00838f');
    pieSeries.labels.template.fontFamily = 'Segoe UI';
    pieSeries.labels.template.radius = am4core.percent(-25);
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
      console.log('Participation chart ready');
    });
  } catch (error) {
    console.error('Error drawing participation chart:', error);
    document.getElementById('participationChart').innerHTML =
      '<div style="text-align: center; padding: 50px; color: #00838f;">Chart Loading...</div>';
  }
}

function drawScoreChart() {
  try {
    // Create 3D pie chart
    var chart = am4core.create('scoreChart', am4charts.PieChart3D);

    // Set chart data
    chart.data = [
      {
        category: 'Achieved',
        value: 77,
        color: am4core.color('#4dd0e1'),
      },
      {
        category: 'Remaining',
        value: 23,
        color: am4core.color('#00838f'),
      },
    ];

    // Set inner radius to create donut effect
    chart.innerRadius = am4core.percent(60);

    // Configure 3D settings
    chart.depth3D = 25;
    chart.angle = 15;

    // Hide legend
    chart.legend = undefined;

    // Create pie series
    var pieSeries = chart.series.push(new am4charts.PieSeries3D());
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'category';

    // Configure slice appearance
    pieSeries.slices.template.propertyFields.fill = 'color';
    pieSeries.slices.template.stroke = am4core.color('#FFFFFF');
    pieSeries.slices.template.strokeWidth = 0;
    pieSeries.slices.template.strokeOpacity = 0;

    // Configure labels for score chart
    pieSeries.labels.template.disabled = false;
    pieSeries.labels.template.text = '{value.percent.formatNumber("#")}%';
    pieSeries.labels.template.fontSize = 24;
    pieSeries.labels.template.fontWeight = '700';
    pieSeries.labels.template.fill = am4core.color('#00838f');
    pieSeries.labels.template.fontFamily = 'Segoe UI';
    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.textAlign = 'middle';
    pieSeries.labels.template.textValign = 'middle';

    // Configure label ticks
    pieSeries.ticks.template.disabled = false;
    pieSeries.ticks.template.stroke = am4core.color('#4dd0e1');
    pieSeries.ticks.template.strokeWidth = 2;
    pieSeries.ticks.template.strokeOpacity = 0.8;
    pieSeries.ticks.template.strokeDasharray = '2,2';

    // Chart is ready for display
    chart.events.on('ready', function () {
      console.log('Score chart ready');
    });
  } catch (error) {
    console.error('Error drawing score chart:', error);
    document.getElementById('scoreChart').innerHTML =
      '<div style="text-align: center; padding: 40px; color: #00838f; font-size: 28px; font-weight: bold;">77%</div>';
  }
}

// Fallback if amCharts fails to load
setTimeout(() => {
  if (typeof am4core === 'undefined') {
    console.warn('amCharts failed to load, using fallback');
    document.getElementById('participationChart').innerHTML =
      '<div style="text-align: center; padding: 50px;"><div style="color: #4dd0e1; font-size: 24px; font-weight: bold;">187</div><div style="color: #00838f; margin-top: 10px;">Completed</div></div>';
    document.getElementById('scoreChart').innerHTML =
      '<div style="text-align: center; padding: 40px; color: #00838f; font-size: 28px; font-weight: bold;">77%</div>';
  }
}, 10000);
