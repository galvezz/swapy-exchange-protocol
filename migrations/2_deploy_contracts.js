// --- Contracts
let SwapyExchange = artifacts.require("./SwapyExchange.sol");
let AssetLibrary = artifacts.require("./investment/AssetLibrary.sol");
let Token = artifacts.require("./token/Token.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(AssetLibrary).then(() => {
    return deployer.deploy(SwapyExchange, AssetLibrary.address, '0xddcc1ebf2f4d47b485a201b64f41c1ddd18ab247');
  })
};
