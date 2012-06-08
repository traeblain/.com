Title: Universities and Mathematical Computation
Date: 2011-12-19 21:56
Tags: math, python, matlab
Slug: universities-and-mathematical-computation

I don't propose to be an expert on this in any way, but after my personal experience and seeing what fellow graduates from other universities experienced, I have a few thoughts of which Universities should take note. Computational Mathematics are becoming more and more prevalent in mathematics education. You are no longer forced into upper-level educational choices consisting solely of theory. I feel though that students are being crippled by the choice of computational software.

### Popular Choices

The current list of computational mathematics software is huge. There are a ton of options, but there are 3 that seem to be prevalent everywhere.

#### Mathematica

![Mathematica Star](/static/images/2011/mathematica-star.jpg "Mathematica Star alignright") [Mathematica][] is a symbolic manipulation tool that is extremely powerful and extremely popular. The creator is so confident in it's power, that the base code also powers the amazingly powerful search tool [Wolfram Alpha](http://www.wolframalpha.com/). There are very few respectable Mathematics programs that don't hold some seats of [Mathematica][]. <br clear="both" />

#### Matlab

![Matlab Logo](/static/images/2011/matlab-logo.jpg "Matlab alignright") [Matlab][] is another powerful mathematics tool heavily focused on its interactive scripting programming. Matlab is commonly used in engineering processes due to it extensive list of 'toolboxes' and its capability to interact with hardware through its Simulink tools. <br clear="both" />

#### Maple

![Maple Logo](/static/images/2011/maple-14.png "Maple alignright") [Maple][] is another symbolic mathematics tool often used in university mathematics groups. Unfortunately, I haven't heard much use of Maple outside of the university structure, but some of my automotive engineering friends claim people use it for some modeling.  <br clear="both" />

#### Honorable Mentions

**[MathCAD][]** is a tool mainly used in the engineering industry due to its excellent handling of units and interaction with software like PTC's [Creo](http://www.ptc.com/product/creo/). It's notebook structure and prettified mathematical syntax makes it an excellent choice for presentation purposes.

**[MAGMA][]** Magma is a algebra system developed by the University of Sydney. 

**[R](http://www.r-project.org/)** language is a statistical and graphical language build for mathematics.

### What Should be Used?

These tools are great. The do what they do well and are well developed. But what should Universities be teaching their students with? 

#### Python

![Python Logo](/static/images/2011/python-logo.png "Python Logo")

[Python][] is a programming language widely used in a number of applications used by [Industrial Light & Magic](http://www.ilm.com/), [Rackspace](http://www.rackspace.com/), and [Honeywell](http://www.honeywell.com/). Python is also used in games including [Battlefield Heroes](http://www.battlefieldheroes.com/), [EVE Online](http://www.eve-online.com/), and [Civilization IV](http://www.2kgames.com/civ4/home.htm). But what's not as commonly known, is that Python has an extremely powerful and well-developed mathematics package known as [numpy](http://numpy.scipy.org/) and [scipy](http://numpy.scipy.org/).

[Python][] works much like [Matlab][] in that it's an interpretive language and with the tools for scientific computing, can do almost everything Matlab can. It's a clean syntax and an easily understandable language.

### Why Should Universities use Python

With all these options and such great options in the commercial world, why should Universities teach Python instead of the other choices. 

#### The Concept Over the How

Math courses are always showing you the concepts of mathematics over the practical applications. Mathematicians and Scientists exist in this world while Engineering deals with the the practicality of that theory. So why should the computation portion be different. You are showing students the concepts behind using the computer to model mathematical problems, the how can be accomplished by understanding the tool you are using.

#### Cost

[The rising cost of higher education](http://www.nytimes.com/2008/12/03/education/03college.html), these institutions should be more sensitive to student costs in areas they can control. Tuition is outrageous, so items like textbooks and supplemental items should be addressed as a cost cutting measure instead of gouging their students. Remember, the less debt the students have out of college, the more likely they are to donate to their university and the earlier as well.

[Mathematica][] is close to $140 for Student seat, [Maple][] is $99 for the Student Edition, [Matlab][] is $99 for the base then $29 for any toolbox you may need, [MathCAD][] is $120 for Student Edition.

[Python][] is free and available to all. And unlike some of these applicaitions works with Windows, Linux, and OSX.

#### Learning a True Programming Language

The only one that comes close is [Matlab][], [Python][] is a true programming language that the mathematics student can take with him/her in what ever profession they choose. You may have a math degree, but with Python knowledge you have the capability to greatly contribute to tool development anywhere you go instead of simply providing the algorithms.

### Multiple Pythons!?!?

So now you are left with a question as to which Python should be used. 

#### Version 3.2 or 2.7?

So there are two common versions of [Python][]. Version 2.7 is still widely used as is still being serviced by the members of Python. Version 3.2 is very usable, but lacks support from many of the major libraries. [scipy](http://numpy.scipy.org/) now supports 3.1+ but it's only been recently. As of this writing, you should stick with 2.7 due to its wider use and support.

#### Windows

Installing [Python][] and the mathematical libraries on Linux is trivial as it runs and compiles very easily. Max OSX is almost as easy, as long as you grab some extra items from Apple's Developer's Connection site.

Windows has been the problem with Python and it's science tools due to compilation requirements and since Linux and Mac OSX are both *NIX based, Windows was the step-child. [ActivePython](http://www.activestate.com/activepython) has a version, but costs money. The [Python][] homepage has a Windows Python version, but I've run into many issues in getting [numpy](http://numpy.scipy.org/) to compile properly in Windows.

There are two great Windows versions that I'd recommend. [Python(xy)](http://code.google.com/p/pythonxy/) is in active development and auto-installs numpy, scipy, [PyQT](http://www.riverbankcomputing.co.uk/software/pyqt/intro), [Matplotlib](http://matplotlib.sourceforge.net/), [PIL](http://www.pythonware.com/products/pil/), and [cx_Freeze](http://cx-freeze.sourceforge.net/). It include a massive list of optional 'plugins' to expand your Python installation. Python(xy) also includes the [Spyder](http://packages.python.org/spyder/) development environment which looks and feels much like [Matlab][]. 

[Portable Python](http://www.portablepython.com/) is also a great version, but is built around a portable installation. This would be attractive for students, because they can go into the computer lab and work in the same [Python][] environment as they'd use at home and in class. The bad part is that Python then doesn't have the PATH environment variables properly setup and mixing which Python you are using can cause issues.

I'd recommend Python(xy) as the suggested [Python][] installation with Windows as it add so much more by default.

### Summary

I really think universities should consider pushing [Python][] in their computational environments. It will also be cheaper for the school (although probably wouldn't make a dent in overall expenditures), cheaper for the students, and establish something much more long-term for the student than the current offers. Due to the huge similarities to [Matlab][] in syntax and usage, schools that currently use Matlab as their primary tool should seriously consider changing. What are your thoughts?

[Python]: http://python.org/
[Mathematica]: http://www.wolfram.com/mathematica/
[Matlab]: http://www.mathworks.com/products/matlab/index.html
[Maple]: http://www.maplesoft.com/products/Maple/index-v1.aspx
[MathCAD]: http://www.ptc.com/products/mathcad/
[MAGMA]: http://magma.maths.usyd.edu.au/magma/