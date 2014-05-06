fur
===

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![dependencies][my_gemnasium_badge_url]][my_gemnasium_url]
[![Git tip][my_gittip_budge_url]][my_gittip_url]

Front end design tool.    
Generate images and stylesheets.   

<a href="https://github.com/tick-tack/fur"><img style="height:40px;" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/fur/fur-favicon.png" height="40"></a>&nbsp;<a href="http://nodejs.org/"><img style="height:40px;" src="http://nodejs.org/images/logos/nodejs-dark.png" height="40"></a>&nbsp;<a href="https://nodei.co/npm/fur/"><img style="height:40px;" src="https://nodei.co/npm/fur.png" height="40"></a>


Table of Contents
-----

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Usage](#usage)
  - [Generate a Favicon](#generate-a-favicon)
  - [Generate a Badge](#generate-a-badge)
  - [Convert to ICO](#convert-to-ico)
- [Programmatic API](#programmatic-api)
- [Examples](#examples)
  - [Favicon Example](#favicon-example)
  - [Badge Example](#badge-example)
- [Documents](#documents)
- [Donation](#donation)
- [License](#license)
- [Dependencies](#dependencies)
- [Links](#links)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="prerequisites"></a>
Prerequisites
------

+ [node.js][nodejs_url]
+ [cairo][cairo_url]
+ [ImageMagick][image_magick_url]

fur depends on [node-canvas][node_canvas_url], and it requires some setting up.    
For more detail, see [the node-canvas install guide][node_canvas_install_wiki_url].


<a name="install"></a>
Install
------

Install fur via [npm][npm_url]:

```bash
$ sudo npm install fur -g
```

<a name="usage"></a>
Usage
------

**Help**
<!-- START readme_task.commands generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

```bash
$ fur -h

  Usage: fur [options] [command]

  Commands:

    favicon [options] <filename> Generate a favicon.
    badge [options] <filename> Generate a badge.
    ico <src> <dest>       Convert a png file to ico file.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

<!-- END readme_task.commands generated contents please keep comment here to allow auto update -->

<a name="generate-a-favicon"></a>
### Generate a Favicon ###

Generate a favicon with pre-defined styles.

**Styles**
<!-- START readme_task.faviconStyles generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->


| simple | circle | bordered |
| :--------: | :--------: | :--------: |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/doc/images/favicon-sample-simple.png" ><img alt="favicon-sample-simple" src="https://raw.githubusercontent.com/tick-tack/fur/master/doc/images/favicon-sample-simple.png" style="height:64px" height="64" /></a> | <a href="https://raw.githubusercontent.com/tick-tack/fur/master/doc/images/favicon-sample-circle.png" ><img alt="favicon-sample-circle" src="https://raw.githubusercontent.com/tick-tack/fur/master/doc/images/favicon-sample-circle.png" style="height:64px" height="64" /></a> | <a href="https://raw.githubusercontent.com/tick-tack/fur/master/doc/images/favicon-sample-bordered.png" ><img alt="favicon-sample-bordered" src="https://raw.githubusercontent.com/tick-tack/fur/master/doc/images/favicon-sample-bordered.png" style="height:64px" height="64" /></a> |

<!-- END readme_task.faviconStyles generated contents please keep comment here to allow auto update -->

**Favicon Help**
<!-- START readme_task.faviconCommand generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

```bash
$ fur favicon -h

  Usage: favicon [options] <filename>

  Options:

    -h, --help                      output usage information
    -C, --color-theme [colorTheme]  Color theme name.
    -F, --font-theme [fontTheme]    Font theme name.
    -s, --size [size]               Image size
    -f, --font-size [fontSize]      Font size
    -S, --style [style]             Image style. "simple".
    -t, --text [text]               Text to print on favicon.
    -L, --text-left [textLeft]      Text left position.
    -T, --text-top [textTop]        Text top position.

```

<!-- END readme_task.faviconCommand generated contents please keep comment here to allow auto update -->

Theme names are short letters like 'a', 'b'.
Available themes are listed in [the gallery][my_gallery_url].

**Favicon Example**
```bash
$ fur favicon --font-theme a --color-theme e --text k my-favicon.svg
```

[See more examples](#favicon-example).


<a name="generate-a-badge"></a>
### Generate a Badge ###

Generate a badge with themes.

**Badge Help**
<!-- START readme_task.badgeCommand generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

```bash
$ fur badge -h

  Usage: badge [options] <filename>

  Options:

    -h, --help                 output usage information
    -C, --color-theme [theme]  Color theme name.
    -S, --style [style]        Image style. "default" or "flat".
    -t, --texts [texts]        Texts to print on badge.Comma separated.

```

<!-- END readme_task.badgeCommand generated contents please keep comment here to allow auto update -->

Theme names are short letters like 'a', 'b'.
Available themes are listed in [the gallery][my_gallery_url].

**Badge Example**
```bash
$ fur favicon --style="flat" --color-theme e --texts foo,bar my-badge.svg
```

[See more examples](#badge-example).


<a name="convert-to-ico"></a>
### Convert to ICO ###

Convert a png file into ico format.

**ICO Help**

<!-- START readme_task.icoCommand generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

```bash
$ fur ico -h

  Usage: ico [options] <src>,<dest>

  Options:

    -h, --help  output usage information

```

<!-- END readme_task.icoCommand generated contents please keep comment here to allow auto update -->

**ICO Example**

```bash
$ fur ico my-favicon.png favicon.ico
```

Programmatic API
------

All fur commands are exports in programmatic API, too.
They are exported in "commands" namespace of the fur module.

For example,

```bash
#!/usr/bin/env node
var fur = require('fur');
fur.commands.favicon('dist/my-favicon.png', {
    text:'JJ',
    colorTheme: 'e'
}, function(err){
});
```

is equivalant to:

```bash
#!/bin/bash
fur favicon dist/my-favicon.png --text JJ --color--theme 'e'
```

Note that option args are camel-cased in programmatic API.
("--color-theme" would be "colorTheme").

Form more detail, see the [API Document][my_apiguide_commands_url]

<a name="examples"></a>
Examples
------
<!-- START readme_task.examples generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

<a name="favicon-example"></a>
### Favicon Example ###

| Output | Command |
| :------: | ------- |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/tick-tack/tick-tack-favicon.png" ><img alt="tick-tack-favicon" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/tick-tack/tick-tack-favicon.png" style="height:40px" height="40" /></a> | `$ fur favicon tick-tack-favicon.png --text tt --color-theme jr --font-theme n --font-size 290` |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/fur/fur-favicon.png" ><img alt="fur-favicon" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/fur/fur-favicon.png" style="height:40px" height="40" /></a> | `$ fur favicon fur-favicon.png --font-size 104 --text FUR --color-theme bb --font-theme by` |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/pp-abstract/pp-abstract-favicon.png" ><img alt="pp-abstract-favicon" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/pp-abstract/pp-abstract-favicon.png" style="height:40px" height="40" /></a> | `$ fur favicon pp-abstract-favicon.png --text a --color-theme a --font-theme e --font-size 260 --style circle --text-top -24 --text-left -15` |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/pp-static/pp-static-favicon.png" ><img alt="pp-static-favicon" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/pp-static/pp-static-favicon.png" style="height:40px" height="40" /></a> | `$ fur favicon pp-static-favicon.png --text s --color-theme gs --font-theme j --style bordered --text-top -24` |

<a name="badge-example"></a>
### Badge Example ###

| Output | Command |
| :------: | ------- |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/apeman/apeman-badge-default.png" ><img alt="apeman-badge-default" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/apeman/apeman-badge-default.png" style="height:10px" height="10" /></a> | `$ fur badge apeman-badge-default.png --style default --color-theme bb --texts powered by , apeman ` |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/apeman/apeman-badge-flat.png" ><img alt="apeman-badge-flat" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/apeman/apeman-badge-flat.png" style="height:10px" height="10" /></a> | `$ fur badge apeman-badge-flat.png --style flat --color-theme bb --texts powered by , apeman ` |

<!-- END readme_task.examples generated contents please keep comment here to allow auto update -->


<a name="documents"></a>
Documents
------

+ [Gallery][my_gallery_url]
+ [API Guide][my_apiguide_url]
+ [Task Guide][my_taskguide_url]
+ [Test Cases][my_testcases_url]


<a name="donation"></a>
Donation
------

Support this project and [others by okunishinishi][my_gittip_url] via [gittip][my_gittip_url].

[<img src="https://rawgithub.com/twolfson/gittip-badge/0.2.0/dist/gittip.png" alt="Support via Gittip"/>][my_gittip_url]



<a name="license"></a>
License
-------

This software is released under the [MIT License][my_license_url].


<a name="dependencies"></a>
Dependencies
-----

<!-- START readme_task.readmeDependencies generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

<a name="npm dependencies"></a>
**npm dependencies**

| name | version | description | license |
| :----- | :-----: | :----- | :-----: |
| [async](https://github.com/caolan/async) | 0.8.0 | Higher-order functions and common patterns for asynchronous code | MIT |
| [change-case](https://github.com/blakeembrey/change-case) | 2.1.1 | Convert a string between camelCase, PascalCase, Title Case, snake_case and more. | MIT |
| [canvas](https://github.com/learnboost/node-canvas) | 1.1.3 | Canvas graphics API backed by Cairo |  |
| [color-scheme](https://github.com/c0bra/color-scheme-js) | 0.0.5 | Generate pleasant color schemes | BSD |
| [commander](https://github.com/visionmedia/commander.js) | 2.2.0 | the complete solution for node.js command-line programs |  |
| [cheerio](https://github.com/MatthewMueller/cheerio) | 0.15.0 | Tiny, fast, and elegant implementation of core jQuery designed specifically for the server |  |
| [cli-color](https://github.com/medikoo/cli-color) | 0.3.2 | Colors, formatting and other tools for the console |  |
| [dot](http://github.com/olado/doT) | 1.0.2 | Concise and fast javascript templating compatible with nodejs and other javascript environments |  |
| [fabric](https://github.com/kangax/fabric.js) | 1.4.3 | Object model for HTML5 canvas, and SVG-to-canvas parser. Backed by jsdom and node-canvas. | MIT |
| [glob](https://github.com/isaacs/node-glob) | 3.2.9 | a little globber | BSD |
| [imagemagick](https://github.com/rsms/node-imagemagick) | 0.1.3 | A wrapper around the imagemagick cli | MIT |
| [mkdirp](https://github.com/substack/node-mkdirp) | 0.4.0 | Recursively mkdir, like `mkdir -p` | MIT |
| [onecolor](https://github.com/One-com/one-color) | 2.4.0 | Javascript color object with implicit color space conversions. Supports RGB, HSV, HSL and CMYK with alpha channel. |  |
| [svgo](http://svg.github.com/svgo/) | 0.4.4 | Nodejs-based tool for optimizing SVG vector graphics files | MIT |
| [phantomjs](https://github.com/Obvious/phantomjs) | 1.9.7-5 | Headless WebKit with JS API | Apache-2.0 |


<!-- END readme_task.readmeDependencies generated contents please keep comment here to allow auto update -->


<a name="links"></a>
Links
-----

+ [Repository at github][my_repository_url]
+ [Theme Design Gallery][my_gallery_url]
+ [Coverage Report by Istanbul][my_coverage_url]
+ [Build at travis][my_travis_url]


[nodejs_url]: http://nodejs.org/
[npm_url]: https://www.npmjs.org/
[grunt_url]: http://gruntjs.com/
[grunt_badge_url]: http://cdn.gruntjs.com/builtwith.png
[cairo_url]: http://cairographics.org/
[inkscape_url]: http://www.inkscape.org/en/
[node_canvas_url]: https://www.npmjs.org/package/canvas
[node_canvas_install_wiki_url]: https://github.com/LearnBoost/node-canvas/wiki/_pages
[image_magick_url]: http://www.imagemagick.org/
[my_repository_url]: https://github.com/tick-tack/fur
[my_travis_url]: https://travis-ci.org/tick-tack/fur
[my_travis_badge_url]: http://img.shields.io/travis/tick-tack/fur.svg?style=flat
[my_apiguide_url]: http://tick-tack.github.io/fur/apiguide/
[my_apiguide_commands_url]: http://tick-tack.github.io/fur/apiguide/commands.html
[my_taskguide_url]: http://tick-tack.github.io/fur/taskguide/
[my_testcases_url]: http://tick-tack.github.io/fur/testcases/
[my_coverage_url]: http://tick-tack.github.io/fur/coverage/lcov-report/
[my_license_url]: http://raw.github.com/tick-tack/fur/master/LICENSE
[my_gallery_url]: http://tick-tack.github.io/fur/gallery/
[my_codeclimate_url]: http://codeclimate.com/github/tick-tack/fur
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/tick-tack/fur.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/tick-tack/fur.svg?style=flat
[my_gemnasium_url]: http://gemnasium.com/tick-tack/fur
[my_gemnasium_badge_url]: http://img.shields.io/gemnasium/tick-tack/fur.svg?style=flat

[my_gittip_url]: http://www.gittip.com/okunishinishi/
[my_gittip_budge_url]: http://img.shields.io/gittip/okunishinishi.svg?style=flat


