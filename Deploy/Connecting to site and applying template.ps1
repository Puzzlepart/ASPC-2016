Param(
  [string]$Url,
  [string]$WinCred
)
Connect-SPOnline $Url -Credentials $WinCred | Out-Null
Apply-SPOProvisioningTemplate template.xml