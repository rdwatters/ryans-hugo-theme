---
title: Video
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: Learn how to add video to your content.
weight: 22
image:
categories: []
tags: []
isdoc: true
aliases: []
draft: false
removefromsearch: true
comments:
---

Since markdown natively supports HTML, you can add an `<iframe>` directly to your content. However, large sections of HTML in your markdown copy can reduce readability and negate the convenience of writing in markdown syntax.

For this reason, there are two additional methods for adding video to one of your pages:

1. **Basic video [shortcodes][] for Vimeo and YouTube.** Both basic video shortcodes require the channel to be declared first, followed by the unique video ID.

2. **Advanced video shortcode.** The advanced video shortcode allows for better page performance, custom captions, and an optional custom thumbnail (YouTube only).

## 1. Basic Video Shortcodes Examples

Both basic video shortcodes follow the same pattern of declaring a channel and ID number, neither of which are set in quotes:

`{{</* channel id */>}}`

### Basic YouTube Shortcode

The `id` for YouTube videos comes just after the closing `/watch?v=` in the video's original URL:

![Photo of a URL from YouTube in the Chrome browser](/assets/images/theme-docs/youtube-id.jpg)

{{% code "youtube-shortcode-sample" "youtube-shortcode.md" %}}
```go
{{</* youtube AmLZFtrSEkI */>}}
```
{{% /code %}}

### Basic YouTube Shortcode Output

The preceding shortcode results in the following YouTube video being written to the page.

<div class="output">
{{< youtube AmLZFtrSEkI >}}
</div>

### Basic Vimeo Shortcode

The `id` for Vimeo videos comes just after `vimeo.com/` in the video's original URL:

![Photo of a URL from Vimeo in the Chrome browser](/assets/images/theme-docs/vimeo-id.jpg)

{{% code "vimeo-shortcode-sample" "vimeo-shortcode.md" %}}
```go
{{</* vimeo 1053647 */>}}
```
{{% /code %}}

### Basic Vimeo Shortcode Output
The preceding shortcode results in the following Vimeo video being written to the page.

<div class="output">
{{< vimeo 1053647 >}}
</div>

## 2. Advanced Video Shortcode Examples

The most performant and flexible option for adding video to your page is using the advanced video shortcode. The advanced shortcode allows for asynchronous iframe embedding, custom captions, and in the case of YouTube, the ability to swipe out a custom thumbnail for the video.

In contradistinction to the basic shortcodes, advanced shortcodes take "named parameters." These are equivalent to the HTML `name="myname"` attribute common on `<input/>` selectors. This gives you more control to name the values specifically (eg, `channel="youtube"`) and negates the need to keep the parameters in an exact order. Advanced video shortcodes for YouTube and Vimeo require the `video` keyword followed by `channel` and `id` named parameters (ie, key-value pairs). YouTube takes an optional third parameter, `thumbnail`, that allows you to set a custom image for the video. The images are also set in grayscale, which may or may not help your efforts in keeping the color consistent across body copy.

{{% tangent "Asynchronous iframe embedding?" %}}
This is a fancy way of saying that the video doesn't start downloading until the user clicks the play button. Instead, only the video's image (ie, the video thumbnail) is served to the end user when the page first loads.

With each embedded `<iframe>` comes a large amount of client-side code. This is why video embeds are [notoriously bad for site performance](http://www.stevesouders.com/blog/2009/06/03/using-iframes-sparingly/). Pages with only a couple slow iframes can negatively affect your end user's experience, particularly on mobile devices with high latency.
{{% /tangent %}}

### Advanced YouTube Shortcode

{{% code "youtube-advanced-shortcode-example" "youtube-advanced-shortcode-example.md" %}}
```go
{{%/* video channel="youtube" id="_OBlgSz8sSM" %}}
I think Charlie did the right thing.
{{% /video */%}}
```
{{% /code %}}

### Advanced YouTube Shortcode Output

The preceding advanced video shortcode results in the following YouTube video and caption being written to the page.

<div class="output">
{{% video channel="youtube" id="_OBlgSz8sSM" %}}
I think Charlie did the right thing.
{{% /video %}}
</div>

### Advanced YouTube Shortcode with Custom Thumbnail

For YouTube embeds only, you also have the option of adding a custom thumbnail to the video. This comes in especially handy for embedded videos from other YouTube channels, where you do not have the ability to set a preferred thumbnail for the video.

{{% note title="Where to Keep Your Video Thumbnail" %}}
The `video` shortcode looks for thumbnails in `static/assets/images/videothumbnails`.
{{% /note %}}

{{% code "youtube-advanced-shortcode-with-thumbnail-example" "youtube-advanced-shortcode-thumbnail.md" %}}
```go
{{%/* video channel="youtube" id="_OBlgSz8sSM" thumbnail="coffee-beans.jpg" %}}
I think Charlie did the right thing.
{{% /video */%}}
```
{{% /code %}}

### Advanced YouTube Shortcode with Custom Thumbnail Output

The preceding advanced video shortcode results in the following YouTube video, custom caption, and custom thumbnail being written to the page.

<div class="output">
{{% video channel="youtube" id="_OBlgSz8sSM" thumbnail="coffee-beans.jpg" %}}
I think Charlie did the right thing.
{{% /video %}}
</div>

[shortcodes]: #shortcodes