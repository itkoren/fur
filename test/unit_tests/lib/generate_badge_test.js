/**
 * @file nodeunit test case for "generateBadge"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var generateBadge = require('../../../lib/generate_badge.js'),
    testHelper = require('../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Generate badge.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_generateed_badge.svg');
    generateBadge(filename, {}, function (err) {
        test.ifError(err);
        test.done();
    });
};