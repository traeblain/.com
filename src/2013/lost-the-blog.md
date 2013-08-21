Title: Lost the Blog
Date: 2013-08-13 21:58
Slug: lost-the-blog
Tags: blog, pelican, website

![Lost](/static/images/2013/lost.jpg "Lost") Where have the posts gone?  What happened to Trae?  Doesn't he still want to offer useless information to the masses?  Was he lost in a Sharknado?  A Squirrelcano?  A Snakeicane?  A Spidernami?

No, I've actually not gone anywhere.  I just haven't posted anything.  I have 6-7 posts that are mostly complete (some may go away due to timeliness is no longer appropriate), but just haven't gone through the effort of completing them and posting them.  I think it comes down to brain segregation.

## Segregation of Work

I'm having difficulty lately keeping my writing efforts separate from the mass of other things I do.  Using my [static site generator][Pelican] causes me to dive into a "coding mode" as I have to write the post and wrap my mind around the generation process.  Listen, I love [Pelican][].  I love that I simply get HTML, static pages, that run my site.  I love that I don't have to worry about the security implications of Wordpress (etc.) running and have to keep updating the system.  I love how I get the same interface (my text editor) for writing without worrying about how things change.  But writing is only one part.  Due to Pelican's age--it's very robust, but young--many things change.  I've found that simple upgrade to the newer version would kill my regeneration process.  I also do everything locally then have to get it on my server somehow.  I've generally automated most of this, but it's still testy.

What I'm trying to say is when I write something...anything.  I need my brain focused on writing.  When I'm editing a post, I want to be focused on editing.  And when I'm done, I'd like a break from this focus.  To process, check (make sure it looks like I want it to), and publish put my mind in a whole new mode of focus.  Where writing is creative, the rest is analytically geared.  It'd like to keep these segregated.

## So now what?

So I'm investigating.  What blogging platform can I used?  Here are my desires:

1. **Simple editor** -- Supports [Markdown][], preferably with [Extras Extensions][mdextra].  All my posts are now Markdown and I don't want to have to convert to something else.  I also need ability to put HTML snippets into posts as well.
2. **Simple Interface/Options** -- Wordpress is no longer a blogging platform.  There are too many other options and things to deal with. I just want a _Write Here_, _Drafts_, and _Published_ area...then done.  Preview capability is a must and would prefer an image uploader.
3. **Customized Output** -- Most people call this themes.  I really like my current design, and I want to keep it.  I also want to be able to use my analytics and more.  Some sites are great, but I cannot do things myself.
4. **Segregated Admin/Output** -- This is why Wordpress has such huge security concerns.  The same database that holds the public information (posts, etc.) also is responsible for user authentication, private posts, etc.  So bad things can happen.  Also, I would rather not have to keep a database up and running to serve posts.  It would be nice if the output was all static HTML like I currently have, it puts least amount of strain on both my webserver and the user.
5. **Fun** -- Ok, maybe I'm weird, but I'd like to have a little fun doing it...but that might just be me.

## Current Candidates

I've got a list of items services to think about.  All of them nice, none of them perfect.  But we can see.

### Python

#### [Simple][]

Simple is a clone of Obtvse...which is a clone of Svbtle.  Basically you get two options. Drafts/Published.  Works well, but is not a static system.  I believe it uses a SQLite which isn't awesome as well.  Claims easily handles 300+ requests/sec.

### PHP

#### [Statamic][]

This is something I'm liking and looking at.  Although it does not generate a static site, it's still pretty snappy and simple.  It also has a buy-in price, which isn't too big of an issue, just concerned about jumping back into the PHP site world.

#### [Kirby][]

Everything I said about Statamic applies here, but only 1 developer.  Still looking into it, but not as much as Statamic.

#### [Pico][]

Everything about Kirby above...but free.  Since it's free it makes it much more appealing, but still a PHP application that I'm concerned about.

#### [Ghost][]

The Ghost concept is really amazing.  Although it doesn't separate static content/admin areas and it's PHP, not static, yet I'm still very interested.  Planned release is the end of the summer.  I'd really like to use Ghost, but according to [John O'Nolan][onolan] he's _first_ pursuing it as a Wordpress plugin.  It's going to start as a UI overhaul for Wordpress...this really saddens me.  As I said before, the worst aspect of Wordpress is it's security updates and fight, so Ghost won't solve this initially.  It looks to be a wait and see.

### Hosted

### [Roon][]

I really like Roon.  It's simple, it's pretty.  Since it's hosted I don't get full control over my site, so no themes.  But it also lacks simple additions like personal analytics and small customization.  If I could get those features, I'd be all in on Roon.

### [Squarespace][]

I've always wanted to use Squarespace, but their pricing model has been prohibitive for me.  I'd have to commit to being all in on their product and the 8/month option doesn't make me swoon.

### [Calepin][] or [Skrivr][]

These services take a Markdown document, saved in a Dropbox folder, and makes them a post.  I really like this idea because it combines two features: document control and hosted platform.  Skrivr appears to be the one that gives me customization options, but I don't have an invite yet to check it out.

### WordPress/Tumblr/Etc.

So true, Wordpress.com and Tumblr and things have popular blog hosting systems...but neither are simple.  Neither just let you post, all want to consume and post.  I just want a simple editor and simple publish... I may be picky, but it's my right...and I'll fight for it.

So I'm unsure what else to look at.  I want it simple and easy, but the perfect tool doesn't seem available.  I may get an instance of Simple up and running to see if I can alter it to my liking... Or I may just bite the bullet and purchase a Statamic license and check it out.  I don't know, maybe Skrivr will shoot me my invite and I'll like it instead.


[Pelican]: http://blog.getpelican.com/
[Markdown]: http://daringfireball.net/projects/markdown/
[mdextra]: http://pythonhosted.org/Markdown/extensions/extra.html
[Simple]: https://github.com/orf/simple
[Statamic]: http://statamic.com/
[Kirby]: http://getkirby.com/
[Pico]: http://pico.dev7studios.com/
[Ghost]: http://tryghost.org/
[Roon]: http://roon.io/
[Squarespace]: http://www.squarespace.com/
[Calepin]: http://calepin.co/
[Skrivr]: http://skrivr.com/
[onolan]: http://john.onolan.org/ghost-from-fiction-to-function/
