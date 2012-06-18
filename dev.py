# -*- coding: utf-8 -*- #

AUTHOR = u"Trae Blain"
SITENAME = u"Trae's Blog"
SITEURL = 'http://localhost:8000'
ABOUTURL = 'http://traeblain.com/'
TIMEZONE = "America/Chicago"
LOCALE = ('usa')
DATE_FORMAT = {'en': ('usa', '%B %d, %Y'),}
PRODUCTION = False

DEFAULT_LANG = 'en'
DEFAULT_DATE_FORMAT = '%B %d, %Y'

# Menu Links
NAVLINKS =  (
    ('Blog', 'http://blog.traeblain.com/'),
    ('Breaking The Bike', 'http://breakingthebike.com/'),
    ('Feed', '/feed')
         )

# Social widget
SOCIAL = (
          ('twitter', 'http://twitter.com/traeblain'),
          ('facebook', 'http://facebook.com/traeblain'),
         )

DEFAULT_PAGINATION = 15

MD_EXTENSIONS = ['codehilite','extra','toc',]

ARTICLE_URL = '{date:%Y}/{slug}'
ARTICLE_SAVE_AS = '{date:%Y}/{slug}.html'
TAG_URL = 'tags/{name}'
TAG_SAVE_AS = 'tags/{name}.html'
CATEGORY_SAVE_AS = False
AUTHOR_SAVE_AS = False

PAGE_DIR = 'pages'
PAGE_URL = '{slug}'
PAGE_SAVE_AS = '{slug}.html'

DIRECT_TEMPLATES = ('index', 'tags', 'archives')
STATIC_PATHS = ['images', 'wp-content']
WEBASSETS = True

RELATIVE_URLS = False

FEED = 'atom.xml'
FEED_MAX_ITEMS = 15

TAG_CLOUD_STEPS = 8
TAG_CLOUD_MAX_ITEMS = 40

DISQUS_SITENAME = 'traeblain'
GOOGLE_ANALYTICS = 'UA-8704728-2'
TWITTER_USERNAME = 'traeblain'
CHARSET = "utf-8"
SITEDESCRIPTION = "Engineer. Father. Cyclist. Sexy. Sarcastic. Geek."

FILES_TO_COPY = (('extras/.htaccess','.htaccess'),)