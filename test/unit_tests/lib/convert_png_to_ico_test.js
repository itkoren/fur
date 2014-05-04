/**
 * @file nodeunit test case for "convertPngToIco"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var convertPngToIco = require('../../../lib/convert_png_to_ico.js'),
    testHelper = require('../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Convert png to ico.'] = function (test) {
    var src = testHelper.resolveMockFile('mock-png.png'),
        dest = testHelper.resolveWorkFile('work-ico.ico');
    convertPngToIco(src, dest, function (err) {
        test.ifError(err);
        test.done();
    });
};