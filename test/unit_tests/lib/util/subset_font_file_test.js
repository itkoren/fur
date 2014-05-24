/**
 * @file nodeunit test case for "subsetFontFile"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var subsetFontFile = require('../../../../lib/util/subset_font_file.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Subset font file.'] = function (test) {
    var txt = testHelper.resolveMockFile('mock_txt.txt'),
        src = testHelper.resolveMockFile('mock-font.ttf'),
        dest = testHelper.resolveWorkFile('work-subset-font.ttf');
    subsetFontFile(txt, src, dest, function (err) {
        if (err) {
            console.error(err);
        }
        test.done();
    });
};