Title: A New Engine
Date: 2011-12-15 23:32
Tags: hyde, wordpress, website
Slug: a-new-engine

![HYDE!!](/static/images/2011/jkl-hyde.jpg "Jeckyl & Hyde Ambigram")

So I got disgusted and tired. I love [Wordpress][WP] it's a great tool. It has many features, a well-documented and advanced templating engine, and just works. But I got tired of the constant need to update due to security concerns. After making the updates, your plugin are broken...your templates might be broken...then you're stuck until you get things working again. That is just the tip. So I'm now running on Hyde!

### Security

The top item driving me away from Wordpress was the fact that Wordpress in-and-of-itself a security concern. The fact that Wordpress serves the files from a database and handles all the same authentication of administrators in the same manner and database of anonymous commenters is a constant concern. I really wanted to separate the "blog generation engine" from the engine that actually serves the files. 

[Hyde][hyde] is a [Python][python] application that runs independently of the how the site get served. Basically it generates the static HTML pages for the site and then it is done. The webserver does what it does best; show the files in a browser.

### Speed

A second desire is that static HTML is much faster than processing PHP or something similar. I don't get a hell of a lot of traffic...so why should I care about this? I really don't, but just in case! :)

### Simplicity

I have wanted something much simpler. Instead of browsing around the administration panel, I just wanted to write. I want to go back to simply writing. It also will help me learn [MarkDown][MD]. I've been meaning to learn this for a while to speed up some basic HTML writing and this will force me to do so.

### The Engine

So as I said, I'm using [Hyde][hyde], a static--blog aware--static site generator written in [Python][python]. 

#### Why I Chose Hyde

I'm not completely sure. I really think it was simply because it is written in [Python][python] as I'm beginning to explore the Python language much more. Since I've been using [MATLAB](http://mathworks.com/) at work much more often, I wanted something I could use at home. Python has been what I've been learning. So this will help me learn some of the more enjoyable aspects of Python.

#### Open Source

Since [Hyde][hyde] is essentially a type of compiler, my blog now has 'source code'. It's basically the code that gets converted into the HTML that lets your browser show you the pages you see here. Crazy that my website has now gone 'open source', right? I have a personal [git](http://git-scm.com/) repository stored on [GitHub](http://github.com) that holds my website source. It's really not an 'open source' movement for my site, rather a way of version controlling my site. Git's distributed version control system will maintain a controlled environment for my website.

[Check out my repository](http://github.com/traeblain/traeblain.com)

#### Closed Source

There are people that [argue that these static site generators are harmful to the open source movement](http://www.jeremyscheff.com/2011/08/jekyll-and-other-static-site-generators-are-currently-harmful-to-the-free-open-source-software-movement/), but I don't agree. The argument is that because I have to use a tool like [Disqus](http://disqus.com) (which isn't open source) to control comments. This is true, but I've seen way too many people use Disqus, [IntenseDebate](http://intensedebate.com/), and [Facebook](http://facebook.com/) to drive their commenting systems. And people aren't arguing that this will kill the open source movement.

It's going to be a fun run. I will be posting just like I did before...so stay ready.



[WP]: http://wordpress.org/
[MD]: http://daringfireball.net/projects/markdown/
[hyde]: http://hyde.github.com/
[python]: http://python.org/