/**
 * Jsdoc task config.
 * @module ci/config/jsdocTaskConfig
 * @see https://github.com/krampstudio/grunt-jsdoc
 *
 */


function docstrap() {
    var path = require('path');
    return path.dirname(require.resolve('ink-docstrap'));
}

exports.project = {
    src: [
        'README.md',
        'lib/**/*.js'
    ],
    options: {
        destination: 'doc/apiguide',
        configure: 'doc/.apiguide.json',
        private: false,
        get template() {
            return docstrap();
        }
    }
};

exports.projectTests = {
    src: [
        'test/unit_tests.js',
        'test/test_helper.js'
    ],
    options: {
        destination: 'doc/testcases',
        configure: 'doc/.testcases.json',
        private: false,
        get template() {
            return  docstrap();
        }
    }
};