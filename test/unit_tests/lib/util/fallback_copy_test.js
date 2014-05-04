/**
 * @file nodeunit test case for "fallbackCopy}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var fallbackCopy = require('../../../../lib/util/fallback_copy.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Fallback copy.'] = function (test) {
    test.ok(fallbackCopy({}, {}));
    test.ok(fallbackCopy({}));
    test.ok(fallbackCopy({foo: 'bar'}));
    test.done();
};