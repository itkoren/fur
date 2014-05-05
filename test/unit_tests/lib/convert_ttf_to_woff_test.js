/**
 * @file nodeunit test case for "convertTtf2Woff"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var convertTtf2Woff = require('../../../lib/convert_ttf_to_woff.js'),
    testHelper = require('../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Convert ttf to woff.'] = function (test) {
    convertTtf2Woff(
        testHelper.resolveMockFile('mock-font.ttf'),
        testHelper.resolveWorkFile('work_woff.woff'),
        function (err) {
            test.ifError(err);
            test.done();
        }
    );
};