$productsPath = 'src\data\products.ts'
$jsonPath = 'temp_products.json'
$content = Get-Content -Path $productsPath -Raw
$json = Get-Content -Path $jsonPath -Raw
$pattern = '(?s)export const ALL_PRODUCTS: Product\[\] = \[.*(?=// Helper subsets for backward compatibility with existing components)'
if ($content -notmatch $pattern) {
    Write-Host 'PATTERN NOT FOUND'
    exit 1
}
$replacement = 'export const ALL_PRODUCTS: Product[] = ' + $json
$new = [regex]::Replace($content, $pattern, $replacement)
Set-Content -Path $productsPath -Value $new -Encoding utf8
Write-Host 'Updated products.ts'