---
sidebar_position: 4
---

# Update default address of an ID

```js

import { updateDefaultAddress } from "@fetcch/id"

updateDefaultAddress({
    apiKey: "PROVIDER_API_KEY",
    data: {
        address: "", // empty if don't want to update address
        network: 2, // internal id of the network being used,
        signedMsg: "", // signed message from IDs default address (use previous version's, if currently updating)
    }
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```

This function returns data of type `ID  `

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
