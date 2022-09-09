---
sidebar_position: 2
---

# bridge()

Bridge `Token X on Chain A to Token Y on Chain B` using Fetcch Bridge

## Usage

```js
import { bridge } from "@fetcch/sdk"

bridge({
    fromToken: "",
    toToken: "",
    fromChain: "",
    toChain: "",
    amount: "",
    data: "" // transaction data that may execute on Chain B
}).then(result => {
    console.log(result)
}).catch(error => {
    consol.error(error)
})
``