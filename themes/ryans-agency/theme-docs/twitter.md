---
title: Twitter
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: Add tweets to your content with a simple shortcode that can be added directly to your markdown content.
weight: 34
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

You can add individual tweets to content using a [shortcode](#shortcodes) and the tweet's unique ID number.

## Example Twitter Shortcode

A Tweet's ID number comes immediately after `status/` in the full URL on Twitter.

![Screenshot of a single Twitter tweet's URL](/assets/images/theme-docs/twitter-id.jpg)

{{% code "twitter-shortcode-sample" "twitter-shortcode.md" %}}
```golang
{{</* tweet 777947858603347968 */>}}
```
{{% /code %}}

## Example Twitter Shortcode Output

This will result in the following Tweet added to the page:

<div class="output">
{{< tweet 777947858603347968 >}}
</div>