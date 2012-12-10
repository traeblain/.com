# -*- coding: utf-8 -*- #

import sys
sys.path.append('.')
from prod import *

SITEURL = 'http://tbcom.site44.com'
ABOUTURL = 'http://tbcom.site44.com/'
PRODUCTION = False

OUTPUT_PATH = '..\\Apps\\site44\\tbcom.site44.com'

ARTICLE_URL = '{date:%Y}/{slug}.html'
TAG_URL = 'tags/{name}.html'
CATEGORY_URL = '{name}'

PAGE_URL = '{slug}.html'
