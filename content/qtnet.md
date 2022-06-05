---
title: "qtnet"
date: "2022-06-04"
lastmod: 2022-06-05
---
## wtf?
qtnet is the name of my home network. My self hosted apps are inspired by successful commercial services, replicated for my and my family's use,

Based almost entirely on open source software, there are a few exceptions. 

Nextcloud is 'qtcloud', plex is 'qtfilx' etc. Why qt? Because im cute. Im more than cute, I'm adorable. My network = qtnet.

You get it. It's childish. But its my expensive hobbby so I get to name it, right? =)

By using a consistent (fake) company name and consistent (fake) product names, it makes it much easier for me to to follow the enterprise techniques I use at work. This means naming services, servers, VMs, containers, CI/CD pipelines, all the way through to testing/staging and documentation.

## Network topology
Something here soon hopefully. 

## The apps
qtchat/Mattermost/Element/Matrix

qtcloud: Self hosted Nextcloud. Photos, file sharing, calendar etc.

qtsync: Self hosted Syncthing - used to sync documents, password vaults etc.

qtvpn: Multiple deployments of WireGuard, OpenVPN and LT2P/IPsec for site to site, roaming clients.

qtcctv/Blue Iris: Ingests CCTV feeds from local and remote cameras. Configured for multi tenant access, includes some public CCTV feeds too.

qtflix: Jellyfin/Plex instances. Used to serve my DVD collection to my TVs at home.

qtgit/Gitea: Central code repository for the whole project. Each app has a repo with upstream code + customised CI/CD piplines for staging and production deployments.

qtcompute/Proxmox/Kubernetes/Ceph: Currently only consumed internally, used as the compute and storage fabric for the whole project. Hoping to open up Proxmox in future to provide hosted desktops for family and friends.

qtPRTG/PRTG: A deployment of the PRTG monitoring engine used to ping every device and service every 10 seconds. Used to track incoming/outgoing traffic. HTTPS, SNMP, custom Python scripts for measuring available download and upload speed through my ISP connection.

qtwarrior/ArchiveTeam Warrior: Contributing to ArchiveTeam's amazing work archiving the Internet. Crawling various services at a rate of about 750 GB a day at time of writing.

More details here in future.
