// scripts/deploy-my-collectible.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const accounts = await ethers.getSigners();
  console.log(accounts[0].address);
  
  const MyCollectible = await ethers.getContractFactory("GameItem");

  const mc = await upgrades.deployProxy(MyCollectible);

  await mc.deployed();
  console.log("GameItem deployed to:", mc.address);
}

main();