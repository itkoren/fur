/**
 * Directory configuration.
 * @module ci/config/dirTaskConfig
 * @see https://github.com/rubenv/grunt-mkdir
 * @author Taka Okunishi
 *
 */

exports.all = {
    options: {
        create: [
            'assets',
            'assets/web_fonts',
            'doc',
            'ci',
            'ci/bin',
            'ci/config',
            'ci/tasks',
            'lib',
            'lib/badge',
            'lib/util',
            'test/.work',
            'test/mock',
            'test/unit_tests',
            'test/unit_tests/lib',
            'test/unit_tests/lib/util',
            'tmpl',
            'tmpl/bin',
            'tmpl/js'
        ]
    }
};