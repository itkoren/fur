/**
 * @file Contents about command.
 * @memberof readmeWorkers
 * @function readmeCommands
 * @param {function} callback - Callback when done.
 */

var _commandHelp = require('./_command_help');

module.exports = function (callback) {
    _commandHelp('', callback);
};