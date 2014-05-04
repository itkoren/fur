fur
===

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![dependencies][my_gemnasium_badge_url]][my_gemnasium_url]

Front end design tool.    
Generate images and stylesheets.   

<a href="https://github.com/tick-tack/fur"><img style="height:40px;" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/fur/fur-favicon.png" height="40"></a>&nbsp;<a href="http://nodejs.org/"><img style="height:40px;" style="height:40px;" src="http://nodejs.org/images/logos/nodejs-dark.png" height="40"></a>&nbsp;<a href="https://nodei.co/npm/fur/"><img style="height:40px;" src="https://nodei.co/npm/fur.png" height="40"></a>


Table of Contents
-----

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Usage](#usage)
  - [Generate a favicon file.](#generate-a-favicon-file)
  - [Convert to ico.](#convert-to-ico)
- [Documents](#documents)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


Prerequisites
------

+ [node.js][nodejs_url]
+ [cairo][cairo_url]
+ [ImageMagick][image_magick_url]

fur depends on [node-canvas][node_canvas_url], and it requires some setting up.    
For more detail, see [the node-canvas install guide][node_canvas_install_wiki_url].


Install
------

Install fur via [npm][npm_url]

```bash
$ sudo npm install fur -g
```

Usage
------

<!-- START readme_task.commands generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

```bash
$ fur -h

  Usage: fur [options] [command]

  Commands:

    favicon [options] <filename> Generate a favicon.
    ico <src> <dest>       Convert a png file to ico file.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

<!-- END readme_task.commands generated contents please keep comment here to allow auto update -->

### Generate a favicon file. ###

Generate a simple favicon with themes.
<!-- START readme_task.faviconCommand generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

```bash
$ fur favicon -h

  Usage: favicon [options] <filename>

  Options:

    -h, --help                  output usage information
    -C, --color-theme [theme]   Color theme name.
    -F, --font-theme [theme]    Font theme name.
    -s, --size [size]           Image size
    -S, --Style [style]         Image style. "simple".
    -t, --text [text]           Text to print on favicon.
    -L, --text-left [position]  Text left position.
    -T, --text-top [position]   Text top position.
```

<!-- END readme_task.faviconCommand generated contents please keep comment here to allow auto update -->

Theme names are short letters like 'a', 'b'.
Available themes are listed in [the gallery][my_gallery_url].


```bash
$ fur favicon --font-theme a --color-theme e --text k my-favicon.svg
```

### Convert to ico. ###

Convert a png file into ico format.

<!-- START readme_task.icoCommand generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

```bash
$ fur ico -h

  Usage: ico [options] <src>,<dest>

  Options:

    -h, --help  output usage information
```

<!-- END readme_task.icoCommand generated contents please keep comment here to allow auto update -->


```bash
$ fur ico my-favicon.png favicon.ico
```


Documents
------
+ [API Guide][my_apiguide_url]
+ [Gallery][my_gallery_url]
+ [Test Cases][my_testcases_url]
+ [Coverage report][my_coverage_url]

[nodejs_url]: http://nodejs.org/
[npm_url]: https://www.npmjs.org/
[grunt_url]: http://gruntjs.com/
[grunt_badge_url]: http://cdn.gruntjs.com/builtwith.png
[cairo_url]: http://cairographics.org/
[inkscape_url]: http://www.inkscape.org/en/
[node_canvas_url]: https://www.npmjs.org/package/canvas
[node_canvas_install_wiki_url]: https://github.com/LearnBoost/node-canvas/wiki/_pages
[image_magick_url]: http://www.imagemagick.org/
[my_travis_url]: https://travis-ci.org/tick-tack/fur
[my_travis_badge_url]: http://img.shields.io/travis/tick-tack/fur.svg?style=flat
[my_apiguide_url]: http://tick-tack.github.io/fur/apiguide/
[my_testcases_url]: http://tick-tack.github.io/fur/testcases/
[my_coverage_url]: http://tick-tack.github.io/fur/coverage/lcov-report/
[my_gallery_url]: http://tick-tack.github.io/fur/gallery/
[my_codeclimate_url]: http://codeclimate.com/github/tick-tack/fur
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/tick-tack/fur.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/tick-tack/fur.svg?style=flat
[my_gemnasium_url]: http://gemnasium.com/tick-tack/fur
[my_gemnasium_badge_url]: http://img.shields.io/gemnasium/tick-tack/fur.svg?style=flat


