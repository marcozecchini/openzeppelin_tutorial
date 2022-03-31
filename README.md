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
* Preliminarly we should understand how to override contract: https://docs.openzeppelin.com/contracts/4.x/extending-contracts
* [Token overview](https://docs.openzeppelin.com/contracts/4.x/tokens)
    * [ERC-20](https://docs.openzeppelin.com/contracts/4.x/erc20), relative [API Specification](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20) and [Ethereum Improvement Proposal (EIP) specification](https://eips.ethereum.org/EIPS/eip-20)
    * [ERC-721](https://docs.openzeppelin.com/contracts/4.x/erc721), relative [API Specification](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721) and [EIP specification](https://eips.ethereum.org/EIPS/eip-721)
    * [ERC-777](https://docs.openzeppelin.com/contracts/4.x/erc777)
* [Access Control](https://docs.openzeppelin.com/contracts/4.x/access-control) and relative [API Specification](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721)

