---
title: Tangents
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-06-03
publishdate: 2016-06-03
updated: 2016-06-03
description: Tangents allow you to add additional information to a piece of content without interrupting the flow of reading for your end user.
weight: 28
image:
categories: []
tags: []
isdoc: true
aliases: []
draft:
removefromsearch: true
comments:
---

Tangents differ from [callouts][] in that their content is initially hidden from the user. This is an important consideration when deciding which shortcode is the most semantically appropriate for your content.

A *tangential* aside is one that only peripherally connects with the surrounding content. Your decision on whether to use a tangent or callout should hinge on your user's intent.

## Tangent Shortcode

{{% code "tangent-markdown-example" "tangent-markdown-example.md"%}}
```go
{{%/* tangent "301 vs Vanity URL?" %}}
Although both terms are often (mistakenly) used interchangeably, there are important differences between a vanity URL and a 301 redirect. Yada yada yada...
{{% /tangent */%}}
```
{{% /code %}}

## Tangent Shortcode Output

The preceding shortcode results in the following tangent being written to the page:

{{% tangent "301 vs Vanity URL?" %}}
Although both terms are often (mistakenly) used interchangeably, there are important differences between a vanity URL and a 301 redirect. Yada yada yada...
{{% /tangent %}}

[callouts]: #callouts