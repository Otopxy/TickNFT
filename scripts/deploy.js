async function main() {
    const TicketNFT = await ethers.getContractFactory("TicketNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const ticketNFT = await TicketNFT.deploy()
    await ticketNFT.deployed()
    console.log("Contract deployed to address:", ticketNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  