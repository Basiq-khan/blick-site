$inPath = 'temp_products.json'
$outJson = 'temp_products_15.json'
$products = Get-Content -Path $inPath -Raw | ConvertFrom-Json

function Normalize-Slug {
    param($text)
    if (-not $text) { return "" }
    $text = [string]$text
    $text = $text.ToLower()
    $text = $text -replace '&','and'
    $text = $text -replace '[^a-z0-9]+','-'
    return $text.Trim('-')
}

$categories = $products | Select-Object -ExpandProperty category | Sort-Object -Unique
$out = @()
$usedIds = @{}

foreach ($cat in $categories) {
    $catItems = $products | Where-Object { $_.category -eq $cat }
    if (-not $catItems -or $catItems.Count -eq 0) { continue }
    $catSlug = Normalize-Slug $cat
    $i = 0
    while ($i -lt 15) {
        $src = $catItems[$i % $catItems.Count]
        # create a shallow copy without nullable originalPrice
        $props = @{
            id = $null
            name = $src.name
            category = $src.category
            price = $src.price
            rating = $src.rating
            reviewsCount = $src.reviewsCount
            image = $src.image
            description = $src.description
            isNew = $false
            isClearance = $false
            options = $src.options
        }
        if ($src.discount) { $props.discount = $src.discount }
        $new = [pscustomobject]$props
        # build unique id
        $baseId = Normalize-Slug($new.category) + "-" + (Normalize-Slug($new.name).Substring(0, [Math]::Min(40, (Normalize-Slug($new.name).Length))) )
        if ([string]::IsNullOrWhiteSpace($baseId)) { $baseId = "$catSlug-$i" }
        $candidate = $baseId
        $suffix = 1
        while ($usedIds.ContainsKey($candidate)) {
            $candidate = "$baseId-$suffix"
            $suffix++
        }
        $usedIds[$candidate] = $true
        $new.id = $candidate
        $out += $new
        $i++
    }
}

$out | ConvertTo-Json -Depth 6 | Out-File -FilePath $outJson -Encoding utf8
Write-Host "Wrote $($out.Count) products to $outJson"

# Now update src/data/products.ts by replacing the ALL_PRODUCTS array
$productsTs = 'src\data\products.ts'
$content = Get-Content -Path $productsTs -Raw
$pattern = '(?s)export const ALL_PRODUCTS: Product\[\] = \[.*(?=// Helper subsets for backward compatibility with existing components)'
$json = Get-Content -Path $outJson -Raw
$replacement = 'export const ALL_PRODUCTS: Product[] = ' + $json
$newContent = [regex]::Replace($content, $pattern, $replacement)
Set-Content -Path $productsTs -Value $newContent -Encoding utf8
Write-Host "Updated $productsTs with 15 products per category"

# Print counts per category
$counts = @{}
$out | ForEach-Object { if ($counts.ContainsKey($_.category)) { $counts[$_.category]++ } else { $counts[$_.category]=1 } }
Write-Host "Category counts:" 
$counts.GetEnumerator() | Sort-Object Name | ForEach-Object { Write-Host "$($_.Name): $($_.Value)" }
