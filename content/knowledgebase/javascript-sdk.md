---
title: Javascript SDK
description: 'Learn how to install and use the Javascript SDK.'
---

If you already have an account with micro stat we recommend you [use the tutorial in the dashboard](https://www.portal.micro-stat.com/tutorial/modern-web), as we provide customised code for you.

## Get Started
### 1. Install the Integration
We recommend installing our javascript SDK using npm or yarn

```
yarn add micro-stat
```

### 2. Connect your Project
Every Project has a unique DSN, so make sure to use the correct DSN or your data will not be associated with your account.

If you do not yet have a DSN, sign up with micro stat and one will be automatically generated for you.

```
import { Connection } from 'micro-stat';

Connection.connect("https://micro-stat-functions.azurewebsites.net/api/ingest?dsn=<YOUR_DSN>");
```

### 3. Publish a Metric
We provide a variety of metric types which you can import from our integrator, the example below shows a HitCounter and a Counter.

You can write your code in a single line with chained commands or interact with the object - your call.

```
// Import the Metric types you want to record
import { HitCounter, Counter } from 'micro-stat';

// Create a Hit Counter and immediately publish it
new HitCounter('Project Loaded').publish();

// Create a Counter and interact with it
const basketItemCount = new Counter('Number of Basket Items');
basketItemCount.value = 5;
basketItemCount.publish();
```


