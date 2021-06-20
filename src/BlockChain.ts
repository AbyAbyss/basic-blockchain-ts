import { Block } from "./Block";

export class BlockChain {
    chain: Block[];
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() : Block {
        return new Block(0, new Date(), "Genesis block", "0");
    }

    getLatestBlock(): Block {
        return this.chain.slice(-1)[0];
    }

    addBlock(newBlock: Block) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

}
