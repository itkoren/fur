/**
 * @file nodeunit test case for "defineIcon}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var defineIcon = require('../../../../lib/icons/_define_icon.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Define icon.'] = function (test) {
    test.ok(defineIcon({}));
    test.done();
};