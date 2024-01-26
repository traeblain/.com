---
title: "Data Driven Site"
date: "2016-01-19"
images:
  - "https://res.cloudinary.com/dixwznarl/image/upload/q_auto:good/v1480480425/graph-on-screen_nqm0et.jpg"
text_color: "dark"
tags: [ "geek", "site" ]
---

I'm quite proud of my homepage.  As I said before, I used to use services like [Flavors.me][] and [About.me][] for my main page because they did something particular...that gathered my info in one place.  From social sites to image sites, these tools did that easily.  But I started to realize I wasn't showing what I really wanted...additionally I was having a hard time keeping those connections up as well.  So it was time to make my own.

## Requirements

I had some initial requirements.  There's weren't hard requirements, but based on my previous experiences, I found that I should listed to a number of these.

#### Easy Inclusion into My Tool-Chain

First question is: "What's your tool-chain?"  In simplest terms, I switched from [Pelican][]'s excellent static site generator, to [Hugo][].  If I couldn't get the system to work in Hugo, it would mean looking at a new system.  Functionally, we are good.

#### No or Minimal Back-end Work

Where I can setup any back-end tool I want on my VPS, I didn't want to maintain it.  There is a possibility I could use [Firebase][], but I wasn't sure on the details and restrictions on the free-tier.  So I needed a tool that provides my back-end.  This site does this through some creative wrangling (more on this later).

#### Complete Integration with My Notebook

I didn't want Hugo to handle my notebook (blog) and then some other system for my main page.  But separating the two wasn't out of the question.  This would be like I did before, but my goal was to keep everything in order.

## The Site

Ok, so let's move down the page and talk about what/how/why/etc.

#### New Monogram

<div class="row">
    <div class="six columns">
        {{< figure src="//blog.traeblain.com/theme/images/tblogo.svg" caption="Old Monogram" >}}        
    </div>
    <div class="six columns">
    {{< figure src="https://res.cloudinary.com/dixwznarl/image/upload/tbcom/tbmonogram.svg" caption="New Monogram" >}}
    </div>
</div>

#### Interactive Title Banner

I decided I'd theme the site with low-polygonal images, with the new sharper monogram I felt excited.  The title had to reflect this.  I found the awesome Javascript library called: [Pt][].  I randomly found this through a Hacker News post and the demo, [Points][], was perfect.  I basically used that demo code and implemented my monogram, size, and color scheme.  If you haven't tried it yet, you should...move your mouse around the title and watch the tet's follow you around.  Fun!  There's a little demo here:

<figure class="bordered" style="display: block;">
    <div id="pt" style="width: 100%; height: 150px;"></div>
</figure>

#### Fitbit and Dash

This was hard.  I was determined to get more detailed [Fitbit][] and driving data (using [Dash][]) on the page.  But getting to it without exposing a personal API key seemed impossible.  This is where some nice tools came in.  I didn't need 100% of the data, just last month or so.  So I am using [IFTTT][] to send updates to a Google Spreadsheet.  From there I was just going to ping the sheet, but Google restricts getting data cleanly due to CORS restrictions, so I hit my first hurdle.  

##### Personal API

I actually was able to make a personal API.  Using [APISpark from Restlet][apispark], I'm able to use Google Spreadsheets as my data store and make them accessible from an API call.

`https://traeblain.apispark.net/v1/fitbit/`

Check it out.  There's nothing on that I don't care being out in the open, but it's pretty need to see what's happening.  I have one for Fitbit, Dash, my Book reading, my Music (more on that later), and Twitter statuses.  If I want more, it only requires me to see what IFTTT can offer and push it to a Spreadsheet.

(Later on, I may dump the spreadsheet entirely and have IFTTT post directly to the API...but my Google Sheet is doing some calculation legwork for me at times and I'd have to be able to replicate that.  I think I'll work on an additional post for this later...)

##### Graphs

I always wanted graphs on my site.  I'm a bit nerdy like that.  But never could figure out the best way.  The Fitbit and Driving data created the best tool to add graphs.  So I did.  I fought with finding the proper graphing library.  I started with [c3.js][c3], but didn't like working with the library for specific needs, went back to the ole faithful [Chart.js][chart], but again found working the graphs problematic.  Again on a random Hacker News read, I remembered [Plot.ly][plot] open-sourced there javascript charting engine.  So I plugged it in and...Wow, it worked exactly like I wanted right out of the box.  It's not perfect (can't show details of two data points on the same x-axis), but works really well.  Unfortunately, it's the largest item on the site so it's the heaviest part to download. But I think it's worth it.

#### "Tabs"

Another hurdle was figuring out how to present the data.  After looking through some options, I like my CSS only slider style "Tabs".  It hides other information but brings it forward when you want.  It's a little bit of flair that I like to see.

#### Social

Again, grabbing my latest tweet from Twitter's API required me creating some back-end pass-through or exposing my API token.  So I use IFTTT to dump my latest tweet into a Spreadsheet and get the data from my Personal API.  Same for Goodreads, although I have to use Goodread's RSS feed and do some wicked work on the formatting because of this...but it looks good.  Github was a letdown.  The details I wanted aren't easily available.  So I'm using the [contributions graph][ghgraph] third-party service which gets me an image.  Also, I'm hosting this site's source code on [GitLab][] for now, I'm trying it out as an alternative but will probably move it to Github soon.

#### Sensory

Utilizing my Personal API, I gather my listening data from [Last.fm][].  Last.fm!?! Still?  Yes, I pretty much listen to all my music exclusively through Amazon Music.  And there's really no way to get it out, except for scrobblers on my phone and on the web.  Being a Prime customer, Amazon Music is an amazing system.  I wish they had an easy way to get user stats out...oh well.  Scrobbling is why Last.fm still gets my data.  From there it's to a spreadsheet!  Movies and Television data come from [Trakt][].  I've been using Trakt for a long time and recently realized it has really help me keep track of what season I'm on in various shows.  And I've just started recording my movie watching with it.  So I might as well use the data!

#### Misc

Lastly, I have some random bits I wanted to include.  I've always shown my PGP data in one form or fashion, but this allowed me full control.  So I've got my data right there to see and available for anyone to use.  If there are questions about identity, I really like [Keybase][]'s (I have invites...) form of identity management.  Although recent news claims that BitCoin is having a rocky time, I figure it's not completely dead and feel free to send me money.

## Back-end

So this doesn't disappear...still need to host the site.  I still serve everything on a VPS, so I still need a webserver.  Why I bring this up is that I found [Caddy][].  Caddy is a single executable that works comparably to Nginx, but is so much simpler to use.  It also has some integrated features for Hugo and more.  Additionally, it automatically integrates HTTPS with [Let's Encrypt][le] so I have fully encrypted site (save some of the images from above) without the hassle of dealing with a CA and server setup.  It was the fastest I got from, clean VPS install to up and running I have ever had...I'm still amazed.

## Summary

That's the gist.  It's pretty neat to have a semi-dynamic site that is built with a static site generator.  I plan on playing more with Restlet's APISpark to see what else I can make it do, but for now the Google Sheets is doing fine.  I might also explore Firebase or [Stamplay][] in the future, but happy with what Restlet is providing.  Stamplay may allow me to embed of the code that Google's Spreadsheet is handling and I can have a fully integrated API. 

Since I cannot really beta test a personal site, if you run into any bugs, ping me.  I'm still learning and hope to have some better idea as things go...might even add more info...more data!!


[Flavors.me]: https://web.archive.org/web/20170131201904/http://flavors.me/
[About.me]: http://about.me/
[Pelican]: http://blog.getpelican.com/
[Hugo]: http://gohugo.io/
[Pt]: http://williamngan.github.io/pt/
[Points]: http://williamngan.github.io/pt/demo/index.html?name=form.points
[Fitbit]: http://fitbit.com/
[Dash]: http://dash.by/
[IFTTT]: http:/ifttt.com/
[apispark]: http://restlet.com/products/apispark/
[chart]: http://www.chartjs.org/
[c3]: http://c3js.org/
[plot]: https://plot.ly/javascript/
[ghgraph]: http://ghchart.rshah.org/
[GitLab]: http://gitlab.com/
[Trakt]: http://trakt.tv/
[Keybase]: http://keybase.io/
[Caddy]: https://caddyserver.com/
[le]: https://letsencrypt.org/
[Stamplay]: https://web.archive.org/web/20180519015206/https://stamplay.com/
[Firebase]: https://firebase.com/
[Last.fm]: http://last.fm/

