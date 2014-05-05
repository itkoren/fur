/**
 * @file nodeunit test case for "copyFile"
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var copyFile = require('../../../../lib/util/copy_file.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Copy file.'] = function (test) {
    var src = testHelper.resolveMockFile('mock_txt.txt'),
        dest = testHelper.resolveWorkFile('work_copied_txt.txt');
    copyFile(src, dest, function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Handle error.'] = function (test) {
    var handler = copyFile._errorHandler(function () {

    });
    handler();
    handler();
    copyFile('foo/bar/_not_exists', null, function (err) {
        test.ok(err);
        test.done();
    });
};
