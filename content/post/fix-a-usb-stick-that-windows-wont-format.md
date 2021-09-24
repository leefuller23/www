---
title: "Fix a USB stick that Windows wont format"
date: 2021-09-24
---

Sometimes you have a USB stick that you cant format or recognise from Windows. Maybe you used DD to write Pop_OS it and now shitty Windows no longer recognises it as a USB stick?! 

You can't format it from File Explorer OR Disk Management?!

cmd/powershell:

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

Sorted