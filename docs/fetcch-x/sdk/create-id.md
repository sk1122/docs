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
