/**
 * @file nodeunit test case for "defaultBadge}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var DefaultBadge = require('../../../../lib/badges/default_badge.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Default badge.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_badge.svg');
    new DefaultBadge().toSVG(function (err, data) {
        var badge = this;
        test.ifError(err);
        test.ok(data);
        badge.writeAsSVG(filename, function (err) {
            test.ifError(err);
            test.ok(testHelper.existsSync(filename));
            test.done();
        });
    });
};