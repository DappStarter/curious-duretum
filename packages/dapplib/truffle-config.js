require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note mushroom purity grace photo forget gift'; 
let testAccounts = [
"0x15231518bd44997caee52811fa23c27fd7cf9e63f8cc7bb49092150a7ccdc903",
"0xeaaa96ccc098ea4e0a534cf262bb66834e7fc1915a19b151a8270b69b06effaf",
"0x7e1d6423e69bbab82ecf5569334360d14e6ae2ebe135f9c798a8604aed7b5995",
"0x8a55a733ae1ec00cfad0919249d5117a89b1a3b637b29607e2e5874460c638ad",
"0x9bba868de58ac312bd21bdc03bf55903a2f2fac1c932bf36b34f384f07338fc5",
"0x61af3866b658e84db1b67fd2c3e40afe7f9ed064b2d6f20872d7d2b435b5056b",
"0x848d7447339e4dc151e52ff8f4eee91ec293b3bcd4ddff8e49252ed12f7ae584",
"0xd314abcff9f8f5ca93473f23768c865bde7c52e6bbcd30f039b9343b53b5262f",
"0x620eff5849d08eaa7bd79c12bb37cd9343ce7b6140d7d298c1c59bb171001316",
"0x76c78019b284181bbf86e86683ae4c7c382cd199571845694468e4416119f8d0"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
