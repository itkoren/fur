/**
 * @file nodeunit test case for "defineLogo"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var defineLogo = require('../../../../lib/logos/_define_logo.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Define logo.'] = function (test) {
    test.ok(defineLogo({}));
    test.done();
};