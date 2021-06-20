import {SHA256} from 'crypto-js';

export class Block {
    hash: string;
    constructor(public index: number, public timestamp: Date, public data: any, public previousHash: string = '') {
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}
