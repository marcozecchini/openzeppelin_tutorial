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
# Tutorial on Contracts to manage tokens
Starting from branch `token_todo` we are going to implement the following steps:

* https://docs.openzeppelin.com/contracts/4.x/
* [Token overview](https://docs.openzeppelin.com/contracts/4.x/tokens)
    * [ERC-20](https://docs.openzeppelin.com/contracts/4.x/erc20)
    * [ERC-721](https://docs.openzeppelin.com/contracts/4.x/erc721)
    * [ERC-777](https://docs.openzeppelin.com/contracts/4.x/erc777)

