---
title: "Moved site to WWW"
date: 2021-04-03
publishdate: 2021-04-03
lastmod: 2021-04-03
draft: false
tags: ["www", "docker"]
---

I have moved my site to WWW.

Before, if you visited the apex domain, i.e leefuller.io instead of www.leefuller.io you would see my site.

But from now the site lives at www.leefuller.io.

My IaaS provider now has a PaaS product called [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform/). As my site is already a Git repo and built with a Bash script, it is technically an app, and static sites are free on App Platform.

I can link to GitHub and each time I commit to the main branch App Platform checks out the code, rebuilds the site and then serves the static HTML through a managed Kubernetes implementation in their [AMS datacenter region.](https://docs.digitalocean.com/products/platform/availability-matrix/#app-platform-availability).

## Cash monies

I have spun down 1 of my $5 Debian GNU/Linux 'Droplet' compute instances and replaced it with a free 'App', but they require a CNAME which I cant do on the apex domain leefuller.io it has to be something.leefuller.io.

So I have taken advantage of free static sites to have separate 'production' and 'development' sites. using CNAMES at [www](https://www.leefuller.io) and [www2.leefuller.io](https://www2.leefuller.io).

