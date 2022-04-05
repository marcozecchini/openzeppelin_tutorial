# Boilerplate from OpenZeppelin Documentation

This is a project to properly setup, develop and deploy Smart Contracts according to OpenZeppelin documentation. We are going to follow the following tutorials:
1. https://docs.openzeppelin.com/learn/developing-smart-contracts
2. https://docs.openzeppelin.com/learn/deploying-and-interacting
3. https://docs.openzeppelin.com/learn/connecting-to-public-test-networks

This tutorial already starts having implemented this three guides. If you want to go through the setup of an Hardhat project follow the previous guides. 

To start using this tutorial:
* Install all the necessary packets with `npm install`.
* Create an account on [Infura](https://infura.io/)
* Create a file `secrets.json` with the following structure:
```
{
    "mnemonic": "...",
    "infuraApiKey": "..."
}
```
* 

## Upgradability
Follow this guide: https://docs.openzeppelin.com/learn/upgrading-smart-contracts.

General Information about Upgradability are available here: https://docs.openzeppelin.com/upgrades-plugins/1.x/

**Why Upgrade a Contract?**

By design, smart contracts are immutable. On the other hand, software quality heavily depends on the ability to upgrade and patch source code in order to produce iterative releases. Even though blockchain based software profits significantly from the technology’s immutability, still a certain degree of mutability is needed for bug fixing and potential product improvements. OpenZeppelin Upgrades solves this apparent contradiction by providing an easy to use, simple, robust, and opt-in upgrade mechanism for smart contracts that can be controlled by any type of governance, be it a multi-sig wallet, a simple address or a complex DAO.

**Upgrading via the Proxy Pattern**

The basic idea is using a proxy for upgrades. The first contract is a simple wrapper or "proxy" which users interact with directly and is in charge of forwarding transactions to and from the second contract, which contains the logic. The key concept to understand is that the logic contract can be replaced while the proxy, or the access point is never changed. Both contracts are still immutable in the sense that their code cannot be changed, but the logic contract can simply be swapped by another contract. The wrapper can thus point to a different logic implementation and in doing so, the software is "upgraded".

```
User ---- tx ---> Proxy ----------> Implementation_v0
                     |
                      ------------> Implementation_v1
                     |
                      ------------> Implementation_v2
```

**Upgrade token contract**
Follw this tutorial: https://docs.openzeppelin.com/contracts/4.x/upgradeable
