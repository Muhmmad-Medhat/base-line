# PowerShell script to automate CSS refactoring for all remaining pages
param(
    [string]$BaseDir = "d:\One Drive\OneDrive - Zinad IT\Desktop\base-line"
)

# Pages that need refactoring
$pagesToRefactor = @("4-page", "5-page", "6-page", "7-page", "8-page", "9-page", "10-page", "11-page")

Write-Host "Starting CSS refactoring for remaining pages..." -ForegroundColor Green

foreach ($pageDir in $pagesToRefactor) {
    $pagePath = Join-Path $BaseDir $pageDir
    $htmlFile = Join-Path $pagePath "index.html"
    
    if (Test-Path $htmlFile) {
        Write-Host "Processing: $pageDir" -ForegroundColor Yellow
        
        try {
            # Read the file content
            $content = Get-Content $htmlFile -Raw -Encoding UTF8
            
            # Step 1: Replace style section with CSS link
            $cssLinkPattern = '<title>(.*?)</title>\s*<style>.*?</style>'
            $cssReplacement = '<title>$1</title>`n    <link rel="stylesheet" href="../styles/main.css">'
            $content = $content -replace $cssLinkPattern, $cssReplacement, 'Singleline'
            
            # Step 2: Replace common class patterns
            $content = $content -replace '<div class="container">', '<div class="a4-container__content a4-container__content--padded-large layout-flex layout-flex--column">'
            
            # Step 3: Replace background decorations
            $content = $content -replace '<div class="bg-decoration-top-right"></div>', '<div class="bg-decoration bg-decoration--circle bg-decoration--circle-large bg-decoration--top-right"></div>'
            $content = $content -replace '<div class="bg-decoration-bottom-left"></div>', '<div class="bg-decoration bg-decoration--circle bg-decoration--circle-large bg-decoration--bottom-left"></div>'
            
            # Step 4: Replace header patterns
            $content = $content -replace '<header class="header">\s*<div class="logo">([^<]+)</div>', '<header class="header header--start">`n          <div class="header__logo typography__logo typography__logo--extra-small">$1</div>'
            
            # Step 5: Replace main title
            $content = $content -replace '<h1 class="main-title">([^<]+)</h1>', '<h1 class="typography__heading--large layout-spacing--lg">$1</h1>'
            
            # Step 6: Replace footer patterns
            $content = $content -replace '<div class="footer-title">', '<div class="footer__title">'
            $content = $content -replace '<div class="page-number">', '<div class="footer__content">'
            $content = $content -replace '<div class="page-number-circle">(\d+)</div>', '<div class="footer__page-number">$1</div>'
            
            # Step 7: Replace content section patterns
            $content = $content -replace '<div class="section-title">', '<div class="content-section__title">'
            $content = $content -replace '<p class="section-text">', '<p class="content-section__text">'
            $content = $content -replace '<h2 class="section-title">', '<h2 class="content-section__title">'
            
            # Step 8: Add chart-specific classes for pages with charts
            if ($pageDir -match "^(4|5|6|8|10)-page$") {
                $content = $content -replace '<div class="chart-container">', '<div class="chart-container">'
                $content = $content -replace '<div class="donut-wrapper">', '<div class="donut-wrapper">'
                $content = $content -replace '<div class="chart-labels">', '<div class="chart-labels">'
            }
            
            # Write the updated content back
            Set-Content -Path $htmlFile -Value $content -Encoding UTF8 -NoNewline
            
            Write-Host "✓ Successfully refactored: $pageDir" -ForegroundColor Green
        }
        catch {
            Write-Host "✗ Error processing $pageDir : $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    else {
        Write-Host "✗ File not found: $htmlFile" -ForegroundColor Red
    }
}

Write-Host "`nCSS refactoring completed!" -ForegroundColor Green
Write-Host "Note: Some pages may need manual fine-tuning for chart components and specific layouts." -ForegroundColor Yellow
