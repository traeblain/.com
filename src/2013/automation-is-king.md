Title: Automation is King
Slug: automation-is-king
Date: 2013-10-27 12:31:27
Tags: website, pelican, software

![Gears](/static/images/2013/gears.jpg "Gears")

In my [last post][lost], I explained my issue with Pelican and that I'm constantly in "programmer mode" instead of "writing mode" when I create posts.  It's one reason why posts have dropped off as of late.  So I was on the search for a new blogging platform.  

## New Platforms

So I looked at a ton of options.  I was impressed with the sheer number of choices I could use.  I spent most of my time with [Skrivr][].  I gained a huge appreciation for all the limitations that Calepin and Pancake put on their users for similar services.  There was just so many options that I  was a bit overwhelmed.  Being that it is in beta and not well documented, there wasn't much to help me through that sense of drowning.

The next one I got my hands on was [Ghost][] and I was instantly impressed.  It's very young, but I loved how it worked.  It already has a ton of support from community members and the dedicated members alike.  Since it is young, it was missing some key items I want so I'm waiting.  Database support is very surprising since originally it was going to use an abstraction layer for most all database options, they changed to a tool that only works with SQL choices.  That was pretty disappointing as I have been learning MongoDB.  Regardless, after some maturity, I'm pretty sure Ghost will be my next blogging platform.

## Automation Overcomes Issues

What was bothering me about Pelican?  The fact that it takes some major setup every time I want to do things.  Let's assume I'm setting up a new computer...

First I have to install [Python][].  This isn't an issue because Python gets installed on every new computer without question.  Then I install [Pelican][].  Also not too big of a deal.  This is where things become a pain.  Next you need to install Pelican's plugins and the location of these effect the build process.  Then, in order to build my LessCSS files and compress the javascript I need to install jsmin and LessCSS compiler.  Less requires NodeJS installed...then it works differently on Linux and Windows.  Lastly, after running everything I have to push it to the server.  I have a build script that does this for me, but due to restrictions with proxies and more, a simple SSH/SFTP/SCP connection to push the files was not possible.  I has an awkward git repository that hooked to a webhook that got it to work...but it was pretty bad.

So there is so much I have to do just to get things setup.  Also, what if I'm on a computer that I cannot load Python or anything onto?  I wanted to have something that I can simply make a post and BOOM it gets added.  My build script didn't allow that.  So I needed to offload the the automation elsewhere.

### CodeShip to the Rescue

I'm not a programmer, but noticing all the things you could do with Continuous Integration tools I thought this could do exactly what I want.  I initially started with [Travis-CI][travis] but couldn't find any good way to deploy to my server.  If I was using Heroku or Amazon S3, I could...but not if you have a personal server.  I also didn't want to offer up any of my server access details in my _.travis.yml_ file.  But [CodeShip][cs] came to the rescue.  It runs the same tests that Travis does.  They also provide a RSA key that makes SSH'ing into my server simple...as well as using an rsync command so that it only transfers the changed files so the transfer is super quick.  

[ ![Codeship Status for traeblain/.com](https://www.codeship.io/projects/d43f7420-1f54-0131-b40b-2adc9d90452f/status?branch=master "Codeship Status")](https://www.codeship.io/projects/8558)

I'm really like what Codeship does and how they do it.  I may integrate a few more tools with true tests with it.  Again, this is pretty amazing.

## What's Left?

So with that complete, I can post from almost anywhere.  I can even write a post directly on [Github][], save it and it will automatically be published to my server.  That takes care of any computer.  I'm a little picky about how each post looks, though.  I normally want to preview it a couple times before making it official, so I'm still figuring this one out.  What I'm thinking I can do is create a small Flask app that takes the new post and processes it in a similar style that Pelican will process it...  Due to the need for images as well, I'm not completely sure how I'm going to do this.  Maybe a drafts branch...hmmmm...


[lost]: /2013/lost-the-blog/
[Skrivr]: http://skrivr.com/
[Ghost]: http://ghost.org/
[Python]: https://store.continuum.io/cshop/anaconda/
[Pelican]: http://getpelican.com/
[travis]: http://travis-ci.org/
[cs]: https://www.codeship.io/
[Github]: https://www.github.com/
