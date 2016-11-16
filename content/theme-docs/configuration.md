---
title: Configuration
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: Copy this sample configuration when building your site.
weight: 01
image:
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

The following is a complete `config.toml` example you should use when building out your site with this theme.

{{% code "sample-theme-config" "config.toml" %}}
```toml
archetypedir = "archetypes"
baseurl = "your-base-url.com"
buildDrafts = false
buildFuture = false
canonifyurls = true
# Pointing to this file
config = "config.toml"
contentdir = "content"
# Copyright year is auto-generated (see layouts/partials/site_footer/site_copyright.html). Use the following to change the text *after* the copyright year. If you want to stop auto-generation of copyright year, change
copyright = "Your Company or Name"
# Set to true is you don't want livereload in local development
disableLiveReload= false
# Set to false if you want rss xml files auto-generated
disableRSS = false
# Set to false if you want a sitemap.xml created at the site root
disableSitemap = false
# Set the unicode character used for the "return" link in page footnotes.
footnotereturnlinkcontents = "↩"
# Create an array of files you don't want hugo to build
ignoreFiles = []
languageCode = "en-us"
# Point the generator to the folder used for layouts and templating
layoutDir = "layouts"
# Enable Logging
log = true
# This accepts yaml, toml, or json
metaDataFormat = "yaml"
# This intelligently adds an "s" to the titles of list pages
pluralizelisttitles = false
preserveTaxonomyNames = true
# This sets the title of the directory where hugo builds and pushes the final site when running "Hugo" (ie, without "server")
publishdir = "public"
pygmentsUseClasses = true
relativeURLs = true
source = ""
theme = "ryans-agency"
# This is the top-level, global site title
title = "Your Site Title"
# Set to true to convert mysite/section/ to mysite/section.html
uglyURLs = false
verbose = false
verboseLog = false
# Setting this to false will keep hugo from watching for changes during local development
watch = true

[permalinks]
  singles = "/:title/"

#CUSTOM PARAMS
[params]
  sitesubtitle = ""
  ## organizationname is needed for structured data for SEO (ie, json+ld); see layouts/partials/
  organizationname = "Your Organization Name"
  ## Only CopyrightYear if auto-generated year based on last publish date is no longer working
  copyrightyear = ""
  sitedescription = "The official website of your company or name."
  ## Add GA Tracking Code Here. This leverages a built-in (ie, "internal") partial from HUGO: https://gohugo.io/extras/analytics#configuring-google-analytics
  googleanalyticstrackingcode = ""
  ## Critical Render Path. If true, site style will be embedded in a <style> tag in each html <head> as part of Gulp Build. If false, partial switches to standard external call <link rel="stylesheet" href="{{.Site.BaseURL}}/css/style.min.css">
  usecrp = false
  ## Include jQuery 2.2.4 in your site head. (see /static/assets/js)
  includejq = true
  ## Twitter handle without the "@"
  twitterhandle = "joebriefcase"
  ## Facebook URL
  facebook = "https://www.facebook.com/example/"
  ## Default Image for Social Sharing. This image should live at static/images/; be sure to size this to at least 1200px wide and optimize it.
  defaultsocialimage = "your-default-social-image.jpg"
  ## Sets base URL for GH Content Directories (needed for edit-page button)
  ghcontentdir = ""
  ## Provides link directly to site's configuration file/ this is used in the config shortcode
  ghconfigfile = ""
  ## This should be set to the URL for the images folder for your site on GitHub. It is used by the /editor
  ghimagedir = ""
  ## Site Notifications - set to true and add title (required) and body copy
  addsitenotification = true
  sitenotificationtitle = "Example Notification Title"
  ## Notification copy accepts markdown for extra formatting
  sitenotificationcopy = "See the docs for more information about theme features"
  sitenotificationlink = "https://ryans-agency-hugo-theme.netlify.com/theme-docs"
  sitenotificationlinktext = "Theme Docs..."
  ## Setting this to true will add a "noindex" to *every* page on the site
  removefromexternalsearch = true
  ## This is used when the BaseURL does not need to modified (eg, in share links)
  siteaddress = "https://example.com"
  ## Set to true to add Google Tag Manager to the Site
  addgtm = false
  gtmid = ""
  ## Set to true to include a CDN call to FontAwesome; NOTE: this can also be set to "true" in _variables.scss and unhighlighted in styles.scss if you are comfortable using gulp-sass.
  usefontawesome = true
  ## Set to true to add a Google from to the top right of every page.
  usegoogleform = true
  ## You will need to copy the Google From URL from the embed code
  googleformurl = "https://docs.google.com/forms/d/e/1FAIpQLSe5gNjPZhUGADuHfzrgEgrOZLfjnOfmX15PUmfKj6DJztANqQ/viewform?embedded=true"
  googleformbuttontext = "Contact"
  ## "Featured" block on homepage hero
  featuredbutton = true
  featuredbuttontext = "Featured"
  ## This sets the default hero bg color for list pages (eg, /docs)
  defaultherobgcolor = "#0d568f"
  ## Beging Homepage Variables
  [params.homepage]
    teamrowtitle = "Our Team"

# MARKDOWN
## Configuration for BlackFriday, the markdown parser used by Hugo
## blackfriday GH Repo: https://github.com/russross/blackfriday
[blackfriday]
  plainIDAnchors = true
  hrefTargetBlank = true
  angledQuotes = false
  latexDashes = true

[taxonomies]
  tag = "tags"
  category = "categories"
```
{{% /code %}}