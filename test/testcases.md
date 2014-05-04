fur testcases
=====

Testcases for [fur][my_repo] project.


Test Cases
-----

- [binTestJs][]
- [lib][]
    - [lib/badges][]
        - [lib/badges/defineBadgeTestJs][]
        - [lib/badges/ghBadgeTestJs][]
        - [lib/badges/badgeTestJs][]
        - [lib/badges/defaultBadgeTestJs][]
        - [lib/badges/flatBadgeTestJs][]
    - [lib/catalogsTestJs][]
    - [lib/commands][]
        - [lib/commands/faviconTestJs][]
        - [lib/commands/icoTestJs][]
    - [lib/convertPngToIcoTestJs][]
    - [lib/generateBadgeTestJs][]
    - [lib/generateFaviconTestJs][]
    - [lib/icons][]
        - [lib/icons/defineIconTestJs][]
        - [lib/icons/iconTestJs][]
        - [lib/icons/textIconTestJs][]
    - [lib/images][]
        - [lib/images/fabricImageTestJs][]
        - [lib/images/imageTestJs][]
    - [lib/util][]
        - [lib/util/alphabeticalIndexTestJs][]
        - [lib/util/defineTestJs][]
        - [lib/util/fallbackCopyTestJs][]
        - [lib/util/printTestJs][]
        - [lib/util/renderDotTmplTestJs][]
        - [lib/util/writeReadonlyFileTestJs][]
        - [lib/util/writeSvgFileTestJs][]


Test Codes
-----



### binTestJs ###


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

### lib/badges/defineBadgeTestJs ###


Define badge.
```javascript
function (test) {
    var Badge = defineBadge({

    });
    test.ok(Badge);
    test.done();
}
```

### lib/badges/ghBadgeTestJs ###


Gh badge.
```javascript
function (test) {
    test.ok(_ghBadge());
    test.done();
}
```

### lib/badges/badgeTestJs ###


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

### lib/badges/defaultBadgeTestJs ###


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

### lib/badges/flatBadgeTestJs ###


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

### lib/catalogsTestJs ###


Catalogs.
```javascript
function (test) {
    test.ok(catalogs.colorSchemeCatalog);
    test.ok(catalogs.webFontCatalog);
    test.done();
}
```

### lib/commands/faviconTestJs ###


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

### lib/commands/icoTestJs ###


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

### lib/convertPngToIcoTestJs ###


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

### lib/generateBadgeTestJs ###


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

### lib/generateFaviconTestJs ###


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

### lib/icons/defineIconTestJs ###


Define icon.
```javascript
function (test) {
    test.ok(defineIcon({}));
    test.done();
}
```

### lib/icons/iconTestJs ###


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

### lib/icons/textIconTestJs ###


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

### lib/images/fabricImageTestJs ###


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

### lib/images/imageTestJs ###


Image.
```javascript
function (test) {
    new Image().toSVG(function (err) {
        test.ok(err);
        test.done();
    });
}
```

### lib/util/alphabeticalIndexTestJs ###


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

### lib/util/defineTestJs ###


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

### lib/util/fallbackCopyTestJs ###


Fallback copy.
```javascript
function (test) {
    test.ok(fallbackCopy({}, {}));
    test.ok(fallbackCopy({}));
    test.ok(fallbackCopy({foo: 'bar'}));
    test.done();
}
```

### lib/util/printTestJs ###


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

### lib/util/renderDotTmplTestJs ###


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

### lib/util/writeReadonlyFileTestJs ###


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

### lib/util/writeSvgFileTestJs ###


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

[my_repo]: https://github.com/tick-tack/fur