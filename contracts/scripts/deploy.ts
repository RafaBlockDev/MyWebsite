// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const coffeeContractFactory = await hre.ethers.getContractFactory("Coffee");
  const coffeeContract = await coffeeContractFactory.deploy();

  await coffeeContract.deployed();

  console.log("Coffee contract deployed to:", coffeeContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();