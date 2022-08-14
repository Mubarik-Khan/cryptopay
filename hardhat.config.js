// https://eth-goerli.g.alchemy.com/v2/AqSJtrTo8Cx9rpp-jK2Zf1jtB4q60Aif

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/AqSJtrTo8Cx9rpp-jK2Zf1jtB4q60Aif',
      accounts: ['18fcdb6c2d1a5c0364cc8246ed270c45f7b9ed6d66176c1e29feccf33228f1ef']
    }
  }
}
