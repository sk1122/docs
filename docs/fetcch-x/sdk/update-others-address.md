---
sidebar_position: 5
---

# Update others address of an ID

```js

import { updateOtherAddress } from "@fetcch/id"

updateDefaultAddress({
    apiKey: "PROVIDER_API_KEY",
    data: {
        others: [
            {
                address: "", // required, also if just wanted to update network
                network: [1, 2], // add new networks here
                deleteNetwork: [3] // only if want to delete a previously added network
            }
        ],
        deleteAddress: [""], // list of other addresses that you want to delete from ID
        signedMsg: "" // signed message from IDs default address
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
