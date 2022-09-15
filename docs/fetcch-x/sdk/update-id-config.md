---
sidebar_position: 3
---

# Update ID Config

We've divided ID into 2 parts

- ID (Important parts of ID)
- ID Config (Configuration of ID)

ID Config is created as soon as a new ID is created with default parameters, to update it use this function

ID Config will have

- forcedSameChainPayment - boolean
- paymentRequests - Request[]

Note - We've different functions for creating payment requests

if `forcedSameChainPayment` is `true` then `pay` function will check if `fromId` has same chain as what `toId` is paying with, so for eg

```
satyam@metamask is sending 100 USDC to elon@tesla

satyam@metamask has default chain 2 (Polygon)
elon@tesla has default chain 1 (Ethereum)

elon@tesla has kept forcedSameChainPayment: true

so `pay` function will check if elon@tesla supports Chain 2 (Polygon) on any of their addresses (default + others)

if elon@tesla supports Chain 2 on some other address, that will be used for payment and cross chain payment will be skipped

if we don't any chain same as Chain 2, we fallback to default chain
```

```js
import { getIdConfig } from "@fetcch/id"

getIdConfig({
    apiKey: "",
    data: {
        configId: "ID_CONFIG_ID",
        wagpayId: "ASSOCIATED_ID",
        forcedSameChainPayment: true
    }
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })
```