// migrations/2_deploy_fuk.js

const FuckYouKarens = artifacts.require('FuckYouKarens');

const { deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer, network, addresses) {
    const instance = await deployProxy(FuckYouKarens, { kind: 'uups' })
    console.log('Deployed', instance.address);    
};