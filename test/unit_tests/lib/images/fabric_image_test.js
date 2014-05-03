/**
 * @file nodeunit test case for "fabricImage}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var FabricImage = require('../../../../lib/images/fabric_image.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['SVG font family style.'] = function (test) {
    new FabricImage()
        .addCustomFont('mock-font', testHelper.resolveMockFile('mock-font.ttf'))
        .svgFontFamilyStyle(function (err, style) {
            test.ifError(err);
            test.done();
        });
};


exports['Fabric image.'] = function (test) {
    test.ok(new FabricImage());
    test.done();
};