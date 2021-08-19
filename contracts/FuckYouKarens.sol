// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

/** OZ Libraries. There are MANY pre-built functions. 
 *  NOTE: Ensure use of upgradable! 
 *      https://docs.openzeppelin.com/openzeppelin/upgrades
 *  @dev: I'm sure a lot of additional features and functions will eventually be requested.
 *      When done, make use of abstracts and module pattern to avoid messing with memory alloc
 *      Decent example fork of SM is here: https://github.com/solidity-guru/safetoken
 */  
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20SnapshotUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

//TODO: Write unit tests for basic initialization before V2 -> Do the same for the proxy
//Once deployed and initialized, split tokens to presale wallet(s), distribute and transfer control of contract to Gnosis
contract FuckYouKarens is Initializable, ERC20Upgradeable, ERC20BurnableUpgradeable, ERC20SnapshotUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    
    address internal constant burnAddress = address(0);

    function initialize() initializer public {

        __ERC20_init("FuckYouKarens","FuK");
        __ERC20Burnable_init();
        __ERC20Snapshot_init();
        __Ownable_init();
        __UUPSUpgradeable_init();

        _mint(msg.sender, 1000000000000 * 10 ** decimals());
    }

    function snapshot() public onlyOwner {
        _snapshot();
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20Upgradeable, ERC20SnapshotUpgradeable)
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}