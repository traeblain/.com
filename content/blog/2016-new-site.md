---
date: "2016-01-14"
title: "New Site!"
tags: [ "site", "geek" ]
images:
  - "https://res.cloudinary.com/dixwznarl/image/upload/q_auto:eco/v1480480425/brooklyn-bridge_nakdn2.jpg"
---

I did it!  I once again threw off the shackles of the old skin and slapped a new one on.  This one is bigger, bolder, better, beautifuler, boomier, ballsier, boisterous, blistering, boilermaking, and bombastic.  At least I like to think so.   What do you think?

### Notebook

The notebook is my new blog.  I have cover images, large titles, and embeds.  The "hamburger" icon [ <i class="fa fa-bars"></i> ], yes...that's really what it is called and I'm not a fan either but it's a convention, will get you to all my personal links.  

[Check out what I'd expect][expect] for the Notebook in my other post.

### Homepage

This is one of my favorite parts of the site.  Previously I offloaded my homepage to sites like [Flavors.me][] and [About.me][], that was not ideal.  I wanted specific information to be posted on the site.  So I decided to make my own [homepage][].  I dig it.

Go check it out! It's seriously awesome.  I have data, charts, an interactive header (if you aren't reading on mobile), and ever evolving details!  Scroll around and browse the data.  See where I've failed, succeeded, and whatever else you can glean from the information.

I am really proud of the way it turned out.  I had some fun creating it.  I've been playing around with minimizing my server needs and the homepage does that.  It makes dynamic content on a static page...I'm geeking out here, but I do like what I've done.

### Security

I'm now secure.  Because I re-factored my VPS and [Let's Encrypt][letsencrypt] is off and running, my site is now protected by SSL/TLS.  I will be doing this to every site I run in the coming months, but I like how it's now easy to run an encrypted site without a ton of overhead with CAs, etc.  This is how it should be.

### Engine

So...it's again another engine.  First it was [Wordpress][], then [Hyde][], then [Pelican][].  Now it's [Hugo][].  I was looking at Node tools initially, with Metalsmith and Hexo, but all of them get lost when a large portion of functionality is maintained in plugins that may or may not be updated.  What I like about Hugo is that it's a compiled binary that has everything baked in.  It might no do everything you want, but it did for me and was fun to dig in and find the tricks to make it do what I'd hope.  And it's fast!  Very fast.  And since it's all bundled, I don't have to deal with crazy updates, virtual environments, npm package recursion, etc., etc.

### Mind the Bumps

There's bound to be some hiccups.  One for instance is that the search doesn't work like I'd wish.  Right now it probably will show nothing at all.  Once I get that figured out, I'll update it and move forward.  Not too much need for a Search at this point...not much here.  If something looks funny, let me know too.  I'd like to investigate and check to see if something went wrong.

### That's it

What do you think?  Like or not?  I'm kind of proud of it.


[expect]: {{< ref "/blog/2015-where-do-we-go-next.md" >}}
[Flavors.me]: https://web.archive.org/web/20170131201904/http://flavors.me/
[About.me]: http://about.me/
[homepage]: /
[letsencrypt]: https://letsencrypt.org/
[Wordpress]: http://wordpress.org/
[Hyde]: https://hyde.github.io/
[Pelican]: http://blog.getpelican.com/
[Hugo]: http://gohugo.io/
