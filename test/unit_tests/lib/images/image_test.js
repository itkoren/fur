/**
 * @file nodeunit test case for "image}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var Image = require('../../../../lib/images/image.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Image.'] = function (test) {
    new Image().toSVG(function (err) {
        test.ok(err);
        test.done();
    });
};