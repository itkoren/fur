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
    faviconTaskConfig = require('../../config/favicon-task-config'),
    badgeTaskConfig = require('../../config/badge-task-config');

exports = module.exports = function (callback) {
    callback(null, [
        exports._favicons(faviconTaskConfig),
        '',
        exports._badges(badgeTaskConfig)
    ].join(os.EOL));
};

exports._tableLine = function (entries) {
    return [''].concat(entries).concat('').join(' | ').trim();
};

exports._favicons = function (config) {
    return [
        exports._subTitle('favicon example'),
        exports._imgTable(config, 'favicon', 40)
    ].join(os.EOL);
};

exports._badges = function (config) {
    return [
        exports._subTitle('badge example'),
        exports._imgTable(config, 'badge', 12)
    ].join(os.EOL);
};


exports._subTitle = function (subTitle) {
    return util.format([
        '<a name="%s"></a>',
        '### %s ###'
    ].join(os.EOL), changeCase.paramCase(subTitle), subTitle);
};

exports._imgTable = function (config, command, height) {

    var head = exports._tableLine([
            'Output',
            'Command'
        ]),
        neck = exports._tableLine([
            ':------:',
            '-------'
        ]),
        body = exports._allValues(config)
            .filter(function (data) {
                return path.extname(data.filename) === '.png';
            })
            .map(function (data) {
                return {
                    data: data,
                    command: exports._toCommand(command, data)
                };
            })
            .map(function (img) {
                var filename = img.data.filename;
                return exports._tableLine([
                    exports._img(filename, height),
                    util.format('`$ %s`', img.command)
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

exports._allValues = function (data) {
    return Object.keys(data)
        .map(function (key) {
            return data[key];
        })
        .reduce(function (result, current) {
            return result.concat(current);
        }, []);
};


exports._img = function (filename, h) {
    var extname = path.extname(filename),
        basename = path.basename(filename, extname);
    var fileURL = url.resolve(exports._urlBase, filename);
    return util.format('<img alt="%s" src="%s" style="height:%dpx" height="%d" />', basename, fileURL, h, h);
};


exports._urlBase = 'https://raw.githubusercontent.com/tick-tack/fur/master/';