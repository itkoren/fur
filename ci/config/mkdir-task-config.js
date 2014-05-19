/**
 * @file Directory configuration.
 * @see https://github.com/rubenv/grunt-mkdir
 * @memberof module:ci/config
 * @member mkdirTaskConfig
 * @property {object} project - mkdir config for project.
 *
 */

exports.project = {
    options: {
        create: [
            'assets',
            'assets/catalogs',
            'assets/web_fonts',
            'bin',
            'doc',
            'doc/gallery',
            'doc/resources',
            'doc/resources/fonts',
            'doc/resources/images',
            'doc/resources/javascripts',
            'doc/resources/stylesheets',
            'ci',
            'ci/bin',
            'ci/config',
            'ci/tasks',
            'dist',
            'dist/fonts',
            'dist/images',
            'dist/javascripts',
            'dist/stylesheets',
            'lib',
            'lib/commands',
            'lib/images',
            'lib/icons',
            'lib/util',
            'test/.work',
            'test/mock',
            'test/unit_tests',
            'test/unit_tests/lib',
            'test/unit_tests/lib/util',
            'tmpl',
            'tmpl/bin',
            'tmpl/css',
            'tmpl/html',
            'tmpl/js'
        ]
    }
};