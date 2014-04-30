/**
 * @file Automation tasks with grunt.
 * @see {@link http://gruntjs.com/ | grunt}
 * @param grunt
 *
 */

module.exports = function (grunt) {
    grunt.initConfig({
        chmod: require('./ci/config/chmod-task-config'),
        mkdir: require('./ci/config/mkdir-task-config')
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-chmod');

    grunt.registerTask('build', [
        'chmod',
        'mkdir'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};