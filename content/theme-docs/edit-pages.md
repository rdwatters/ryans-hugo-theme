---
title: Edit Pages
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: Learn how to edit content that has already been created for this site.
weight: 17
image:
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

You can use the GitHub interface to make changes to pages that have already been added this site, regardless of whether they've been published to the live site.

If you are reviewing published content, you can press <kbd>Ctrl</kbd> + <kbd>e</kbd> on individual blog posts or documentation pages (see [content types][]) to pull up edit buttons that will take you directly to the content's corresponding markdown file on GitHub.

If you are not already signed in to GitHub, you will be brought to a 404 page with a sign-in form at the top right of your browser's viewport. After authentication, you'll be redirected to the correct page.

![Screenshot of how to access the edit pages feature, as well as sign into GitHub.](/assets/images/theme-docs/github-interface-1.gif)

The link to the GitHub repository when you press <kbd>Ctrl</kbd> + <kbd>e</kbd> is an edit link. This means that the page is immediately checked out once you arrive at the page on GitHub. You can now edit the content the way you normally would in a text editor. In the GitHub UI, you can make the following changes to a content file:

1. Change the filename in the breadcrumb above the editor. Note that for blog posts, this will change the URL of the page, so be sure to add an [alias to your front matter][] so that you do not create any broken links.
2. You can preview your changes by selecting the "Preview Changes" tab. Note that images and [shortcodes][] will not work in the GitHub preview because they have not yet been factored in by the build system.

![Screenshot of how to edit and check in markdown files using the GitHub interact](/assets/images/theme-docs/github-interface-2.gif)

Once you are satisfied with the changes to the content, you can commit the changes to the repository by selecting the commit button. Committing your changes tells the build system to implement the new content and redeploy your changes to the live site. If you do not want to commit your changes to the live site, selecting the cancel button will erase any changes.

![Screenshot of how to commit and write commit messages in the GitHub UI.](/assets/images/theme-docs/github-interface-3.gif)

{{% warn title="Write Intuitive Commit Messages" %}}
Keep your commit messages short, descriptive, and meaningful. Avoid generic descriptions (eg, "Fixing content on Site Updates page"). If you need more than 50 characters, use the extended description box in the GitHub UI or add relevant information to the `comments: ` value in the file's [front matter](#front-matter).
{{% /warn %}}

[alias to your front matter]: #front-matter
[content types]: #content-types
[shortcodes]: #shortcodes