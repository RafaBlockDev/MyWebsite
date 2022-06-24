const hre = require("hardhat");

async function main () {
    console.log("📝 Compiling smart contract...")
    const BuyMeACoffee = await hre.ethers.getContractFactory("Coffee");
    console.log("🚀 Deploying smart contract...");
    const buyMeACoffee = await BuyMeACoffee.deploy();
    await buyMeACoffee.deployed();
    console.log("Smart contract deployed to: ", buyMeACoffee.address);
}


main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1)
})
