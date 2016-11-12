---
title: Taxonomies
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: Learn how to add the appropriate metadata to your content files.
weight: 61
image:
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
createpageform: true
comments:
---

There are only three attributes in each content type's front matter that need to be called out in this section:

1. Authors
2. Categories
3. Tags

## Authors

`authors:` in your [front matter][] should be contained in square brackets. If you want to include more than one author, separate the values with a comma. The following is a list of available values for `authors`, which reflects the entries in this theme's current Team section:

{{< team >}}

## Categories

`categories` are much more limited in number than `tags` and should be expanded with caution. A category is more high level than a tag, although you are welcome to duplicate a category in your page's tags if you think it will make the content easier for the end user to find. Try to limit each new piece of content to a single category unless absolutely necessary. That said, similar to `authors` and `tags`, you can add more than one category to a piece of content by separating the each category with a comma (eg, `categories: [user experience, content strategy]`).

{{< sitecategories >}}

`tags:` should also be included in square brackets. While you have free reign to use whatever tags you think are most germane to your content, there is value in using existing tags in your content so that your end user can more easily find what she is looking for. Here is a list of the current tags used by this site:

{{< sitetags >}}

{{% note title="Indexing of Taxonomies"%}}
You *and* your end user have access to the full list of tags within the site architecture as well via [tags](/tags). When tags or categories are added to any content file, they are automatically added to the lists in this section of site documentation as well as to the site's [editor](/editor).
{{% /note %}}

[blog]: /blog
[categories]: /categories
[content type]: #content-types
[controlled vocabularies]: https://en.wikipedia.org/wiki/Controlled_vocabulary
[folksonomy]: https://en.wikipedia.org/wiki/Folksonomy
[front matter]: #front-matter
[tags]: /tags