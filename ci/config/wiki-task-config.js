/**
 * @file Configuration for "ci/task.wikiTask".
 * @memberof module:ci/config
 * @member wikiTaskConfig
 */

"use strict";

var links = {
    my_wiki_url: 'https://github.com/tick-tack/fur/wiki',
    my_gallery_url: 'http://tick-tack.github.io/fur/gallery/'
};


exports.dependencies = {
    description: 'Third party libraries which fur depends on.',
    dest: '.submodules/wiki/Dependencies.md',
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
    dest: '.submodules/wiki/fur-badge.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        example: '$ fur favicon --style="flat" --color-theme e --texts foo,bar my-badge.svg',
        command: 'badge'
    },
    links: links
};

exports.faviconCommand = {
    description: 'Usage for `fur favicon` command.',
    dest: '.submodules/wiki/fur-favicon.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        example: '$ fur favicon --style="flat" --color-theme e --texts foo,bar my-badge.svg',
        command: 'favicon'
    },
    links: links
};

exports.icoCommand = {
    description: 'Usage for `fur ico` command.',
    dest: '.submodules/wiki/fur-ico.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        example: '$ fur ico favicon.png favicon.ico',
        command: 'ico'
    },
    links: links
};


exports.logoCommand = {
    description: 'Usage for `fur logo` command.',
    dest: '.submodules/wiki/fur-logo.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        example: '$ fur logo --width 128 --height 40 --font-size 32 --font-theme a --color-theme e --text k my-logo.svg',
        command: 'logo'
    },
    links: links
};


exports.resizeCommand = {
    description: 'Usage for `fur resize` command.',
    dest: '.submodules/wiki/fur-resize.md',
    worker: 'wikiFurCommand',
    workerOptions: {
        example: '$ fur resize favicon.png --width 64 --height 64',
        command: 'ico'
    },
    links: links
};