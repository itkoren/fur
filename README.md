fur
===

Front end design tool.

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![dependencies][my_gemnasium_badge_url]][my_gemnasium_url]


Prerequisites
------

+ [node.js][nodejs_url]
+ [cairo][cairo_url]
+ [Inkscape][inkscape_url]


Install
------

If you never used [node-canvas][node_canvas_url],
follow [the install guide][node_canvas_install_wiki_url].

```bash
$ sudo npm install fur -g
```

Usage
------

```bash

$ fur -h

  Usage: fur [options] [command]

  Commands:

    favicon [options] <filename> Generate a favicon.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Generate a favicon file.

Generate a simple favicon with themes. ([See available themes][my_gallery_url])

```bash
$ fur --font-theme a --color-theme e --letters k my-favicon.svg
```






Documents
------
+ [API Guide][my_apiguide_url]

[nodejs_url]: http://nodejs.org/
[grunt_url]: http://gruntjs.com/
[grunt_badge_url]: http://cdn.gruntjs.com/builtwith.png
[cairo_url]: http://cairographics.org/
[inkscape_url]: http://www.inkscape.org/en/
[node_canvas_url]: https://www.npmjs.org/package/canvas
[node_canvas_install_wiki_url]: https://github.com/LearnBoost/node-canvas/wiki/_pages
[my_travis_url]: https://travis-ci.org/tick-tack/fur
[my_travis_badge_url]: http://img.shields.io/travis/tick-tack/fur.svg?style=flat
[my_apiguide_url]: http://tick-tack.github.io/fur/apiguide/
[my_gallery_url]: http://tick-tack.github.io/fur/gallery/
[my_codeclimate_url]: http://codeclimate.com/github/tick-tack/fur
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/tick-tack/fur.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/tick-tack/fur.svg?style=flat
[my_gemnasium_url]: http://gemnasium.com/tick-tack/fur
[my_gemnasium_badge_url]: http://img.shields.io/gemnasium/tick-tack/fur.svg?style=flat


