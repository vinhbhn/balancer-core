require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    networks: {
        development: {
            host: 'localhost', // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: '*', // Any network (default: none)
            gas: 10000000,
        },
        coverage: {
            host: 'localhost',
            network_id: '*',
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01,
        },
        mumbai: {
            // eslint-disable-next-line max-len
            provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://rpc-mumbai.maticvigil.com'),
            network_id: 80001,
            gasPrice: 3000000000, // 3 gwei
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
        },
        polygon: {
            // eslint-disable-next-line max-len
            provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://rpc-mainnet.maticvigil.com'),
            network_id: 137,
            gasPrice: 3000000000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
        },
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: '0.5.12',
            settings: { // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 100,
                },
                evmVersion: 'byzantium',
            },
        },
    },
};
