
# ============================================================
# download_images.ps1
# Downloads all product images locally and updates products.ts
# ============================================================

$projectRoot  = "C:\Users\Admin\Desktop\blick site\blick-site"
$outputDir    = Join-Path $projectRoot "public\images\products"
$productsFile = Join-Path $projectRoot "src\data\products.ts"

New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$content = Get-Content $productsFile -Raw -Encoding UTF8

# ----------------------------------------------------------
# 1. Extract every unique raw "image" URL from the file
# ----------------------------------------------------------
$imagePattern  = '"image":\s*"([^"]+)"'
$rawMatches    = [regex]::Matches($content, $imagePattern)

$urlMap        = [ordered]@{}
$usedFilenames = @{}

foreach ($m in $rawMatches) {
    $rawUrl = $m.Groups[1].Value
    if ($urlMap.ContainsKey($rawUrl)) { continue }

    # Decode JSON unicode escapes for the real HTTP request
    $actualUrl = $rawUrl -replace '\\u0026', '&' -replace '\\u0027', "'" -replace '\\u003d', '='

    # Derive a clean filename (strip query string)
    $pathOnly = ($actualUrl -split '\?')[0]
    $baseName  = $pathOnly.Split('/')[-1]

    if ($baseName -notmatch '\.(jpg|jpeg|png|gif|webp)$') {
        $baseName = $baseName + '.jpg'
    }

    # Handle filename collisions from different CDN paths
    if ($usedFilenames.ContainsKey($baseName)) {
        $usedFilenames[$baseName]++
        $ext       = [System.IO.Path]::GetExtension($baseName)
        $nameNoExt = [System.IO.Path]::GetFileNameWithoutExtension($baseName)
        $baseName  = $nameNoExt + '_' + $usedFilenames[$baseName] + $ext
    } else {
        $usedFilenames[$baseName] = 0
    }

    $urlMap[$rawUrl] = @{
        ActualUrl = $actualUrl
        LocalRef  = "/images/products/$baseName"
        Filename  = $baseName
    }
}

Write-Host ""
Write-Host "Found $($urlMap.Count) unique image URLs to process."
Write-Host ""

# ----------------------------------------------------------
# 2. Download each unique image
# ----------------------------------------------------------
$headers = @{
    'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
    'Accept'     = 'image/webp,image/apng,image/*,*/*;q=0.8'
    'Referer'    = 'https://www.dickblick.com/'
}

$success = 0
$skipped = 0
$failed  = 0

foreach ($rawUrl in $urlMap.Keys) {
    $entry    = $urlMap[$rawUrl]
    $destPath = Join-Path $outputDir $entry.Filename

    if (Test-Path $destPath) {
        $skipped++
        Write-Host "  SKIP   $($entry.Filename)"
        continue
    }

    try {
        Invoke-WebRequest -Uri $entry.ActualUrl -OutFile $destPath -Headers $headers -TimeoutSec 45 -ErrorAction Stop
        $success++
        Write-Host "  OK     $($entry.Filename)"
    } catch {
        $failed++
        Write-Host "  FAIL   $($entry.Filename)  --  $($_.Exception.Message)"
        $urlMap[$rawUrl] = $null
    }
}

Write-Host ""
Write-Host "--- Download complete ---"
Write-Host "  Downloaded : $success"
Write-Host "  Skipped    : $skipped (already on disk)"
Write-Host "  Failed     : $failed"
Write-Host ""

# ----------------------------------------------------------
# 3. Rewrite products.ts with local image paths
# ----------------------------------------------------------
$newContent = $content

foreach ($rawUrl in $urlMap.Keys) {
    $entry = $urlMap[$rawUrl]
    if ($null -eq $entry) { continue }

    $escapedRaw = [regex]::Escape($rawUrl)
    $newContent = $newContent -replace $escapedRaw, $entry.LocalRef
}

[System.IO.File]::WriteAllText($productsFile, $newContent, (New-Object System.Text.UTF8Encoding $false))

Write-Host "products.ts updated — all downloaded URLs replaced with local paths."
Write-Host "Images saved to: $outputDir"
Write-Host ""
