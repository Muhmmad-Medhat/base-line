# PowerShell script to refactor CSS in HTML files
# This script removes inline styles and replaces with modular CSS class references

# Define the directory containing the pages
$baseDir = "d:\One Drive\OneDrive - Zinad IT\Desktop\base-line"

# Get all directories ending with "-page"
$pageDirectories = Get-ChildItem -Path $baseDir -Directory | Where-Object { $_.Name -match '\d+-page' }

Write-Host "Found $($pageDirectories.Count) page directories to refactor"

foreach ($pageDir in $pageDirectories) {
    $htmlFile = Join-Path $pageDir.FullName "index.html"
    
    if (Test-Path $htmlFile) {
        Write-Host "Processing: $($pageDir.Name)"
        
        # Read the current content
        $content = Get-Content $htmlFile -Raw
        
        # Replace the CSS link reference
        $content = $content -replace '<title>(.*?)</title>\s*<style>.*?</style>', '<title>$1</title>`n    <link rel="stylesheet" href="../styles/main.css">'
        
        # Extract and replace common patterns
        # Background decorations
        $content = $content -replace '<div class="bg-decoration-top-right"></div>', '<div class="bg-decoration bg-decoration--circle bg-decoration--circle-large bg-decoration--top-right"></div>'
        $content = $content -replace '<div class="bg-decoration-bottom-left"></div>', '<div class="bg-decoration bg-decoration--circle bg-decoration--circle-large bg-decoration--bottom-left"></div>'
        
        # Container patterns
        $content = $content -replace '<div class="container">', '<div class="a4-container__content a4-container__content--padded-large layout-flex layout-flex--column">'
        
        # Header patterns
        $content = $content -replace '<header class="header">\s*<div class="logo">(.*?)</div>', '<header class="header header--start">`n          <div class="header__logo typography__logo typography__logo--small">$1</div>'
        
        # Main title patterns
        $content = $content -replace '<h1 class="main-title">(.*?)</h1>', '<h1 class="typography__heading--large layout-spacing--lg">$1</h1>'
        
        # Footer patterns
        $content = $content -replace '<footer class="footer">(.*?)</footer>', '<footer class="footer">$1</footer>'
        $content = $content -replace '<div class="footer-title">', '<div class="footer__title">'
        $content = $content -replace '<div class="page-number">', '<div class="footer__content">'
        $content = $content -replace '<div class="page-number-circle">(\d+)</div>', '<div class="footer__page-number">$1</div>'
        
        # Write the updated content back
        Set-Content -Path $htmlFile -Value $content -NoNewline
        
        Write-Host "Updated: $htmlFile"
    }
}

Write-Host "Refactoring complete!"
