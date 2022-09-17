---
sidebar_position: 12
---

# Get Supported Chains

### Get all supported chains

```js

import { getSupportedChains } from "@fetcch/id"

getSupportedChains()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })

```

### Get chain based on their internal id

```js

import { getSupportedChains } from "@fetcch/id"

getSupportedChains({ internalId: 1 })
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })
```

This function returns data of type `Chain[]`

```js
export interface Chain {
    id: number;
    chainId: number;
    name: string;
    chain: string;
    icon: string;
    explorers: Explorer[];
    type: string;
    rpc: string[];
    nativeCurrency: {
        name: string
        symbol: string
        decimals: number
    };
    faucets: string[];
    infoURL: string;
    shortName: string;
}
```
