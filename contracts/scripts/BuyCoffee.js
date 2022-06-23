const hre = require("hardhat");

// Returns the ether balance og a given address
async function getBalance(address) {
    const balanceBigInt = await hre.waffle.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
}

// Logs the Ether balances for a lists of addresses
async function printBalances(addresses) {
    let idx = 0;
    for (const address of address) {
        console.log(`Address ${idx} balance: `, await getBalance(address));
        idx++;
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
    const [owner, tipper, tipper2, tipper3] = await hre.ethers.getSigners();
    // Get the contract to deploy
    console.log("📝 Compiling smart contract...")
    const BuyMeACoffee = await hre.ethers.getContractFactory("Coffee");
    console.log("🚀 Deploying smart contract...");
    const buyCoffee = await BuyMeACoffee.deploy();
    await buyCoffee.deployed();
    console.log("Smart contract deployed to: ", buyCoffee.address);
    // Check balances before the coffee purchases
    const addresses = [owner.address, tipper.address, buyCoffee.address];
    console.log("== start ==");
    await printBalances(addresses);
    // Buy the owner a few coffees

    // Check balances after coffee purchases

    // Withdraw funds

    // Check balance after withdraw

    // Read all the memos left for the owner

}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1)
})
)
