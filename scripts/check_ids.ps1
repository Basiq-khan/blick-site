$path = 'temp_products.json'
$json = Get-Content -Path $path -Raw | ConvertFrom-Json
$counts = @{}
foreach ($p in $json) {
    if ($counts.ContainsKey($p.id)) { $counts[$p.id]++ } else { $counts[$p.id] = 1 }
}
$dups = $counts.GetEnumerator() | Where-Object { $_.Value -gt 1 } | Sort-Object Value -Descending
foreach ($dup in $dups) { Write-Host "$($dup.Name) $($dup.Value)" }
Write-Host "Total duplicates: $($dups.Count)"
Write-Host "Total products: $($json.Count)"