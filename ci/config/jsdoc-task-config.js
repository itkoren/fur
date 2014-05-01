/**
 * Jsdoc task config.
 * @module ci/config/jsdocTaskConfig
 * @see https://github.com/krampstudio/grunt-jsdoc
 *
 */

exports.all = {
    src: [
        'README.md',
        'lib/**/*.js'
    ],
    options: {
        destination: 'doc/apiguide',
        configure: 'doc/.apiguide.json',
        private: false,
        get template() {
            var path = require('path');
            return path.dirname(require.resolve('ink-docstrap'));
        }
    }
};