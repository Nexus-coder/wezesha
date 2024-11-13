/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config()
module.exports = {
  networks:{
    liskSepolia:{
      url:"https://rpc.sepolia-api.lisk.com",
      accounts:[`0x${process.env.PRIVATE_KEY}`]
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
