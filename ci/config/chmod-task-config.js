/**
 * @file Change mode task config.
 * @see {@link https://github.com/JamesMGreene/grunt-chmod|grunt-chmod}
 * @memberof module:ci/config
 * @member chmodTaskConfig
 * @property {object} defaultMode - Default files configuration.
 * @property {object} executableMode - Executable files configuration.
 * @property {object } readonlyMode - Readonly files configuration.
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