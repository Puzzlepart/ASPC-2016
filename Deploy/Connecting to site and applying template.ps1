Param(
  [string]$Url,
  [string]$WinCred
)
if ($WinCred -ne $null) {
	Connect-SPOnline $Url -Credentials $WinCred | Out-Null
} else {
	Connect-SPOnline $Url | Out-Null
}
Apply-SPOProvisioningTemplate template.xml