fur testcases
=====

Testcases for [fur][my_repo] project.

<a href="https://github.com/tick-tack/fur"><img style="height:40px;" src="https://raw.githubusercontent.com/tick-tack/fur/master/dist/images/fur/fur-favicon.png" height="40"></a>
&nbsp;<a href="http://nodejs.org/"><img style="height:40px;" style="height:40px;" src="http://nodejs.org/images/logos/nodejs-dark.png" height="40"></a>

Test Cases
-----

- [binTest](#bin-test)
- lib
    - badges
        - [defineBadgeTest](#lib-badges-define-badge-test)
        - [ghBadgeTest](#lib-badges-gh-badge-test)
        - [badgeTest](#lib-badges-badge-test)
        - [defaultBadgeTest](#lib-badges-default-badge-test)
        - [flatBadgeTest](#lib-badges-flat-badge-test)
    - [catalogsTest](#lib-catalogs-test)
    - commands
        - [faviconTest](#lib-commands-favicon-test)
        - [icoTest](#lib-commands-ico-test)
    - [convertPngToIcoTest](#lib-convert-png-to-ico-test)
    - [generateBadgeTest](#lib-generate-badge-test)
    - [generateFaviconTest](#lib-generate-favicon-test)
    - icons
        - [defineIconTest](#lib-icons-define-icon-test)
        - [iconTest](#lib-icons-icon-test)
        - [textIconTest](#lib-icons-text-icon-test)
    - images
        - [fabricImageTest](#lib-images-fabric-image-test)
        - [imageTest](#lib-images-image-test)
    - util
        - [alphabeticalIndexTest](#lib-util-alphabetical-index-test)
        - [defineTest](#lib-util-define-test)
        - [fallbackCopyTest](#lib-util-fallback-copy-test)
        - [printTest](#lib-util-print-test)
        - [renderDotTmplTest](#lib-util-render-dot-tmpl-test)
        - [writeReadonlyFileTest](#lib-util-write-readonly-file-test)
        - [writeSvgFileTest](#lib-util-write-svg-file-test)


Test Codes
-----


<a name="bin-test"></a>

### binTest###


Print help.
```javascript
function (test) {
    var forked = childProcess.fork(fur, ['-h'], {
        silent: true
    });
    forked.on('error', function () {
        test.ifError(new Error('Command failed.'));
    });
    forked.on('close', function (code) {
        test.equal(code, 0);
        test.done();
    });
}
```


Full source:

+ [bin_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/bin_test.js);


<a name="lib-badges-define-badge-test"></a>

### lib/badges/defineBadgeTest###


Define badge.
```javascript
function (test) {
    var Badge = defineBadge({

    });
    test.ok(Badge);
    test.done();
}
```


Full source:

+ [lib/badges/_define_badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/badges/_define_badge_test.js);


<a name="lib-badges-gh-badge-test"></a>

### lib/badges/ghBadgeTest###


Gh badge.
```javascript
function (test) {
    test.ok(_ghBadge());
    test.done();
}
```


Full source:

+ [lib/badges/_gh_badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/badges/_gh_badge_test.js);


<a name="lib-badges-badge-test"></a>

### lib/badges/badgeTest###


Badge.
```javascript
function (test) {
    var badge = new Badge();
    badge.toSVG(function (err, data) {
        test.ok(badge === this);
        test.ifError(err);
        test.ok(data);
        test.done();
    });
}
```


Full source:

+ [lib/badges/badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/badges/badge_test.js);


<a name="lib-badges-default-badge-test"></a>

### lib/badges/defaultBadgeTest###


Default badge.
```javascript
function (test) {
    var filename = testHelper.resolveWorkFile('work_badge.svg');
    new DefaultBadge().toSVG(function (err, data) {
        var badge = this;
        test.equal(badge.style(), 'default');
        test.ifError(err);
        test.ok(data);
        badge.writeAsSVG(filename, function (err) {
            test.ifError(err);
            test.ok(testHelper.existsSync(filename));
            test.done();
        });
    });
}
```


Full source:

+ [lib/badges/default_badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/badges/default_badge_test.js);


<a name="lib-badges-flat-badge-test"></a>

### lib/badges/flatBadgeTest###


Flat badge.
```javascript
function (test) {
    var badge = new FlatBadge();
    test.equal(badge.style(), 'flat');
    badge.toSVG(function (err, data) {
        test.ok(badge === this);
        test.ifError(err);
        test.ok(data);
        test.done();
    });
}
```


Full source:

+ [lib/badges/flat_badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/badges/flat_badge_test.js);


<a name="lib-catalogs-test"></a>

### lib/catalogsTest###


Catalogs.
```javascript
function (test) {
    test.ok(catalogs.colorSchemeCatalog);
    test.ok(catalogs.webFontCatalog);
    test.done();
}
```


Full source:

+ [lib/catalogs_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/catalogs_test.js);


<a name="lib-commands-favicon-test"></a>

### lib/commands/faviconTest###


Favicon.
```javascript
function (test) {
    var filename = testHelper.resolveWorkFile('work-command-favicon.svg');
    favicon(filename, {
        font: 'a',
        color: 'e',
        format: 'svg'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
}
```


Full source:

+ [lib/commands/favicon_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/commands/favicon_test.js);


<a name="lib-commands-ico-test"></a>

### lib/commands/icoTest###


Ico.
```javascript
function (test) {
    var src = testHelper.resolveMockFile('mock-png.png'),
        dest = testHelper.resolveWorkFile('work-command-ico.ico');
    ico(src, dest, {}, function (err) {
        test.ifError(err);
        test.done();
    });
}
```


Full source:

+ [lib/commands/ico_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/commands/ico_test.js);


<a name="lib-convert-png-to-ico-test"></a>

### lib/convertPngToIcoTest###


Convert png to ico.
```javascript
function (test) {
    var src = testHelper.resolveMockFile('mock-png.png'),
        dest = testHelper.resolveWorkFile('work-ico.ico');
    convertPngToIco(src, dest, function (err) {
        test.ifError(err);
        test.done();
    });
}
```


Full source:

+ [lib/convert_png_to_ico_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/convert_png_to_ico_test.js);


<a name="lib-generate-badge-test"></a>

### lib/generateBadgeTest###


Generate badge.
```javascript
function (test) {
    var filename = testHelper.resolveWorkFile('work_generateed_badge.svg');
    generateBadge(filename, {}, function (err) {
        test.ifError(err);
        test.done();
    });
}
```


Full source:

+ [lib/generate_badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/generate_badge_test.js);


<a name="lib-generate-favicon-test"></a>

### lib/generateFaviconTest###


Generate favicon.
```javascript
function (test) {
    var filename = testHelper.resolveWorkFile('work_favicon.svg');
    generateFavicon(filename, {
        letter: 'P',
        format: 'svg',
        fontFilename: testHelper.resolveMockFile('mock-font.ttf'),
        fontFamily: 'mock-font'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
}
```


Full source:

+ [lib/generate_favicon_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/generate_favicon_test.js);


<a name="lib-icons-define-icon-test"></a>

### lib/icons/defineIconTest###


Define icon.
```javascript
function (test) {
    test.ok(defineIcon({}));
    test.done();
}
```


Full source:

+ [lib/icons/_define_icon_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/icons/_define_icon_test.js);


<a name="lib-icons-icon-test"></a>

### lib/icons/iconTest###


Icon.
```javascript
function (test) {
    var icon = new Icon();
    test.ok(icon.draw());
    var filename = testHelper.resolveWorkFile('work_icon.png');
    icon.writeAsPNG(filename, function () {
        test.done();
    });
}
```

Write as svg.
```javascript
function (test) {
    var icon = new Icon();
    test.ok(icon.draw());
    var filename = testHelper.resolveWorkFile('work_icon.svg');
    icon.writeAsSVG(filename, function () {
        test.done();
    });
}
```


Full source:

+ [lib/icons/icon_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/icons/icon_test.js);


<a name="lib-icons-text-icon-test"></a>

### lib/icons/textIconTest###


Text icon.
```javascript
function (test) {
    var filename = testHelper.resolveWorkFile('work_text_icon.svg');
    new TextIcon({
        text: 'foo',
        backgroundColor: '#EEE',
        fontSize:200
    }).writeAsSVG(filename, function (err) {
            test.ifError(err);
            test.done();
        });
}
```


Full source:

+ [lib/icons/text_icon_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/icons/text_icon_test.js);


<a name="lib-images-fabric-image-test"></a>

### lib/images/fabricImageTest###


SVG font family style.
```javascript
function (test) {
    new FabricImage()
        .addCustomFont('mock-font', testHelper.resolveMockFile('mock-font.ttf'))
        .svgFontFamilyStyle(function (err, style) {
            test.ifError(err);
            test.done();
        });
}
```

Fabric image.
```javascript
function (test) {
    test.ok(new FabricImage());
    test.done();
}
```


Full source:

+ [lib/images/fabric_image_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/images/fabric_image_test.js);


<a name="lib-images-image-test"></a>

### lib/images/imageTest###


Image.
```javascript
function (test) {
    new Image().toSVG(function (err) {
        test.ok(err);
        test.done();
    });
}
```


Full source:

+ [lib/images/image_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/images/image_test.js);


<a name="lib-util-alphabetical-index-test"></a>

### lib/util/alphabeticalIndexTest###


Alphabetical index.
```javascript
function (test) {
    test.equal(alphabeticalIndex(0), "a");
    test.equal(alphabeticalIndex(1), "b");
    test.equal(alphabeticalIndex(25), "z");
    test.equal(alphabeticalIndex(26), "aa");
    test.equal(alphabeticalIndex(27), "ab");
    test.equal(alphabeticalIndex(51), "az");
    test.equal(alphabeticalIndex(52), "ba");
    test.done();
}
```


Full source:

+ [lib/util/alphabetical_index_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/alphabetical_index_test.js);


<a name="lib-util-define-test"></a>

### lib/util/defineTest###


Define.
```javascript
function (test) {
    var O = define({
        accessors: ['foo']
    });
    var o = new O({});
    o.foo('bar');
    test.equal(o._foo, 'bar');
    test.equal(o.foo(), o._foo);
    test.done();
}
```


Full source:

+ [lib/util/define_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/define_test.js);


<a name="lib-util-fallback-copy-test"></a>

### lib/util/fallbackCopyTest###


Fallback copy.
```javascript
function (test) {
    test.ok(fallbackCopy({}, {}));
    test.ok(fallbackCopy({}));
    test.ok(fallbackCopy({foo: 'bar'}));
    test.done();
}
```


Full source:

+ [lib/util/fallback_copy_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/fallback_copy_test.js);


<a name="lib-util-print-test"></a>

### lib/util/printTest###


Print.
```javascript
function (test) {
    ['FALSE', 'TRUE'].forEach(function (flg) {
        process.env.FUR_PRINT_DISABLED = flg;
        print('Normal print.', 1);
        print(new Error(), {foo: 'bar'});
        print.info('Info print.', 2);
        print.ng('NG print.', 3);
        print.ng.detail('NG Detail print.', 4);
        print.ok('OK print.', 5);
        print.debug('foo');
        print._indents.push(10);
        print.debug('bar');
        print._indents.pop();
    });
    process.env.APEMAN_PRINT_DISABLED = 'FALSE';
    print('foo', 'bar');


    print._log('foo', 'bar');
    test.done();
}
```


Full source:

+ [lib/util/print_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/print_test.js);


<a name="lib-util-render-dot-tmpl-test"></a>

### lib/util/renderDotTmplTest###


Load tmpl.
```javascript
function (test) {
    var tmplFile = testHelper.resolveMockFile('mock_dot.dot');
    renderDotTmpl._loadTmpl(tmplFile, function (err, tmpl) {
        test.ifError(err);
        test.ok(tmpl);
        test.done();
    });
}
```

Render dot tmpl.
```javascript
function (test) {
    var workDir = testHelper.prepareCleanWorkDirForTestFile(__filename),
        tmplFile = testHelper.resolveMockFile('mock_dot.dot'),
        dest = workDir + '/work_rendered.txt';
    renderDotTmpl(tmplFile, {
        foo: 'bar'
    }, dest, function (err) {
        test.ok(testHelper.existsSync(dest));
        test.ifError(err);
        test.done();
    });
}
```


Full source:

+ [lib/util/render_dot_tmpl_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/render_dot_tmpl_test.js);


<a name="lib-util-write-readonly-file-test"></a>

### lib/util/writeReadonlyFileTest###


Write readonly file.
```javascript
function (test) {
    var filename = testHelper.resolveWorkFile('work_readonly_file.txt');
    writeReadonlyFile(filename, 'foo', function (err) {
        test.ifError(err);
        writeReadonlyFile(filename, 'foo', function (err) {
            test.ifError(err);
            test.done();
        });
    });
}
```


Full source:

+ [lib/util/write_readonly_file_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/write_readonly_file_test.js);


<a name="lib-util-write-svg-file-test"></a>

### lib/util/writeSvgFileTest###


Write svg file.
```javascript
function (test) {
    var filename = testHelper.resolveWorkFile('work_svg.svg');
    writeSvgFile(filename, '<svg/>', function (err) {
        test.ifError(err);
        test.done();
    });
}
```


Full source:

+ [lib/util/write_svg_file_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/write_svg_file_test.js);




[my_repo]: https://github.com/tick-tack/fur