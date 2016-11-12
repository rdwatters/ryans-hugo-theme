---
title: Notifications
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-06-03
publishdate: 2016-06-03
updated: 2016-06-03
description:
weight: 31
image:
categories: []
tags:
isdoc: true
aliases: []
draft:
removefromsearch: true
comments: The page-level notification has special CSS (display:none) and an associated event (see the anchor below) so show the example. These are doc-specific styles/interactions and do not apply to notifications across the live site.
---

You can add two different types of notifications to this site:

1. **Site-wide notifications.** You can only add 1 site-level notification at a time. These notifications are added to *every* page until dismissed by the end user and can be modified via the site's configuration (`config.yml`) file.
2. **Page-level notifications.** Page-level notifications can be added arbitrarily using a [shortcode][] in your body copy. These notifications are only visible on the individual pages to which they were added.

Both site-wide and page-level notifications have "Don't Show Me This Again.." at the bottom right. This button persists the user's action in local storage to keep the notification from being bothersome on repeat visits.

## Site-wide Notification

There are 5 custom parameters for setting site-wide notifications on using the site's {{< config >}}:

1. `AddSiteNotification`. This is a boolean value and should be set to `true` (no quotes) or the notification will not display.
2. `SiteNotificationTitle`. This is the title of the notification.
3. `SiteNotificationCopy`. Although space is limited, you can added a couple sentences to your notification in this field.
4. `SiteNotificationLink`. (optional). This is the URL where you want the user to be sent when clicking on the button in the bottom left of the notification.
5. `SiteNotificationLinkText`. (optional). This is the text that displays inside the button used that links to the aforementioned link.

{{% note title="The Site's Configuration Uses `.toml` and not `.yml`" %}}
Unlike the yaml in [front matter](#front-matter), the configuration file for the site uses [toml](https://github.com/toml-lang/toml) for storing key-value pairs. The syntaxes are very similar, but you will need to make sure your values are surrounded in double quotes and that the pairs are separated with a `=` and not a `:`. For example, `name: Ryan Watters` in yaml would be written as `name = "Ryan Watters"` in toml. The exception is for boolean values (ie, true or false), which are written without quotes;eg, `AddSiteNotification = true`.
{{% /note %}}

## Page-level Notification

Page-level notifications can be added using a [shortcode][] with added markdown. Similar to the site-wide notifications, the notification link (and therefore link text) are option values. Page-level notifications further the flexibility of the feature by letting you choose from multiple color values: `blue`, `orange`, and `green`. The default color is the same as the site-wide notifications.

### Page-level Notification Shortcode

{{% code "page-level-notification-shortcode" "page-level-notification-shortcode.md" %}}
```golang
{{%/* notification title="This is a Page-Level Notification" link="/docs/#notifications" linktitle="Documentation" color="green" %}}
This is some text in a *page-level* notification.
{{% /notification */%}}
```
{{% /code %}}

### Page-level Notification Output

You can see an example of a page-level notification by <a href="#" id="show-sample-notification">clicking here</a>.

{{% notification title="This is a Page-Level Notification" link="/docs/#notifications" linktitle="Documentation" color="green" %}}
This is some text in a *page-level* notification.
{{% /notification %}}

[shortcode]: #shortcodes