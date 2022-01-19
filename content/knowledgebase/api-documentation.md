---
title: Interact with the API
description: 'Learn how to interact directly with the micro stat API.'
---

- We recommend using an integrator where available, but if there is not an integrator available for your app, or you simply prefer to use the API directly, this article will demonstrate the contract available.

- Our `ingestion API` enables you to publish your metrics to our scalable statistics engine, it supports multiple metrics in each invocation, so we recommend batching if you are sending multiple at once.

- Each time you publish a metric, one data point in your monthly quota will be used. 

## Pre-requisites
1. You will need an app capable of making XHR requests to a public URL
2. You will need a project DSN - you get one by creating a project within the Dashboard

## Endpoint URI
- Remember to replace the DSN with the one specified by your project in the Dashboard.
```
URI: https://api.micro-stat.com/ingest?dsn=<YOUR_DSN>
```

## Form Body
- When ingesting Data Points, send an array with each item specifying the following three mandatory properties below.

```
[{
  name: 'YOUR_METRIC_NAME', // Example: 'Number of Basket Items
  type: 'YOUR_METRIC_TYPE', // example: 'Counter'
  value: 'YOUR_DATA_POINT_VALUE' // example: 1
}]
```

## Troubleshooting
- **The API is returning `400` status codes**: Check the message property in the response for more details, it is most likely that you did not provide a valid DSN.
- **I received a `200` or `201` status code**: This means that we ingested all or at least one of your data points. Check the response body to see if we rejected any.