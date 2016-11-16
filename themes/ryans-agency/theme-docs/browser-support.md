---
title: Browser Support
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: This site has a "current - 1" model for browser support.
weight: 03
image:
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

As of November 2016, this site provides browser support on a *Current - 2* model, meaning that a browser's current major version and the previous 2 major versions are actively supported. In addition, some features of the site have been designed to degrade gracefully for improved [accessibility][].

* <i class="icon-edge" aria-hidden="true"></i> Microsoft Edge 12+
* <i class="icon-ie" aria-hidden="true"></i> Internet Explorer 11[^1]
* <i class="icon-firefox" aria-hidden="true"></i> Mozilla Firefox 46+
* <i class="icon-chrome" aria-hidden="true"></i> Google Chrome 50+[^2]
* <i class="icon-safari" aria-hidden="true"></i> Safari 8+
* <i class="icon-opera" aria-hidden="true"></i> Opera 37+

{{% tangent "What does it mean if a feature *degrades gracefully*?" %}}
Features that do not work in one of the listed browsers have been designed to gracefully degrade (aka [fault tolerance](https://en.wikipedia.org/wiki/Fault_tolerance)).

For example, the [code block](#code-blocks) shortcode leverages a new JavaScript method (`.execCommand`) not supported by Safari 9. This method exposes an API to the end user's clipboard ("programmatic cut and copy").

Clicking on the copy icon (<i class="icon-clipboard"></i>) in a code block in Safari 9 will display an alternate tooltip that leverages Safari 9's support of the [selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection) as a backup to `.execCommand`.

NB, the improved feature set in [Safari 10](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html) renders this fallback obsolete.
{{% /tangent %}}

[accessibility]: #accessibility

[^1]: IE11 is an exception to the "Current - 2" model because it is the only version currently supported by Microsoft.
[^2]: Google Chrome is the optimal browser for the [editor](/editor) and site documentation.
