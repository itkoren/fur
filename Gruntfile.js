/**
 * @file Automation tasks with grunt.
 * @see {@link http://gruntjs.com/ | grunt}
 * @param grunt
 *
 */

"use strict";

var path = require('path'),
    fs = require('fs');


module.exports = function (grunt) {

    /**
     * Task defined as ci.
     * @param {string} filename
     * @returns {function}
     */
    function ciTask(filename) {
        return function () {
            var done = this.async(),
                config = this.data;
            require(filename).call(this, grunt, config, function (err) {
                if (err) {
                    grunt.log.error(err);
                }
                done();
            });
        }
    }


    grunt.initConfig({
        badge: require('./ci/config/badge-task-config.js'),
        catalog: require('./ci/config/catalog-task-config.js'),
        exec: require('./ci/config/exec-task-config.js'),
        chmod: require('./ci/config/chmod-task-config'),
        jsdoc: require('./ci/config/jsdoc-task-config'),
        mkdir: require('./ci/config/mkdir-task-config'),
        nodeunit: require('./ci/config/nodeunit-task-config'),
        scaffold: require('./ci/config/scaffold-task-config')
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-chmod');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerMultiTask('scaffold', ciTask('./ci/tasks/scaffold_task'));
    grunt.registerMultiTask('badge', ciTask('./ci/tasks/badge_task'));
    grunt.registerMultiTask('catalog', ciTask('./ci/tasks/catalog_task'));


    grunt.registerTask('build', [
        'chmod',
        'mkdir',
        'scaffold',
        'catalog'
    ]);

    grunt.registerTask('test', [
        'nodeunit'
    ]);

    grunt.registerTask('coverage', [
        'exec:coverage'
    ]);

    grunt.registerTask('doc', [
        'jsdoc',
        'coverage'
    ]);

    grunt.registerTask('publishDoc', [
        'doc',
        'exec:commitDoc',
        'exec:pushDoc'
    ]);

    grunt.registerTask('publish', [
        'publishDoc',
        'badge'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};