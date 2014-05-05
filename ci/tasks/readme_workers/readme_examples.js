/**
 * @file Contents about examples.
 * @memberof module:ci/tasks
 * @function readmeWorkers.readmeExamples
 * @param {function} callback - Callback when done.
 *
 */
var changeCase = require('change-case'),
    path = require('path'),
    util = require('util'),
    url = require('url'),
    os = require('os'),
    faviconTaskConfig = require('../../config/favicon-task-config');

exports = module.exports = function (callback) {
    callback(null, [
        exports._favicons(faviconTaskConfig)
    ].join(os.EOL));
};

exports._tableLine = function (entries) {
    return [''].concat(entries).concat('').join(' | ').trim();
};

exports._favicons = function (config) {

    var head = exports._tableLine([
            'Output',
            'Command'
        ]),
        neck = exports._tableLine([
            ':------:',
            '-------'
        ]),
        body = Object.keys(config)
            .map(function (key) {
                return config[key];
            })
            .reduce(function (result, current) {
                return result.concat(current);
            }, [])
            .filter(function (data) {
                return path.extname(data.filename) === '.png';
            })
            .map(function (data) {
                return {
                    data: data,
                    command: exports._toCommand('favicon', data)
                };
            })
            .map(function (favicon) {
                var filename = favicon.data.filename,
                    extname = path.extname(filename),
                    basename = path.basename(filename, extname);
                var fileURL = url.resolve(exports._urlBase, filename);
                return exports._tableLine([
                    util.format('<img alt="%s" src="%s" style="height:40px" height="40" />', basename, fileURL),
                    util.format('`$ %s`', favicon.command)
                ]);
            })
            .join(os.EOL);
    return [head, neck, body].join(os.EOL);
};


exports._toCommand = function (command, data) {
    var options = Object.keys(data.options || {}).map(function (key) {
        var val = data.options[key];
        return util.format('--%s %s', changeCase.paramCase(key), val);
    }).join(' ');
    return ['fur', command, path.basename(data.filename), options].join(' ');
};


exports._urlBase = 'https://raw.githubusercontent.com/tick-tack/fur/master/';