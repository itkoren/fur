fur testcases
=====

[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]

Testcases for [fur][my_repo] project.

Runs with [nodeunit][nodeunit_url].

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
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> forked = childProcess.fork(fur, [<span class="string">'-h'</span>], {
        silent: <span class="keyword">true</span>
    });
    forked.on(<span class="string">'error'</span>, <span class="keyword">function</span> () {
        test.ifError(<span class="keyword">new</span> Error(<span class="string">'Command failed.'</span>));
    });
    forked.on(<span class="string">'close'</span>, <span class="keyword">function</span> (code) {
        test.equal(code, <span class="number">0</span>);
        test.done();
    });
}
</pre>


Full source:

+ [bin_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/bin_test.js);


<a name="lib-badges-define-badge-test"></a>

### lib/badges/defineBadgeTest###


Define badge.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> Badge = defineBadge({

    });
    test.ok(Badge);
    test.done();
}
</pre>


Full source:

+ [lib/badges/_define_badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/badges/_define_badge_test.js);


<a name="lib-badges-gh-badge-test"></a>

### lib/badges/ghBadgeTest###


Gh badge.
<pre>
<span class="keyword">function</span> (test) {
    test.ok(_ghBadge());
    test.done();
}
</pre>


Full source:

+ [lib/badges/_gh_badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/badges/_gh_badge_test.js);


<a name="lib-badges-badge-test"></a>

### lib/badges/badgeTest###


Badge.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> badge = <span class="keyword">new</span> Badge();
    badge.toSVG(<span class="keyword">function</span> (err, data) {
        test.ok(badge === <span class="keyword">this</span>);
        test.ifError(err);
        test.ok(data);
        test.done();
    });
}
</pre>


Full source:

+ [lib/badges/badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/badges/badge_test.js);


<a name="lib-badges-default-badge-test"></a>

### lib/badges/defaultBadgeTest###


Default badge.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> filename = testHelper.resolveWorkFile(<span class="string">'work_badge.svg'</span>);
    <span class="keyword">new</span> DefaultBadge().toSVG(<span class="keyword">function</span> (err, data) {
        <span class="keyword">var</span> badge = <span class="keyword">this</span>;
        test.equal(badge.style(), <span class="string">'default'</span>);
        test.ifError(err);
        test.ok(data);
        badge.writeAsSVG(filename, <span class="keyword">function</span> (err) {
            test.ifError(err);
            test.ok(testHelper.existsSync(filename));
            test.done();
        });
    });
}
</pre>


Full source:

+ [lib/badges/default_badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/badges/default_badge_test.js);


<a name="lib-badges-flat-badge-test"></a>

### lib/badges/flatBadgeTest###


Flat badge.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> badge = <span class="keyword">new</span> FlatBadge();
    test.equal(badge.style(), <span class="string">'flat'</span>);
    badge.toSVG(<span class="keyword">function</span> (err, data) {
        test.ok(badge === <span class="keyword">this</span>);
        test.ifError(err);
        test.ok(data);
        test.done();
    });
}
</pre>


Full source:

+ [lib/badges/flat_badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/badges/flat_badge_test.js);


<a name="lib-catalogs-test"></a>

### lib/catalogsTest###


Catalogs.
<pre>
<span class="keyword">function</span> (test) {
    test.ok(catalogs.colorSchemeCatalog);
    test.ok(catalogs.webFontCatalog);
    test.done();
}
</pre>


Full source:

+ [lib/catalogs_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/catalogs_test.js);


<a name="lib-commands-favicon-test"></a>

### lib/commands/faviconTest###


Favicon.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> filename = testHelper.resolveWorkFile(<span class="string">'work-command-favicon.svg'</span>);
    favicon(filename, {
        font: <span class="string">'a'</span>,
        color: <span class="string">'e'</span>,
        format: <span class="string">'svg'</span>
    }, <span class="keyword">function</span> (err) {
        test.ifError(err);
        test.done();
    });
}
</pre>


Full source:

+ [lib/commands/favicon_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/commands/favicon_test.js);


<a name="lib-commands-ico-test"></a>

### lib/commands/icoTest###


Ico.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> src = testHelper.resolveMockFile(<span class="string">'mock-png.png'</span>),
        dest = testHelper.resolveWorkFile(<span class="string">'work-command-ico.ico'</span>);
    ico(src, dest, {}, <span class="keyword">function</span> (err) {
        test.ifError(err);
        test.done();
    });
}
</pre>


Full source:

+ [lib/commands/ico_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/commands/ico_test.js);


<a name="lib-convert-png-to-ico-test"></a>

### lib/convertPngToIcoTest###


Convert png to ico.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> src = testHelper.resolveMockFile(<span class="string">'mock-png.png'</span>),
        dest = testHelper.resolveWorkFile(<span class="string">'work-ico.ico'</span>);
    convertPngToIco(src, dest, <span class="keyword">function</span> (err) {
        test.ifError(err);
        test.done();
    });
}
</pre>


Full source:

+ [lib/convert_png_to_ico_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/convert_png_to_ico_test.js);


<a name="lib-generate-badge-test"></a>

### lib/generateBadgeTest###


Generate badge.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> filename = testHelper.resolveWorkFile(<span class="string">'work_generateed_badge.svg'</span>);
    generateBadge(filename, {}, <span class="keyword">function</span> (err) {
        test.ifError(err);
        test.done();
    });
}
</pre>


Full source:

+ [lib/generate_badge_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/generate_badge_test.js);


<a name="lib-generate-favicon-test"></a>

### lib/generateFaviconTest###


Generate favicon.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> filename = testHelper.resolveWorkFile(<span class="string">'work_favicon.svg'</span>);
    generateFavicon(filename, {
        letter: <span class="string">'P'</span>,
        format: <span class="string">'svg'</span>,
        fontFilename: testHelper.resolveMockFile(<span class="string">'mock-font.ttf'</span>),
        fontFamily: <span class="string">'mock-font'</span>
    }, <span class="keyword">function</span> (err) {
        test.ifError(err);
        test.done();
    });
}
</pre>


Full source:

+ [lib/generate_favicon_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/generate_favicon_test.js);


<a name="lib-icons-define-icon-test"></a>

### lib/icons/defineIconTest###


Define icon.
<pre>
<span class="keyword">function</span> (test) {
    test.ok(defineIcon({}));
    test.done();
}
</pre>


Full source:

+ [lib/icons/_define_icon_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/icons/_define_icon_test.js);


<a name="lib-icons-icon-test"></a>

### lib/icons/iconTest###


Icon.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> icon = <span class="keyword">new</span> Icon();
    test.ok(icon.draw());
    <span class="keyword">var</span> filename = testHelper.resolveWorkFile(<span class="string">'work_icon.png'</span>);
    icon.writeAsPNG(filename, <span class="keyword">function</span> () {
        test.done();
    });
}
</pre>

Write as svg.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> icon = <span class="keyword">new</span> Icon();
    test.ok(icon.draw());
    <span class="keyword">var</span> filename = testHelper.resolveWorkFile(<span class="string">'work_icon.svg'</span>);
    icon.writeAsSVG(filename, <span class="keyword">function</span> () {
        test.done();
    });
}
</pre>


Full source:

+ [lib/icons/icon_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/icons/icon_test.js);


<a name="lib-icons-text-icon-test"></a>

### lib/icons/textIconTest###


Text icon.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> filename = testHelper.resolveWorkFile(<span class="string">'work_text_icon.svg'</span>);
    <span class="keyword">new</span> TextIcon({
        text: <span class="string">'foo'</span>,
        backgroundColor: <span class="string">'#EEE'</span>,
        fontSize:<span class="number">200</span>
    }).writeAsSVG(filename, <span class="keyword">function</span> (err) {
            test.ifError(err);
            test.done();
        });
}
</pre>


Full source:

+ [lib/icons/text_icon_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/icons/text_icon_test.js);


<a name="lib-images-fabric-image-test"></a>

### lib/images/fabricImageTest###


SVG font family style.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">new</span> FabricImage()
        .addCustomFont(<span class="string">'mock-font'</span>, testHelper.resolveMockFile(<span class="string">'mock-font.ttf'</span>))
        .svgFontFamilyStyle(<span class="keyword">function</span> (err, style) {
            test.ifError(err);
            test.done();
        });
}
</pre>

Fabric image.
<pre>
<span class="keyword">function</span> (test) {
    test.ok(<span class="keyword">new</span> FabricImage());
    test.done();
}
</pre>


Full source:

+ [lib/images/fabric_image_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/images/fabric_image_test.js);


<a name="lib-images-image-test"></a>

### lib/images/imageTest###


Image.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">new</span> Image().toSVG(<span class="keyword">function</span> (err) {
        test.ok(err);
        test.done();
    });
}
</pre>


Full source:

+ [lib/images/image_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/images/image_test.js);


<a name="lib-util-alphabetical-index-test"></a>

### lib/util/alphabeticalIndexTest###


Alphabetical index.
<pre>
<span class="keyword">function</span> (test) {
    test.equal(alphabeticalIndex(<span class="number">0</span>), <span class="string">"a"</span>);
    test.equal(alphabeticalIndex(<span class="number">1</span>), <span class="string">"b"</span>);
    test.equal(alphabeticalIndex(<span class="number">25</span>), <span class="string">"z"</span>);
    test.equal(alphabeticalIndex(<span class="number">26</span>), <span class="string">"aa"</span>);
    test.equal(alphabeticalIndex(<span class="number">27</span>), <span class="string">"ab"</span>);
    test.equal(alphabeticalIndex(<span class="number">51</span>), <span class="string">"az"</span>);
    test.equal(alphabeticalIndex(<span class="number">52</span>), <span class="string">"ba"</span>);
    test.done();
}
</pre>


Full source:

+ [lib/util/alphabetical_index_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/alphabetical_index_test.js);


<a name="lib-util-define-test"></a>

### lib/util/defineTest###


Define.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> O = define({
        accessors: [<span class="string">'foo'</span>]
    });
    <span class="keyword">var</span> o = <span class="keyword">new</span> O({});
    o.foo(<span class="string">'bar'</span>);
    test.equal(o._foo, <span class="string">'bar'</span>);
    test.equal(o.foo(), o._foo);
    test.done();
}
</pre>


Full source:

+ [lib/util/define_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/define_test.js);


<a name="lib-util-fallback-copy-test"></a>

### lib/util/fallbackCopyTest###


Fallback copy.
<pre>
<span class="keyword">function</span> (test) {
    test.ok(fallbackCopy({}, {}));
    test.ok(fallbackCopy({}));
    test.ok(fallbackCopy({foo: <span class="string">'bar'</span>}));
    test.done();
}
</pre>


Full source:

+ [lib/util/fallback_copy_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/fallback_copy_test.js);


<a name="lib-util-print-test"></a>

### lib/util/printTest###


Print.
<pre>
<span class="keyword">function</span> (test) {
    [<span class="string">'FALSE'</span>, <span class="string">'TRUE'</span>].<span class="keyword">forEach</span>(<span class="keyword">function</span> (flg) {
        process.env.FUR_PRINT_DISABLED = flg;
        <span class="keyword">print</span>(<span class="string">'Normal print.'</span>, <span class="number">1</span>);
        <span class="keyword">print</span>(<span class="keyword">new</span> Error(), {foo: <span class="string">'bar'</span>});
        <span class="keyword">print</span>.info(<span class="string">'Info print.'</span>, <span class="number">2</span>);
        <span class="keyword">print</span>.ng(<span class="string">'NG print.'</span>, <span class="number">3</span>);
        <span class="keyword">print</span>.ng.detail(<span class="string">'NG Detail print.'</span>, <span class="number">4</span>);
        <span class="keyword">print</span>.ok(<span class="string">'OK print.'</span>, <span class="number">5</span>);
        <span class="keyword">print</span>.debug(<span class="string">'foo'</span>);
        <span class="keyword">print</span>._indents.push(<span class="number">10</span>);
        <span class="keyword">print</span>.debug(<span class="string">'bar'</span>);
        <span class="keyword">print</span>._indents.pop();
    });
    process.env.APEMAN_PRINT_DISABLED = <span class="string">'FALSE'</span>;
    <span class="keyword">print</span>(<span class="string">'foo'</span>, <span class="string">'bar'</span>);


    <span class="keyword">print</span>._log(<span class="string">'foo'</span>, <span class="string">'bar'</span>);
    test.done();
}
</pre>


Full source:

+ [lib/util/print_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/print_test.js);


<a name="lib-util-render-dot-tmpl-test"></a>

### lib/util/renderDotTmplTest###


Load tmpl.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> tmplFile = testHelper.resolveMockFile(<span class="string">'mock_dot.dot'</span>);
    renderDotTmpl._loadTmpl(tmplFile, <span class="keyword">function</span> (err, tmpl) {
        test.ifError(err);
        test.ok(tmpl);
        test.done();
    });
}
</pre>

Render dot tmpl.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> workDir = testHelper.prepareCleanWorkDirForTestFile(__filename),
        tmplFile = testHelper.resolveMockFile(<span class="string">'mock_dot.dot'</span>),
        dest = workDir + <span class="string">'/work_rendered.txt'</span>;
    renderDotTmpl(tmplFile, {
        foo: <span class="string">'bar'</span>
    }, dest, <span class="keyword">function</span> (err) {
        test.ok(testHelper.existsSync(dest));
        test.ifError(err);
        test.done();
    });
}
</pre>


Full source:

+ [lib/util/render_dot_tmpl_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/render_dot_tmpl_test.js);


<a name="lib-util-write-readonly-file-test"></a>

### lib/util/writeReadonlyFileTest###


Write readonly file.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> filename = testHelper.resolveWorkFile(<span class="string">'work_readonly_file.txt'</span>);
    writeReadonlyFile(filename, <span class="string">'foo'</span>, <span class="keyword">function</span> (err) {
        test.ifError(err);
        writeReadonlyFile(filename, <span class="string">'foo'</span>, <span class="keyword">function</span> (err) {
            test.ifError(err);
            test.done();
        });
    });
}
</pre>


Full source:

+ [lib/util/write_readonly_file_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/write_readonly_file_test.js);


<a name="lib-util-write-svg-file-test"></a>

### lib/util/writeSvgFileTest###


Write svg file.
<pre>
<span class="keyword">function</span> (test) {
    <span class="keyword">var</span> filename = testHelper.resolveWorkFile(<span class="string">'work_svg.svg'</span>);
    writeSvgFile(filename, <span class="string">'&lt;svg/>'</span>, <span class="keyword">function</span> (err) {
        test.ifError(err);
        test.done();
    });
}
</pre>


Full source:

+ [lib/util/write_svg_file_test.js](https://github.com/tick-tack/fur/blob/master/test/unit_tests/lib/util/write_svg_file_test.js);




Links
-----

+ project
    + [fur repository][my_repo]
    + [fur coverage][my_coverage_url]
+ external
    + [nodejs][nodejs_url]
    + [nodeunit][nodeunit_url]



[nodejs_url]: http://nodejs.org/
[nodeunit_url]: https://github.com/caolan/nodeunit
[my_repo]: https://github.com/tick-tack/fur
[my_coverage_url]: http://tick-tack.github.io/fur/coverage/lcov-report/
[my_codeclimate_url]: http://codeclimate.com/github/tick-tack/fur
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/tick-tack/fur.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/tick-tack/fur.svg?style=flat



<style>
pre code{display:block;padding:.5em;color:#000;background:#f8f8ff}pre .comment,pre .diff .header,pre .javadoc,pre .template_comment{color:#998;font-style:italic}pre .css .rule .keyword,pre .javascript .title,pre .keyword,pre .lisp .title,pre .subst,pre .winutils{color:#000;font-weight:700}pre .hexcolor,pre .number{color:#40a070}pre .phpdoc,pre .string,pre .tag .value,pre .tex .formula{color:#d14}pre .id,pre .title{color:#900;font-weight:700}pre .javascript .title,pre .lisp .title,pre .subst{font-weight:400}pre .class .title,pre .haskell .label,pre .tex .command{color:#458;font-weight:700}pre .django .tag .keyword,pre .rules .property,pre .tag,pre .tag .title{color:navy;font-weight:400}pre .attribute,pre .instancevar,pre .lisp .body,pre .variable{color:teal}pre .regexp{color:#009926}pre .class{color:#458;font-weight:700}pre .input_number,pre .lisp .keyword,pre .ruby .symbol .keymethods,pre .ruby .symbol .keyword,pre .ruby .symbol .string,pre .symbol,pre .tex .special{color:#990073}pre .built_in,pre .builtin,pre .lisp .title{color:#0086b3}pre .cdata,pre .doctype,pre .pi,pre .preprocessor,pre .shebang{color:#999;font-weight:700}pre .deletion{background:#fdd}pre .addition{background:#dfd}pre .diff .change{background:#0086b3}pre .chunk{color:#aaa}pre .tex .formula{opacity:.5}
</style>