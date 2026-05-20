$root = "src\products data"
function Normalize-Slug {
    param($text)
    if (-not $text) { return "" }
    $text = $text.ToLower()
    $text = $text -replace '&','and'
    $text = $text -replace '[^a-z0-9]+','-'
    return $text.Trim('-')
}
$out = @()
$usedIds = @{}
Get-ChildItem -Path $root -Recurse -File | Sort-Object FullName | ForEach-Object {
    $category = Split-Path $_.DirectoryName -Leaf
    $catSlug = Normalize-Slug $category
    $rows = Import-Csv -Path $_.FullName
    $idx = 0
    foreach ($row in $rows) {
        $idx++
        $name = $row.'group-hover'
        if (-not $name) { $name = $row.'productsView_link__xrJmL href' }
        if (-not $name -or $name.Trim() -eq '') { continue }
        $img = $row.'z-[-1] src'
        $priceRange = $row.'productsView_priceRange__tnOfl'
        $price = 0
        if ($priceRange -and $priceRange -match '\$([0-9]+(?:\.[0-9]+)?)') { $price = [double]$matches[1] }
        $ratingRaw = $row.'sr-only'
        if (-not $ratingRaw) { $ratingRaw = $row.'sr-only 3' }
        $rating = 0
        if ($ratingRaw -and $ratingRaw -match '([0-9]+(?:\.[0-9]+)?)') { $rating = [double]$matches[1] }
        $reviewsRaw = $row.'text-xs'
        if (-not $reviewsRaw) { $reviewsRaw = $row.'sr-only 2' }
        $reviews = 0
        if ($reviewsRaw -and $reviewsRaw -match '([0-9]+)') { $reviews = [int]$matches[1] }
        $desc = $row.'productsView_description__lNG3J'
        $discount = $row.'productsView_savingStory__2gAxy'
        if ($discount -and $discount -notmatch 'SAVE') { $discount = $null }
        $optionsRaw = $row.'productsView_totalSkusListView__yiKBR'
        $options = @()
        if ($optionsRaw) { $options = @($optionsRaw.Trim()) }
        $itemNum = $row.'productsView_itemNumber__E_AK5'
        $id = ''
        if ($itemNum -and $itemNum -match '([0-9]+)') {
            $id = "$catSlug-$($matches[1])"
        } else {
            $nameSlug = Normalize-Slug $name
            $id = "$catSlug-$nameSlug"
        }
        if ($usedIds.ContainsKey($id)) {
            $usedIds[$id]++
            $id = "$id-$($usedIds[$id])"
        } else {
            $usedIds[$id] = 1
        }
        $props = @{
            id = $id
            name = ($name -replace '\s+',' ').Trim()
            category = $category.Trim()
            price = $price
            rating = $rating
            reviewsCount = $reviews
            image = $img
            description = ($desc -replace '\s+',' ').Trim()
            options = $options
        }
        if ($discount) { $props.discount = $discount.Trim() }
        $product = [pscustomobject]$props
        $out += $product
    }
}
$out | ConvertTo-Json -Depth 5 | Out-File -FilePath "temp_products.json" -Encoding utf8
Write-Host "Wrote $($out.Count) products to temp_products.json"