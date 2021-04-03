---
title: "Moved site to WWW"
date: 2021-04-03
publishdate: 2021-04-03
lastmod: 2021-04-03
draft: false
tags: ["www", "docker"]
---

I have moved my site to WWW.

My IaaS provider now has a PaaS product called [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform/). As my site is already a Git repo and built with a bash script, it is technically an app, and static sites are free on App Platform.

I just commit and push to main and next branches in my site's Git repo and DO App Platform pulls latest code, rebuilds site and deploys it in a container in a Kubernetes environment. 

## I has cash monies

I have spun down 1 of my $5 Debian GNU/Linux 'Droplet' compute instances and replaced it with a free 'App', but they require a CNAME which I cant do on the apex domain leefuller.io it has to be something.leefuller.io.

```
At some point I will setup an A record at the apex and do a HTTP 301 redirect from the apex!
```