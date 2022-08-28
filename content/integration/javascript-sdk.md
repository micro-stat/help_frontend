---
title: Javascript SDK
description: 'Learn how to install and use the Javascript SDK.'
---

If you already have an account with micro stat we recommend you use the tutorial in the dashboard, as we provide customised code for you.

## Get Started
### 1. Install the Integration
- We recommend installing our javascript SDK using npm or yarn

```
yarn add micro-stat
```

### 2. Connect your Project
- Every Project has a unique DSN, make sure to use the DSN provided in the dashboard.
- If you do not yet have a DSN, sign up with micro stat and one will be automatically generated for you.

```
import { Connection } from 'micro-stat';

Connection.connect("<YOUR_DSN>");
```

### 3. Publish a Metric
- We provide a variety of metric types which you can import, the example below shows a HitCounter and a Counter.
- You can write your code in a single line with chained commands or interact with the object - your call.

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

### 3. Customise SDK Options
- You can enable or disable various features by changing your connection code slightly.
```
import { Connection } from 'micro-stat';

const options = {
  captureWebVitals: false,
  disablePublication: true
}

Connection.connect("YOUR_DSN", options);
```

### 4. Supported Options
Option | Default | Description
| ----------- | ----------- | ----------- |
captureWebVitals | true | When `true` - web vitals are automatically collected and published
disablePublication | false | When `true` - metrics are only output to the console, not published to micro-stat

