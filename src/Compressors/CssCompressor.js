const Compressor = require('./Compressor');
const compressType = require('../common/constant').compressType;

module.exports = class CssCompressor extends Compressor {
    constructor(opt) {
        super(opt);
        this.type = compressType.css;
    }
    compress ({sources}, successCB, errorCB) {
        
    }
}
