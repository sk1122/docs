---
sidebar_position: 8
---

# Get Payment Requests

### User's received payment requests

```js

import { getPaymentRequests } from "@fetcch/id"

getPaymentRequests({
    apiKey: "YOUR_API_KEY",
    data: {
        signedMsg: "0x0000"
    }
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```

### User's sent payment requests

```js

import { getPaymentRequests } from "@fetcch/id"

getPaymentRequests({
    apiKey: "YOUR_API_KEY",
    data: {
        my: true,
        signedMsg: ""
    }
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```

### Single payment request

```js
import { getPaymentRequests } from "@fetcch/id"

getPaymentRequests({
    apiKey: "PROVIDER_API_KEY",
    data: {
        id: 1001
    }
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })
```

Note - For websocket connection with requests, go on to API Docs

This function returns data of type `Request[]`

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