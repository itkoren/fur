/**
 * @file nodeunit test case for "generateSubset"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var generateSubset = require('../../../lib/generate_subset.js'),
    testHelper = require('../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Generate subset.'] = function (test) {
    test.ok(generateSubset);
    test.done();
};