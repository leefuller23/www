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
Provides internal DNS resolution. Ad-blocking is turned off by defualt but may be enabled in future. The main feature i have now means i can provide seamless access to my services by hostname instead of having to use internal ip addresses when connected to wifi.

## Fedora 34: HAProxy Ingress Load Balancer
This is the corner stone of my new deployment process. Router port forwards all traffic to HAProxy which is able to switch between backends based on healthchecks or API calls on the fly.

## Fedora 34: 2x Container Hosts
Green/Blue deployments! Using Ansible, GitLab + Docker Compose I can now run a playbook against a blank/minimal container VM and rebuild my entire software stack.

The default playbook builds the stack with dummy userdata, a second playbook switches the data from dummy to production, a final playbook updates HAProxy to seamlessly route traffic from green to blue or back again.
