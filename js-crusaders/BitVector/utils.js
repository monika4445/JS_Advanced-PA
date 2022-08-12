import { Buffer } from 'buffer';
const vectorSize = 8;
var growthFactor = 2;

let ensureSize = function (newChunkSize, bits, length) {
    let vector = bits;
    vector = grow(vector, newChunkSize, length);
    return vector;
};

let deserialize = (base64String) => {
    return Buffer.from(base64String, 'base64');
}

let calculate = (bit) => {
    var r = bit % vectorSize;
    var pos = (bit - r) / vectorSize;
    return { r: r, pos: pos };
}

function grow(vector, newChunkSize, length) {
    let size = length;
    while (size < newChunkSize) {
        size *= growthFactor;
    }
    // when vector is already long enough- don't bother to resize
    if (size <= vector.length)
        return vector;
    let n = new Uint8Array(size);
    for (let i = 0; i < vector.length; i++) {
        n[i] = vector[i];
    }
    return n;
}

export {
    ensureSize,
    deserialize,
    calculate,
}
