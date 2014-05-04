/**
 * @file nodeunit test case for bin.
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

exports = module.exports = {};

var childProcess = require('child_process'),
    fur = require.resolve('../../bin/fur');


/**
 * @memberof module:binTest
 * @param test
 */
exports['Print help.'] = function (test) {
    var forked = childProcess.fork(fur, ['-h'], {
        silent: true
    });
    forked.on('error', function () {
        test.ifError(new Error('Command failed.'));
    });
    forked.on('close', function (code) {
        test.equal(code, 0);
        test.done();
    });
};