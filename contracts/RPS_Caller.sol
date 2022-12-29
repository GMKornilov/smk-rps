// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract RockPaperScissorsCaller {
	address private _contractAddress;

	function setCalledContractAddress(address payable contractAddress) external {
		_contractAddress = contractAddress;
	}

	function someMutatingCall() external payable returns (bool) {
		require(
			_contractAddress != address(0x0), 
			"Must call setCalledContractAddress(address payable contractAddress) before calling this function!"
		);
		
		// msg.sender and msg.value are saved by delegatecall
		(bool success, bytes memory data) = _contractAddress.delegatecall(
			abi.encodeWithSignature("register()")
		);
	}
}