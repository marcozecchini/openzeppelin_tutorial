// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const Contract = await ethers.getContractFactory('Box');
    console.log('Deploying the contract...');
    const contract = await Contract.deploy();
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });