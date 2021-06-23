---
title: "QTnet"
date: 2021-04-10
publishdate: 2021-04-10
lastmod: 2021-06-23
draft: false
---

QTnet is a friendly banner for my self hosted projects. It is no relation to the cross-platofrm dev framework Qt.

***QT: "cutie". Have you met me? I'm adorable. QTnet is the obvious branding for my self-hosted stack.***

In the not-too-distant future I will link each of the following items to their own page on my site detailing how to reproduce them from scratch.

The idea is to offer a follow-along guide to build your own stack with careful attention paid to network fundamentals, security and high availabilty. 

All without devating from the promise of a low cost / Google-free private self-hosted tech stack for you and your family. 

## User facing services

QTmail: Postfix/Dovecot (currently on a raspberry pi 3 model b)

QTwebmail: Roundcube Webmail (containerised)

QTflix: Emby (containerised)

QTphotos: Photo storage (no presentation yet)

QTcloud: Nextcloud (containerised)

QTpass: BitWarden (containerised)

QTsync: Syncthing (containerised)

QTgit: GitLab (bare metal)

QTnotes: Joplin (synced with QTsync/Syncthing)

QTsearch: Searx (containerised)

QTwww: Uses GitLab CI/CD to build my site (leefuller.io) from Markdown files into a container with Nginx. Deploys into production container host on commit to Main branch. Deploys to staging on other branches. 

## Storage as products

QTnfs-fast: VM backed NFS4 storage. Use case: latency-sensitive / secure user-generated data. Config data and secrets.

Backups: every hour per app and as a complete filesystem daily: 2 local copies, 2 offsite. (fast, secure, durable, expensive).

Currently storing: 409G
Free: 1.4T

QTnfs-slow: NAS backed NFS2/3 storage. Use case: media, software repositories. 2 local copies. 0(!) offsite. (fast reads, slow writes, cheap, low durability) 

Currently storing: 11T
Free: 522G
