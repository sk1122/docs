---
sidebar_position: 3
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