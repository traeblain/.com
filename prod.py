# -*- coding: utf-8 -*- #

AUTHOR = u"Trae Blain"
SITENAME = u"Trae's Blog"
SITEDESCRIPTION = "Engineer. Father. Cyclist. Sexy. Sarcastic. Geek."
SITEURL = "http://blog.traeblain.com"
ABOUTURL = "http://traeblain.com/"
CHARSET = "utf-8"

PRODUCTION = True

THEME = "tbcom"
PATH = "src"
OUTPUT_PATH = "output"

DEFAULT_LANG = "en"
LOCALE = ("usa")
TIMEZONE = "America/Chicago"
DATE_FORMAT = {"en": ("usa", "%B %d, %Y"), }
DEFAULT_DATE_FORMAT = "%B %d, %Y"

# Menu Links
NAVLINKS = (
    ("Blog", SITEURL),
    ("Breaking The Bike", "http://breakingthebike.com/"),
    ("Feed", "/feed/"))

# Social widget
SOCIAL = (
          ("twitter", "http://twitter.com/traeblain"),
          ("facebook", "http://facebook.com/traeblain"), )

PLUGINS = ["pelican.plugins.assets", ]
MD_EXTENSIONS = ["codehilite", "extra", "toc", ]

ARTICLE_URL = "{date:%Y}/{slug}"
ARTICLE_SAVE_AS = "{date:%Y}/{slug}.html"
TAG_URL = "tags/{name}"
TAG_SAVE_AS = "tags/{name}.html"
CATEGORY_URL = "{name}"
CATEGORY_SAVE_AS = "{name}/index.html"
PAGE_DIR = "pages"
PAGE_URL = "{slug}"
PAGE_SAVE_AS = "{slug}.html"
AUTHOR_SAVE_AS = False

DIRECT_TEMPLATES = ("index", "tags", "archives")
STATIC_PATHS = ["images", "wp-content"]
FILES_TO_COPY = (("extras/.htaccess", ".htaccess"),
                 ("extras/robots.txt", "robots.txt"), )

RELATIVE_URLS = False

FEED_ATOM = "atom.xml"
FEED_MAX_ITEMS = 15

TAG_CLOUD_STEPS = 8
TAG_CLOUD_MAX_ITEMS = 40

DEFAULT_PAGINATION = 15

DISQUS_SITENAME = "traeblain"
gOOGLE_ANALYTICS = "UA-8704728-2"
TWITTER_USERNAME = "traeblain"

ASSET_CONFIG = (('less_bin', 'lessc.cmd'),)
