import { expect } from "chai";
import { ethers } from "hardhat";

describe("Coffee", function () {
  it("Should return the new coffee contract", async function () {
    const Coffee = await ethers.getContractFactory("Coffee");
    const coffee = await Coffee.deploy("Hello Rafa");
    await coffee.deployed();
  });
});
