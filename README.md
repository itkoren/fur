fur
===

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![dependencies][my_gemnasium_badge_url]][my_gemnasium_url]
[![Git tip][my_gittip_budge_url]][my_gittip_url]

Front end design tool.    
Generate images and stylesheets.   

<a href="https://github.com/tick-tack/fur"><img style="height:40px;" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/fur/fur-logo.png" height="40"></a>&nbsp;<a href="http://nodejs.org/"><img style="height:40px;" src="http://nodejs.org/images/logos/nodejs-dark.png" height="40"></a>&nbsp;<a href="https://nodei.co/npm/fur/"><img style="height:40px;" src="https://nodei.co/npm/fur.png" height="40"></a>


Table of Contents
-----

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Usage](#usage)
- [Programmatic API](#programmatic-api)
- [Examples](#examples)
  - [Badge Examples](#badge-examples)
  - [Favicon Examples](#favicon-examples)
  - [Logo Examples](#logo-examples)
- [Documents](#documents)
- [Donation](#donation)
- [License](#license)
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

<!-- START readme_task.furCommand generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

```bash
$ fur -h

  Usage: fur [options] [command]

  Commands:

    badge [options] <filename> Generate a badge.
    favicon [options] <filename> Generate a favicon.
    ico <src> <dest>       Convert a png file to ico file.
    logo [options]         Generate a logo.
    resize [options] <src> <dest> Resize a image.
    woff <src> <dest>      Convert a ttf file to woff.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

<!-- END readme_task.furCommand generated contents please keep comment here to allow auto update -->

<!-- START readme_task.commandsWiki generated contents. please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN grunt readme TO UPDATE -->

+ [badge](https://github.com/tick-tack/fur/wiki/fur-badge)
+ [favicon](https://github.com/tick-tack/fur/wiki/fur-favicon)
+ [ico](https://github.com/tick-tack/fur/wiki/fur-ico)
+ [log](https://github.com/tick-tack/fur/wiki/fur-log)
+ [resize](https://github.com/tick-tack/fur/wiki/fur-resize)
+ [woff](https://github.com/tick-tack/fur/wiki/fur-woff)

<!-- END readme_task.commandsWiki generated contents please keep comment here to allow auto update -->

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

<a name="badge-examples"></a>
### Badge Examples ###

| Output | Command |
| :------: | ------- |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/apeman/apeman-badge-default.png" ><img alt="apeman-badge-default" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/apeman/apeman-badge-default.png" style="height:10px" height="10" /></a> | `$ fur badge apeman-badge-default.png --style default --color-theme bb --texts powered by , apeman ` |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/apeman/apeman-badge-flat.png" ><img alt="apeman-badge-flat" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/apeman/apeman-badge-flat.png" style="height:10px" height="10" /></a> | `$ fur badge apeman-badge-flat.png --style flat --color-theme bb --texts powered by , apeman ` |

<a name="favicon-examples"></a>
### Favicon Examples ###

| Output | Command |
| :------: | ------- |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/tick-tack/tick-tack-favicon.png" ><img alt="tick-tack-favicon" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/tick-tack/tick-tack-favicon.png" style="height:40px" height="40" /></a> | `$ fur favicon tick-tack-favicon.png --text tt --color-theme jr --font-theme n --font-size 145` |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/fur/fur-favicon.png" ><img alt="fur-favicon" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/fur/fur-favicon.png" style="height:40px" height="40" /></a> | `$ fur favicon fur-favicon.png --font-size 52 --text FUR --color-theme bb --font-theme by` |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/pp-abstract/pp-abstract-favicon.png" ><img alt="pp-abstract-favicon" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/pp-abstract/pp-abstract-favicon.png" style="height:40px" height="40" /></a> | `$ fur favicon pp-abstract-favicon.png --text a --color-theme a --font-theme e --font-size 130 --style circle --text-top -12 --text-left -7` |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/pp-static/pp-static-favicon.png" ><img alt="pp-static-favicon" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/pp-static/pp-static-favicon.png" style="height:40px" height="40" /></a> | `$ fur favicon pp-static-favicon.png --text s --color-theme gs --font-theme j --style bordered --text-top -12` |

<a name="logo-examples"></a>
### Logo Examples ###

| Output | Command |
| :------: | ------- |
| <a href="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/fur/fur-logo.png" ><img alt="fur-logo" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/fur/fur-logo.png" style="height:40px" height="40" /></a> | `$ fur logo fur-logo.png --font-size 104 --text FUR --color-theme bb --font-theme by --height 256 --width 358.4` |


<!-- END readme_task.examples generated contents please keep comment here to allow auto update -->



<a name="documents"></a>
Documents
------

+ [Wiki][my_wiki_url]
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
[node_canvas_url]: https://www.npmjs.org/package/canvas
[node_canvas_install_wiki_url]: https://github.com/LearnBoost/node-canvas/wiki/_pages
[image_magick_url]: http://www.imagemagick.org/
[my_repository_url]: https://github.com/tick-tack/fur
[my_wiki_url]: https://github.com/tick-tack/fur/wiki
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


