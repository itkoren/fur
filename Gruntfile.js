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
                done = null;
            });
        }
    }


    grunt.initConfig({
        badge: require('./ci/config/badge-task-config.js'),
        catalog: require('./ci/config/catalog-task-config.js'),
        chmod: require('./ci/config/chmod-task-config'),
        exec: require('./ci/config/exec-task-config.js'),
        favicon: require('./ci/config/favicon-task-config.js'),
        font: require('./ci/config/font-task-config.js'),
        ico: require('./ci/config/ico-task-config.js'),
        index: require('./ci/config/index-task-config.js'),
        jsdoc: require('./ci/config/jsdoc-task-config'),
        logo: require('./ci/config/logo-task-config.js'),
        tag: require('./ci/config/tag-task-config.js'),
        gallery: require('./ci/config/gallery-task-config.js'),
        mkdir: require('./ci/config/mkdir-task-config'),
        nodeunit: require('./ci/config/nodeunit-task-config'),
        readme: require('./ci/config/readme-task-config.js'),
        scaffold: require('./ci/config/scaffold-task-config'),
        static: require('./ci/config/static-task-config'),
        taskguide: require('./ci/config/taskguide-task-config'),
        testcase: require('./ci/config/testcase-task-config'),
        versionup: require('./ci/config/versionup-task-config'),
        wiki: require('./ci/config/wiki-task-config')
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-chmod');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerMultiTask('badge', 'Generate badge image files.', ciTask('./ci/tasks/badge_task'));
    grunt.registerMultiTask('favicon', 'Generate favicon image files', ciTask('./ci/tasks/favicon_task'));
    grunt.registerMultiTask('font', 'Publish font files', ciTask('./ci/tasks/font_task'));
    grunt.registerMultiTask('ico', 'Generate ico image files.', ciTask('./ci/tasks/ico_task'));
    grunt.registerMultiTask('index', 'Generate index js files.', ciTask('./ci/tasks/index_task'));
    grunt.registerMultiTask('logo', 'Generate logo image files', ciTask('./ci/tasks/logo_task'));
    grunt.registerMultiTask('catalog', 'Generate catalog files.', ciTask('./ci/tasks/catalog_task'));
    grunt.registerMultiTask('gallery', 'Generate gallery files.', ciTask('./ci/tasks/gallery_task'));
    grunt.registerMultiTask('readme', 'Update readme file.', ciTask('./ci/tasks/readme_task'));
    grunt.registerMultiTask('tag', 'Create a tag on github.', ciTask('./ci/tasks/tag_task'));
    grunt.registerMultiTask('scaffold', 'Generate scaffold files.', ciTask('./ci/tasks/scaffold_task'));
    grunt.registerMultiTask('static', 'Generate,publish, or distribute static files.', ciTask('./ci/tasks/static_task'));
    grunt.registerMultiTask('taskguide', 'Generate taskguide files.', ciTask('./ci/tasks/taskguide_task'));
    grunt.registerMultiTask('testcase', 'Generate testcase files.', ciTask('./ci/tasks/testcase_task'));
    grunt.registerMultiTask('versionup', 'Increment project version.', ciTask('./ci/tasks/versionup_task'));
    grunt.registerMultiTask('wiki', 'Generate wiki.', ciTask('./ci/tasks/wiki_task'));


    grunt.registerTask('build', 'Build this project.', [
        'chmod',
        'mkdir',
        'index',
        'scaffold',
        'static',
        'catalog',
        'gallery'
    ]);

    grunt.registerTask('test', 'Run tests', [
        'nodeunit'
    ]);

    grunt.registerTask('coverage', 'Generate coverage report.', [
        'exec:coverage'
    ]);

    grunt.registerTask('doc', 'Generate documents.', [
        'catalog',
        'testcase',
        'taskguide',
        'coverage',
        'exec:doctoc',
        'readme',
        'jsdoc',
        'font:doc'
    ]);


    grunt.registerTask('install', 'Install dependencies', [
        'exec:installNpm',
        'exec:installBower'
    ]);

    grunt.registerTask('draw', 'Draw images.', [
        'badge',
        'favicon',
        'logo',
        'ico'
    ]);

    grunt.registerTask('publishDoc', 'Publish documents.', [
        'doc',
        'exec:commitDoc',
        'exec:pushDoc'
    ]);

    grunt.registerTask('publishWiki', 'Publish wiki.', [
        'exec:resetWiki',
        'exec:pullWiki',
        'wiki',
        'exec:pushWiki'
    ]);

    grunt.registerTask('publishTickTackResources', 'Publish tick tack resources.', [
        'exec:resetTickTackResources',
        'exec:pullTickTackResources',
        'exec:pushTickTackResources'
    ]);

    grunt.registerTask('publish', 'Publish project files', [
        'draw',
        'font:dist',
        'publishDoc',
        'publishWiki'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);

};