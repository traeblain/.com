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

    # Reformats YAML area in Hyde to Pelican's input list 
    find_yamlarea = self.view.find_all('---')
    yamlarea = sublime.Region(find_yamlarea[0].a, find_yamlarea[1].b)
    yamltext = self.view.substr(yamlarea)
    self.view.erase(edit, yamlarea)

    retitle = re.compile('title: (.*)\n')
    title = retitle.search(yamltext)

    self.view.insert(edit, 0, """Title: """ + title.group(1) + """
Date: 
Tags:
Slug:""")

