---
title: "June 2021 progress"
date: 2021-06-20
publishdate: 2021-06-20
lastmod: 2021-06-20
draft: false
tags: ["qtnet", "devops"]
---

I have made some decent progress. 

10 single use VMs have been condensed to 5.

I also have a new bare metal box running GitLab on Debian 10.

## Debian 10: NFS server
Provides fast NFS4 based storage to container hosts. Also runs Duplicity to provide offiste backup to remote object storage.

## Debian 10: PiHole DNS
Provides internal DNS resolution. Ad-blocking is turned off by defualt but may be enabled in future. The USP for PiHole on my network is seamless DNS resolution of my services for family members whether they are on mobile data or WiFi. Previously users would have to access internal IP addresses when on WiFi and hostnames when outside the LAN.

## Fedora 34: HAProxy Ingress Load Balancer
This is the corner stone of my new deployment process. Router port forwards all traffic to HAProxy which is able to switch between backends based on healthchecks or API calls on the fly.

## Fedora 34: 2x Container Hosts
Green/Blue deployments! Using Ansible, GitLab + Docker Compose I can now run a playbook against a blank/minimal container VM and rebuild my entire software stack.

My main playbook builds the stack as a staging area with dummy (non-production) data. This way I can test container upgrades on a separate dataset away from the important data. I can then access services directly on the staging container host by IP address to ensure they work etc.

## But Why Fedora though?
Both CT hosts run Fedora 34. Its because I want to use PodMan instead of Docker! Podman is coming in Debian 12 so I'll switch to Debian then.

HAProxy is running Fedora because I am confident enough with HAProxy to fully utilise and manage SELinux which feels sensible considering it is my ingress point.
