---
title: "Windows shell tricks"
date: 2022-03-11
publishdate: 2022-03-11
lastmod: 2022-03-11
draft: false
---

## Why? 

A big part of my working day at $JOB is spent troubleshooting Windows endpoints.

This page helps me to remember handy Windows shell tricks!

This page is a work in progress! Email me ideas to winshell@leefuller.io and i will credit you!!

## Stop Windows lock

If you work on a remote system it is unhelpful when it locks and kicks you off. Run this in PowerShell to simulate a key press every 5 seconds!

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

These two essential commands are used for early troubleshooting of Windows PC and servers. Run in elevated cmd or PowerShell.

```cmd
sfc /scannow
DISM /Online /Cleanup-Image /RestoreHealth
```