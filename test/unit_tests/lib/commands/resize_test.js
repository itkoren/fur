/**
 * @file nodeunit test case for "resize"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var resize = require('../../../../lib/commands/resize.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Resize.'] = function (test) {
    test.ok(resize);
    test.done();
};