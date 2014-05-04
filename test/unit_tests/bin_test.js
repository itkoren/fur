/**
 * @file nodeunit test case for bin
 * @see {@link https://github.com/caolan/nodeunit | nodeunit}
 *
 */

var childProcess = require('child_process'),
    fur = require.resolve('../../bin/fur');


exports['Show help.'] = function (test) {
    var forked = childProcess.fork(fur, ['-h'], {
        silent: true
    });
    forked.on('error', function () {
        test.ifError(new Error('Command failed.'));
    });
    forked.on('exit', function () {
        test.done();
    });
};