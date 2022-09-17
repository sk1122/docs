---
sidebar_position: 10
---

# Update Payment Requests


```js

import { updatePaymentRequests } from "@fetcch/id"

updatePaymentRequests({
    apiKey: "YOUR_API_KEY",
    data: {
        id: 1001
        fromId: "satyam@wagpay", // who paid for the request
        fromChain: 2, // internal id of from chain
        fromToken: "", // address of token paid in
        transactionHash: "", // transaction hash
    }
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```

**Note** - API will validate the transaction hash and the values associated with blockchain, if its similar, then only it payment request is marked resolved, otherwise update request is failed

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