---
title: Audio
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: You can use the audio shortcode to add mp3 audio or soundcloud embeds to your content.
weight: 23
image:
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

You can use the audio [shortcode] to add mp3 audio to your pages. First, you'll need to add the `.mp3` file to the [audio directory on GitHub][].

The audio shortcode takes up to 6 named parameters, the first 3 of which are required:

1. `title`<span class="required">*</span>
2. `artist`<span class="required">*</span>
3. `file`<span class="required">*</span>
4. `album`
5. `thumbnail`
6. `itunes`

Your thumbnail should be square and (ideally) 100px &times; 100px in size. If you do not specific a thumbnail image, the image will default to the stacked CAP logo. You should add your thumbnail directly to the [thumbs directory][] in the GitHub repository. Although it's unlikely that you'll need to include an `itunes` link, you can find the direct link by going to [Apple's Link Maker][], entering the track into the search, and copying the "<i class="icon-link"></i>Direct Link" from the bottom of the page.

### mp3 Audio Shortcode

{{% code "audio-shortcode-example" "audio-shortcode-example.md" %}}
```golang
{{</* audio title="Do for Love" artist="2Pac" file="do-for-love.mp3" thumbnail="do-for-love.jpg" */>}}
{{</* audio title="Express Yourself" artist="NWA" file="express-yourself.mp3" album="Straight Outta Compton, 1998" */>}}
```
{{% /code %}}

### mp3 Audio Shortcode Output

The preceding audio shortcode results in the following audio player being written to the page:

{{< audio title="Do for Love" artist="2Pac" file="do-for-love.mp3">}}
{{< audio title="Express Yourself" artist="NWA" file="express-yourself.mp3" album="Straight Outta Compton" thumbnail="straight-outta-compton.jpg" itunes="https://geo.itunes.apple.com/us/album/express-yourself/id1005764172?i=1005764188&mt=1&app=music" >}}

[audio directory on GitHub]: #github
[Apple's Link Maker]: https://linkmaker.itunes.apple.com/en-us/
[thumbs directory]: #github
