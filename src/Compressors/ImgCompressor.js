const Compressor = require('./Compressor');
const compressType = require('../common/constant').compressType;

module.exports = class ImgCompressor extends Compressor {
    constructor(opt) {
        super(opt);
        this.type = compressType.img;
    }
}
