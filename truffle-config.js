/**
 * More information about configuration can be found at:
 * trufflesuite.com/docs/advanced/configuration
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secrets/.dev").toString().trim();
const apiKey = fs.readFileSync(".secrets/bscScan.apiKey").toString().trim();

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: apiKey
  },

  /**
   * Networks
   *   If you don't specify one truffle will spin up a development blockchain for you on port 9545 
   *   when you run develop or test for example $ truffle test --network <network-name> 
   */

  networks: {
    dev: {
      provider: () => new HDWalletProvider(mnemonic, 'http://127.0.0.1:7545'),
      network_id: "5777",
     },
     test: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s3.binance.org:8545'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      networkCheckTimeout: 1000000,
      skipDryRun: true,
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, 'https://bsc-dataseed1.binance.org'),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      networkCheckTimeout: 1000000,
      skipDryRun: true,
    },
  },

  // Compiler configurations
  compilers: {
    solc: {
      version: "0.8.2",
      settings: {
        optimizer: {
          enabled: false,
           runs: 200
        }
      }
    }
  },
};
