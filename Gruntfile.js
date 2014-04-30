/**
 * @file Automation tasks with grunt.
 * @see {@link http://gruntjs.com/ | grunt}
 * @param grunt
 *
 */

module.exports = function (grunt) {
    grunt.initConfig({
        chmod: require('./ci/config/chmod-task-config'),
        mkdir: require('./ci/config/mkdir-task-config'),
        nodeunit: require('./ci/config/nodeunit-task-config'),
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-chmod');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');


    grunt.registerTask('build', [
        'chmod',
        'mkdir'
    ]);

    grunt.registerTask('test', [
        'nodeunit'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};