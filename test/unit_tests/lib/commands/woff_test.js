/**
 * @file nodeunit test case for "woff"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var woff = require('../../../../lib/commands/woff.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Woff.'] = function (test) {
    test.ok(woff);
    test.done();
};