/**
 * @file nodeunit test case for "icon}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var Icon = require('../../../../lib/icons/icon.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Icon.'] = function (test) {
    var icon = new Icon();
    test.ok(icon.draw());
    var filename = testHelper.resolveWorkFile('work_icon.png');
    icon.writeAsPNG(filename, function () {
        test.done();
    });
};

exports['Write as svg.'] = function (test) {
    var icon = new Icon();
    test.ok(icon.draw());
    var filename = testHelper.resolveWorkFile('work_icon.svg');
    icon.writeAsSVG(filename, function () {
        test.done();
    });
};