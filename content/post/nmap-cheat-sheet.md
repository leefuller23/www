---
title: "nmap cheat sheet"
date: 2022-08-08
lastmod: 2022-08-19
---

```powershell
nmap -sC -sV -Pn --script vulners 10.0.4.11
```

```bash
nmap -sC -sV -p- -T5 -vv [Target_IP]
```

T5 = to increase scan speed
-p- = to scan all ports