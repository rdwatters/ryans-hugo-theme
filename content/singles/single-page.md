---
title: Single Page
subtitle: This is the subtitle for the example single page.
date: 2016-10-01
updated: 2016-10-01
authors: [Jon Doe]
description: This is a single page that can be included in your global navigation. For example, this might work well as an About page.
tags: [tag1,tag2,tag3]
isdoc: false
innav: true
aliases:
---

This is a single page. Single pages live under `content/singles`. If you want to include a single page in your global navigation, just set your front matter in the single page to `innav: true`. A good use case for a single page might be an `/about` or `/contact` page.

This single page also leverages the sortable list features that can easily hook up to a Google sheet.

This page also includes a sortable list, which can be added using the `sortablelist.html` shortcode. See the [theme-docs](/theme-docs) for more information.

{{< sortablelist title="My Fancy Table" url="https://docs.google.com/spreadsheets/d/1UC32lXF0yH6Vp3u934C-m_Cp_HBF0yYtH2-QDfzquPs/pub?gid=0&single=true&output=csv">}}

