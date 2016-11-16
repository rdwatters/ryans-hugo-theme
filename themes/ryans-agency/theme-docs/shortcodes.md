---
title: Shortcodes
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: Shortcodes are small, readable snippets you can add to your pages to easily extend markdown syntax for additional styling and functionality.
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

Shortcodes are small, readable snippets of text you can add to your pages to extend markdown syntax for added styling and functionality. If you understand basic HTML, shortcodes should be easy to grok.

There are two main types of shortcode, both of which use opening and closing double curly brackets (`{{}}`).

1. **Angled shortcode without a closing declaration.** Here is an example: <br>
`{{</* youtube fhjx6lGTDhw */>}}`

    Both of the basic [video shortcodes][] for YouTube and Vimeo use this notation. Note that the delimiter for these shortcodes is the angle bracket (`<>`), similar to HTML.
2. **Shortcodes with added markdown.** Here is an example:
{{% code "shortcode-with-markdown-example" "shortcode-with-markdown.md" %}}
```go
{{%/* note title="Shortcode Example" %}}
Between the two sets of curly-bracketed declarations, I can write in *markdown*.
{{% /note */%}}
```
{{% /code %}}
    This option requires that you also include a closing declaration (in this case, `{{%/* /callout */%}}` after your markdown copy). The `%` tell the build process that it should process the content between the opening and closing declarations.

There are 9 categories of shortcode you can use to enhance your content, some of which include multiple subtypes:

1. [Callouts](#callouts)
2. [Images and Figures](#images-and-figures)
3. [Video](#video)
4. [Tangents](#tangents)
5. [Twitter](#twitter)
6. [Shortcodes](#shortcodes)
7. [Notifications](#notifications)
8. [Data Visualizations](#data-visualizations)
10. [Code blocks](#code-blocks)


[video shortcodes]: #video