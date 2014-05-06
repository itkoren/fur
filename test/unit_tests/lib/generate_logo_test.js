/**
 * @file nodeunit test case for "generateLogo"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var generateLogo = require('../../../lib/generate_logo.js'),
    testHelper = require('../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Logo for style.'] = function (test) {
    test.ok(generateLogo._LogoForStyle('simple'));
    test.throws(function () {
        generateLogo._LogoForStyle('__none_existing_style');
    });
    test.done();
};

exports['Generate logo.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_logo.svg');
    generateLogo(filename, {
        letter: 'P',
        format: 'svg',
        fontFilename: testHelper.resolveMockFile('mock-font.ttf'),
        fontFamily: 'mock-font'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};
