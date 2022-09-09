---
sidebar_position: 1
---

# What is Fetcch?

Let's discover **Fetcch in less than 5 minutes**.

## Mission

**Fetcch's main goal is to solve blockchain's ux problems**

*We not building sleek UIs and claiming to have solved UX*

**How are we solving Blockchain UX?**

Main problem in onboarding people to web3 is ***Choice Fatigue***

Choice Fatigue is a real problem in web3 and it is hurting the onboarding of normal web2 users, there are just so many things to choose from

We have 10+ blockchain, 100+ Wallets to choose from, every wallet and dApp support different blockchain

![Wallet options while connecting to a dApp](https://i.ibb.co/fXwH8mF/blocknative.png)

*Wallet options while connecting to a dApp (there are more...)*

Then there are wallet addresses 
- They are big
- They are random

Many naive people have send tokens to wrong addresses or sent the wrong address, because addresses and a big blob of random text, its very hard to memorize and you always need to copy from somewhere, which is a actual bummer!!

Any other reason like low TPS, frequent hacks is just pure bullshit

- There exists blockchains like Solana with High TPS and L2 solutions like Polygon with High TPS and closer to Ethereum
- Hacks are a reason of poor security practices and buggy code, which can be fixed in future cycles

So to summarize these are the 2 main problems stopping the mass adoption of web3

- Choice Fatigue
- Addresses


At Fetcch, we are trying to solve this 2 problems

We are building suite of protocols which will solve both problems while increasing the Blockchain UX

## Products

### We are building a Bridge

As unassuming it sounds, its quite interesting, its not just another bridge but we are enabling swapping any token to any token directly at the bridge level with better managed liquidity pools and increased security.

This will be the first step taken to solve Choice Fatigue, it will interconnect many blockchains and just make it buttery smooth to move from Chain A to Chain B.

We will manage liquidity pools of stables on every chain, it will be self rebalancing and then using DEX aggregators we can swap from any token to any token with lesser overall fees and time taken.

This will solve

- Choice Fatigue
  - User can access smart contracts on Chain B from Chain A
    - Still user needs to manually swap and execute the call

### We are building an ID Protocol

Wallet ID Protocol will directly be integrated into various wallets and they can start issuing IDs to their users

So, if Steak Wallet integrates WagPay ID Protocol, they can then issue ids like `name@steak` or `name.steak`, and then this ID can transact with other IDs irrespective of wallet or chain.

This will not just solve P2P payments but Choice Fatigue in connecting wallets also.

So right now, there are 100s of options to choose from whenever we are connecting to dApp, but if the dApp has integrated WagPay ID SDK, then it will just have a single button called `Connect Wallet`, where the user will enter their ID and a connection request will be sent to their wallet.

dApps can also request a single time transaction using above mechanism, so dApps would not have connect to wallets but they can just send a **Payment Request** to a respective ID

`- Still user needs to manually swap and execute the call`

This is solved by ID Protocol, where dApp would connect to an ID, send a transaction to wallet, wallet can give user the option to choose with which chains and tokens they want to pay, ID Protocol will take those tokens, swap them and execute transaction (enabled because of our **Fetcch Bridge Design**)