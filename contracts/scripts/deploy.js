const main = async () => {
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