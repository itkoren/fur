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

exports['Generate svg badge.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_generated_badge.svg');
    generateBadge(filename, {}, function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Generate png badge.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_generated_badge.png');
    generateBadge(filename, {}, function (err) {
        test.ifError(err);
        test.done();
    });
};