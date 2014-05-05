/**
 * @file nodeunit test case for "svg2png"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var svg2png = require('../../../../lib/badges/_svg2png.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Svg 2png.'] = function (test) {
    test.ok(svg2png);
    test.done();
};