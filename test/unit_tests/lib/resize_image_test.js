/**
 * @file nodeunit test case for "resizeImage"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var resizeImage = require('../../../lib/resize_image.js'),
    testHelper = require('../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Resize image.'] = function (test) {
    resizeImage(
        testHelper.resolveMockFile('mock-png.png'),
        testHelper.resolveWorkFile('work-resized.png'),
        {
            width: 10,
            height: 10
        },
        function (err) {
            test.ifError(err);
            test.ok(testHelper.existsSync(testHelper.resolveWorkFile('work-resized.png')));
            test.done();
        }
    );
};