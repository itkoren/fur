/**
 * @file Configuration for "ci/task.readmeTask".
 * @memberof module:ci/config
 * @member readmeTaskConfig
 * @property {object} project - Project readme config.
 */

"use strict";

exports.project = {
    readmeFile: 'README.md',
    packageJsonFile: 'package.json',
    bowerJsonFile: 'asserts/bower.json',
    wikiBaseUrl: 'https://github.com/tick-tack/fur/wiki',
    commandWikiLinks: [
        'badge',
        'favicon',
        'ico',
        'log',
        'resize',
        'woff'
    ].map(function (command) {
            return {
                title: command,
                href: ['fur', command].join('-')
            }
        })
};