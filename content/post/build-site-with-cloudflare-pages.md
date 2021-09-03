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

Your repo should look something like this...

![github repo example](/asset/build-site-with-cloudflare-pages/github.png)

The theme I use for my site is [zwbetz-gh/minimal-bootstrap-hugo-theme](https://github.com/zwbetz-gh/minimal-bootstrap-hugo-theme)

Find the file "config.toml" in the root of your repo. Edit it to add the theme at the top:

[click her eto see my config.toml](https://github.com/leefuller23/www/blob/main/config.toml)

## Cloudflare Pages

Sign into Cloudflare and browse to Pages

Create new project.

Link GitHub repo (may need to sign in and link GH and CF)

Choose branch, set custom domain

![cloudfpare pages setup](/asset/build-site-with-cloudflare-pages/cf-pages.png)

## Cloudflare DNS

Create a cname for www AND @ (it is possible to create apex cname on CF despite not being possible according to DNS standard?!)

In cname content use your Cloudflare Pages url (mine is www-6w4.pages.dev)

That is it!

[0] https://gohugo.io/about/what-is-hugo
