/**
 * @file Contents about command.
 * @memberof readmeWorkers
 * @function readmeCommands
 * @param {function} callback - Callback when done.
 */

var os = require('os'),
    childProcess = require('child_process');

module.exports = function (callback) {
    var bin = require.resolve('../../../bin/fur'),
        command = [bin, '-h'].join(' ');
    childProcess.exec(command, function (err, stdOut, stdErr) {
        if (stdErr && stdErr.trim()) {
            console.error(stdErr);
        }
        var result = [
            '```bash',
            '$ fur -h',
            stdOut,
            '```'
        ].join(os.EOL);
        callback(err, result);
    });
};