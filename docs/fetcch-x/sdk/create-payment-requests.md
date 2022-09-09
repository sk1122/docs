---
sidebar_position: 5
---

# Create Payment Requests


```js

import { createPaymentRequests } from "@fetcch/id"

createPaymentRequests({
    apiKey: "YOUR_API_KEY",
    data: {
        fromId: "satyam@metamask",
        toId: "satyam@rainbow",
        amount: "100000000",
        token: "0x00000000000000000000",
        chain: "2",
        data: "0x000000000000000000",
        message: "Plis satyam pay me back"
    }
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```