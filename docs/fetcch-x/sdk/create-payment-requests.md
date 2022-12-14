---
sidebar_position: 9
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
        chain: 2,
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

This function returns data of type `Request`

```js
export interface Request {
    id?: number
    fromId?: string | ID
    toId: string | ID
    token: string
    chain: number
    amount: string
    data?: string
    executed?: boolean
    transactionHash?: string
    sameChain?: boolean
    fromChain?: number
    fromToken?: string
    dstTransactionHash?: string
    message?: string
    label?: string
    createdAt?: Date
    updatedAt?: Date
}
```