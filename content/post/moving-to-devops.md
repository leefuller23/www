---
title: "Moving to DevOps"
date: 2021-04-01
publishdate: 2021-03-30
lastmod: 2021-03-30
draft: false
tags: ["qtnet", "devops"]
---

I am about 5 years late but it's time to learn and commit to DevOps. 

My personal projects are now complex and sprawling and people trust my storage + comptue for Notes, Passwords, Photos + Documents.

## Current state

Syncthing is already Dockerised. 

QTflix runs on bare metal.

Mail/Webmail are Linux VMs at Digital Ocean.

Website is (as of 30/03/2021) now an automatically built/deployed containerised app hosted on Digital Ocean App Platform - a managed Kubernetes implementation.

I have 1 x 8 year server, an 8 year old gen 6 proliant dual Xeon w/ 74GB of RAM.

## Aspirational future state

Rebuild server with ProxMox, run a 5 node K8S cluster on it (for practice, not HA) rebuild my Mail VM as a dedicated VM on ProxMox host. 

Tear down Webmail VM and deploy it as an app on K8S

Rebuild Emby as a dockerised app and deploy to Kubernetes?

This is all I have for now... more thoughts to follow. 
