---
title: Table of Contents
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: A scrolling table of contents is added programmatically only to blog posts according to word count and heading structure.
weight: 38
image:
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

A scrolling table of contents is automatically generated for the single-page layout for the blog [content type][]. An instance of the blog content type needs to meet 3 criteria in order for a TOC to be auto-generated at build time:

1. A word count of more than 400 words
2. More than 2 Headings (ie, `##`) in the body copy of the page

In addition to the above criteria, the layouts for blog posts also check to make sure that `removetoc:` in the content type's [front matter][] is not set to `true`. In fact, you do not need to include `removetoc` in your front matter at all for the page to build correctly, although this is automatically added if you create your content in the site's [editor][].

If you have written a blog post that meets the above criteria but you don't want the final page to include the scrolling table of contents, just change (or add, if not already present) your front matter for the blog post to `removetoc: true`.


[content type]: #content-types
[editor]: /editor
[front matter]: #front-matter

