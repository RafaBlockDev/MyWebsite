const { ethers } = require("hardhat")
const { expect } = require("chai");

describe("Coffee", function () {

    it("It should send a transaction between 2 persons", async = () => {
        let user;
        const Coffee = await ethers.getContractFactory("Coffee");
        const coffee = await Coffee.deployed();

        const [deployer, user] = await ethers.getSigners();

        await coffee.deployed();
        let deployerBalance = await coffee.balanceOf(deployer.address);

        expect(deployerBalance).to.equal(100);
        
    })
})