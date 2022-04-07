// scripts/deploy.js
async function main () {

  // Retrieve accounts from the local node
    const accounts = await ethers.getSigners();
    console.log(accounts[0].address)

    // We get the contract to deploy
    const Contract = await ethers.getContractFactory('APIConsumer');
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