# -*- coding: utf-8 -*- #

import sys
sys.path.append('.')
from prod import *

SITEURL = 'http://localhost:8000'
PRODUCTION = False

ARTICLE_URL = '{date:%Y}/{slug}.html'
TAG_URL = 'tags/{name}.html'
CATEGORY_URL = '{name}'

PAGE_URL = '{slug}.html'
