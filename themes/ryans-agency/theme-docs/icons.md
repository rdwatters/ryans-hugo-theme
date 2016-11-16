---
title: Icons
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-06-03
publishdate: 2016-06-03
updated: 2016-06-03
description: When added appropriately and consistently, iconography can help provide additional visual cues to help your end user navigate content.
weight: 35
image:
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

This site includes its own icon font. The font was built using [fontello][] and includes icons from Font Awesome, Entypo, Typicons, Iconic, Web Symbols, and custom `.svg`.

## Using Icons in Your Content

Icons can be added content by appending an .`icon-*` class to an element (typically `<span>` or `<i>`). All icon classes start with `icon-`.

{{% note title="FontAwesome" %}}
This site currently uses it's own custom font as well as Font Awesome, which is required by the toolbar in the the site's [editor](/editor).

The site has been developed for the easy addition of FontAwesome via a single variable `config.toml`. To remove FontAwesome, set the `UseFontAwesome` parameter to `false`.
{{% /note %}}

### Icon Sample

{{% code "icon-sample" "icon-sample.md" %}}
```html
#### <i class="icon-poop"></i> Ryan Watters has a 9-Year-Old's Sense of Humor
```
{{% /code %}}

### Icon Sample Output

<div class="output">
<h4><i class="icon-poop"></i> Ryan has a 9-Year-Old's Sense of Humor</h4>
</div>

Hover your cursor over an icon to see its CSS class. Icons are listed alphabetically.

{{< icons >}}

[fontello]: http://fontello.com/