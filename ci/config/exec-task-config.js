/**
 * @file Exec task config.
 * @see {@link https://github.com/jharding/grunt-exec|grunt-exec}
 * @memberof module:ci/config
 * @member execTaskConfig
 * @property {object} coverage - Configuration to execute coverage.
 * @property {object} commitDoc - Configuration to execute commit doc.
 * @property {object} doctoc - Configuration to execute doctoc.
 * @property {object} pushDoc - Configuration to execute git push for doc.
 * @property {object} doctoc - Configuration to execute doctoc.
 * @property {object} commitRelease - Configuration to execute git commit for release.
 * @property {object} publishNpm - Configuration to execute publish to npm.
 * @property {object} installNpm - Configuration to execute publish to install npm modules.
 * @property {object} installBower - Configuration to execute publish to install bower modules.
 * @property {object} resetWiki - Configuration to execute reset wiki directory.
 * @property {object} pullWiki - Configuration to execute pull wiki directory.
 * @property {object} pushWiki - Configuration to execute push wiki directory.
 * @property {object} resetTickTackResources - Configuration to execute reset tick-tack-resources directory.
 * @property {object} pullTickTackResources - Configuration to execute pull tick-tack-resources directory.
 * @property {object} pushTickTackResources - Configuration to execute push tick-tack-resources directory.
 */

var path = require('path'),
    util = require('util');

var submodule = {
    reset: function (dirname) {
        return  {
            cmd: [
                ['mkdir -p', dirname].join(' '),
                ['cd', dirname].join(' '),
                'git submodule init',
                'git submodule update',
                'git reset --hard HEAD',
                'git clean -f',
                'git checkout master'
            ].join(' && ')
        };
    },
    pull: function (dirname) {
        return {
            cmd: [
                ['cd', dirname].join(' '),
                'git submodule init',
                'git submodule update',
                'git pull'
            ].join(' && ')
        }
    },
    push: function (dirname) {
        return {
            cmd: [
                ['cd', dirname].join(' '),
                'git add . -A ',
                '[ ! -n "$( git status --s )" ] && exit 0 || echo "" ', //Exit if no change found.
                util.format('git commit -a -m "Update %s by task. [ci skip]"', path.basename(dirname)),
                'git push'
            ].join(' && ')
        };

    }
};


exports.coverage = {
    stdout: true,
    cmd: 'npm run coverage'
};

exports.commitDoc = {
    stdout: false,
    cmd: 'git add doc -A && git commit -a -m "Update doc task. [ci skip]"'
};

exports.doctoc = {
    cmd: 'npm run doctoc'
};

exports.pushDoc = {
    cmd: 'git subtree push -q --squash --prefix=doc origin gh-pages'
};

exports.pushDist = {
    cmd: 'git subtree push -q --squash --prefix=dist origin distribution'
};

exports.commitRelease = {
    cmd: 'git add . -A && git commit -a -m "Release commit by task."'
};

exports.publishNpm = {
    cmd: 'npm publish .'
};

exports.installNpm = {
    cmd: 'npm install'
};

exports.installBower = {
    cmd: 'npm run bower-install'
};

exports.resetWiki = submodule.reset('.submodules/wiki');
exports.pullWiki = submodule.pull('.submodules/wiki');
exports.pushWiki = submodule.push('.submodules/wiki');


exports.resetTickTackResources = submodule.reset('.submodules/tick-tack-resources');
exports.pullTickTackResources = submodule.pull('.submodules/tick-tack-resources');
exports.buildTickTackResources = {
    cmd: 'node .submodules/tick-tack-resources/ci/bin/readme.js'
};
exports.pushTickTackResources = submodule.push('.submodules/tick-tack-resources');
exports.releaseTickTackResources = {
    cmd: 'node .submodules/tick-tack-resources/ci/bin/release.js'
};
