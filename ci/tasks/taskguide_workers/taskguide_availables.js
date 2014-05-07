/**
 * @file Available tasks.
 * @memberof module:ci/tasks
 * @function taskguideWorkers.taskguideAvaiables
 * @param {function} callback - Callback when done.
 */


var async = require('async'),
    _gruntHelp = require('./_grunt_help');

exports = module.exports = function (callback) {
    async.waterfall([
        function (callback) {
            _gruntHelp(callback);
        },
        function (stdOut, stdErr) {
            if (stdErr && stdErr.trim()) {
                console.error(stdErr);
            }
            callback(null, exports._parseGruntHelp(stdOut));
        }
    ], callback);
};

exports._parseGruntHelp = function (data) {
    return data
        .filter(function (paragraph) {
            var line = paragraph[0];
            return !!(line && line.match("Available tasks"));
        })
        .map(function (paragrah) {
            paragrah.shift();
            return paragrah.map(function (line) {
                var keywords = line.trim().split(/\s/);
                var name = keywords.shift();
                var description = keywords.join(' ').trim();
                var multiple = !!description.match(/\*/);
                return {
                    name: name,
                    description: description.replace(/\*\s*$/, '').trim(),
                    multiple: multiple ? 'YES' : 'NO',
                    config: name + 'TaskConfig'
                };
            });
        }
    ).
        shift();
}
;