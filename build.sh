#!/bin/bash

pelican -s prod.py
python sitemap_gen.py --config=sitemap-config.xml
python fix-sitemap.py sitemap.xml
mv -f sitemap.xml ./output
 