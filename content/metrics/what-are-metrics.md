---
title: What are Metrics?
description: 'Learn about what metrics are and why you should care'
---

- Metrics are the most important part of micro stat, they represent the data you send from your app.

- In your app when you find something you want to measure, you write code to create a metric.

### What makes up a Metric?
- Each Metric has two properties...

1. A name: provided by you so it is recognisable
2. A type: The purpose of the Metric, for example is it measuring time taken or representing a number.

### What do you do with Metrics?
- Every time you publish a Metric, you provide a value - In the Dashboard we call this a Data Point.
- Over time you will publish many Data Points, so we show the values of these in Graphs on our Dashboard to let you see how it is trending over time.

### Example of a Metric
- There are many use cases for what Metrics you might want to publish in your app, here is one example to explain the concept.

- We might create a Metric called "Page Load Time" and give it the type "Timer"
- Every time we load a page in our app, we can publish the metric with a value showing how long it took. IE 100 milliseconds.
- Then in the Dashboard we can view the Metric and see how long it takes our users to load the pages in our app.
- If the outcome is positive; we can set thresholds to track it and keep it performing well
- If the outcome is not so good you can make improvements to your app and monitor how the data changes over time.

### What types of Metric can I use?
- We have a seperate document listing all of the supported metric types - [Check it out](/metrics/supported-metrics)

