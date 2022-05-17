//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Subscription {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    address public owner;
    uint256 public forTesting;

    IERC20 public secondaryTokenForPayment;
    /// @dev 1 -> ETH payment 2-> ERC20
    uint256 public paymentOption;

    struct Payment {
        address user;
        uint256 paymentMoment;
        uint256 paymentExpire;
    }

    Payment[] public payments;

    mapping(address => Payment) public userPayment;

    uint256 public ethFree;
    uint256 public erc20Fee;

    uint256 public totalPaymentsEth;

    mapping(address => uint256) public userTotalPaymentsEth;

    uint256 public totalPaymentsErc20;

    mapping(address => uint256) public userTotalPaymentsErc20;
}
