---
title: "Windows shell tricks"
date: 2022-03-11
publishdate: 2022-03-11
lastmod: 2022-03-11
draft: false
---

## Hello, Windows Fans!

A big part of my working day at $JOB is spent troubleshooting Windows server, windows 10, 11. Also XP, Vista 7 8 8.1, 2008, 20012, 20012R2, 2016, 2019. Cloud, on-prem (shout out to the on prem heros) and hybrid.

It is worth adding all those commands to one big page so I can CTRL-F and find them all.

This page is a work in progress! Last update: 06/04/2022 - . Send them to windowsisgr8@leefuller.io or write to me on qtchat or matrix :)

## Thanks
Will: user profile list/delete with powershell + 365 message trace 

## Sections
[[0] Basic Windows stuff]{#0basicwin}
[1] Office365 powershell stuff

## [0] Basic Windows stuff {#0basicwin}

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

## [1] Office365 powershell

## Authenticate 355 powershell with 2fa support
Run this before every powershell session below to authenticate with 2fa.

```powershell
Oops no code.
```

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