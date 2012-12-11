Title: Commit for Christmas
Date: 2012-12-10 18:40
Tags: software, pelican
Slug: commit-for-christmas

![Commit](/static/images/2012/commit.jpg "Commit")

Like I've said before, I wanted to improve my [Python][] skills and the best way to do that is to jump into a community.  So I offered a commit to my static site generator for this site.  I [committed][commit1] a change that corrects a behavior with pagination a while back that was accepted in [Pelican][]'s version 3.1.  So for Christmas, I decided to dig in some more and offer some more help.

So far it's been really, really basic.  Since my python skills are not on the upper echelon of things, I started with documentation.  I found a problem with the Pelican plugins documentation that didn't tell people exactly what to put in there settings.  You had to dig through the code to know what to add.  So I [added some information][commit2] that spells it out much more clearly.

Second, I just dove into the code.  Pelican is pretty clean as it stands, but I did find a [unnecessary re-import][commit3] that didn't need to be there.  I flagged it (instead of committing a change), so that the project heads can decide which is the correct one to remove.  Now I am looking into a some more of the code to see if there are things to clean up.

Lastly, I'm working to make sure Pelican's Windows face a bit more useful.  It's no mystery that most of this type of code is built to primarily run on [*nix based][nix] systems.  So this runs well on Linux/OSX, and has tools that work well with those systems.  But Windows has some hiccups.  Firstly the makefile doesn't work on Windows.  So alternatively Pelican should have a BATCH file that does the same thing.  I'm going to see if I can put my Windows-fu into action and try to mimic the makefile's actions.  Part of the issue is getting the "Devserver" working... But I'm determined!

I make look at some other programs and contribute.  I finally found a [Wiki][] software that I liked, [Hatta][] was nice but didn't care for WikiCreole and was having issues with the latest version.  This one is much easier to hack as well.  I have a dump of [updates][wiki updates] that I did to make the wiki work like I wanted.  I might dump some of these back to the developer as well.  One was pretty hackish, that I might be able to dump because it might be in some other tool's hidden functionality.

So there it is.  Call it a Christmas gift, call it just good use of open source software.  I call it just a good thing to do.

[Python]: http://python.org/
[commit1]: https://github.com/getpelican/pelican/commit/41fdfa63b11957c564e42fb128dc1f89873c41a4
[Pelican]: http://github.com/getpelican/pelican
[commit2]: https://github.com/getpelican/pelican/commit/b0ff693839be55e58ff141b08776587ed7d9bf5d
[commit3]: https://github.com/getpelican/pelican/commit/f79c844855195be990bc8c096b5b174c07708854
[nix]: https://en.wikipedia.org/wiki/Unix-like
[Wiki]: https://github.com/alexex/wiki
[Hatta]: https://bitbucket.org/thesheep/hatta
[wiki updates]: https://github.com/traeblain/wiki/commits/wiki-updates
