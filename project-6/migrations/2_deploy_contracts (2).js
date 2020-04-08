// migrating the appropriate contracts
var FarmerRole = artifacts.require("./FarmerRole.sol");
var DistributorRole = artifacts.require("./DistributorRole.sol");
var RetailerRole = artifacts.require("./RetailerRole.sol");
var ConsumerRole = artifacts.require("./ConsumerRole.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");
var Ownable = artifacts.require('./Ownable.sol');

module.exports = function (deployer, network, accounts) {  
    deployer.deploy(SupplyChain);
   /* deployer.deploy(FarmerRole, { from: accounts[1] });
    deployer.deploy(DistributorRole, { from: accounts[2] });
    deployer.deploy(RetailerRole, { from: accounts[3] } );
    deployer.deploy(ConsumerRole, { from: accounts[4] });
    deployer.deploy(Ownable);*/
};
