Title: Small Site Redesign
Date: 2012-06-30 23:30
Tags: website, hyde, pelican
Slug: small-site-redesign

Once again, I've dug through my design and cleaned things up. I keep trying to get things cleaner and cleaner. I was having trouble with a mobile design. I tried mobile site generators, tools, etc...but nothing would get me what I want.

## Framework

So I needed to start with a framework that will get me from a desktop, to a laptop, to a tablet, to a smartphone without having different code for each. There are some great ones out there, like [Foundation][], [Bootstrap][], [Amazium][], and [320andup][]. Ultimately I chose [Skeleton][] for my framework. The main reason is that it was the simplest and most direct framework I could find. Many of the others feel a bit bloated or difficult to understand. [Skeleton][] allowed me to jump directly into recoding the layout immediately.

Go ahead and resize your browser to see how it will look on smaller screens. Or, browse to my site on your smartphone or tablet and check out how it looks. Feel free to bookmark it as well. hehe.

## Pelican

I got frustrated with [Hyde][]. The developer is smart, but didn't see any real work happening. And the documentation is awful! Documentation is key to this and Hyde's is bad. You can blame the community for this maybe, but it really should be looked at. Because of this and problems with the structure, I moved to [Pelican][]. Definitely has better documentation. Looking back I was simply trying to find something other than [Jekyll][], which seemed to be the popular choice. If I was looking into Ruby though, I'd probably gone with [nanoc][] which appears to be the best documented static site generator I've seen.

[Pelican][] will do nicely though, I've already liked what I've seen thus far and even offered a suggestion of my own with decent response.

## Still Speedy

I've still kept things as speedy as possible. I've shrunk my css and js files. Setup my cache the best I could. I still find it funny that 3 of my primary "Page Speed" failures come from [Google Analytics][] and [Google Fonts][] being that I'm using Google's [PageSpeed][] tool. Oh well...

Let me know what you think of the new site. As before, you can see my site's source code on [Github](https://github.com/traeblain/.com).

[Foundation]: http://foundation.zurb.com/
[Bootstrap]: http://twitter.github.com/bootstrap/
[Amazium]: http://www.amazium.co.uk/
[320andup]: http://stuffandnonsense.co.uk/projects/320andup/
[Skeleton]: http://getskeleton.com/
[Hyde]: http://hyde.github.com/
[Pelican]: http://pelican.notmyidea.org/
[Jekyll]: http://jekyllrb.com/
[nanoc]: http://nanoc.stoneship.org/
[Google Analytics]: http://www.google.com/analytics/
[Google Fonts]: http://www.google.com/webfonts/
[PageSpeed]: https://developers.google.com/speed/pagespeed/insights