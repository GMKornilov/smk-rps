const { expect } = require("chai");
const { ethers } = require("hardhat");

const errorMessage = "Must call setCalledContractAddress(address payable contractAddress) before calling this function!";

async function createContracts() {
	const rpsFactory = await ethers.getContractFactory("RockPaperScissors");
	const rpsCallerFactory = await ethers.getContractFactory("RockPaperScissorsCaller");

    const rpsContract = await rpsFactory.deploy();
	const rpsCallerContract = await rpsCallerFactory.deploy();

	return [rpsContract, rpsCallerContract];
}

describe("Rock paper scissors caller contract", function () {
  it("Should set address before calling", async function () {
	const [_, rpsCallerContract] = await createContracts();

	await expect(rpsCallerContract.someMutatingCall()).to.be.revertedWith(errorMessage);
  });

  it("Should call successfully", async function() {
	const [rpsContract, rpsCallerContract] = await createContracts();

	await rpsCallerContract.setCalledContractAddress(rpsContract.address);
	await rpsCallerContract.someMutatingCall();
  });
});