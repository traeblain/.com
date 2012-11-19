Title: Python for Windows
Date: 2012-11-19 15:02:00
Tags: python, tools, software
Slug: python-for-windows

As you probably know if you follow my site, that I've become a pretty big Python fan.  I feel that Python should be [pushed more at Universities][pythonu] for mathematical computation, it can be used at a [wrapper for other programs][pythonwrap], and much more.  The issue is (as it is with most programming languages) that Windows support is secondary and *nix support is held primary.  But that doesn't mean you are totally out of the woods here.  There actually is great support for Python in Windows, but most will need a little help.  Never fear, that's what I'm here for.

### Python.org Windows Installer

![Python.org](/static/images/2012/pythonorg.png "Python.org alignleft")

This is a great start.  You get [vanilla Python][pythonorg] in your install, and you can build from there.  The problem is that you have to build from there with little or no help forward.  Not necessarily a problem, but something to consider.

Personally, I feel there are better packages out there.  Read on...

<br class="clear" />

### PythonXY

![PythonXY](/static/images/2012/pythonxy.png "PythonXY alignleft")

This is my current package of choice (although I am investigating others further, so read on).  [PythonXY][] is a scientific and engineering package focused around numerical computations, data analysis, and data visualization.  The key aspect to this tool is its focus to [Spyder][].  The best way to describe Spyder is that it brings a [MATLAB][] like environment to the Python language.

Since it is a Scientific/Engineering package, it comes with working Numpy and Scipy packages included.  For those that don't know, getting these to compile on Windows is not trivial, and PythonXY takes care of it for you.

### ActiveState: ActivePython

![ActivePython](/static/images/2012/activepython.jpg "ActivePython alignleft")

[ActivePython][] is actually primarily marketed to businesses.  It contains its own package management system (PyPM), over the default system (PyPi).  But they do have a CommunityEdition for free.  ActivePython is a great starter distribution.  It gets you off and started well, but you will find that the easy tools they provide also mean you will be one version behind everything.  Part of their push to business gives you old versions for free and paid customers get the newest.

### PortablePython

![PortablePython](/static/images/2012/portpy.jpg "PortablePython alignleft")

Finally I want to highlight [PortablePython][].  It is basically a package of python (with Numpy, Scipy, and more) put together to run on any machine off of a thumb drive.  You don't need a thumbdrive, but it gives you a development environment on a portable device you can take to any computer.  I like this one, because you can plug your thumbdrive in your computer, develop in the library/computer lab, or on a friends/work machine and always have the same environment.  It takes more of a PC understanding to get it working well (but let's be serious here, you are not writing Python programs without some good computer knowledge).  [I wish it came with Spyder, though][portablespyder].

### Anaconda CE

![Anaconda CE](/static/images/2012/continuum.jpg "Anaconda CE alignleft")

[Anaconda][] is another Python version primarily marketed at businesses for large data analysis.  They too have an open-source Community Edition with all the open source tools pre-packaged, but they also include some of their home-grown tools in the free version as well.  This one has been intriguing me for a while since it has a well structured 64-bit version.  It is also built well to also run in a portable mode.

I think this is definitely one to consider, although I do have some pause due to the business package which is the primary push.

### Others to Consider

I know there are a ton of other options out there, and each of the other options can be (for the most part) be achieve with the Python.org distribution.  But these are the go-to options for Windows users to easily get their feet off the ground.  But there are options like the following:

#### Enthought Python Distribution

![Enthought Python Dist.](/static/images/2012/enthought.jpg "Enthought Python Dist. alignleft")

Enthought is primarily "in-charge" of the Numpy and Scipy packages.  But, there is really no package for free.  [EPD][] is a package you can use but you will need a license.

<br class="clear" />

#### WinPython

![WinPython](/static/images/2012/winpython.png "WinPython alignleft")

This one sounds like a no-brainer right?  [WinPython][] has only been around since August so it has taken a back seat to PythonXY.  It is actually being developed by the same person running PythonXY, and although claiming it is not to replace XY it is something new.  Also looking into this one as a replacement for my PortablePython, and possibly a complete replacement.  Something to think about.


[pythonu]: /2011/universities-and-mathematical-computation
[pythonwrap]: /2012/portable-nginx
[pythonorg]: http://python.org/download/
[PythonXY]: http://code.google.com/p/pythonxy/
[Spyder]: https://code.google.com/p/spyderlib/
[MATLAB]: http://www.mathworks.com/products/matlab/
[ActivePython]: http://www.activestate.com/activepython
[PortablePython]: http://portablepython.com/
[portablespyder]: https://portablepython.uservoice.com/forums/44323-general/suggestions/2391762-add-spyder-ide-option
[Anaconda]: https://store.continuum.io/cshop/anaconda
[EPD]: http://www.enthought.com/products/epd.php
[WinPython]: http://code.google.com/p/winpython/
