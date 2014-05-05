/**
 * @file Grunt usage.
 * @memberof module:ci/tasks
 * @function taskguideWorkers.taskguideUsage
 * @param {function} callback - Callback when done.
 */


var async = require('async'),
    os = require('os'),
    _gruntHelp = require('./_grunt_help');

exports = module.exports = function (callback) {
    async.waterfall([
        function (callback) {
            _gruntHelp(callback);
        },
        function (stdOut, stdErr) {
            callback(null, exports._parseGruntHelp(stdOut));
        }
    ], callback);
};

exports._parseGruntHelp = function (data) {
    return data
        .filter(function (paragraph, i) {
            return i < 3;
        })
        .map(function (paragrah) {
            return paragrah.join(os.EOL);
        }).join(os.EOL + os.EOL);
};