Contract V1
===========
As noted in the manifesto (available on FuckYouKarens.com) the first contract version is a basic implementation of the upgradeable contract using OpenZeppelin proxies and the base BSC20 implementation sample available here:

https://docs.binance.org/smart-chain/developer/upgrade/proxy.html#create-upgradeable-contract

Additional information on the truffle upgrades with the 'box' contract can be found here:
https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-truffle/3579

V1 of the contract doesn't have any particularly noteworthy features, but for those that haven't read the manifesto a few key items to be aware of:

PROXY
----- 
- The contract is intended to be upgradeable, so the constructor is called through the initializer
- OpenZeppelin proxy contract ensures the initializer can only be called once by the deployer.
    - Details: https://docs.openzeppelin.com/learn/upgrading-smart-contracts#initialization 
    
OWNERSHIP
---------
- Contracts can't be upgraded if ownership is "renounced" and until such time as the community (via DAO vote) decides that it should be renounced, there has to be some form of ownership. Until on-chain voting is enabled, this will be handled through off-chain actions via FuckYouKarens.com and the contract will be managed by n00b via the deployer wallet. This will be migrated to a Gnosis safe and transferred to the FuK admins within 30 days. Additional information on that process can be viewed here:
    - https://help.gnosis-safe.io/en/articles/3876461-create-a-safe

Deployments
-------

NOTE: Since this is an upgradeable, the contract is deployed as a TX separately. This will show all xfers as internal transactions and hold the logic for the contract wheras the token is separately viewed on the other address
    0xf92d2Fbbe785a48051c4571bD89373e7eB63aD3b

MainNet
-------
Network: bsc (id: 56)
   - FuckYouKarens:
     - Token
       - 0xA898bbb508C04BE26af3d319b7775927AFCB02AF
      - Implementation:
        - 0xEF4D888caE4822F614B0712040efd4A436ff59cC
  - Migrations:
    - 0xf92d2Fbbe785a48051c4571bD89373e7eB63aD3b


Network: test (id: 97)
  - FuckYouKarens:  
    - 0xB1774F3b1C7d36AcC839774812FF2610497bEB9e

  - Migrations:
    - 0xA898bbb508C04BE26af3d319b7775927AFCB02AF


Upgrades
--------
Contract posted to the FuckYouKarens GitHub and future versions / upgrades / features (e.g. defalationary characteristics, fee-on-transfer, gamification, etc.) will be initially based on n00b's ideals and community input for implementation.  
 - Additional information on contracts to simplify and override functions during upgrades can be found here: https://docs.openzeppelin.com/contracts/4.x/extending-contracts

**IMPORTANT** as new features are enabled, there are some things that are still immutable & specifically anything associated with memory ordering. As such, it's important to the safety, security and maintenance of the token that proper reviews and testing occur and have community input via the DAO before deployment.

Note: after initial deploy & for any upgrades, the kind 'uups' can be ignored in 2_deploy_fuk.js or other migrations since it will be inferred from the proxy


Tokenomics
----------
Nothing interesting here just yet, there were 1T minted and 50% were immediately burned in order to support future RFI features.  Presale is locked in PadSwap LP and dev donated to seed farm until volume has a chance to pick up.

OZ Libraries
------------
There are MANY pre-built functions.

**IMPORTANT**: Ensure use of upgradable! 
 - https://docs.openzeppelin.com/openzeppelin/upgrades

I'm sure a lot of additional features and functions will eventually be requested.
When done, make use of abstracts and module pattern to avoid messing with memory alloc. A decent example fork of SM is here: https://github.com/solidity-guru/safetoken
  

From this sample (HH, but idea is the same): https://forum.openzeppelin.com/t/uups-proxies-tutorial-solidity-javascript/7786


TODO: 
  
    - [x] Validate contracts
    - [ ] Write unit tests for basic initialization before V2 -> Do the same for the proxy
    - [ ] Set up Gnosis and change all owners and admins
    - [ ] Clean up comment tags and @ symbols to play nice with solidity