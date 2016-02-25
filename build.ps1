Param(
    [Parameter(Mandatory=$true)]
    [string]$Url,
    [Parameter(Mandatory=$true)]
    [string]$WinCred
)
$sequence = 
@(
    [pscustomobject]@{name="pre-deploy";path="Deploy\Pre"},
    [pscustomobject]@{name="deploy";path="Deploy"},
    [pscustomobject]@{name="post-deploy";path="Deploy\Post"}
)
Write-Host ""
Write-Host "Running build script for Pzl Brigade" -ForegroundColor Green
Write-Host ""
Write-Host ""
$sequence | % {
    Write-Host "----------------------------------------------------------------------" -ForegroundColor Green
    Write-Host "Running $($_.name) steps" -ForegroundColor Green
    Write-Host "----------------------------------------------------------------------" -ForegroundColor Green
    $index = 1;
    (Get-ChildItem $_.path -File) | % {
        $name = $($_.Name).Replace(".ps1", "")
        Write-Host "$($index). $($name)"
        & $_.FullName -Url $Url -WinCred $WinCred
        $index++
    }
}