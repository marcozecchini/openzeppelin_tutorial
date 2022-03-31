// scripts/index.js
async function main () {
    
    // Retrieve accounts from the local node
    const accounts = await ethers.getSigners();
    console.log(accounts[0].address)

    
    // Set up an ethers contract, representing our deployed TokenAccessControl instance
    const Contract = await ethers.getContractFactory('TokenAccessControl');
    const contract = await Contract.deploy();
    await contract.deployed();

    // Call the balanceOf() function of the deployed TokenAccessControl contract
    let value = await contract.balanceOf(accounts[0].address);
    console.log(accounts[0].address, 'owns', value.toString(), 'ACCs');

    // Send a transaction to mint() the tokens - SHOULD GIVE ERROR
    try{
        let tx = await contract.mint(accounts[1].address, 100)
        let receipt = await tx.wait();
        let transfers_event = receipt.events.filter((x) => {return x.event == "Transfer"});
    } catch (err) {console.log("Error in Minting the new ACCs", err)}

    // Send a transaction to grantRole Minter
    let tx = await contract.grantRole("0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6", accounts[0].address)
    let receipt = await tx.wait()
    let transfers_event = receipt.events.filter((x) => {return x.event == "RoleGranted"});
    let to = transfers_event[0].args.account.toString();
    let role = transfers_event[0].args.role.toString();
    console.log(`${to} has been granted as minter: ${role}` );
    
    // Send a transaction to transfer() the NFT 
    tx = await contract.mint(accounts[1].address, 100);
    receipt = await tx.wait();
    transfers_event = receipt.events.filter((x) => {return x.event == "Transfer"});
    console.log(transfers_event[0].args.value.toString(), "were minted for", transfers_event[0].args.to)

    // Call the balanceOf() function of the deployed TokenAccessControl contract
    value = await contract.balanceOf(accounts[1].address);
    console.log(accounts[0].address, 'owns', value.toString(), 'ACCs');


  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });