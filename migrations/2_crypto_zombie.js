
const ownable = artifacts.require("ownable");
const math = artifacts.require("safemath");
const zombieFactory = artifacts.require("zombiefactory");
const zombiefeeding = artifacts.require("zombiefeeding");
const zombiehelper = artifacts.require("zombiehelper");
const zombieownership = artifacts.require("zombieownership");
const zombieattack = artifacts.require("zombieattack");

module.exports = async function(deployer) {
//   deployer.deploy(erc721);
  deployer.deploy(ownable);
  deployer.deploy(math);

  deployer.link(math , zombieFactory);
  deployer.link(ownable , zombieFactory);
  deployer.deploy(zombieFactory);

  deployer.link(zombieFactory , zombiefeeding);
  deployer.deploy(zombiefeeding)

   deployer.link(zombiefeeding , zombiehelper)
   deployer.deploy(zombiehelper);

   deployer.link(zombiehelper , zombieattack)
   deployer.deploy(zombieattack);

   deployer.link(zombieattack , zombieownership)
   deployer.link(math , zombieownership)
   deployer.deploy(zombieownership)



};
