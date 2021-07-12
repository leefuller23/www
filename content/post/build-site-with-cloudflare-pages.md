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

"Hugo is a fast and modern static site generator written in Go, and designed to make website creation fun again. Hugo is a general-purpose website framework. Technically speaking, Hugo is a static site generator. Unlike systems that dynamically build a page with each visitor request, Hugo builds pages when you create or update your content." [0]

Hugo allows us to manage text files in Markdown format. When we execute the Hugo binary in the root of our repository it processes the Markdown files and produces a finished HTML website, with pages linked together, uniform navigation etc. 

If we were building our site to self-host it would be necessary to (download Hugo)[https://gohugo.io/getting-started/installing/] but because we are using Cloudflare Pages - this aspect is taken care of.

Each time we commit to our Main/Master branch Cloudflare will automatically rebuild the entire site and deploy it automatically. 


## GitHub

...

## Cloudflare Pages

...

## Cloudflare DNS

...

[0] https://gohugo.io/about/what-is-hugo
