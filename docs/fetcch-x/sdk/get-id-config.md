---
sidebar_position: 6
---

# Get ID Config

We've divided ID into 2 parts

- ID (Important parts of ID)
- ID Config (Configuration of ID)

```js
import { getIdConfig } from "@fetcch/id"

getIdConfig({
    apiKey: "",
    data: {
        id: "satyam@metamask"
    }
})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })
```

This function returns data of type `IDConfig`

```js
export interface IDConfig {
    id?: string
    wagpayId: string | ID
    forcedSameChainPayment: boolean
    requests: number | Request[]
}
```