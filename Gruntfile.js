/**
 * @file Automation tasks with grunt.
 * @see {@link http://gruntjs.com/ | grunt}
 * @param grunt
 *
 */

module.exports = function (grunt) {
    grunt.initConfig({
        exec: require('./ci/config/exec-task-config.js'),
        chmod: require('./ci/config/chmod-task-config'),
        mkdir: require('./ci/config/mkdir-task-config'),
        nodeunit: require('./ci/config/nodeunit-task-config'),
        scaffold: require('./ci/config/scaffold-task-config')
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-chmod');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerMultiTask('scaffold', require('./ci/task/scaffold_task'))

    grunt.registerTask('build', [
        'chmod',
        'mkdir'
    ]);

    grunt.registerTask('test', [
        'nodeunit'
    ]);

    grunt.registerTask('coverage', [
        'exec:coverage'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};