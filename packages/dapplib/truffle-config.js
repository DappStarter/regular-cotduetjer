require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth misery update good private fringe state'; 
let testAccounts = [
"0xb6fc174433c0b624ae14c89fed98d546f1bbdb70dcd4bd5480b3204747ce3038",
"0xefeaab5413be75dc197c4a267d65d8bdfa03055f7636d47b91fe4294c757807f",
"0xb55530bb81cce2b02229aa051d65ae387a44c3610258fcf3ed4c9749d4176969",
"0x13b1cea46f52975d5766673ecdb6f1740383c25cc3dfa35bb9a61b01a65d9a8d",
"0x9684cd9cd546e76e090301c5afd46e38276cfe36af71eacf069ffcd6f8b305bb",
"0x80e98dcbe59b0fffbd9e25f5a40576dc207e0d80e13889e28b9c6af257cd76cb",
"0xd3833ce238edae653118da383742756fee33a3b6739ef385cd81521e52cbd451",
"0xfcac41345785115847e30a9f2c887f4c177f68090b49a72038b7eb5a9d3e2ecf",
"0xe5fcf21bbc1cc91af48f163584b8687e2806341769138483cdf02cfe0ebb8fff",
"0xb98f2d40da5ff78e0aba0db6ac904c993534e1be1eb7ad744026e0ddd03bcd77"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
