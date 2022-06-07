const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying smart contract by: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const Coffee = await hre.ethers.getContractFactory("Coffee");
  const coffee = await Coffee.deploy();

  await coffee.deployed();
  
  console.log("☕️ Mini Buy me a Coffee contract deployed to:", coffee.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
  console.log(error);
  process.exit(1);
  }
}

runMain();