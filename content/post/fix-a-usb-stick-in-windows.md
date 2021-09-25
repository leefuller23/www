---
title: "Fix a USB stick in Windows"
date: 2021-09-24
---

Sometimes you have a USB stick that you cant format or recognise from Windows. Maybe you used DD to write Pop_OS to it and now shitty Windows no longer recognises it as a USB stick?! 

You can't format it from File Explorer OR Disk Management. Oh no!

Using cmd/powershell:

```powershell
diskpart
list disk
select disk X
attributes disk clear readonly
clean
create partition primary
select parttion 1
format fs=far32 quick
```

Hopefully that sorts it. If not, find your nearest GNU/Linux device and this single line will do it. Replace X in sdX so it matches your block device.

```bash
dd if=/dev/zero of=/dev/sdX bs=1M count=1
```
