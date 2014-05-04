fur
===

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![dependencies][my_gemnasium_badge_url]][my_gemnasium_url]

Front end design tool.    
Generate images and stylesheets.   

<a href="https://nodei.co/npm/fur/"><img src="https://nodei.co/npm/fur.png" height="40"></a>

Prerequisites
------

+ [node.js][nodejs_url]
+ [cairo][cairo_url]

fur dependes on [node-canvas][node_canvas_url], and it's requires some setting up.
For more detail, see [the node-canvas install guide][node_canvas_install_wiki_url].


Install
------

Install fur via [npm][npm_url]

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

### Generate a favicon file.

Generate a simple favicon with themes. ([See available themes][my_gallery_url])

```bash
$ fur --font-theme a --color-theme e --letters k my-favicon.svg
```




Documents
------
+ [API Guide][my_apiguide_url]

[nodejs_url]: http://nodejs.org/
[npm_url]: https://www.npmjs.org/
[grunt_url]: http://gruntjs.com/
[grunt_badge_url]: http://cdn.gruntjs.com/builtwith.png
[cairo_url]: http://cairographics.org/
[inkscape_url]: http://www.inkscape.org/en/
[node_canvas_url]: https://www.npmjs.org/package/canvas
[node_canvas_install_wiki_url]: https://github.com/LearnBoost/node-canvas/wiki/_pages
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/tick-tack/fur.svg?style=flat
[my_travis_url]: https://travis-ci.org/tick-tack/fur
[my_travis_badge_url]: http://img.shields.io/travis/tick-tack/fur.svg?style=flat
[my_apiguide_url]: http://tick-tack.github.io/fur/apiguide/
[my_gallery_url]: http://tick-tack.github.io/fur/gallery/
[my_codeclimate_url]: http://codeclimate.com/github/tick-tack/fur
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/tick-tack/fur.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/tick-tack/fur.svg?style=flat
[my_gemnasium_url]: http://gemnasium.com/tick-tack/fur
[my_gemnasium_badge_url]: http://img.shields.io/gemnasium/tick-tack/fur.svg?style=flat


