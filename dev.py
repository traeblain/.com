# -*- coding: utf-8 -*- #

AUTHOR = u"Trae Blain"
SITENAME = u"Trae's Blog"
SITEURL = 'http://tbcom.site44.com'
ABOUTURL = 'http://tbcom.site44.com/'
TIMEZONE = "America/Chicago"
LOCALE = ('usa')
DATE_FORMAT = {'en': ('usa', '%B %d, %Y'),}
PRODUCTION = False

PLUGINS = ['pelican.plugins.assets',]
THEME = 'tbcom'
OUTPUT_PATH = '..\\Apps\\site44\\tbcom.site44.com'
PATH = 'src'

DEFAULT_LANG = 'en'
DEFAULT_DATE_FORMAT = '%B %d, %Y'

# Menu Links
NAVLINKS =  (
    ('Blog', SITEURL),
    ('Breaking The Bike', 'http://breakingthebike.com/'),
    ('Feed', '/feed/')
         )

# Social widget
SOCIAL = (
          ('twitter', 'http://twitter.com/traeblain'),
          ('facebook', 'http://facebook.com/traeblain'),
         )

DEFAULT_PAGINATION = 15

MD_EXTENSIONS = ['codehilite','extra','toc',]

ARTICLE_URL = '{date:%Y}/{slug}.html'
ARTICLE_SAVE_AS = '{date:%Y}/{slug}.html'
TAG_URL = 'tags/{name}.html'
TAG_SAVE_AS = 'tags/{name}.html'
CATEGORY_URL = '{name}'
CATEGORY_SAVE_AS = '{name}/index.html'
AUTHOR_SAVE_AS = False

PAGE_DIR = 'pages'
PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'

DIRECT_TEMPLATES = ('index', 'tags', 'archives')
STATIC_PATHS = ['images', 'wp-content']

RELATIVE_URLS = False

FEED_ATOM = 'atom.xml'
FEED_MAX_ITEMS = 15

TAG_CLOUD_STEPS = 8
TAG_CLOUD_MAX_ITEMS = 40

DISQUS_SITENAME = 'traeblain'
GOOGLE_ANALYTICS = 'UA-8704728-2'
TWITTER_USERNAME = 'traeblain'
CHARSET = "utf-8"
SITEDESCRIPTION = "Engineer. Father. Cyclist. Sexy. Sarcastic. Geek."

FILES_TO_COPY = (('extras/.htaccess','.htaccess'),)