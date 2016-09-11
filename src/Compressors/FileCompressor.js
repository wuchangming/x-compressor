const Compressor = require('./Compressor');
const compressType = require('../common/constant').compressType;

module.exports = class FileCompressor extends Compressor {
    constructor(opt) {
        super(opt);
        this.type = compressType.file;
    }
}
