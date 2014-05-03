/**
 * Exec task config.
 * @module ci/config/ExecTaskConfig
 * @see https://github.com/jharding/grunt-exec
 */


exports.coverage = {
    stdout: true,
    cmd: 'npm run coverage'
};

exports.commitDoc = {
    stdout: false,
    cmd: 'git add doc -A && git commit -a -m "Update doc task. [ci skip]"'
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