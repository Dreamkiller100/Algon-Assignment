const { Blockchain, Block } = require('./blockchain');

const myCoin = new Blockchain();
console.log("Mining block...");
myCoin.addBlock(new Block(1, Date.now().toString(), { amount: 100 }));
console.log("Is blockchain valid?", myCoin.isChainValid());
