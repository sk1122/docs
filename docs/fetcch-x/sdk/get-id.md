---
sidebar_position: 2
---

# Get ID Data

### Get ID Data from ID

```js

import { getId } from "@fetcch/id"

getId({
    apiKey: "YOUR_API_KEY",
    data: {
        id: "satyam@wagpay"
    }
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```

### Get ID Data from Signed Message

ID will be returned based on address that signed the message

So for ex, we have a ID

```json
{
    "wagpay_id": "satyam@wagpay",
    "default": {
        "address": "0x00",
        "network": {
            "id": 1,
            "name": "ethereum",
            "chain_type": "evm"
            ...
        }
    },
    ...
}
```

Then, we have signed a message using that default address, call the function with signature and we will receive the ID that has the address (works with default and secondary addresses also)

**Code**

```js

import { getId } from "@fetcch/id"

getId({
    apiKey: "YOUR_API_KEY",
    data: {
        signedMsg: "0x000000"
    }
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```

This function returns data of type `ID`

```js
export interface DefaultAddress {
    address: string
    network: number | Chain
}

export interface OtherAddress {
    address: string
    network: number[] | Chain[]
}

export interface ID {
    id?: string
    wagpayId: string
    identifier?: string
    provider?: string
    default: DefaultAddress
    others: OtherAddress[]
    assumeHighSecurity: boolean
    arweaveCommitHash?: string
    syncedAt?: Date
    createdAt?: Date
    updatedAt?: Date
}
```
