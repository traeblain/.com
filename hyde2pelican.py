import sublime, sublime_plugin
import re

class HydeToPelicanCommand(sublime_plugin.TextCommand):
  def run(self, edit):

    # Finds all Hyde "Media" links and converts them.
    media_list = self.view.find_all('\[\[!!.*?\]\]')
    for i,media in enumerate(media_list):
      media = sublime.Region(media.a + (2 * i), media.b + (2 * i))
      media_string = self.view.substr(media)
      self.view.replace(edit, media, '/static/' + media_string[4:-2])

    # Finds all Hyde local links
    local_list = self.view.find_all('\[\[.*?\]\]')
    for i,local in enumerate(local_list):
      local = sublime.Region(local.a - (3 * i), local.b - (3 * i))
      local_string = self.view.substr(local)
      self.view.replace(edit, local, '/' + local_string[2:-2])

    # Remove Jinja2 items
    findjinja = self.view.find_all('\{.*?\}\}?\n?\n?')
    length = 0
    for jinja in findjinja:
      jinja = sublime.Region(jinja.a - length, jinja.b - length)
      self.view.erase(edit, jinja)
      length = length + jinja.size()

    # Reformats YAML area in Hyde to Pelican's input list 
    find_yamlarea = self.view.find_all('---')
    yamlarea = sublime.Region(find_yamlarea[0].a, find_yamlarea[1].b)
    yamltext = self.view.substr(yamlarea)
    self.view.erase(edit, yamlarea)

    retitle = re.compile('title: (.*)\n')
    title = retitle.search(yamltext)

    redate = re.compile('created: !!timestamp \'(\d{4})-(\d{2})-(\d{2})T([0-9][0-9]?):(\d{2}).*\'\n')
    fdate = redate.search(yamltext)
    date = fdate.group(1) + '-' + fdate.group(2) + '-' + fdate.group(3) + ' ' + fdate.group(4) + ':' + fdate.group(5)

    retag = re.compile('tags:.*?\n(\s*- (.*)\n)(\s*- (.*)\n)?(\s*- (.*)\n)?(\s*- (.*)\n)?(\s*- (.*)\n)?(\s*- (.*)\n)?')
    ftags = retag.search(yamltext)
    tags = u''
    for i in range(2,14,2):
      if ftags.group(i):
        tags = tags + ftags.group(i) + ', '

    # Gets the Slug
    filename = self.view.file_name()
    fslug = re.search(r'.*\\(.*)\.html', filename)
    slug = fslug.group(1)

    self.view.insert(edit, 0, """Title: """ + title.group(1) + """
Date: """ + date + """
Tags: """ + tags[:-2] + """
Slug: """ + slug)

    # Add third colon to code area
    findcodes = self.view.find_all('    ::')
    for i,code in enumerate(findcodes):
      code = sublime.Region(code.a + i, code.b + i)
      self.view.replace(edit, code, '    :::')