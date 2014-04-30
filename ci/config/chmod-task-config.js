/**
 * Change mode task config.
 * @module ci/config/chmodTaskConfig
 * @see https://github.com/JamesMGreene/grunt-chmod
 */

exports.defaultMode = {
    options: {mode: '644'},
    src: ['lib/**/*.js']
};

exports.executableMode = {
    options: {mode: '755'},
    src: [
        'ci/bin/*',
        'doc/.*.sh'
    ]
};

exports.readonlyMode = {
    options: {mode: '444'},
    src: [
    ]
};