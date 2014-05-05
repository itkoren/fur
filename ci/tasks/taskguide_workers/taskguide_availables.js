/**
 * Available tasks.
 * @function taskguideAvaiables
 * @param {function} callback - Callback when done.
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
                paragrapth.push(line);
                result.push(paragrapth);
            } else {
                result.push([]);
            }
            return result;
        }, [
            []
        ])
        .filter(function (paragraph) {
            var line = paragraph[0];
            return !!(line && line.match("Available tasks"));
        })
        .map(function (paragrah) {
            paragrah.shift();
            return paragrah.map(function (line) {
                var keywords = line.trim().split(/\s/);
                return {
                    name: keywords.shift(),
                    description: keywords.join(' ').trim()
                }
            })
        }).shift();
};