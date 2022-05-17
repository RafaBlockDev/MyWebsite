//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Subscription {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    /// @dev 1 -> ETH payment 2-> ERC20
    uint256 public paymentOption;

    uint256 public ethFee;
    uint256 public erc20Fee;
    uint256 public totalPaymentsEth;
    uint256 public totalPaymentsErc20;

    address public owner;
    uint256 public forTesting;

    IERC20 public secondaryTokenForPayment;

    struct Payment {
        address user;
        uint256 paymentMoment;
        uint256 paymentExpire;
    }

    Payment[] public payments;

    mapping(address => Payment) public userPayment;
    mapping(address => uint256) public userTotalPaymentsEth;
    mapping(address => uint256) public userTotalPaymentsErc20;

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner!!");
        _;
    }

    /// @dev Check if user paid
    /// @dev Time now < time when last payment expire
    modifier userPaid() {
        require(
            block.timestamp < userPayment[msg.sender].paymentExpire,
            "Your payment has expired"
        );
        _;
    }

    constructor() {
        owner = msg.sender; // Owner = deployer
        forTesting = 1;
        paymentOption = 1; // Payments in Eth by default
        totalPaymentsEth = 0;
        totalPaymentsErc20 = 0;
        ethFee = 1000000000000000000; // 1 Eth by default
    }

    function paySubscription(uint256 _period) public payable {
        if (paymentOption == 1) {
            require(msg.value == ethFee.mul(_period));

            totalPaymentsEth = totalPaymentsEth.add(msg.value);
        }
    }
}
