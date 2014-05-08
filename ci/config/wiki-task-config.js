/**
 * @file Configuration for "ci/task.wikiTask".
 * @memberof module:ci/config
 * @member wikiTaskConfig
 * @property {object} dependencies - Wiki about dependencies.
 * @property {object} badgeCommand - Wiki about badge command.
 * @property {object} faviconCommand - Wiki about favicon command.
 * @property {object} icoCommand - Wiki about ico command.
 * @property {object} logoCommand - Wiki about logo command.
 * @property {object} resizeCommand - Wiki about resize command.
 * @property {object} woffCommand - Wiki about woff command.
 */

"use strict";

var faviconTaskConfig = require('./favicon-task-config'),
    logoTaskConfig = require('./logo-task-config'),
    util = require('util'),
    commands = require('../../lib/commands');

var links = {
    my_wiki_url: 'https://github.com/tick-tack/fur/wiki',
    my_gallery_url: 'http://tick-tack.github.io/fur/gallery/'
};

var repoURL = 'https://github.com/tick-tack/fur',
    rowURL = 'https://raw.githubusercontent.com/tick-tack/fur/master/';

exports.dependencies = {
    description: 'Third party libraries which fur depends on.',
    filename: '.submodules/wiki/Dependencies.md',
    worker: 'wikiDependencies',
    workerOptions: {
        packageJsonFile: 'package.json',
        bowerJsonFile: 'dist/bower.json',
        bowerComponentsDir: 'dist/bower_components'
    },
    links: links
};

exports.badgeCommand = {
    description: 'Usage for `fur badge` command.',
    filename: '.submodules/wiki/fur-badge.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        example: '$ fur favicon --style=flat --color-theme e --texts foo,bar my-badge.svg',
        command: 'badge'
    },
    links: links
};

exports.faviconCommand = {
    description: 'Usage for `fur favicon` command.',
    filename: '.submodules/wiki/fur-favicon.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        baseURL: rowURL,
        sampleImages: [
            {
                name: 'styles',
                data: faviconTaskConfig.samples
            }
        ],
        example: '$ fur favicon --style=flat --color-theme e --texts foo,bar my-badge.svg',
        command: 'favicon',
        seeMore: [repoURL, 'favicon-examples'].join('#')
    },
    links: links
};

exports.icoCommand = {
    description: 'Usage for `fur ico` command.',
    filename: '.submodules/wiki/fur-ico.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        example: '$ fur ico favicon.png favicon.ico',
        command: 'ico'
    },
    links: links
};


exports.logoCommand = {
    description: 'Usage for `fur logo` command.',
    filename: '.submodules/wiki/fur-logo.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        baseURL: rowURL,
        sampleImages: [
            {
                name: 'styles',
                data: logoTaskConfig.samples
            }
        ],
        example: '$ fur logo --width 128 --height 40 --font-size 32 --font-theme a --color-theme e --text k my-logo.svg',
        command: 'logo',
        seeMore: [repoURL, 'favicon-examples'].join('#')
    },
    links: links
};


exports.resizeCommand = {
    description: 'Usage for `fur resize` command.',
    filename: '.submodules/wiki/fur-resize.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        example: '$ fur resize favicon.png --width 64 --height 64',
        command: 'ico'
    },
    links: links
};


exports.woffCommand = {
    description: 'Usage for `fur woff` command.',
    filename: '.submodules/wiki/fur-woff.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        example: '$ fur woff my-font.ttf my-font.woff',
        command: 'woff'
    },
    links: links
};


exports.HomeCommandsLinks = {
    filename: '.submodules/wiki/Home.md',
    worker: 'wikiEmbedLinks',
    workerOptions: {
        links: Object.keys(commands).map(function (command) {
            return {
                title: command,
                href: util.format('https://github.com/tick-tack/fur/wiki/fur-%s', command)
            }
        })
    }
};