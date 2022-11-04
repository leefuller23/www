---
title: "Lab hosted"
date: 2022-10-22
---

Since 2015 my site has been hosted randomly between digital ocean, google compute engine, heroku, linode and cloudflare pages. It has also been equally non-hosted without an A record. 

Cool fact: for the past year it has 100% contonuous uptime thanks to cloudflare pages.

![Snip from statuscake showing 1 year 1 month continuous uptime](/asset/lab-hosted/statuscake.png)

Since 22 October 2022 it is now hosted at home by my lab equipment and served over my Virgin Media DOCSIS connection which has a 50Mbps upstream - that should be more than enough for the tiny handful of bots that notice my tiny, pointless site.

I will maybe do a writeup with some details on how it works. It continues to be available at .io and .uk

***2022-11-04 Update:*** DOCSIS networks are known for high latency, but clearly I need to focus some effort on tuning my server/edge proxy because now my site is at least 5 times slower than before, taking 0.4 seconds to load from the UK (on cloudflare pages it used to load completely in about 0.1 seconds!)

![Snip from statuscake showing increase in load time](/asset/lab-hosted/statuscake2.png)