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

    it("It should transfer the user to the owner", async () => {
        let owner, user;
        console.log("📝 Compiling smart contracts...");
        const Coffee = await ethers.getContractFactory("Coffee");
        console.log("🚀 Deploying smart contracts... ");
        const coffee = await Coffee.deploy();
        console.log("Smart contract deployed at: ", coffee.address);

        [owner, user] = await ethers.getSigners();

        await coffee.deployed();
        await coffee.send(owner.address, 5);
        expect(await coffee.getBalance(owner.address)).to.equal(5);
        expect(await coffee.getBalance(user.address)).to.equal(8);
    })
})