---
title: "qtnet"
date: "2022-06-04"
lastmod: 2022-06-13
---
## wtf?
qtnet is the name of my home network. The apps are self-hosted versions of public apps. Used by myself, family and friends.

Nextcloud is 'qtcloud', plex is 'qtfilx' etc. Why qt? Because im cute.

You get it. It's childish. But its my expensive hobbby so I get to name it right? =)

By using a consistent (fake) company name and consistent (fake) product names, it makes it much easier for me to to follow the enterprise techniques I use at work. I can group services together to form a "product" and prefix it with qt. It also helps with documentation, arranging back-end services etc.

## Network topology
Something here soon hopefully!

## The apps
qtchat/Mattermost/Element/Matrix Synapse.

qtcloud: Self hosted Nextcloud. Photos, file sharing, calendar etc.

qtnest: Home Assistant / Node Red / ESPHome implementation for measuring and controlling the environment.

qtnotes: Joplin Notes server

qtsync: Syncthing - used to sync documents, password vaults etc.

qtvpn: Multiple deployments of WireGuard, OpenVPN and LT2P/IPsec for site to site, roaming clients.

qtcctv: Blue Iris - CCTV feeds from local and remote cameras. Produces events which trigger actions in qtnest.

qtflix: Kodi/Jellyfin/Plex implementation. Makes live TV and DVD library available to all TVs at home.

qtgit: GitLab - Central code repository for the whole project. Handles code, assets and deployment using CI/CD.

qtcompute: Proxmox/Kubernetes/Ceph - Currently only consumed internally, used as the compute and storage fabric for the whole project. Hoping to open up Proxmox in future to provide hosted desktops for family and friends.
