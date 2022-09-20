---
sidebar_position: 2
---

# Intialization

You can use `@fetcch/id` in 2 ways

- Class based
- Function based

## Class based

```js
import Fetcch from "@fetcch/id"

const fetcch = new Fetcch({
  apiKey: "PROVIDER_API_KEY",
  production: false // if false, it will use testnet configuration
})

fetcch.getId({ id: "satyam@metamask" })
  .then(res => console.log(res))
  .catch(e => console.error(e))
```

## Function based

```js
import { getId } from "@fetcch/id"

getId({
  apiKey: "PROVIDER_API_KEY",
  data: {
    id: "satyam@metamask"
  }
})
  .then(res => console.log(res))
  .catch(e => console.error(e))
```

**Note** - Further documentation will be in functions, all function names are same in class based, only difference is in params, send the `data` key from functions to class based functions
