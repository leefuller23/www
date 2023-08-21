---
title: "Rapid7 windows uninstall script"
date: 2023-08-21
---

'''powershell
# Search for the Microsoft Monitoring Agent
$monitoringAgent = Get-WmiObject -Class Win32_Product | Where-Object { $_.Name -match "Rapid7 Insight Agent" }

# If the agent is found, uninstall it
if ($monitoringAgent) {
    Write-Host "Uninstalling Rapid7 Insight Agent"
    $uninstallCommand = $monitoringAgent | Select-Object -ExpandProperty IdentifyingNumber
    Start-Process -FilePath "C:\Windows\System32\msiexec.exe" -ArgumentList "/x `"$uninstallCommand`" /qn" -Wait
} else {
    Write-Host "Rapid7 Insight Agent not found"
}
'''