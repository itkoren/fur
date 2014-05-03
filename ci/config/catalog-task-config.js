/**
 * @file Configuration for ci/task.catalog.
 * @ignore
 */

"use strict";

exports.webFonts = {
    dest: 'assets/catalogs/web-font-catalog.json',
    worker: 'catalogWebFonts',
    workerOptions: {
        pattern: 'assets/web_fonts/**/*.+(ttf|otf)'
    }
};


exports.colorSchemes = {
    dest: 'assets/catalogs/color-scheme-catalog.json',
    worker: 'catalogColorSchemes',
    workerOptions: {
        schemes: [
            'mono',
            'contrast',
            'triade',
            'tetrade',
            'analogic'
        ],
        variations: [
            'pastel',
            'soft',
            'light',
            'hard',
            'pale'
        ],
        hues: [
            'red',
            'red-orange',
            'orange',
            'orange-yellow',
            'yellow',
            'yellow-green',
            'green',
            'green-blue',
            'blue',
            'blue-violet',
            'violet',
            'violet-red'
        ]
    }
};