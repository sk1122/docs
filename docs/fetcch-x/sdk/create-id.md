---
sidebar_position: 3
---

# Create ID

### Get ID Data from ID

```js

import { createId } from "@fetcch/id"

createId({
    apiKey: "PROVIDER_API_KEY",
    data: {
        wagpayId: "satyam@wagpay",
        default: {
            address: "",
            network: 1
        },
        others: [
            {
                address: "",
                network: [1, 2, 3]
            }
        ]
        signedMsg: "signature"
    },
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
