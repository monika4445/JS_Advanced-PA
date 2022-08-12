'use strict';

import { calculate, ensureSize, deserialize } from './utils.js';

const vectorType = Uint8Array;
const vectorSize = 8;

class BitVector {
    
 constructor(sizeOrString) {
        if (typeof sizeOrString === 'string') {
            this.bits = deserialize(sizeOrString);
        }
        else {
            sizeOrString = sizeOrString || vectorSize;
            this.bits = new vectorType(Math.ceil(sizeOrString / vectorSize));
            this.length = Math.ceil(sizeOrString / vectorSize);
        }

    }

    set(bit) {
        ++this.length;
        var _a = calculate(bit), r = _a.r, pos = _a.pos;
        this.bits = ensureSize(pos, this.bits, this.length);
        this.bits[pos] |= (1 << r);
    };

    get(bit) {
        var _a = calculate(bit), r = _a.r, pos = _a.pos;
        if (this.length >= pos)  return 0;
        return Boolean(!!(this.bits[pos] & (1 << r)));
    };

    clear(bit) {
        var _a = calculate(bit), r = _a.r, pos = _a.pos;
        this.bits = ensureSize(pos, this.bits);
        this.bits[pos] &= ~(1 << r);
    };

}
export { BitVector };
