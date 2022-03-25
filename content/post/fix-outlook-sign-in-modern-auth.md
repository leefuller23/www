---
title: "Fix authentication issue with Outlook after enabling 2fa"
date: 2022-03-25
---

This page is a work in progress! Please send comments and feedback to www@leefuller.io - thanks :) 

Outlook unable to authenticate because it is presenting classic auth when modern auth is needed due to 2fa?

```powershell
HKCU\SOFTWARE\Microsoft\Office\16.0\Common\Identity\EnableADAL
```
