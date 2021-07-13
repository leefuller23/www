---
title: "Create and host a site for free with Cloudflare Pages"
date: 2021-07-12
publishdate: 2021-07-12
lastmod: 2021-07-12
draft: false
tags: ["website", "Hugo", "Cloudflare"]
---

```
This post is a work in progress!
```

## Introduction

This tutorial will show you how to create and host a website using Hugo, GitHub and Cloudflare Pages. 

The end result will be a very fast, static website hosted directly on Cloudflare with inclusive DoS protection and CDN.

If you already own your own domain name, then this whole project will cost you nothing.

## What you need

Before you get started you will need a GitHub account, a Cloudflare account and your own domain name.

## Hugo

**What is Hugo?**

"Hugo is a fast and modern static site generator written in Go and designed to make website creation fun again. Hugo is a general-purpose website framework. Technically speaking, Hugo is a static site generator. Unlike systems that dynamically build a page with each visitor request, Hugo builds pages when you create or update your content." [0]

Hugo allows us to manage text files in Markdown format. When we execute the Hugo binary in the root of our repository it processes the Markdown files and produces a finished HTML website, with pages linked together, uniform navigation etc. 

Usually (if we weren't using Cloduflare Pages) it would be would be necessary to [download Hugo](https://gohugo.io/getting-started/installing/). The way Cloudflare Pages works means all we need to do is point Clodudflare Pages at our GitHub repo. 

Each time we commit to our Main/Master branch, Cloudflare will fetch the code, rebuild the entire site and deploy it automatically. 


## GitHub

Create an account if you need to. Get signed in. Clone the repo [gohugoio/HugoBasicExample](https://github.com/gohugoio/HugoBasicExample)

Create a new top level folder called "themes" and unpack a theme: [https://themes.gohugo.io/](https://themes.gohugo.io/)

The theme I use for my site is [zwbetz-gh/minimal-bootstrap-hugo-theme](https://github.com/zwbetz-gh/minimal-bootstrap-hugo-theme)

Find the file "config.toml" in the root of your repo. Edit it to add the theme at the top:

This is how mine looks:

```yaml
baseURL = "/"
languageCode = "en-us"
title = "LeeFuller.io"
theme = "minimal-bootstrap-hugo-theme"
```

## Cloudflare Pages

...

## Cloudflare DNS

...

[0] https://gohugo.io/about/what-is-hugo
