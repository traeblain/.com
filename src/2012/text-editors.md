Title: Windows Text Editors
Date: 2012-02-27 22:45
Tags: software, technology, tools
Slug: text-editors

Changing from [Wordpress][] to [Hyde][] has put me back into the text editor much more often. I have used a number of text editors, but have found that Linux and even OS X have a better set of text editors. I chalk that up to terminal based systems, as Windows has always been built around the 'graphical experience'.

Just using Window's Notepad puts you at a distinct disadvantage. There are so many things that notepad fails miserably at that you can't use it for anything other than some quick editing. Just know there are better alternatives out there. Here's my list of text editors that I have used and would recommend for my fellow windows users.

## Notepad++

![Notepad++ Screenshot](http://notepad-plus-plus.org/assets/images/screenshot4.png "Notepad++ Screenshot")

[Notepad++][] is a [Scintilla][] based text editor and is specifically built for Windows. It's built to be fairly lightweight and easy to use. It's loaded with a tabbed interface and toolbar. It also includes the great niceties like line numbers, expandable tree coding, and [panties](http://www.cafepress.com/notepadplus.438602892). 

Key features I like to use are:

- Powerful Find and Replace (including across multiple files)
- Plugins
  This is key. Anything you might be missing can be found here. In fact, most of the items below are accomplished with plugins.
- Syntax Highlighting
- Spell Check
  This is an under-appreciated function not found in many text editors. But when using a text editor as a tool beyond coding, I find it invaluable.
- Scripting Capability
  Notepad ++ allows you to script into tool. In other words, you could write your own programs to get the editor to work the way you want. For instance, this script adds the [Hyde][] headers to my posts:

        :::python
        from datetime import datetime as dt

        editor.gotoPos(0)
        editor.addText("""---
        title: New Hyde Post
        created: !!timestamp '""" + dt.now().strftime('%Y-%m-%dT%H:%M:%S-6:00').encode('utf8') + """'
        tags:
          - general
        ---
        
        Start Editing Here!
        
        """)

- Included FTP
- TextFX
  TextFX is a suite of very useful text editing tools.

## Programmer's Notepad

![Programmers Notepad Screenshot](http://www.pnotepad.org/wp-content/uploads/2006/12/pnvista.png "Programmer's Notepad Screenshot")

[Programmer's Notepad][pn] looks very similar to Notepad++, primarily because it is also a [Scintilla][] based editor, but feels more streamline and snappier (although that's debatable). It has a host of features, from Tabbed interface and syntax highlighting. For the longest time, this text editor felt right. It was what I used most of the time. When I started needing multi-line [Regex](https://en.wikipedia.org/wiki/Regular_expression) and Spell Check, I moved to Notepad++. 

Key Features are:

- Speed
- Syntax Highlighting
- Scripting (using PyPN)
- TextUtils

I know it appears Notepad++ is the more feature filled editor (which it is), but Programmer's Notepad should be seriously considered before you decide which you use.

## Sublime Text 2

![Sublime Text 2 Screenshot](http://www.sublimetext.com/screenshots/new_theme_large.png "Sublime Text 2 Screenshot")

[Sublime Text][st] is what I have been using lately. Mainly because it contains the nicest (although a bit incomplete) [markdown](http://daringfireball.net/projects/markdown/) syntax highlighting. But it does include all the things I really want in a text editor. It looks great and works well. 

Sublime Text includes these key features:

- Tabbed Interface
- Syntax Highlighting
- Macros and Snippets
- Plugins (which work similarly to a scripting language)
- Speed
- Spell Check
- Multiple Selections

There's a few things that I haven't figured out just yet. There is no toolbar, but nice commands and command pad. Plus you really need to dig through the keyboard commands to full utilize the power of Sublime Text. I've also used [Q10](http://www.baara.com/q10/) to write in a distraction free environment before and Sublime Text does this just as well, if not better.

The only downside to Sublime Text is it's not a free program. Where you are not given a limiting product when you use the editor for extended use, but you will see a nag screen. Purchase price is $59 for a single license, but a small price to support a great application.

# Summarize

Personally I feel the three best text editors available for Windows users is [Notepad++][], [Programmer's Notepad][pn], and [Sublime Text][st]. For power **Notepad++** works great, for speed but still powerful use **Programmer's Notepad**, and for-all-of-the-above and a great bit of style use **Sublime Text**. Sublime's my preference right now.

[Wordpress]: http://www.wordpress.org/
[Hyde]: http://hyde.github.com/
[Notepad++]: http://notepad-plus-plus.org/
[Scintilla]: http://www.scintilla.org/
[pn]: http://pnotepad.org/
[st]: http://www.sublimetext.com/
