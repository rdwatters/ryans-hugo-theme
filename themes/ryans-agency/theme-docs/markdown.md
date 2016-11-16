---
title: Markdown
subtitle:
authors: [Ryan Watters]
draft: false
date: 2016-09-03
publishdate: 2016-09-03
updated: 2016-09-03
description: Markdown is a light, human-readable, technology-agnostic markup language that encourages writers to create semantic content that can be output to multiple formats.
weight: 12
image:
categories: []
tags: []
isdoc: true
aliases: []
removefromsearch: true
comments:
---

## Introduction to Markdown

Markdown is a light, human-readable, technology-agnostic markup language that encourages writers and developers to focus on semantics and content rather than visual presentation. There are markdown parsers written in [every major programming language][]. It is popular among [bloggers][], [developers][], and [designers][] and is especially well suited for content-heavy sites.

The following is a high-level overview of [GitHub Flavored Markdown][] (GFM), the subset (aka "flavor") of markdown used on this site. GFM was chosen for its simplicity, gentle learning curve, and widespread support among multiple languages. [Shortcodes][] extend Markdown syntax to make updating and creating complex content faster and easier.

If you prefer a more interactive approach, the GFM tutorial at [markdowntutorial.com][] will teach you Markdown in less than 10 minutes.

{{% note title="Spacing is Important in Markdown" %}}
Spacing is important in markdown files. Use an empty line between paragraphs. For headings, do not forget the required space after your hash marks. For example, `## My Heading` will render correctly as an `<h2>`, whereas `##My Heading` will not.
{{% /note %}}

## Headings and Subheadings

Headings in markdown are denoted with hashes (`#`), with the number of hashes corresponding to the heading number in HTML. For the purpose of this site's content, `<h2>` to `<h4>` are the only headings you'll probably ever need. You can use `<h5>` if you want to introduce a separate section at the end of an article that you might not want to include in a [table of contents][] (eg, "Further Reading").

Level-1 headings (`<h1>`, `#`) are reserved for page titles and therefore should not be added to body copy.

{{% note title="Choose Your Headings Semantically" %}}
The following examples are only here to illustrate how headings are rendered on the site. *You should choose your headings based on semantics (ie, the document outline) and never on visual presentation.* Headings are also used to create the [table of contents](#table-of-contents) for blog posts and maintain consistent, intuitive vertical rhythm for documentation pages.
{{% /note %}}

{{% code "headings-in-markdown" "headings-in-markdown.md" %}}
```markdown
## Level 2 Heading in Body Copy

### Level 3 Subheading in Body Copy

#### Level 4 Sub-subheading in Body Copy
```
{{% /code %}}

The preceding markdown will render as follows in your blog posts:

<div class="output">
   <h2 class="doc-example">Level 2 Heading in Body Copy</h2>
   <h3 class="doc-example">Level 3 Subheading in Body Copy</h3>
   <h4 class="doc-example">Level 4 Sub-subheading in Body Copy</h4>
   <h5 class="doc-example">Level 5 Heading in Body Copy</h5>
</div>

In [documentation pages][] (eg, the page you're reading right now), the same markdown will render as follows:

<div class="output">
   <h2>Level 2 Heading in Body Copy</h2>
   <h3>Level 3 Subheading in Body Copy</h3>
   <h4>Level 4 Sub-subheading in Body Copy</h4>
   <h5>Level 5 Heading in Body Copy</h5>
</div>

## Italics and bold

Creating italics and bold text in Markdown is easey. Standard system key bindings (eg, <kbd>Ctrl</kbd> + <kbd>i</kbd> for PC or <kbd>&#8984;</kbd> + <kbd>i</kbd> on Mac for italics) work if you are creating content using the site's [editor][].

{{% code "italics-and-bold-sample" "italics-and-bold-sample.md" %}}
```markdown
Here is *some text in italics*. Here is **some text in bold**.
```
{{% /code %}}

This preceding italics and bold markdown will render as follows:

<div class="output">
   <p>Here is <em>some text in italics</em>. Here is <strong>some text in bold</strong>.</p>
</div>

## Lists

You can add ordered and unordered lists in markdown. You can also mix and match list types.

{{% code "markdown-list-examples" "markdown-list-examples.md" %}}
```markdown
* Unordered list item
* Unordered list item
   * Nested unordered list Item
* Unordered list Item

1. Ordered list item
2. Ordered list item
   * Nested unordered list item inside of ordered list item
3. Ordered list item
```
{{% /code %}}

The preceding markdown lists will render as follows:

<div class="output">
   <ul>
      <li>Unordered list item</li>
      <li>Unordered list item
      <ul>
         <li>Nested unordered list item</li>
      </ul>
      </li>
      <li>Unordered list item</li>
   </ul>
   <ol>
      <li>Ordered list item</li>
      <li>Ordered list item
         <ul>
            <li>Nested unordered list item inside of ordered list item</li>
         </ul>
      </li>
      <li>Ordered list item</li>
   </ol>
</div>

## Links

You can add either inline or reference-style links in Markdown.

{{% code "markdown-link-samples" "markdown-link-samples.md" %}}
```markdown
* Inline link: [google.com](https://www.google.com "Go to Google")
* Reference-style link: [google.com][]    [google.com]: https://www.google.com "Go to Google"
* Relative link (for anchors on the same site): [Documentation section of this site](/docs "Go to the documentation section of this website.")
* Link shortcut: <https://www.google.com>
```
{{% /code %}}

For the reference-style link in the above example, the `[google.com]: https://www.google.com` is usually added to the bottom of the page. Reference-style links come in very handy when you want to refer to the same URL in multiple areas in your body copy. This allows you to reference the same link multiple times and then---if the link changes in the future---only have to change the URL once.

The preceding links in markdown will render as follows:

<div class="output">
   <ul>
      <li>Inline link: <a href="https://www.google.com" target="_blank" title="Go to Google">google.com</a></li>
      <li>Reference-style link: <a href="https://www.google.com" target="_blank" title="Go to Google">google.com</a></li>
      <li>Relative link (for anchors on the same site): <a href="/docs" title="Go to the documentation section of this website.">Documentation section of this site</a></li>
      <li>Link shortcut: <a href="https://www.google.com">https://www.google.com</a></li>
   </ul>
</div>

{{% note title="Using External Links"%}}
The build system for this site is very smart. Links to external sites and print documents will open in a new tab or window by default. This will help keep your markdown concise and readable.
{{% /note %}}

### Images

The syntax for images is similar to the syntax for links. See the section on [images and figures][] for additional methods for extending images on content pages. All images in body copy can be expanded based on user event (ie, click or touch).

{{% code "markdown-image-sample" "markdown-image-sample.md" %}}
```markdown
![A photo of an adorable kitten.](/assets/images/adorable-kitten.jpg)
```
{{% /code %}}

<div class="output">
   <img src="/assets/images/adorable-kitten.jpg" alt="A photo of an adorable kitten.">
</div>

{{% note title="Where should I put my images?" %}}
All images for this site are root-relative. This means that the link to the image must start with `/assets/images`. You can drag and drop images directly into the appropriate GitHub repository for this site.
{{% /note %}}

### Blockquotes

Blockquotes are styled using a right angle bracket followed by a space (`>`). Multi-line blockquotes can include a right angle bracket at the beginning of each line, or you can indent the text to align with the first line in the blockquote.

{{% code "markdown-blockquote-sample" "markdown-blockquote-sample.md" %}}
```markdown
> A bird in the hand is worth two in the bush.
```
{{% /code %}}

<div class="output">
   <blockquote>
      <p>A bird in the hand is worth two in the bush.</p>
   </blockquote>
</div>

Blockquotes can also include internal markdown syntax. If you separate the end of the blockquote with a space followed by a hyphen and then another space, the build system will assume this is the citation for the blockquote and will wrap the text that follows in a `<cite>` element with the appropriate quotation dash (&#x2015;) for improved semantics and styling.

{{% code "markdown-blockquote-with-reference-sample" "markdown-blockquote-with-reference-sample.md" %}}
```markdown
> Without the fear of falling, there is no joy in flight. - [Kobo Abe](https://en.wikipedia.org/wiki/Kobo_Abe)
```
{{% /code %}}

<div class="output">
   <blockquote><p>Without the fear of falling, there is no joy in flight.<cite class="blockquote-citation">&#x2015; <a href="https://en.wikipedia.org/wiki/Kobo_Abe">Kobo Abe</a></cite></p></blockquote>
</div>

### Code

Code can be added inline or in blocks. For syntax highlighting, add a programming language to the end of the first set of trip back-ticks in the code block.

<div class="code-copy" id="markdown-code-block-sample">
   <div class="code-copy-header">
      <div class="action-buttons"></div>
      <span class="filename" title="markdown-code-block-sample.md">markdown-code-block-sample.md</span>
   </div>
   <button class="copy-button" title="Copy to clipboard" data-clipboard-snippet=""><div class="copy-text"><i class="icon-clipboard"></i> COPY</div>
   </button>
   <pre class="line-numbers language-markdown"><code class="language-markdown">
         ```javascript
         function myFunction(){
         console.log("Hello world!");
         }
         ```</code></pre>
</div>

For a more complex version of code blocks that the end user can copy, see the [code blocks][] shortcode section.

The preceding codeblock markdown will render as follows:

<div class="output">
<pre class="line-numbers language-javascript"><code class=" language-javascript"><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code></pre>
</div>

### Tables

Be sure to only add tables when presenting tabular data. *Tables should never be used for visual styling.* Note how you can use colons in the separator of column headings to denote whether the text is left-aligned (default), centered, or right-aligned.

{{% code "markdown-table-sample" "markdown-table-sample.md" %}}
```markdown
| Tables        | Are           | Neat  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| col 1 is      | left-aligned  |    $1 |
| striped rows  | are cool      |    $1 |
```
{{% /code %}}

The preceding table markdown will be rendered as follows:

<div class="output">
   <table>
<thead>
<tr>
<th>Tables</th>
<th align="center">Are</th>
<th align="right">Neat</th>
</tr>
</thead>

<tbody>
<tr>
<td>col 3 is</td>
<td align="center">right-aligned</td>
<td align="right">$1600</td>
</tr>

<tr>
<td>col 2 is</td>
<td align="center">centered</td>
<td align="right">$12</td>
</tr>

<tr>
<td>col 1 is</td>
<td align="center">left-aligned</td>
<td align="right">$1</td>
</tr>

<tr>
<td>striped rows</td>
<td align="center">are cool</td>
<td align="right">$1</td>
</tr>
</tbody>
</table>
</div>

### Footnotes

Footnote syntax is similar to reference-style links. Footnotes can be used for references to substantiate your content or additional information you may want the end user to know without breaking the linguistic flow of a piece. For a longer non sequitur or tangentially related content, you may also want to use a [tangent][].

<div class="code-copy" id="markdown-footnote-sample">
   <div class="code-copy-header"><div class="action-buttons"></div><span class="filename" title="markdown-footnote-sample.md">markdown-footnote-sample.md</span></div>
   <button class="copy-button tooltipped tooltipped-s" title="Copy to clipboard" data-clipboard-snippet="" aria-label="Copied!"><div class="copy-text"><i class="icon-clipboard"></i> COPY</div></button><pre class="line-numbers language-markdown"><code class=" language-markdown">Here is a footnote.[^1][^1]: Here is the footnote content.
<span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre>
</div>

{{% note title="Footnotes and GFM" %}}
Footnotes are not technically part of GFM but are supported by this site. The above footnote example is using a single line for both reference and footnote only for the purposes of this documentation. Footnote content is usually kept at the bottom of a markdown document for easier management.

The footnote number may also be different in the following output when compared with the sample above, since the footnote parser is looking at *all* footnotes within the documentation section of this site and ordering them accordingly.
{{% /note %}}

<div class="output">
   <p>Here is a footnote.<sup class="footnote-ref" id="fnref:1"><a rel="footnote" href="#fn:1">1</a></sup></p>
   <div class="footnotes">
<hr>
<ol>
<li id="fn:1">Here is the footnote content.
 <a class="footnote-return" href="#fnref:1">↩</a></li>
</ol>
</div>
</div>

### Helper Classes

Whenever possible, it is best to avoid unnecessary CSS classes in your content, especially in body copy. That said, there are times where some additional styling may be appropriate for your content. For this reason, you can add the following helper classes.

1. `.warn` and `.required`
2. `.centered`
3. `.brand`
4. `.grayscale`

{{% code "markdown-helper-classes-sample" "markdown-helper-classes-sample.md" %}}
```html
<span class="warn">This is a warning.</span>
<div class="centered-text">Here is some centered text.</div>
<span class="brand">This text will take the primary brand color.</span>
![A B&W photo of a kitten. class=grayscale](/assets/images/adorable-kitten.jpg)
```
{{% /code %}}

For more information on how to add helper classes to images, see the [images and figures][] section.

The preceding markdown will be rendered as follows:

<div class="output">
<span class="warn">This is a warning.</span>
<div class="centered-text">Here is some centered text.</div>
<span class="brand">This text will take the primary brand color.</span>
<img src="../assets/images/adorable-kitten.jpg" alt="A B&amp;W photo of a kitten. " class="grayscale">
</div>



[bloggers]: https://blog.ghost.org/markdown/
[code blocks]: #code-blocks
[designers]: http://mediatemple.net/blog/tips/you-should-probably-blog-in-markdown/
[developers]: http://readwrite.com/2012/04/17/why-you-need-to-learn-markdown/
[documentation pages]: #content-types
[editor]: /editor
[every major programming language]: https://github.com/markdown/markdown.github.com/wiki/Implementations
[GitHub Flavored Markdown]: https://help.github.com/categories/writing-on-github/
[images and figures]: #images-and-figures
[markdowntutorial.com]: http://markdowntutorial.com
[Shortcodes]: #shortcodes
[tangent]: #tangents