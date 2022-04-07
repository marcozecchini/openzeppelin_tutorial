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

## Oracle 

1. Install chainlink contracts: `npm install @chainlink/contracts --save`
2. https://docs.chain.link/docs/request-and-receive-data/ 
3. https://docs.chain.link/docs/make-a-http-get-request/ 
4. Run `scripts/deploy.js` to deploy `APIConsumer.sol`  contract
5. Before invoking the `requestVolumeData` function in the `scripts/index.js` script, fund your contract with LINK and your account with Ether from https://faucets.chain.link/ 
    
    a. The faucet works only with Metamask. Send the LINK token from Metamask to your contract.


