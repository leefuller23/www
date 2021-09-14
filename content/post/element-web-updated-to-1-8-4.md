---
title: "Element Web updated to 1.8.4"
date: 2021-09-14
publishdate: 2021-09-14
lastmod: 2021-09-14
draft: false
---

## Security fixes for Element Web

[leefuller.io/element](https://leefuller.io/element) has been updated to Element 1.8.4

This patches the hosted intance here against the following vulnerabilities disclosed on 13/09/2021

## CVE-2021-40823
A logic error in the room key sharing functionality of matrix-js-sdk (aka Matrix Javascript SDK) before 12.4.1 leads to a situation where identity verification is inadequate and thus a key-requesting device can be impersonated. 

https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-40823

## CVE-2021-40824
A logic error in the room key sharing functionality of Element Android before 1.2.2 and matrix-android-sdk2 (aka Matrix SDK for Android) before 1.2.2 leads to a situation where identity verification is inadequate and thus a key-requesting device can be impersonated.

https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-40824