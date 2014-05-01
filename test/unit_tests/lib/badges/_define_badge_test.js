/**
 * @file nodeunit test case for "defineBadge}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var defineBadge = require('../../../../lib/badges/_define_badge.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Define badge.'] = function (test) {
    var Badge = defineBadge({

    });
    test.ok(Badge);
    test.done();
};