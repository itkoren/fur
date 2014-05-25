#!/usr/bin/env python
# -*- coding: utf-8 -*-


import fontTools.ttLib.tables
import fontTools.ttLib
import sys
import os.path

if len(sys.argv) < 2:
    print "font file not specified"
    sys.exit(1)

path = sys.argv[1]
if not os.path.exists(path):
    print "file not found: %s" % path
    sys.exit()

output_path = sys.argv[2]


s = ''.join(sys.stdin.readlines())
s = unicode(s, 'utf-8')

chars = set()
for c in s:
    if ord(c) < 256:
        chars.add(c)
    else:
        chars.add("uni%04X" % ord(c));
chars.add('.notdef')

tt = fontTools.ttLib.TTFont(path)

for g in dict(tt['glyf'].glyphs):
    if g in chars:
        print "skipping %s" % g
        continue
    tt['glyf'].glyphs[g] = fontTools.ttLib.tables._g_l_y_f.Glyph()

tt.save(output_path)
print "wrote %s" % output_path