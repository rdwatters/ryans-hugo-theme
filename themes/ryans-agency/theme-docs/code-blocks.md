---
title: Code Blocks
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-06-03
publishdate: 2016-06-03
updated: 2016-06-03
description: Learn how to add code blocks to documentation or a blog post.
weight: 37
image:
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

Markdown includes the ability to add both inline code and code blocks to content. This site adds the additional benefit of syntax-highlighted code blocks that can be added to your end user's clipboard if the site is being accessed via a [compatible browser][] (ie, Chrome, Firefox, Safari 10+, and IE6+). These copyable blocks of text are used extensively throughout this documentation.

Remember that the shortcode still requires the GitHub-flavored [markdown][] triple back tick (ie, <code>```</code>) with the language declared just after the open tick marks to designate the content inside of the short code.

## Example Code Block Shortcode

![Code block markdown sample](/assets/images/codeblock-markdown-sample.png)

## Example Code Block Output

<div class="output">

{{% code "my-code" "code-block-sample.md"%}}
```markup
<article class="article">
  <header>
    <h1>This is a Heading for a web page</h1>
  </header>
</article>
```
{{% /code %}}
</div>



[compatible browser]: http://caniuse.com/#feat=document-execcommand
[markdown]: #markdown