import { Block } from "./Block";
import { BlockChain } from "./BlockChain";

const coin = new BlockChain();

coin.addBlock(new Block(1, new Date(), {amount: 4}));
coin.addBlock(new Block(2, new Date(new Date().setDate(2)), {amount: 10}));

console.log(JSON.stringify(coin, null, 4));
