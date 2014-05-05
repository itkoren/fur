/**
 * @file nodeunit test case for "badge}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var Badge = require('../../../../lib/badges/badge.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Create svg data.'] = function (test) {
    var badge = new Badge();
    badge.toSVG(function (err, data) {
        test.ok(badge === this);
        test.ifError(err);
        test.ok(data);
        test.done();
    });
};