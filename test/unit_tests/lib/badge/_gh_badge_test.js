/**
 * @file nodeunit test case for "ghBadge}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var ghBadge = require('../../../../lib/badge/_gh_badge.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Gh badge.'] = function (test) {
    test.ok(ghBadge());
    test.done();
};