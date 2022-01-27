---
title: Supported Metric Types
description: 'Learn about what metric types are supported by micro stat'
---

There are a wide variety of metric types available, our aim is to make recording every type of data possible. If you can't see one that matches your use case please get in touch, we may put it on our roadmap.

<details>
<summary>Hit Counter</summary>

#### Description
- A hit counter is a great way to track how many times something has happened.
- Each time you publish a Hit Counter a data point is created with a value of 1.
- Our tailored visualisations show you how many times your Hit Counter has been published and we plot this over time.

#### Example Use Cases
1. How many times a customer visited a page
2. How many times a customer interacted with a specific feature
3. How many times an article has been read
4. How many times an error occurred in your app
  
</details>

<details>
<summary>Counter</summary>

#### Description
- A Counter is not the same as a Hit Counter.
- We use Counters to track a value which can be represented by a number.
- Each time you publish a counter you need to provide a value, you can either set a value directly or use the interface to increment the value as you execute code.
- Our tailored visualisations show you the maximum count, minimum count and average count for every time period.

#### Example Use Cases
1. How many items does a customer add to their basket
2. How many items does an API return to your customer
  
</details>

<details>
<summary>Timer</summary>

#### Description
- A Timer is designed to enable you to capture how long something takes
- A Data Point is created every time you publish a Timer, the value is a number which represents a number of milliseconds.
- Our tailored visualisations show you the maximum time taken, minimum time taken and the average time taken for every time period.

#### Example Use Cases
1. How long has an API taken to respond
2. How long has it taken a customer to complete a specific activity
3. How long did a customer spend on a page
  
</details>

<details>
<summary>Word Web</summary>

#### Description
- A Word Web is a great way to break down a series of words into usable insight
- A Data Point is created every time you publish the metric, the value can be either a string or numberical value which represents something to you in your app.
- Our tailored visualisations show you which values are most popular over a variety of time ranges.

#### Example Use Cases
1. To record which are the most popular articles viewed on your blog
2. To create buckets for certain events in your code
3. To record popular search queries or inputs
  
</details>

## Under development
We are actively working on adding new metric types as we speak, these are some of the ideas we are working on right now.

1. **Word Map**: The ability to pass a word as a metric value, and be able to represent which words are most frequently used.
2. **Time Buckets**: The ability to create buckets of time ranges
3. **Currency**: The ability to visualise currency based values

