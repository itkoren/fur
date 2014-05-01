/**
 * @file nodeunit test case for "flatBadge}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var FlatBadge = require('../../../../lib/badges/flat_badge.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Flat badge.'] = function (test) {
    var badge = new FlatBadge();
    test.equal(badge.style(), 'flat');
    badge.toSVG(function (err, data) {
        test.ok(badge === this);
        test.ifError(err);
        test.ok(data);
        test.done();
    });
};