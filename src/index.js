const htmlparser = require('htmlparser2');
const glob = require('glob');

const DomUtils = htmlparser.DomUtils;
var rawHtml = "Xyz <script language= javascript>var foo = '<<bar>>';</Script><css><!--<!-- Waah!<Script> -- -->";
var handler = new htmlparser.DomHandler(function (error, dom) {
    if (error) {
        console.log(error);
    } else {
        console.log(dom);
        var nhtml = DomUtils.getOuterHTML(dom);
        console.log(nhtml);
    }
});
var parser = new htmlparser.Parser(handler);
parser.write(rawHtml);
parser.done();
