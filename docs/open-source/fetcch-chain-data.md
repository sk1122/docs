---
sidebar_position: 1
---

# Fetcch Chain Data

At Fetcch, we are building cross chain products, so we can't rely on EVM Chain Ids or Chain IDs which are specific to an ecosystem, so we have ourselves assigned IDs to each chain that we are using to make a seamless developer experice across Fetcch's products

### Chain IDs are as follows

- Ethereum Mainnet: `1`
- Polygon Mainnet: `2`
- BSC Mainnet: `3`
- Avalanche Mainnet: `4`
- Solana Mainnet-Beta: `5`
- Optimism Mainnet: `6`
- Arbtrium Mainnet: `7`



- Ethereum Goerli Testnet: `101`
- Polygon Mumbai Testnet: `102`
- BSC Testnet: `103`
- Avalanche Testnet: `104`
- Solana Devnet: `105`
- Optimism Testnet: `106`
- Arbtrium Testnet: `107`


## Installation

You can install `fetcch-chain-data` as JS/TS package or download JSONs from [Github](https://github.com)

```
npm install fetcch-chain-data
OR
pnpm install fetcch-chain-data
OR
yarn add fetcch-chain-data
```

## Usage

We have added all token related and chain related functions in this package

- **getChain({ internalChainId?: string | number, chainId?: string | number, chainName?: string }): Chain**

```js
getChain({ internalChainId: 3 })
```



- **getToken({ tokenName?: string, tokenAddress?: string, internalChainId?: string | number, chainId?: string | number, chainName?: string }): Token**

```js
getToken({ tokenName: 'USDC', internalChainId: 3 })
```

**Note** - Need to send tokenName or tokenAddress AND internalChainId or chainId or chainName