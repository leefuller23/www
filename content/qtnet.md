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

QTsql: Managed MariaDB SQL engine with full transaction logging

QTnotes: Joplin (synced with QTsync/Syncthing)

QTsearch: Searx (containerised)

QTwww: Uses GitLab CI/CD to build my site (leefuller.io) from Markdown files into a container with Nginx. Deploys into production container host on commit to Main branch. Deploys to staging on other branches. 

QThome: Home Assistant w/ bells and whistles for self-hosted "smart" plugs + bulbs that don't rely on 3rd party cloud services.

## Storage as products

QTnfs-fast: VM backed NFS4 storage. Use case: latency-sensitive / secure user-generated data. Config data and secrets.

Fast, secure, expensive. Highly durable.

Backups: Local disk Rsync every 10 minutes. Encrypted offsite every 3 hours at app level, once daily as a complete filesystem. 2 local copies, 2 offsite.

Currently storing: 409G
Free: 1.4T

QTnfs-slow: NAS backed NFS2/3 storage. Use case: media, software repositories.

Fast reads, slow writes, cheap but with low durability.

Backups: Daily overnight copy to 12TB external USB3 disk. 2 local copies. 0(!) offsite.

Currently storing: 11T
Free: 522G
