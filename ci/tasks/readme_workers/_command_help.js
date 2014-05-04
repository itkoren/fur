/**
 * @file Command help content.
 * @memberof readmeWorkers
 * @function _commandHelp
 * @param {string} bin - Bin file.
 * @param {function} callback - Callback when done.
 * @protected
 * @ignore
 * @author Taka Okunishi
 */

var os = require('os'),
    childProcess = require('child_process');

exports = module.exports = function (command, callback) {
    var bin = require.resolve('../../../bin/fur');
    var executable = [bin, command || '', '-h'].filter(exports._existsFilter).join(' ');
    childProcess.exec(executable, function (err, stdOut, stdErr) {
        if (stdErr && stdErr.trim()) {
            console.error(stdErr);
        }
        var result = [
            '```bash',
            ['$', 'fur', command, '-h'].filter(exports._existsFilter).join(' '),
            stdOut,
            '```'
        ].join(os.EOL);
        callback(err, result);
    });
};

exports._existsFilter = function (entry) {
    return !!entry;
};