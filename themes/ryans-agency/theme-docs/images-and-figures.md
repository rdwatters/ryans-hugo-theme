---
title: Images and Figures
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: Learn how to add an image or figure to an article.
weight: 21
image:
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

## IN DEVELOPMENT

{{% note title="Always Optimize Your Images" %}}
Image size is one of the biggest culprits in slow page loading. *Make sure to optimize every image. There are multiple ways to optimize images, including Photoshop.

If you are looking for a simple online solution for image optimization, check out <https://compressor.io/>.
{{% /note %}}

There are 5 types of images you'll be dealing with when creating content:

1. Hero images for [blog posts][]
2. Images in body copy
3. Figures in body copy
4. Custom thumbnails for embedded [videos][]
5. [Audio][] thumbnails

## 1. Hero Images for Blog Posts

All blog post [content type][] instances requires a hero image. If you are using the site's [editor][] to create new pages, form validation will prevent you from creating a blog post without the required hero image.

You will need to reference the image filename in the [front matter][] of your blog post. Your hero image should be optimized and



## 2. Images in Body Copy

You can use standard markdown syntax for adding images to your content.

The syntax for images is similar to the syntax used for links, with an added `!` before the opening brackets.

### Markdown Syntax for Images

{{% code "markdown-image-syntax-sample" "markdown-image-syntax.md" %}}
```markdown
![Aerial shot of Shibuya crossing in Tokyo, Japan](/assets/images/shibuya.jpg)
```
{{% /code %}}

### Markdown Syntax for Images Output

![Aerial shot of Shibuya crossing in Tokyo, Japan](/assets/images/shibuya.jpg)

{{% note title="Where to House Your Images" %}}
For basic markdown syntax, you'll note that all examples for this site start with `/assets/images/`. This is because locally hosted images for the site are all kept at the root level. Also, developers can use the `sources-images` directory for local development that includes auto-resizing of images that are distributed across multiple directories.

If you want to include an image published elsewhere on the web in your content, replace the `/assets/images/...` URL with the full URL of the image you want to include.
{{% /note %}}

If you would like to practice the markdown syntax for images, you can go to the site [editor][] and switch to full-screen mode with the live preview.

![Screenshot of the split-screen mode for the site markdown editor with live preview](/assets/images/theme-docs/images-and-figures-1.gif)



### Helper Classes for Additional Styling






[audio]:#audio
[blog posts]: #content-types
[content type]: #content-types
[editor]: /editor
[front matter]: #front-matter
[videos]: #video