Get-ChildItem .\SiteAssets\js\*ts | Foreach-Object { tsc --out $_.FullName.Replace(".ts", ".js") $_.FullName }