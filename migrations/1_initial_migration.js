const Migrations = artifacts.require("Migrations");

module.exports = function (deployer, network, addresses) {
  if(network == "bsc"){
    // Do nothing
  } else {
    deployer.deploy(Migrations);
  }
};
