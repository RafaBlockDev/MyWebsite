/*

const hre = require("hardhat");

// Returns the ether balance og a given address
async function getBalance(address) {
    const balanceBigInt = await hre.waffle.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
  }

// Logs the Ether balances for a lists of addresses

async function printBalances(addresses) {
  let idx = 0;
  for (const address of addresses) {
  console.log(`Address ${idx} balance: `, await getBalance(address));
  idx ++;
  }
}
// Logs of memos stored on-chain from cofee purchases
async function printMemos(memos) {
    for (const memo of memos) {
      const timestamp = memo.timestamp;
      const tipper = memo.name;
      const tipperAddress = memo.from;
      const message = memo.message;
      console.log(`At ${timestamp}, ${tipper} (${tipperAddress}) said: "${message}"`);
    }
  }

// Get example accounts
async function main() {
    // Get examples accounts
    const [owner, tipper, tipper2, tipper3] = await hre.ethers.getSigners();    // Get the contract to deploy
    console.log("📝 Compiling smart contract...")
    const BuyMeACoffee = await hre.ethers.getContractFactory("Coffee");
    console.log("🚀 Deploying smart contract...");
    const buyMeACoffee = await BuyMeACoffee.deploy();
    await buyMeACoffee.deployed();
    console.log("Smart contract deployed to: ", buyMeACoffee.address);
    // Check balances before the coffee purchases
    const addresses = [owner.address, tipper.address, buyMeACoffee.address];
    console.log("________________________________ 🌎 ________________________________");
    await printBalances(addresses);
    // Buy the owner a few coffees
    const tip = {value: hre.ethers.utils.parseEther("1")};
    await buyMeACoffee.connect(tipper).buyCoffee("Rafa", "You are the best!!! 🥳", tip)
    await buyMeACoffee.connect(tipper2).buyCoffee("Joshua", "Amazing teacher!!! 🍎", tip)
    await buyMeACoffee.connect(tipper3).buyCoffee("Val", "I love my PK NFT!!! 🇨🇴", tip)
    // Check balances after coffee purchases
    console.log("________________________________ 🪐 ________________________________");
    await printBalances(addresses);
    // Withdraw funds
    console.log("________________________________ 🚀 ________________________________");
    await buyMeACoffee.connect(owner).withdrawTips();
    // Check balance after withdraw
    console.log("________________________________ 🦠 ________________________________");
    await printBalances(addresses);
    // Read all the memos left for the owner
    console.log("________________________________ 🪆 ________________________________");
    const memos = await buyMeACoffee.getMemos();
    printMemos(memos);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1)
})

*/ 

// scripts/buy-coffee.js

const hre = require("hardhat");

// Returns the Ether balance of a given address.
async function getBalance(address) {
  const balanceBigInt = await hre.waffle.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

// Logs the Ether balances for a list of addresses.
async function printBalances(addresses) {
  let idx = 0;
  for (const address of addresses) {
    console.log(`Address ${idx} balance: `, await getBalance(address));
    idx ++;
  }
}

// Logs the memos stored on-chain from coffee purchases.
async function printMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const tipper = memo.name;
    const tipperAddress = memo.from;
    const message = memo.message;
    console.log(`At ${timestamp}, ${tipper} (${tipperAddress}) said: "${message}"`);
  }
}

async function main() {
  // Get the example accounts we'll be working with.
  const [owner, tipper, tipper2, tipper3] = await hre.ethers.getSigners();

  // We get the contract to deploy.
  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
  const buyMeACoffee = await BuyMeACoffee.deploy();

  // Deploy the contract.
  await buyMeACoffee.deployed();
  console.log("BuyMeACoffee deployed to:", buyMeACoffee.address);

  // Check balances before the coffee purchase.
  const addresses = [owner.address, tipper.address, buyMeACoffee.address];
  console.log("== start ==");
  await printBalances(addresses);

  // Buy the owner a few coffees.
  const tip = {value: hre.ethers.utils.parseEther("1")};
  await buyMeACoffee.connect(tipper).buyCoffee("Carolina", "You're the best!", tip);
  await buyMeACoffee.connect(tipper2).buyCoffee("Vitto", "Amazing teacher", tip);
  await buyMeACoffee.connect(tipper3).buyCoffee("Kay", "I love my Proof of Knowledge", tip);

  // Check balances after the coffee purchase.
  console.log("== bought coffee ==");
  await printBalances(addresses);

  // Withdraw.
  await buyMeACoffee.connect(owner).withdrawTips();

  // Check balances after withdrawal.
  console.log("== withdrawTips ==");
  await printBalances(addresses);

  // Check out the memos.
  console.log("== memos ==");
  const memos = await buyMeACoffee.getMemos();
  printMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
