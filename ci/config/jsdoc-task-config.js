/**
 * Jsdoc task config.
 * @memberof module:ci/config
 * @member jsdocTaskConfig
 * @see https://github.com/krampstudio/grunt-jsdoc
 * @property {object} project - Project doc config.
 * @property {object} projectTasks - Taskguide doc config.
 * @property {object} projectTests - Testcase doc config.
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

exports.projectTasks = {
    src: [
        'ci/.taskguide.md',
        'ci/tasks/**/*.js',
        'ci/config/**/*.js'
    ],
    options: {
        destination: 'doc/taskguide',
        configure: 'doc/.taskguide.json',
        private: false,
        get template() {
            return  docstrap();
        }
    }
};

exports.projectTests = {
    src: [
        'test/.testcases.md',
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