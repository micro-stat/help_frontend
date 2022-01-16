---
title: Interact with the API
description: 'Learn how to interact directly with the micro stat API.'
---

We recommend using an integrator where available, but if there is not an integrator available for your app, or you simply prefer to use the API directly, this article will demonstrate the contract available.

Our `ingestion API` enables you to publish your metrics to our scalable statistics engine, it supports multiple metrics in each invocation, so we recommend batching if you are sending multiple at once.

Each time you publish a metric, one data point in your monthly quota will be used. 

## Pre-requisites
1. You will need an app capable of making XHR requests to a public URL
2. You will need a project DSN - you get one by creating a project within the Dashboard

## Endpoint Contract
- URI: 
- Form Body: 


## Troubleshooting
- The API is returning `400` status codes: 