---
sidebar_position: 6
---

# Pay

### P2P payment

```js
import { pay } from "@fetcch/id"
import { ethers } from "ethers"

// setup ethers provider and signer

pay({
    apiKey: "PROVIDER_API_KEY",
    data: {
        toConfig: {
            toId: "satyam@metamask"
        },
        userConfig: { // what user wants to pay
            fromId: "elon@tesla",
            fromAddress: "0x0000",
            fromChain: 3,
            fromToken: "0x000",
            amount: "10000000000"
        }
    },
})
    .then(result => {
        signer.sendTransaction(result.transactionData)
    })
    .catch(error => {
        console.error(error)
    })
```

### Resolving Payment Request

```js
import { pay } from "@fetcch/id"
import { ethers } from "ethers"

// setup ethers provider and signer

pay({
    apiKey: "PROVIDER_API_KEY",
    data: {
        toConfig: {
            paymentRequest: 1001
        },
        userConfig: { // what user wants to pay
            fromId: "elon@tesla",
            fromAddress: "0x0000",
            fromChain: 3,
            fromToken: "0x000"
            // amount will be taken from payment request in this case
        }
    },
})
    .then(result => {
        signer.sendTransaction(result.transactionData)
    })
    .catch(error => {
        console.error(error)
    })
```
