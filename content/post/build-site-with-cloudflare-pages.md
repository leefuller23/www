---
title: "Create and host a site for free with Cloudflare Pages"
date: 2021-07-12
publishdate: 2021-07-12
lastmod: 2021-07-12
draft: false
---

## Introduction

This is a quick tutorial on how I build / deploy my site.

I maintain markdown files in a GitHub repo and using automation I get a super fast, reliable site hosted directly on Cloudflare CDN.

## What you need

GitHub account (free)
Cloudflare account (free)
Domain name (free/cost)

## Hugo

**What is Hugo?**

"Hugo is a fast and modern static site generator written in Go and designed to make website creation fun again. Hugo is a general-purpose website framework. Technically speaking, Hugo is a static site generator. Unlike systems that dynamically build a page with each visitor request, Hugo builds pages when you create or update your content." [0]

Hugo allows us to manage text files in Markdown format. Cloudflare executes Hugo against your repo and builds site, this site is then deployed on CF CDN.


## GitHub

Create an account if you need to. Get signed in. Clone the repo [gohugoio/HugoBasicExample](https://github.com/gohugoio/HugoBasicExample)

Create a new top level folder called "themes" and unpack a theme: [https://themes.gohugo.io/](https://themes.gohugo.io/)

Your repo should look something like this... (You could also just clone my entire [repo](https://github.com/leefuller23/www/) and start with a clone of my site.)

![github repo example](/asset/build-site-with-cloudflare-pages/github.png)

The theme I use for my site is [zwbetz-gh/minimal-bootstrap-hugo-theme](https://github.com/zwbetz-gh/minimal-bootstrap-hugo-theme)

Find the file "config.toml" in the root of your repo. Edit it to add the theme at the top:

[click here to see my config.toml](https://github.com/leefuller23/www/blob/main/config.toml)

## Cloudflare Pages

Sign into Cloudflare and browse to Pages

Create new project.

Link GitHub repo (may need to sign in and link GH and CF)

Choose branch, set custom domain

![cloudfpare pages setup](/asset/build-site-with-cloudflare-pages/cf-pages.png)

## Cloudflare DNS

Create a cname for www AND @ (it is possible to create apex cname on CF despite not being possible according to DNS standard?!)

In cname content use your Cloudflare Pages url (mine is www-6w4.pages.dev)

That is it. Every time you commit to your main/master branch, CF will pull the changes and redeploy[1] your site automatically.

![cloudfpare pages setup](/asset/build-site-with-cloudflare-pages/cf-pages-deploy.png)

[0] https://gohugo.io/about/what-is-hugo

[1]
```bash
14:04:42.334	Initializing build environment. This may take up to a few minutes to complete
14:10:57.334	Success: Finished initializing build environment
14:10:57.334	Cloning repository...
14:11:01.037	Success: Finished cloning repository files
14:11:01.298	Installing dependencies
14:11:01.325	Python version set to 2.7
14:11:04.691	v12.18.0 is already installed.
14:11:05.041	Now using node v12.18.0 (npm v6.14.4)
14:11:05.062	Started restoring cached build plugins
14:11:05.076	Finished restoring cached build plugins
14:11:05.433	Attempting ruby version 2.7.1, read from environment
14:11:06.694	Using ruby version 2.7.1
14:11:07.015	Using PHP version 5.6
14:11:07.039	5.2 is already installed.
14:11:07.042	Using Swift version 5.2
14:11:07.042	Installing Hugo 0.80.0
14:11:08.272	Hugo Static Site Generator v0.80.0-792EF0F4/extended linux/amd64 BuildDate: 2020-12-31T13:46:18Z
14:11:08.273	Started restoring cached go cache
14:11:08.275	Finished restoring cached go cache
14:11:08.718	go version go1.14.4 linux/amd64
14:11:08.722	go version go1.14.4 linux/amd64
14:11:08.727	Installing missing commands
14:11:08.727	Verify run directory
14:11:08.727	Executing user command: hugo
14:11:08.760	Start building sites … 
14:11:08.896	
14:11:08.896	                   | EN   
14:11:08.896	-------------------+------
14:11:08.896	  Pages            |  14  
14:11:08.896	  Paginator pages  |   0  
14:11:08.896	  Non-page files   |   0  
14:11:08.896	  Static files     | 627  
14:11:08.896	  Processed images |   0  
14:11:08.897	  Aliases          |   0  
14:11:08.897	  Sitemaps         |   1  
14:11:08.897	  Cleaned          |   0  
14:11:08.897	
14:11:08.897	Total in 144 ms
14:11:08.899	Finished
14:11:08.899	Validating asset output directory
14:11:09.246	Deploying your site to Cloudflare's global network...
14:11:14.533	Success: Your site was deployed!
```