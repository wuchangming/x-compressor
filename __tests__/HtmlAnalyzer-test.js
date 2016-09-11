'use strict';

const fs = require('fs');
const path = require('path');

const htmlStringError = fs.readFileSync(path.join(__dirname,'./sources/htmlhint/error.html'));
const htmlStringPass = fs.readFileSync(path.join(__dirname,'./sources/htmlhint/pass.html'));

const MOCK_FILE_INFO = {
    './htmlhint/error.html': htmlStringError.toString(),
    './htmlhint/pass.html': htmlStringPass.toString()
};

describe('htmlhint', () => {

    beforeEach(() => {
        jest.mock('fs');
        // Set up some mocked out file info before each test
        require('fs').__setMockFiles(MOCK_FILE_INFO);
    });

    it('should throw an htmlhint error', () => {
        const HtmlAnalyzer = require('../lib/HtmlAnalyzer/index.js');
        let htmlAnalyzer1 = new HtmlAnalyzer({
            srcPath: './htmlhint/error.html'
        });
        expect(() => {
            htmlAnalyzer1.analyze();
        }).toThrow();

        let htmlAnalyzer2 = new HtmlAnalyzer({
            srcPath: './htmlhint/pass.html'
        });
        expect(() => {
            htmlAnalyzer2.analyze();
        }).not.toThrow();
    });
})
