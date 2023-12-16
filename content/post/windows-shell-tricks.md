---
title: "Windows shell tricks"
date: 2022-03-11
publishdate: 2022-03-11
lastmod: 2023-12-16
draft: false
---

# Table of Contents
1. [Basic Windows Stuff](#basic-windows-stuff)
   - [Stop Windows Lock](#stop-windows-lock)
   - [Check and Repair OS Image with SFC + DISM](#check-and-repair-os-image-with-sfc--dism)
   - [Get Simple List of Loaded User Profiles](#get-simple-list-of-loaded-user-profiles)
   - [Delete User Profile from Local Machine](#delete-user-profile-from-local-machine)
2. [Office365/AzureAD/Intune Stuff](#office365azureadintune-stuff)
   - [Add AAD/Intune User to Local Admin Group (CMD)](#add-aadintune-user-to-local-admin-group-cmd)
   - [Exchange 365 List Running Message Trace Jobs](#exchange-365-list-running-message-trace-jobs)
   - [Do Content Search and Purge Results into Deleted Items Folder](#do-content-search-and-purge-results-into-deleted-items-folder)
   - [Recipient Filter for Dynamic Distribution List with All Users Except -ne Entries](#recipient-filter-for-dynamic-distribution-list-with-all-users-except--ne-entries)
   - [List Members of 365 Dynamic Distribution List](#list-members-of-365-dynamic-distribution-list)
   - [Decouple AD and 365 Cloud User with ImmutableID](#decouple-ad-and-365-cloud-user-with-immutableid)
   - [Rapid7 Uninstall Script](#rapid7-uninstall-script)
3. [Acknowledgements](#acknowledgements)

## Basic Windows Stuff {#basic-windows-stuff}
### Stop Windows Lock {#stop-windows-lock}
If you work on a remote system it is unhelpful when it locks and kicks you off. Run this in PowerShell to simulate a key press every 5 seconds.

```powershell
$WShell = New-Object -com "Wscript.Shell"
$sleep = 5


while ($true)
{
  $WShell.sendkeys("{SCROLLLOCK}")
  Start-Sleep -Milliseconds 100
  Write-Host "Press Scroll lock"
  $WShell.sendkeys("{SCROLLLOCK}")
  Write-Host "Waiting " $sleep " seconds" 
  Start-Sleep -Seconds $sleep
}
```
Adapted from [https://siliconheaven.info/powershell-stop-screen-locking/](https://siliconheaven.info/powershell-stop-screen-locking/)


### Check and Repair OS Image with SFC + DISM {#check-and-repair-os-image-with-sfc--dism}
```cmd
sfc /scannow
DISM /Online /Cleanup-Image /RestoreHealth
```

### Get Simple List of Loaded User Profiles {#get-simple-list-of-loaded-user-profiles}
```powershell
Get-WmiObject -Class Win32_UserProfile | Where-Object {$_.Special -ne 'Special'} | Select-Object LocalPath, Loaded
```

### Delete User Profile from Local Machine {#delete-user-profile-from-local-machine}
```powershell 
Get-CimInstance -Class Win32_UserProfile | Where-Object { $_.LocalPath.split('\')[-1] -eq 'User' ] | Remove-CimInstance 
```

## Office365/AzureAD/Intune Stuff {#office365azureadintune-stuff}
### Add AAD/Intune User to Local Admin Group (CMD) {#add-aadintune-user-to-local-admin-group-cmd}
```cmd
net localgroup administrators AzureAD\JohnDoe /add
```

### Exchange 365 List Running Message Trace Jobs {#exchange-365-list-running-message-trace-jobs}
```powershell
install-module exchangeonlinemanagement
import-module exchangeonlinemanagement
Connect-ExchangeOnline -userprincipalname account@fqdn

# This will list running trace jobs, notice GUID column
Get-HistoricalSearch
# Replace <GUID> with GUID from above command
Stop-MessageTrace <GUID>
```

### Do Content Search and Purge Results into Deleted Items Folder {#do-content-search-and-purge-results-into-deleted-items-folder}
```powershell
Import-Module ExchangeOnlineManagement
Connect-IPPSSession -UserPrincipalName account@fqdn

$Search=New-ComplianceSearch -Name "Remove Usecure Email2" -ExchangeLocation All -ContentMatchQuery '(Subject:"Invite to complete your business policies")'
Start-ComplianceSearch -Identity $Search.Identity

New-ComplianceSearchAction -SearchName "Remove Usecure Email2" -Purge -PurgeType SoftDelete
```

### Recipient Filter for Dynamic Distribution List with All Users Except -ne Entries {#recipient-filter-for-dynamic-distribution-list-with-all-users-except--ne-entries}
```powershell
Set-DynamicDistributionGroup -Identity "all" -RecipientFilter "((PrimarySmtpAddress -ne 'mailbox@domain.tld) -and ((RecipientType -eq 'UserMailbox') -or (RecipientType -eq 'MailUser')))"
```

### List Members of 365 Dynamic Distribution List {#list-members-of-365-dynamic-distribution-list}
```powershell
#gives list of members

 

$GroupName = "all@example.co.uk"

 

$Group = Get-DynamicDistributionGroup -Identity $GroupName

if ($Group) {

    $GroupMembers = Get-Recipient -RecipientPreviewFilter $Group.RecipientFilter

    $GroupMembers | Select-Object DisplayName, PrimarySmtpAddress

} else {

    Write-Host "Dynamic distribution group $($GroupName) not found."

}
```

### Decouple AD and 365 Cloud User with ImmutableID {#decouple-ad-and-365-cloud-user-with-immutableid}
```powershell
install-module MSOnline
import-module msonline
Connect-MsolService
Set-MsolUser -UserPrincipalName user@domain.tld -ImmutableId "$null"
```

#Rapid7 uninstall script
```powershell
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
```

### Rapid7 Uninstall Script {#rapid7-uninstall-script}
```powershell
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
```

## Acknowledgements {#acknowledgements}
Special thanks to Will for contributions to the user profile list/delete with PowerShell and 365 message trace.

