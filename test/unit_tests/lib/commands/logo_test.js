/**
 * @file nodeunit test case for "logo"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var logo = require('../../../../lib/commands/logo.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Logo.'] = function (test) {
    test.ok(logo);
    test.done();
};