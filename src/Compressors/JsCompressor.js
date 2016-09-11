const Compressor = require('./Compressor');
const compressType = require('../common/constant').compressType;
const sourceType = require('../common/constant').sourceType;
const UglifyJS = require('uglify-js');
const _ = require('underscore');

module.exports = class JsCompressor extends Compressor {
    constructor(opt) {
        super(opt);
        this.type = compressType.js;
        this.UglifyJSOption = opt.UglifyJSOption;
    }
    compress ({sources}, successCB, errorCB) {
        let existEnity = _.findWhere(this.sources, {sourceType: sourceType.entity});

        if(existEnity) {

        } else {
            var result = UglifyJS.minify(_.pluck(this.sources, 'source'), this.UglifyJSOption);
        }

    }
}
