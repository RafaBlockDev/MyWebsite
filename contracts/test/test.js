const { ethers } = require("hardhat")
const { expect } = require("chai");

describe("Coffee", function () {

    it("It should deploythe smart contract", async () => {
        console.log("📝 Compiling smart contract...");
        const Coffee = await ethers.getContractFactory("Coffee");
        console.log("🚀 Deploying smart contract...")
        const coffee = await Coffee.deploy();
        await coffee.deployed();
        console.log("Smart contract deployed at: ", coffee.address);
    })
})