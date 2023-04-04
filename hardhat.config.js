require("@nomicfoundation/hardhat-toolbox");
require("harthat-deploy");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = "PtPy7HaWDqlLM5L3lKMnzUFQiUYy8ZYc";
const PRIVATE_KEY =
  "87e1e711b8f51fe8baab695c097ccba684b6c1a156bf00a48126310ccd56bb3d";
module.exports = {
  solidity: "0.8.18",

  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      // gasPrice: 130000000000,
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    // customChains: [], // uncomment this line if you are getting a TypeError: customChains is not iterable
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: COINMARKETCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
  mocha: {
    timeout: 500000,
  },
};
