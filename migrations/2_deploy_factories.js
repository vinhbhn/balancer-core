const TMath = artifacts.require('TMath');
const BPool = artifacts.require('BPool');
const BFactory = artifacts.require('BFactory');

module.exports = async function (deployer, network, accounts) {
    if (network === 'development' || network === 'coverage') {
        deployer.deploy(TMath);
    }
    deployer.deploy(BToken);
    deployer.deploy(BPool);
    deployer.deploy(BFactory);
};
