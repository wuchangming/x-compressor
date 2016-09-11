const HTMLHint = require('htmlhint').HTMLHint;
const fs = require('fs');
const colors = require('colors');

module.exports = class HtmlAnalyzer {
    constructor(options) {
        this.options = Object.assign({
            htmlhintConfig: {'tag-pair': true}
        }, options)
    }
    /**
     * @return
     * {
     *      js: [{path, type}],
     *      css: [{path, type}],
     *      image: [{path}]
     * }
     */
    analyze () {
        const {
            srcPath,
            htmlhintConfig
        } = this.options;

        let htmlString = fs.readFileSync(srcPath);

        if (htmlhintConfig) {
            let messages = HTMLHint.verify(htmlString, htmlhintConfig)
            if (messages.length > 0) {
                console.log(colors.yellow('file: ' + srcPath));
                var arrLogs = HTMLHint.format(messages, {
                    colors: true,
                    indent: 2
                });
                arrLogs.forEach(function(log){
                    console.log(colors.yellow(log));
                });
                console.log();
                throw new Error('htmlhint Error!', messages);
            }
        }

        return htmlString
    }

}
