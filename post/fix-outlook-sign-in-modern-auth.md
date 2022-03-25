---
title: "Fix authentication issue with Outlook after enabling 2fa"
date: 2022-03-25
---

Outlook unable to authenticate because it is presenting classic auth when modern auth is needed due to 2fa?

```powershell
HKCU\SOFTWARE\Microsoft\Office\16.0\Common\Identity\EnableADAL
```
