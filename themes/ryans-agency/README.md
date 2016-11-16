# Ryan's Agency

This is a port of an internal-network-only website I made for my company's Digital Team.

> The use case with respect to content types, models, etc is somewhat specific to our needs. Make sure to pay special attention to the archetypes and required fields. The complexity of the content types is also the reason I created the [site markdown editor][]. Keep this in mind. YMMV.

## Here are just a *few* of the theme features:

* Client-side search with lunr.js (see notes below on how to create your index)
* Shortcodes
  * Audio
  * Video
  * Data visualizations
  * Callouts/admonishments (for docs)
  * Improved code blocks (with "Copy" button)
* [Markdown editor](https://ryans-agency-hugo-theme.netlify.com/editor)
* Optional off-canvas Google Form (eg, Contact Form)
* Team listing with deep linking
* A whole slew of SEO optimizations in the templating

## Configuration

The following is full `config.toml` example for the Ryan's Agency theme:

```
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
  defaultherobgcolor = "#01589B"
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

## Content Types

* Documentation
* Team Member
* Blog Post
* Single Page

Part of the templating includes `site-index.json`, which is used for live, client-side search in combination with [lunr.js][].

## Full Documentation

Full documentation for the theme can be found at <https://ryans-agency-hugo-theme.netlify.com/theme-docs/>.

Downloading this theme will also include the `theme-docs` folder, which you can copy into `content/` and modify as needed if you would like to include documentation for content creators, editors, etc. This might be a nice feature for easier reference and to document additional features you create during your site development.

## Adding the Search Index

The templating for the search index is already included in the theme. To add the index, create a new markdown document at `content/singles/site-index.md` with the following front matter at the top of the document.

```
---
title: Site Index dummy page
subtitle:
date: 2016-10-01
publishdate: 2016-10-01
type: json
url: /assets/site-index.json
---
```

This will create `/assets/site-index.json`.

[lunr.js]: http://lunrjs.com/
[site markdown editor]: https://ryans-agency-hugo-theme.netlify.com/editor/