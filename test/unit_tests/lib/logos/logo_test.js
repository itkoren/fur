/**
 * @file nodeunit test case for "logo"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var Logo = require('../../../../lib/logos/logo.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Logo.'] = function (test) {
    var logo = new Logo();
    test.ok(logo.draw());
    var filename = testHelper.resolveWorkFile('work_logo.png');
    logo.writeAsPNG(filename, function () {
        test.done();
    });
};

exports['Write as svg.'] = function (test) {
    var logo = new Logo();
    test.ok(logo.draw());
    var filename = testHelper.resolveWorkFile('work_logo.svg');
    logo.writeAsSVG(filename, function () {
        test.done();
    });
};