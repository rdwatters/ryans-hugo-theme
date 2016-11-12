---
title: Blog Post 1
subtitle: Subtitle for the site's first blog post
date: 2016-08-01
publishdate: 2016-08-01
updated: 2016-08-01
authors: [Jane Doe]
description: Here is a description for the first blog post written for this site.
image: video-camera.jpg
categories: [category1]
tags: [tag1,tag2,tag3]
aliases: []
comments:
---

You will notice that this blog post does not include a table of contents on the left side of the page. This is because the templating for the table of contents with smooth scrolling (`layouts/partials/components/table-of-contents-single-article.html`) has a few requirements for auto-generating the TOC:

1. The length of the article needs to be at least 500 words
2. The `removetoc` in the page's front matter must not be set to `true`
3. You will need to have at least three body-copy headings (`<h2>` or `##` in markdown), otherwise the TOC is removed on the client (see `pipeline/js/scripts/toggle-toc-single-articles-and-reveal-on-scroll.js`).