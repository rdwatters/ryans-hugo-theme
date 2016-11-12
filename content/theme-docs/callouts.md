---
title: Callouts
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-06-03
publishdate: 2016-06-03
updated: 2016-10-26
description: Use callouts to draw attention to specific areas of content in your documentation.
weight: 19
image:
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

## IN DEVELOPMENT

There are 2 types of callouts, each of which is semantically named according to the intended interaction with the end user:

1. `note`
3. `warn`

The [shortcode][] is virtually the same for all callout types, with the semantic naming assigned to the first value included in the shortcode declaration. For added flexibility, you can use [markdown](#markdown) in the optional callout title *and* internal copy.

{{% tangent "What is a \"callout\"?" %}}
In traditional publishing, *callouts* referred to strings of text that were connected to parts of a technical drawing or complex illustration.

On the web, *callouts* are often text that has been set in larger type to draw the attention of the end user. For this site, colors and iconography are used for this same purpose.

In technical documentation, a popular term for this site's style of callout is an *admonition*&mdash;a type of *directive* for readers. It is also an extension mechanism of restructured text, or [reST](http://docutils.sourceforge.net/rst.html).
{{% /tangent %}}

## 1. `note` Callout

For the `note` callout, the `title=` parameter is optional. If you do not include a title, "Note" will be used as the callout header text.

### Note Callout Shortcode

{{% code "inform-callout-sample" "notify-callout.md"%}}
```go
{{%/* note title="I want to Inform the User" %}}
The *note* callout can draw attention to something important in the surrounding content. This is the more subtile of the 2 callouts and can be used for items such as key takeaways.
{{% /note */%}}
```
{{% /code %}}

### Note Callout Shortcode Output

<div class="output">
{{% note title="I want to inform the User" %}}
The *note* callout can draw attention to something important in the surrounding content. This is the more subtile of the 2 callouts and can be used for items such as key takeaways.
{{% /note %}}
</div>

## 2. `warn` Callout

For the `warn` callout, the `title=` parameter is optional. If you do not include a title, "Warning" will be used as the callout header text.

### Warn Callout Shortcode

{{% code "caution-callout-sample" "notify-callout.md"%}}
```go
{{%/* warn title="I want to Warn the User" %}}
The *warn* callout should be used sparingly when compared to the *note* callout. Use this when you really want the end user to pay attention. Also consider page-level or site-wide notifications for especially pressing information.
{{% /warn */%}}
```
{{% /code %}}

### Warn Callout Shortcode Output

<div class="output">
{{% warn title="I want to Warn the User" %}}
The *warn* callout should be used sparingly when compared to the *note* callout. Use this when you really want the end user to pay attention. Also consider page-level or site-wide notifications for especially pressing information.
{{% /warn %}}
</div>

[shortcode]: #shortcodes