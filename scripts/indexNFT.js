// scripts/index.js
async function main () {
    
    // Retrieve accounts from the local node
    const accounts = await ethers.getSigners();
    console.log(accounts[0].address)

    
    // Set up an ethers contract, representing our deployed GameItem instance
    const address = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
    const NFTContract = await ethers.getContractFactory('GameItem');
    const nft_contract = await NFTContract.attach(address);

    // Call the balanceOf() function of the deployed GameItem contract
    let value = await nft_contract.balanceOf(accounts[0].address);
    console.log(accounts[0].address, 'owns', value.toString(), 'NFTs');

    // Send a transaction to mint an NFT
    let tx = await nft_contract.awardItem(accounts[0].address, "KITTIES")
    let receipt = await tx.wait();
    let transfers_event = receipt.events.filter((x) => {return x.event == "Transfer"});
    let tokenId = transfers_event[0].args.tokenId.toString();
    console.log("Token ID of the new NFT:", tokenId);

    // Call the balanceOf() function of the deployed GameItem contract
    value = await nft_contract.balanceOf(accounts[0].address);
    console.log(accounts[0].address, 'owns', value.toString(), 'NFTs');

    // Send a transaction to transfer() the NFT 
    tx = await nft_contract.transferFrom(accounts[0].address, accounts[1].address, parseInt(tokenId))
    receipt = await tx.wait();
    transfers_event = receipt.events.filter((x) => {return x.event == "Transfer"});
    console.log("The new owner of Token ID", tokenId, "is", transfers_event[0].args.to)

    // Call the balanceOf() function of the deployed GameItem contract
    value = await nft_contract.balanceOf(accounts[0].address);
    console.log(accounts[0].address, 'owns', value.toString(), 'NFTs');

    // Send a transaction to transfer() the NFT - SHOULD GIVE ERROR
    try{
        tx = await nft_contract.transferFrom(accounts[0].address, accounts[1].address, parseInt(tokenId))
        receipt = await tx.wait();
        transfers_event = receipt.events.filter((x) => {return x.event == "Transfer"});
    } catch (err) {console.log("Error", err)}

    // Send a transaction to approve() an account to transfer the NFT
    tx = await nft_contract.connect(accounts[1]).approve(accounts[0].address, parseInt(tokenId))
    receipt = await tx.wait();
    transfers_event = receipt.events.filter((x) => {return x.event == "Approval"});
    console.log(transfers_event[0].args.approved , "is enabled to transfer", tokenId)

    // Send a transaction to transfer() the NFT
    tx = await nft_contract.connect(accounts[0]).transferFrom(accounts[1].address, accounts[2].address, parseInt(tokenId))
    receipt = await tx.wait();
    transfers_event = receipt.events.filter((x) => {return x.event == "Transfer"});
    console.log("The new owner of Token ID", tokenId, "is", transfers_event[0].args.to)

    // Call the ownerOf() function of the deployed GameItem contract
    value = await nft_contract.ownerOf(parseInt(tokenId));
    console.log(value, 'owns the NFT', tokenId);

  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });