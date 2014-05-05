/**
 * @file Show grunt help.
 * @memberof module:ci/tasks
 * @function taskguideWorkers._gruntHelp
 * @param {function} callback - Callback when done.
 * @protected
 * @ignore
 * @author Taka Okunishi
 */


var async = require('async'),
    os = require('os'),
    childProcess = require('child_process');

exports = module.exports = function (callback) {
    async.waterfall([
        function (callback) {
            childProcess.exec('grunt -h', callback);
        },
        function (stdOut, stdErr) {
            callback(null, exports._parseGruntMessage(stdOut));
        }
    ], callback);
};

exports._parseGruntMessage = function (msg) {
    return msg.split(os.EOL)
        .reduce(function (result, line) {
            if (line.trim()) {
                var paragrapth = result.pop();
                paragrapth.push(line.replace(/\033\[[0-9;]*m/g,""));
                result.push(paragrapth);
            } else {
                result.push([]);
            }
            return result;
        }, [
            []
        ]);
};