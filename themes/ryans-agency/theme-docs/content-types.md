---
title: Content Types
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: Learn the difference between the documentation and blog post content types for this site.
weight: 06
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

You can create 2 content types for this site, either by leveraging the site's built-in [editor][] or creating the page locally on your text editor of choice[^1]. The two content types are *documentation* and *blog post*.

1. **Blog post.** Blog posts are limited to entries created in the [blog][] section of the website. In addition to the content you create in your markdown file, post templating auto-generates the following features:
   * **Image**. Blog posts include a full-width hero image at the article level. As such, all posts require an image as an attribute. Image names should be dasherized.[^2] Logic in the site [editor][] should help control for errors.
   * **Reading Time**. Reading time is calculated based on word count and added to the post hero. In list pages (eg, [blog][]), reading time is added to each article "card."
   * **Table of contents**. A table of contents is automatically generated when content meets certain criteria. See the [table of contents][] section for details.
2. **Documentation.** Documentation refers to content created, for example, in the `/docs` section of this site. Documentation pages require nearly identical metadata to that of posts with a couple exceptions:
   * **Hero Image**. Documentation *does not require* an image be associated with the instance of the content type.
   * **Page Weight.** Page weight is the equivalent of a chapter number and tells the build system how to order the documentation pages. If you want to include the page weight in the heading of the documentation, you can set `showchapter: true` in the [front matter][] for documentation.


[blog]:/blog/
[editor]: /editor/
[front matter]: #front-matter
[table of contents]: #table-of-contents

[^1]: Note that all content entries have required [front matter](#front-matter).
[^2]: AKA *urlized*; ie, lowercase with special characters removed and single white spaces replaced with dashes. For example, `John's Image.jpg` becomes `johns-image.jpg`.