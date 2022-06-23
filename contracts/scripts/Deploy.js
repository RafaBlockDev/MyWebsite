const hre = require("hardhat");

async function main () {
    console.log("📝 Compiling smart contract...")
    const BuyMeACoffee = await hre.ethers.getContractFactory("Coffee");
    console.log("🚀 Deploying smart contract...");
    const buyCoffee = await BuyMeACoffee.deploy();
    await buyCoffee.deployed();
    console.log("Smart contract deployed to: ", buyCoffee.address);
}


main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1)
})
