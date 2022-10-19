const AElf = require('aelf-sdk');
// const aelf = new AElf(new providers.HttpProvider('https://tdvw-test-node.aelf.io'));
const newWallet = AElf.wallet.createNewWallet();
console.log(newWallet);
console.log('\n');