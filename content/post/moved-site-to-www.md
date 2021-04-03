---
title: "Moved site to WWW"
date: 2021-04-03
publishdate: 2021-04-03
lastmod: 2021-04-03
draft: false
tags: ["www", "kubernetes"]
---

I have moved my site to WWW.

It used to serve from the apex domain leefuller.io

But from today it is at [www.leefuller.io](https://www.leefuller.io).

## Some background facts

My IaaS provider now has a PaaS product called [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform/). As my site is already a Git repo and built with a Bash script, it is technically an app, and static sites are free on App Platform.

I can link to GitHub and each time I commit to the main branch App Platform checks out the code, rebuilds the site and then serves the static HTML through a managed Kubernetes implementation in their [AMS datacenter region.](https://docs.digitalocean.com/products/platform/availability-matrix/#app-platform-availability).

![A screenshot of Digital Ocean App Platform Deployment Console](/asset/img/moved-site-to-www.png)

## The reason: To save $5 pcm.

I have spun down 1 of my $5 'Droplet' compute instances which was running Apache2 and only lived to serve my zero-traffic site.

I have replaced it by using free static site hosting on Digital Ocean App Platform.

The journey continues.