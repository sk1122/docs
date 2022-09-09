---
sidebar_position: 4
---

# Get Payment Requests

### Sent to a user

```js

import { getPaymentRequests } from "@fetcch/id"

getPaymentRequests({
    apiKey: "YOUR_API_KEY",
    toId: "satyam@wagpay"
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```

### Sent from a user

```js

import { getPaymentRequests } from "@fetcch/id"

getPaymentRequests({
    apiKey: "YOUR_API_KEY",
    toId: "satyam@metamask"
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```