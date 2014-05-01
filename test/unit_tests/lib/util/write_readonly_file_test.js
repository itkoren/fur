/**
 * @file nodeunit test case for "writeReadonlyFile}
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var writeReadonlyFile = require('../../../../lib/util/write_readonly_file.js'),
    testHelper = require('../../../../test/test_helper');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Write readonly file.'] = function (test) {
    var filename = testHelper.resolveWorkFile('work_readonly_file.txt');
    writeReadonlyFile(filename, 'foo', function (err) {
        test.ifError(err);
        writeReadonlyFile(filename, 'foo', function (err) {
            test.ifError(err);
            test.done();
        });
    });
};