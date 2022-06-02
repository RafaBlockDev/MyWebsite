

const main = async () => {

  const coffeeContractFactory = await hre.ethers.getContractFactory("Coffee");
  const coffeeContract = await coffeeContractFactory.deploy("Hello, Buy me a Coffee!!");

  await coffeeContract.deployed();

  console.log("📝 Hey! The Coffee contract has been deployed to:", coffeeContract.address);
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