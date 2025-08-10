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
        └── layout.css             # Layout helpers
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

This project uses a modular typography system with a primary font variable. Google "Gothic A1" has been integrated for optional use without altering the current default typography.

### Fonts

- Default: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- Optional: `Gothic A1` via Google Fonts

### How it’s wired

- Import added in `styles/main.css`:
  - `@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300;400;500;600;700;800;900&display=swap');`
- Variable exposed in `styles/base/variables.css`:
  - `--font-family-gothic: 'Gothic A1', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`
- Utility in `styles/utils/layout.css`:
  - `.font-gothic { font-family: var(--font-family-gothic); }`

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

```css
/* Block */
.header {
}

/* Element */
.header__logo {
}
.header__content {
}

/* Modifier */
.header--start {
}
.header--center {
}
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
  <div class="bg-decoration bg-decoration--circle"></div>

  <div class="a4-container__content a4-container__content--padded-large">
    <header class="header header--start">
      <div class="header__logo typography__logo">ZiSoft</div>
    </header>

    <main><!-- Page content --></main>

    <footer class="footer">
      <div class="footer__title">Report Title</div>
      <div class="footer__content">
        <span>PAGE NO.</span>
        <div class="footer__page-number">X</div>
      </div>
    </footer>
  </div>
</div>
```

## 📈 Performance Optimizations

### Loading Strategy

- **CSS:** Single bundle via imports for optimal caching
- **JavaScript:** Page-specific loading to reduce initial bundle size
- **Charts:** CDN delivery with local fallbacks
- **Images:** Optimized background decorations via CSS

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
