(function (window) {
  'use strict';

  // Central color palette (aligned with CSS theme where possible)
  const COLORS = {
    primary: '#00838f',
    secondary: '#4dd0e1',
    accent: '#00bcd4',
    textPrimary: '#37474f',
    success: '#4caf50',
    warning: '#ff9800',
    danger: '#f44336',
    infoBlue: '#2196f3',
    neutral: '#9e9e9e',
    amber: '#ffc107',
    white: '#ffffff'
  };

  // Risk color mapping used across legends and series
  const RISK_COLORS = {
    veryHigh: COLORS.primary,
    high: COLORS.secondary,
    medium: COLORS.accent,
    low: COLORS.danger,
    veryLow: COLORS.danger
  };

  // Category color mapping (page 8 stacked series)
  const CATEGORY_COLORS = {
    digital: COLORS.infoBlue,
    information: COLORS.warning,
    physical: COLORS.amber,
    social: COLORS.neutral,
    fraud: COLORS.secondary
  };

  // Default chart settings used for consistency
  const DEFAULTS = {
    rtl: true,
    interactivity: false,
    pie3d: {
      depth3D: 30,
      angle: 15,
      innerRadiusPct: 50
    },
    scorePie3d: {
      depth3D: 30,
      angle: 15,
      innerRadiusPct: 50
    },
    xy3d: {
      angle: 30,
      depth3D: 60,
      column: {
        widthPercent: 30,
        maxWidth: 50,
        depth3D: 20,
        angle3D: 10
      }
    }
  };

  // Data sets consolidated from page scripts
  const DATA = {
    // Page 4
    participation: [
      { category: 'Completed Assessment', value: 187, color: COLORS.secondary },
      { category: 'Did not finish', value: 26, color: COLORS.primary }
    ],
    score: [
      { category: 'Achieved', value: 77, color: COLORS.secondary },
      { category: 'Remaining', value: 23, color: COLORS.primary }
    ],

    // Page 5
    departmentAwareness: [
      { department: 'Department #1', value: 94, color: COLORS.success, riskLevel: 'High' },
      { department: 'Department #2', value: 43, color: COLORS.danger, riskLevel: 'Very Low' },
      { department: 'Department #3', value: 72, color: COLORS.danger, riskLevel: 'Low' },
      { department: 'Department #4', value: 81, color: COLORS.warning, riskLevel: 'Moderate' }
    ],

    // Page 6
    categoryAwareness: [
      { category: 'Digital and\nInformation', value: 92, color: COLORS.success },
      { category: 'Information\nProtection and\nData Security', value: 23, color: COLORS.danger },
      { category: 'Social Engineering\nThreat Awareness', value: 77, color: COLORS.danger },
      { category: 'Physical and\nEnvironmental\nSecurity', value: 81, color: COLORS.warning },
      { category: 'Fraud and\nEmbezzlement', value: 66, color: COLORS.danger }
    ],

    // Page 8
    stackedDistribution: [
      { department: 'Department #4', digital: 35, information: 20, social: 10, physical: 10, fraud: 25 },
      { department: 'Department #3', digital: 10, information: 25, social: 10, physical: 40, fraud: 15 },
      { department: 'Department #2', digital: 25, information: 20, social: 5, physical: 25, fraud: 15 },
      { department: 'Department #1', digital: 10, information: 25, social: 20, physical: 20, fraud: 25 }
    ],

    // Page 10
    risk: [
      { category: 'Very High Risk', value: 33.3, color: RISK_COLORS.veryHigh },
      { category: 'High Risk', value: 33.3, color: RISK_COLORS.high },
      { category: 'Medium Risk', value: 33.4, color: RISK_COLORS.medium }
    ],
    departmentScores: [
      { department: 'Rewan Department 1', value: 55, color: COLORS.primary },
      { department: 'Rewan Department 2', value: 50, color: COLORS.secondary }
    ]
  };

  // Public API
  window.ChartStore = {
    COLORS,
    RISK_COLORS,
    CATEGORY_COLORS,
    DEFAULTS,
    DATA
  };
})(window);
