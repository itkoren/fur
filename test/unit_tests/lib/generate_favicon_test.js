/**
 * @file nodeunit test case for "generateFavicon"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var generateFavicon = require('../../../lib/generate_favicon.js'),
    testHelper = require('../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Icon for style.'] = function (test) {
    test.ok(generateFavicon._IconForStyle('simple'));
    test.ok(generateFavicon._IconForStyle('circle'));
    test.throws(function () {
        generateFavicon._IconForStyle('__none_existing_style');
    });
    test.done();
};

exports['Generate favicon.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_favicon.svg');
    generateFavicon(filename, {
        letter: 'P',
        format: 'svg',
        fontFilename: testHelper.resolveMockFile('mock-font.ttf'),
        fontFamily: 'mock-font'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};
