---
title: Sortable Lists
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: This site includes a sortable list layout that can be easily hooked up to a publicly published Google sheet.
weight: 18
image:
categories: []
tags: []
isdoc: true
aliases: []
draft:
removefromsearch: true
comments:
---

To add a sortable list to a single page, you can add the `sortablelist` shortcode to your markdown content. This shortcode has two required named parameters: the `url` where the CSV (CSV *only*) is published and the `title` of the table.

### Sortable List Callout Shortcode

{{% code "sortable-list-front-matter" "sortable-list-front-matter.md"%}}
```golang
{{</* sortablelist title="My Fancy Table" url="https://docs.google.com/spreadsheets/d/1UC32lXF0yH6Vp3u934C-m_Cp_HBF0yYtH2-QDfzquPs/pub?gid=0&single=true&output=csv" */>}}
```
{{% /code %}}

### Sortable List Callout Shortcode Output

{{< sortablelist title="My Fancy Table" url="https://docs.google.com/spreadsheets/d/1UC32lXF0yH6Vp3u934C-m_Cp_HBF0yYtH2-QDfzquPs/pub?gid=0&single=true&output=csv" >}}

Note that this example pulls from a Google sheet. Publishing a Google sheet as a CSV is very simple. Just select **File** > **Publish to Web** from within the Google sheet interface. That said, you can use the URL of whatever publicly available CSV you want in order to leverage this shortcode.