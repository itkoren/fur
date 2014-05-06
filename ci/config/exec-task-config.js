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
 */


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
    cmd: 'npm run bower-install',
    cwd: 'dist'
};