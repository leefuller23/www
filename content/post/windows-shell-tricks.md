---
title: "Windows shell tricks"
date: 2022-03-11
publishdate: 2022-03-11
lastmod: 2022-04-21
draft: false
---

## Hello, Windows Fans!

A big part of my working day is spent troubleshooting Windows server, windows 10, 11. Also XP, Vista 7 8 8.1, 2008, 20012, 20012R2, 2016, 2019. Cloud, on-prem (shout out to the on prem heros) and hybrid.

It is worth adding all those commands to one big page so I can CTRL-F and find them all. It's a work in progress.

## Thanks
Will: user profile list/delete with powershell + 365 message trace 

## Sections
[0] Basic Windows stuff

[1] Office365 powershell stuff

## [0] Basic Windows stuff

## Stop Windows lock

If you work on a remote system it is unhelpful when it locks and kicks you off. Run this in PowerShell to simulate a key press every 5 seconds if your rmm doesn't have wakelock toggle.

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


## Check and repair OS image with SFC + DISM

These two are used for early troubleshooting of Windows PC and servers. Run in elevated cmd or PowerShell.

```cmd
sfc /scannow
DISM /Online /Cleanup-Image /RestoreHealth
```

## Get simple list of loaded user profiles
  
  ```powershell
Get-WmiObject -Class Win32_UserProfile | Where-Object {$_.Special -ne 'Special'} | Select-Object LocalPath, Loaded
```

## Delete user profile from local machine

```powershell 
Get-CimInstance -Class Win32_UserProfile | Where-Object { $_.LocalPath.split('\')[-1] -eq 'User' ] | Remove-CimInstance 
```

## [1] Office365/AzureAD/Intune stuff

## Add aad/intune user to localadmin group (cmd)

```cmd
net localgroup administrators AzureAD\JohnDoe /add
```

## Exchange 365 list running message trace jobs
  
  ```powershell
install-module exchangeonlinemanagement
import-module exchangeonlinemanagement
Connect-ExchangeOnline -userprincipalname account@fqdn

# This will list running trace jobs, notice GUID column
Get-HistoricalSearch
# Replace <GUID> with GUID from above command
Stop-MessageTrace <GUID>
```


## Do content search and purge results into deleted items folder

```powershell
Import-Module ExchangeOnlineManagement
Connect-IPPSSession -UserPrincipalName account@fqdn

$Search=New-ComplianceSearch -Name "Remove Usecure Email2" -ExchangeLocation All -ContentMatchQuery '(Subject:"Invite to complete your business policies")'
Start-ComplianceSearch -Identity $Search.Identity

New-ComplianceSearchAction -SearchName "Remove Usecure Email2" -Purge -PurgeType SoftDelete
```

## Recipient Filter for dynamic distribution list with all users except -ne entries
```powershell
Set-DynamicDistributionGroup -Identity "all" -RecipientFilter "((PrimarySmtpAddress -ne 'mailbox@domain.tld) -and ((RecipientType -eq 'UserMailbox') -or (RecipientType -eq 'MailUser')))"
```

## List members of 365 dynamic distribution list
```powershell
#gives list of members

 

$GroupName = "all@gippingconstruction.co.uk"

 

$Group = Get-DynamicDistributionGroup -Identity $GroupName

if ($Group) {

    $GroupMembers = Get-Recipient -RecipientPreviewFilter $Group.RecipientFilter

    $GroupMembers | Select-Object DisplayName, PrimarySmtpAddress

} else {

    Write-Host "Dynamic distribution group $($GroupName) not found."

}
```

## Decouple AD and 365 cloud user with immutableID
```powershell
PS C:\WINDOWS\system32> install-module MSOnline

Untrusted repository
You are installing the modules from an untrusted repository. If you trust this repository, change its
InstallationPolicy value by running the Set-PSRepository cmdlet. Are you sure you want to install the modules from
'PSGallery'?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): A
PS C:\WINDOWS\system32> import-module msonline
PS C:\WINDOWS\system32> Connect-MsolService
PS C:\WINDOWS\system32> Set-MsolUser -UserPrincipalName vanessa.brown@ageuknorfolk.org.uk -ImmutableId "$null"
```