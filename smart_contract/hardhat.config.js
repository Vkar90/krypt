require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Nr75rNsNCK06oBikRmTdB0m9sXA_mMZp',
      accounts: ['33f3d8e20e6f7ba5654cca4968d532b23188fee3663bcb3e1c929a309df8e083']
    }
  }
}