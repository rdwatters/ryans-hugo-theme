---
title: Data Visualizations
subtitle: It's not you, it's me, PDF.
date: 2016-09-08
publishdate: 2016-09-08
updated: 2016-09-08
authors: [Ryan Watters]
description: You can add data visualizations to your content on to improve user experience.
isdoc: true
weight: 29
categories: []
tags: []
aliases: []
draft: false
removetoc:
removefromsearch: true
comments:
scripts: []
---

You can add basic data visualizations to enhance your content. Currently, you have 8 choices of chart that you can add to body copy using a basic `chart` [shortcode](#shortcodes). The shortcodes are broken into two categories: *single dataset* and *multiple datasets*:

## Single Dataset

1. `pie`
2. `doughnut`
3. `polar`
4. `bar`
5. `line`

## Multiple Datasets

6. `bar` (multiple datasets)
7. `line` (multiple datasets)
8. `radar` (multiple datasets)

All data visualizations (ie, charts) use [angled shortcodes](#shortcodes) and require<span class="required">*</span> two base parameters regardless of the desired output.

1. `title`<span class="required">*</span>
2. `labels`<span class="required">*</span>

## Pie Chart

### Pie Shortcode

{{% code "pie-shortcode-sample" "pie-shortcode-sample.md" %}}
```golang
{{</* chart type="pie" title="Sushi Sales 2016" label="Total Sales by Nigiri" labels="Crab,Salmon,Tuna,Yellowtail" values="10,20,30,40"  */>}}
```
{{% /code %}}

### Pie Shortcode Output

The preceding pie shortcode results in the following pie chart being written to the page.

<div class="output">
{{< chart type="pie" title="Sushi Sales 2016" label="Total Sales by Nigiri" labels="Crab,Salmon,Tuna,Yellowtail" values="10,20,30,40"  >}}
</div>

## Doughnut Chart

Changing the above pie chart to a doughnut chart is simple. We only need to modify one of the named parameters in the shortcode (ie, `type`) from `pie` to `doughnut`.

### Doughnut Shortcode

{{% code "doughnut-shortcode-sample" "doughnut-shortcode-sample.md" %}}
```golang
{{</* chart type="doughnut" title="Sushi Sales 2016" label="Total Sales by Nigiri" labels="Crab,Salmon,Tuna,Yellowtail" values="10,20,30,40"  */>}}
```
{{% /code %}}

### Doughnut Shortcode Output

The preceding doughnut shortcode results in the following doughnut chart being written to the page.

<div class="output">
{{< chart type="doughnut" title="Sushi Sales 2016" label="Total Sales by Nigiri" labels="Crab,Salmon,Tuna,Yellowtail" values="10,20,30,40"  >}}
</div>

## Polar Area Chart

Polar area chart are similar to doughnut and pie charts, but each slice of the pie segments has the same angle; it's the radius of the segment that adjusts according to the value.

Polar area charts are useful when we want to show a comparison similar to a pie chart but need scale for additional context.

### Polar Area Shortcode

{{% code "polar-shortcode-sample" "polar-shortcode-sample.md" %}}
```golang
{{</* chart type="polar" title="Sushi Sales 2016" label="Total Sales by Nigiri" labels="Crab,Salmon,Tuna,Yellowtail" values="10,20,30,40"  */>}}
```
{{% /code %}}

### Polar Area Shortcode Output

The preceding polar shortcode results in the following polar chart being written to the page.

<div class="output">
{{< chart type="polar" title="Sushi Sales 2016" label="Total Sales by Nigiri" labels="Crab,Salmon,Tuna,Yellowtail" values="10,20,30,40"  >}}
</div>

## Bar Chart (Single Dataset)

The sushi dataset is not the best use case for a bar chart, but just to illustrate the simplicity with which you can change the presentation of your charts with a single parameter in your shortcode, we'll change only the `type` attribute in the above polar area example to `bar`.

### Bar Shortcode (Single Dataset)

{{% code "bar-shortcode-sample-single-dataset" "bar-shortcode-sample-single-dataset.md" %}}
```golang
{{</* chart type="bar" title="Sushi Sales 2016" label="Total Sales by Nigiri" labels="Crab,Salmon,Tuna,Yellowtail" values="10,20,30,40"  */>}}
```
{{% /code %}}

### Bar Shortcode (Single Dataset) Output

<div class="output">
{{< chart type="bar" title="Sushi Sales 2016" label="Total Sales by Nigiri" labels="Crab,Salmon,Tuna,Yellowtail" values="10,20,30,40"  >}}
</div>

{{% note title="Pick the Chart that Most Benefits Your End User" %}}
Only add visualizations to datasets if they facilitate understanding in your end user. A good rule for pie/doughnut/polar vs line/bar/radar is that the former is usually focused on the breakdowns of a whole. The latter can be used for comparison between multiple related datasets (see the following examples) or to show trends (ie, how the data changes in relationship to its chronology).
{{% /note %}}

## Line Chart (Single Dataset)

There are times where data may be best display chronologically&mdash;ie, rather than total sales of a given sushi within a larger set, as in the previous examples. In some such cases, a line chart is the appropriate choice, particularly when your end user might be interested in observing trends in data over time. We can look at visitors over an 8-month period using the following shorcode.

### Line Shortcode (Single Dataset)

Note that with these examples, the `values` parameter switches from denoting individual types (eg, as it did with the sushi) to denoting markers of time (ie, months). Like the preceding chart types, you will need to make the sure the `values` match the `labels` in both number and sequence.

{{% code "bar-shortcode-sample-single-dataset" "bar-shortcode-sample-single-dataset.md"%}}
```golang
{{</* chart type="line" title="Visitors per Month" label="Visitors" labels="January,February,March,April,May,June,July,August" values="27,20,15,23.4,29.6,44.3,22.8,50" */>}}
```
{{% /code %}}

### Line Shortcode (Single Dataset) Output

The preceding line shortcode results in the following line chart being written to the page.

<div class="output">
{{< chart type="line" title="Visitors per Month" label="Visitors" labels="January,February,March,April,May,June,July,August" values="27,20,15,23.4,29.6,44.3,22.8,50" >}}
</div>

## Charts with Multiple Datasets

When you need multiple points of comparison in your data visualization, a `line`, `bar`, or `radar` chart can give your end users a richer context for the data you're displaying.

The named parameters for charts with multiple datasets are slightly different from those used in the preceding single-dataset examples. The key parameter to note is `sets`, which tells the build system how many datasets you are going to use. Instead of using just `label` and `values` in your shortcode, you will need to append a number to each of the parameters as it reflect the value you added to `sets`.

For example, a shortcode with 3 datasets would require the following parameters:

* `sets="3"`
* `label1="Your First Label"`
* `values1="1,2,3,4,5,6,7,8"`
* `label2="Your Second Label"`
* `values2="9,10,11,12,13,14,15,16"`
* `label3="Your Third Label"`
* `values3="12,11,10,9,8,7,6,5"`

{{% note title="There are Limits to Total Datasets"%}}
Currently, shortcodes support up to 6 total datasets in line, bar, and radar charts. Additional datasets may display but will require modifications in the code base to change visual presentation of the data (eg, line and background color).
{{% /note %}}

### Line Shortcode (Multiple Datasets)

{{% code "line-shortcode-sample-multiple-datasets" "line-shortcode-sample-multiple-datasets.md"%}}
```golang
{{</* chart type="line" title="Visitors per Month" sets="3"  labels="January,February,March,April,May,June,July,August" label1="Family" values1="27,20,15,23,29,44,22,50" label2="Friends" values2="74,32,12,19,34,22,98,43" label3="Coworkers" values3="67,43,78,90,23,45,67,24" */>}}
```
{{% /code %}}

### Line Shortcode (Multiple Datasets) Output

The preceding line shortcode with multiple datasets results in the following line chart being written to the page.

<div class="output">
{{< chart type="line" title="Visitors per Month" sets="3"  labels="January,February,March,April,May,June,July,August" label1="Family" values1="27,20,15,23,29,44,22,50" label2="Friends" values2="74,32,12,19,34,22,98,43" label3="Coworkers" values3="67,43,78,90,23,45,67,24">}}
</div>

### Bar Shortcode (Multiple Datasets)

Similar to the single-dataset charts, we can change our multiple-dataset line chart to a multiple-dataset bar chart and only need to modify the `type` parameter.

{{% code "bar-shortcode-sample-multiple-datasets" "bar-shortcode-sample-multiple-datasets.md"%}}
```golang
{{</* chart type="bar" title="Visitors per Month" sets="3"  labels="January,February,March,April,May,June,July,August" label1="Family" values1="27,20,15,23,29,44,22,50" label2="Friends" values2="74,32,12,19,34,22,98,43" label3="Coworkers" values3="67,43,78,90,23,45,67,24" */>}}
```
{{% /code %}}

### Bar Shortcode (Multiple Datasets) Output

The preceding bar shortcode with multiple datasets results in the following bar chart being written to the page.

<div class="output">
{{< chart type="bar" title="Visitors per Month" sets="3"  labels="January,February,March,April,May,June,July,August" label1="Family" values1="27,20,15,23,29,44,22,50" label2="Friends" values2="74,32,12,19,34,22,98,43" label3="Coworkers" values3="67,43,78,90,23,45,67,24" >}}
</div>

## Adding Labels to X and Y Axes

In cases where you are displaying more complex data, you may want to add an additional label to either the X or Y axis for improved clarity. These can be added via an `x` or `y` attribute added to the shortcode.

Although the labels add little to the usability of the data, the following example shows a multiple-dataset bar chart with the addition of labels for both the X and Y axes.

### X and Y Axis Labels Shortcode

{{% code "x-and-y-axis-labels-shortcode" "x-and-y-axis-labels-shortcode.md " %}}
```golang
{{</* chart type="bar" title="Visitors per Month" sets="4"  labels="January,February,March,April,May,June,July,August" y="Number of Visitors" x="Months of the Year" label1="Family" values1="27,20,15,23,29,44,22,50" label2="Friends" values2="74,32,12,19,34,22,98,43" label3="Coworkers" values3="67,43,78,90,23,45,67,24" label4="Other" values4="13,87,45,364,33,19,23,91" */>}}
```
{{% /code %}}

### X and Y Axis Labels Shortcode Output

The preceding bar shortcode with multiple datasets and X and Y labels for axes results in the following bar chart being written to the page.

<div class="output">
{{< chart type="bar" title="Visitors per Month" sets="4"  labels="January,February,March,April,May,June,July,August" y="Number of Visitors" x="Months of the Year" label1="Family" values1="27,20,15,23,29,44,22,50" label2="Friends" values2="74,32,12,19,34,22,98,43" label3="Coworkers" values3="67,43,78,90,23,45,67,24" label4="Other" values4="13,87,45,364,33,19,23,91" >}}
</div>