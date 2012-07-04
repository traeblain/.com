@rem Updating Sitemap
@python .\sitemap_gen.py --config=sitemap-config.xml
@python .\fix-sitemap.py .\sitemap.xml
@mv -f .\sitemap.xml .\output\ 