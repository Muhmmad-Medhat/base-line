# Cybersecurity Awareness Baseline Assessment Report

> A comprehensive web-based report displaying cybersecurity awareness assessment results with interactive charts and professional presentation.

## 📋 Project Overview

This project is a multi-page web application that presents the results of a cybersecurity awareness baseline assessment conducted for organizations. The report includes executive summaries, detailed analytics, departmental breakdowns, risk assessments, and actionable recommendations.

**Key Features:**

- 📊 Interactive charts and data visualizations
- 📄 Professional A4-formatted pages for print compatibility
- 📱 Responsive design with mobile support
- 🎨 Modern design system with consistent branding
- ⚡ Optimized performance with external resource loading
- 🔧 Modular and maintainable code architecture

## 🏗️ Project Structure

```text
base-line/
├── index.html                      # Cover page (Entry point)
├── 2-page/index.html               # Table of Contents
├── 3-page/index.html               # Introduction & Assessment Scope
├── 4-page/index.html               # Executive Summary
├── 5-page/index.html               # Participation Insights
├── 6-page/index.html               # Summary of Assessment Results
├── 7-page/index.html               # Category Breakdown Details
├── 8-page/index.html               # Department Distribution Analysis
├── 9-page/index.html               # Data Matrix Overview
├── 10-page/index.html              # Detailed Results & Risk Analysis
├── 11-page/index.html              # Recommendations
├── js/                             # External JavaScript files
│   ├── main.js                     # Centralized chart data/config (ChartStore)
│   ├── page4-charts.js             # Executive Summary charts
│   ├── page5-charts.js             # Department awareness charts
│   ├── page6-charts.js             # Category awareness charts
│   ├── page8-charts.js             # Stacked distribution charts
│   └── page10-charts.js            # Risk assessment charts
└── styles/                         # Modular CSS architecture
    ├── main.css                    # Main entry point with imports
    ├── base/                       # Foundation styles
    │   ├── variables.css           # CSS custom properties
    │   ├── reset.css              # Browser reset styles
    │   └── typography.css         # Font and text styles
    ├── components/                 # Reusable UI components
    │   ├── a4-container.css       # Page container system
    │   ├── bg-decorations.css     # Background elements
    │   ├── buttons.css            # Button components
    │   ├── categories-extended.css # Category displays
    │   ├── charts.css             # Chart styling
    │   ├── footer.css             # Footer component
    │   └── header.css             # Header component
    ├── pages/                      # Page-specific styles
    │   ├── cover.css              # Cover page
    │   ├── table-of-contents.css  # TOC page
    │   ├── content.css            # Content pages
    │   ├── page-6.css             # Page 6 specific
    │   ├── page-9.css             # Page 9 specific
    │   ├── page-10.css            # Page 10 specific
    │   └── page-11.css            # Page 11 specific
  └── utils/                      # Utility classes
    ├── layout.css             # Layout helpers
    └── rtl.css                # RTL overrides (imported by main.css)
```

## 📖 Report Content Overview

### Page-by-Page Breakdown

| Page        | Title                   | Content                                            | Interactive Elements                     |
| ----------- | ----------------------- | -------------------------------------------------- | ---------------------------------------- |
| **Cover**   | Title Page              | Project branding, assessment period, customer info | -                                        |
| **Page 2**  | Table of Contents       | Navigation structure and page references           | -                                        |
| **Page 3**  | Introduction            | Assessment purpose, scope, and methodology         | -                                        |
| **Page 4**  | Executive Summary       | Participation metrics and key insights             | 📊 Participation & Score Charts          |
| **Page 5**  | Participation Insights  | Department-level awareness analysis                | 📊 3D Column Chart                       |
| **Page 6**  | Assessment Results      | Category-wise awareness breakdown                  | 📊 Interactive Charts & Progress Circles |
| **Page 7**  | Category Breakdown      | Detailed domain performance analysis               | 📊 Progress Visualization                |
| **Page 8**  | Department Distribution | Cross-department awareness comparison              | 📊 Stacked Bar Chart                     |
| **Page 9**  | Data Matrix             | Comprehensive risk matrix overview                 | 📊 Data Grid Visualization               |
| **Page 10** | Detailed Results        | Risk assessment and departmental analysis          | 📊 Risk Donut & Column Charts            |
| **Page 11** | Recommendations         | Actionable training and improvement strategies     | -                                        |

## 🛠️ Technology Stack

### Frontend Technologies

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **amCharts 4** - Professional data visualization library

### Architecture Principles

- **BEM (Block Element Modifier)** - CSS naming convention
- **ITCSS (Inverted Triangle CSS)** - Scalable CSS architecture
- **Component-based design** - Modular and reusable components
- **CSS Custom Properties** - Consistent theming system

### External Dependencies

```html
<!-- amCharts 4 Resources -->
<script src="https://cdn.amcharts.com/lib/4/core.js"></script>
<script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
<script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
```

## 🎨 Design System

### Color Palette

```css
:root {
  --color-primary: #4dd0e1; /* Light Blue */
  --color-secondary: #00838f; /* Dark Teal */
  --color-accent: #00bcd4; /* Cyan */
  --color-white: #ffffff; /* White */
  --color-text-primary: #37474f; /* Dark Gray */
}
```

### Gradients

```css
:root {
  --gradient-primary: linear-gradient(135deg, #4dd0e1 0%, #00bcd4 100%);
  --gradient-secondary: linear-gradient(135deg, #00838f 0%, #00acc1 100%);
  --gradient-footer: linear-gradient(135deg, #00838f 0%, #00acc1 100%);
}
```

### Typography Scale

- **Font Family:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Font Weights:** 300 (Light), 400 (Normal), 500 (Medium), 600 (Semibold), 700 (Bold)

### Spacing System

```css
:root {
  --spacing-xs: 5px;
  --spacing-sm: 10px;
  --spacing-md: 15px;
  --spacing-lg: 20px;
  --spacing-xl: 30px;
  --spacing-xxl: 40px;
}
```

## ✒️ Typography & Fonts

This project uses a primary system font stack by default and loads Google fonts via CSS `@import` in `styles/main.css` (no HTML `<link>` tags).

### Fonts

- Default: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- Imported families: `Gothic A1`, `Amiri`, `Roboto`, `Galada` (via CSS `@import` in `styles/main.css`)

### How it’s wired

- CSS (top of `styles/main.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Amiri|Roboto|Galada&display=swap');
```

- HTML (each page head):

```html
<link rel="stylesheet" href="./styles/main.css" />
```

Note: For sub-pages inside folders (e.g., `4-page/`), use `href="../styles/main.css"`.

- Variables in CSS (exposed in `styles/main.css`):
  - `--font-family-gothic: 'Gothic A1', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`
- Utility class (in `styles/main.css`):
  - `.font-gothic { font-family: var(--font-family-gothic); }`

Rationale: Fonts are loaded via CSS `@import` for a single source of truth (simpler templating). If you need best-possible first paint performance, switch to HTML `<link>` with `preconnect` and remove the `@import` lines.

### Usage

- Opt-in per element/section: add `class="font-gothic"`
- Make it the default (optional): set `--font-family-primary: var(--font-family-gothic);` in `variables.css`

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for proper CORS handling of external resources)
- Internet connection (for amCharts CDN resources)

### Installation & Setup

1. **Clone or download the project**

```bash
 git clone https://github.com/Muhmmad-Medhat/base-line.git
 cd base-line
```

1. **Serve the project locally**

```bash
 # Using Python
 python -m http.server 8000

 # Using Node.js
 npx serve .

 # Using PHP
 php -S localhost:8000
```

1. **Open in browser**

Navigate to `http://localhost:8000` to view the cover page

### Page Navigation

- **Cover Page:** `index.html`
- **Individual Pages:** `{page-number}-page/index.html`
- **Example:** `4-page/index.html` for Executive Summary

## 📊 Interactive Features

### Chart Types & Implementation

#### Executive Summary (Page 4)

- Participation donut charts with 3D effects
- Score visualization with percentage displays
- Implementation: `js/page4-charts.js`

#### Department Analysis (Pages 5, 8, 10)

- 3D column charts for awareness levels
- Stacked bar charts for category distribution
- Risk assessment visualizations
- Implementation: `js/page5-charts.js`, `js/page8-charts.js`, `js/page10-charts.js`

#### Category Breakdown (Page 6)

- Interactive progress circles
- Category-wise performance indicators
- Implementation: `js/page6-charts.js`

### Chart Customization

All charts include:

- ✅ Responsive design
- ✅ Custom color schemes matching brand
- ✅ Interactive tooltips and animations
- ✅ Fallback content for accessibility
- ✅ Print-friendly styling

## 📦 Centralized Chart Data (ChartStore)

All chart datasets, color maps, and shared defaults are centralized in `js/main.js` as a global `ChartStore` object to keep things consistent and easy to maintain.

### Structure

`window.ChartStore` exposes:

- `COLORS`: Base brand colors used across charts
- `RISK_COLORS`: Color mapping for risk levels
- `CATEGORY_COLORS`: Colors for page 8 stacked categories
- `DEFAULTS`: Common chart defaults (RTL, interactivity off, 3D settings)
- `DATA`: Consolidated datasets used by the pages

Example (simplified):

```js
window.ChartStore = {
  COLORS: { primary: '#00838f', secondary: '#4dd0e1' /* ... */ },
  DEFAULTS: {
    rtl: true,
    interactivity: false,
    pie3d: { depth3D: 30, angle: 15, innerRadiusPct: 50 },
    scorePie3d: { depth3D: 25, angle: 15, innerRadiusPct: 60 },
    xy3d: { angle: 30, depth3D: 60, column: { widthPercent: 30, maxWidth: 50, depth3D: 20, angle3D: 10 } }
  },
  DATA: {
    participation: [ { category: 'Completed Assessment', value: 187, color: '#4dd0e1' } ],
    score: [ { category: 'Achieved', value: 77, color: '#4dd0e1' } ],
    departmentAwareness: [ /* page 5 */ ],
    categoryAwareness: [ /* page 6 */ ],
    stackedDistribution: [ /* page 8 */ ],
    risk: [ /* page 10 */ ],
    departmentScores: [ /* page 10 */ ]
  }
};
```

### How to use

Include the store before page-specific scripts:

```html
<script src="../js/main.js"></script>
<script src="../js/pageX-charts.js"></script>
```

Then read from the store in your chart code:

```js
chart.rtl = ChartStore.DEFAULTS.rtl;
chart.interactionsEnabled = ChartStore.DEFAULTS.interactivity;
chart.data = ChartStore.DATA.participation.map(d => ({
  category: d.category,
  value: d.value,
  color: am4core.color(d.color)
}));
```

Benefits

- Single source of truth for datasets and constants
- Easier updates without touching multiple files
- Consistent visuals across all pages

## 🎯 Assessment Metrics

### Key Performance Indicators

- **Overall Awareness Level:** 77%
- **Participation Rate:** 87.79% (187/213 employees)
- **Assessment Coverage:** 54 questions across 18 domains
- **Departmental Scope:** 16 departments analyzed
- **Risk Categories:** 5 major security categories

### Risk Level Classifications

- **High (90-100%)** - Excellent awareness
- **Moderate (80-89%)** - Good awareness with minor gaps
- **Low (70-79%)** - Requires focused training
- **Very Low (0-69%)** - Critical training needed

## 🔧 Development Guidelines

### Code Organization Principles

### CSS Architecture (BEM + ITCSS)

Header is the block; the button is an element; button state is a modifier.

```html
<header class="header header--start">
  <button class="header__button">Normal button</button>
  <button class="header__button header__button--state-success">
    Success button
  </button>
  <button class="header__button header__button--state-danger">
    Danger button
  </button>
  <!-- Other header content ... -->
  <div class="header__content">...</div>
  <div class="header__logo">ZiSoft</div>
</header>
```

### File Naming Conventions

- Components: `component-name.css`
- Pages: `page-{number}.css`
- JavaScript: `page{number}-charts.js`

### Component Structure

Each page follows consistent structure:

```html
<div class="a4-container">
  <!-- Background decorations -->
  <div
    class="bg-decoration bg-decoration--circle bg-decoration--circle-large bg-decoration--top-right"></div>
  <div
    class="bg-decoration bg-decoration--circle bg-decoration--circle-large bg-decoration--bottom-left"></div>
  <div
    class="a4-container__content a4-container__content--padded-large layout-flex layout-flex--column">
    <header class="header header--start">
      <div class="header__logo typography__logo typography__logo--large">
        ZiSoft
      </div>
    </header>

    <main><!-- Page content --></main>
    <!-- footer -->
    <footer class="footer">
      <div class="footer__title">
        Cybersecurity Awareness Baseline Assessment Report
      </div>
      <div class="footer__content">
        <span>PAGE NO.</span>
        <div class="footer__page-number">1</div>
      </div>
    </footer>
  </div>
</div>
```

## 📈 Performance Optimizations

### Loading Strategy

- **CSS:** Single bundle via imports for optimal caching
- **RTL:** `styles/utils/rtl.css` is imported by `styles/main.css` and only applies when `html[dir="rtl"]` is set

- **JavaScript:** Page-specific loading to reduce initial bundle size
- **Charts:** CDN delivery with local fallbacks
- **Images:** Optimized background decorations via CSS

### RTL usage

To enable RTL layout, set the page direction:

```html
<html lang="ar" dir="rtl">
  <!-- ... -->
</html>
```

All RTL overrides are scoped to `html[dir="rtl"]`, so they’re inert in LTR.

### Print Optimization

```css
@media print {
  @page {
    size: A4;
    margin: 0;
  }

  body {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
}
```

## 🧩 Troubleshooting

- Styles not applied on some pages: check the relative path to `styles/main.css`.
  - Root page: `./styles/main.css`
  - Subpages (e.g., `4-page/index.html`): `../styles/main.css`
- Fonts not loading: ensure the `@import` lines are at the very top of `styles/main.css` (before other rules/imports).
- Charts not rendering: verify internet connectivity for amCharts CDN or provide a local fallback.

## 🚀 Key Achievements

### Technical Excellence

✅ **Zero Inline Styles/Scripts** - Complete separation of concerns  
✅ **Modular Architecture** - 15+ organized CSS components  
✅ **BEM Implementation** - Consistent naming throughout  
✅ **Responsive Design** - Mobile-first approach  
✅ **Performance Optimized** - External resource loading

### User Experience

✅ **Professional Presentation** - Print-ready A4 format  
✅ **Interactive Visualizations** - Engaging data displays  
✅ **Accessibility Features** - Semantic HTML structure  
✅ **Cross-browser Compatible** - Modern browser support

### Maintainability

✅ **Clear Documentation** - Comprehensive guides  
✅ **Component Reusability** - DRY principles  
✅ **Version Control Ready** - Clean file organization  
✅ **Scalable Codebase** - Easy to extend and modify

## 🤝 Contributing

### Development Setup

1. Follow installation instructions above
1. Make changes to relevant files
1. Test across different browsers and devices
1. Ensure print compatibility
1. Validate chart functionality

### Code Standards

- Follow BEM naming conventions
- Use CSS custom properties for theming
- Maintain responsive design principles
- Include fallbacks for JavaScript features
- Test print functionality

## 📄 License

This project is proprietary software developed for cybersecurity awareness assessment reporting. All rights reserved.

## 📞 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ for enhancing cybersecurity awareness through professional reporting and data visualization.**
