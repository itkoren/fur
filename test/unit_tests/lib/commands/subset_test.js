/**
 * @file nodeunit test case for "subset"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var subset = require('../../../../lib/commands/subset.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Subset.'] = function (test) {
    test.ok(subset);
    test.done();
};