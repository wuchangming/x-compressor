const sourceType = require('../common/constant').sourceType;

module.exports = class Compressor {
    constructor({
        basePath,
        distPath
    }) {
        this.basePath = basePath;
        this.distPath = distPath;
        this.sources = [];
        this.assetsPromise;
    }
    addSource (sourcePath, sourceEntity) {
        if (!sourcePath && !sourceEntity) {
            throw new Error('Source can not be null');
        }
        if (sourcePath) {
            this.sources.push({
                sourceType: sourceType.path,
                source: sourcePath
            })
        } else {
            this.sources.push({
                sourceType: sourceType.entity,
                source: sourceEntity
            })
        }
    }
    // return an assetsPromise
    execute () {
        if (this.assetsPromise) {
            return this.assetsPromise;
        } else {
            return this.assetsPromise = new Promise((resolve, reject) => {
                this.compress({sources: this.sources}, resolve, reject);
            })
        }
    }
    compress ({sources}, successCB, errorCB) {
        throw new Error('This function must be implemented!');
    }
}
