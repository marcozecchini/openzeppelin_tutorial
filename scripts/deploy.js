// scripts/deploy.js
async function main () {

  // Retrieve accounts from the local node
    const accounts = await ethers.getSigners();
    console.log(accounts[0].address)

    // We get the contract to deploy
    const Contract = await ethers.getContractFactory('APIConsumer');
    // console.log('Deploying the contract...');
    // const contract = await Contract.deploy();
    // await contract.deployed();
    let contract = await Contract.attach('0x9524cBAd1c97b6E60cD3C7024E6bDe54CdfFc89c')
    console.log('Contract deployed to:', contract.address);

    // Send a transaction to mint an NFT
    let tx = await contract.requestVolumeData();
    console.log(tx)
    let receipt = await tx.wait();  
    console.log(receipt);
  }

  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });