// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Coffee {
    /// @dev Event to emit when a memo is created
    event NewMemo(
        address indexed from,
        uint256 timestamp,
        string name,
        string message
    );
    /// @dev Memo struct
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }
    /// @dev List of all memos received from users
    Memo[] memos;
    /// @dev Address of contract deployer
    address payable owner;

    /// @dev Deploy smart contract
    constructor() {
        owner = payable(msg.sender);
    }

    /**
     * @dev Buy me a coffee for contract owner
     * @param _name name of the coffee buyer
     * @param _message a nice message from the coffee
     */
    function buyCoffee(string memory _name, string memory _message)
        public
        payable
    {
        require(msg.value > 0, "Insufficient funds");
        /// @dev Add the memo to storage
        memos.push(Memo(msg.sender, block.timestamp, _name, _message));
        /// @dev Emit a log event when a new memo is created
        emit NewMemo(msg.sender, block.timestamp, _name, _message);
    }
}
