---
draft: false
title: Now in Color!
date: '2020-01-05 17:48:26 -0600'
description: >-
  Updated the website design to a new style with multiple colors.  Was fun to
  put together.  Here's the changes to the site.
images:
  - https://res.cloudinary.com/dixwznarl/image/upload/notebook/lighted-twenty-jontyson.jpg
tags:
  - site
script: ' '
---
So what tends to happen this time of year is that I rebuild my site for whatever reason I can come up with.  It's what keeps me engaged, finding cool things to do, solving problems, and playing around.  This time, I kept most of the basic style of my previous site but amped it up a notch with more _flash_.

There are **5** main updates that I want to highlight:

1) Color...ooooohh, aaaaahh.
2) Digital Garden
2) Quite Interesting Links
3) Netlify Functions
4) Lack of Activity

## Color

This is just for fun.  I was playing around with [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties "Mozilla CSS Variables") and seeing how easy it would be to make a switch and have it propagate throughout the page.  Turns out, it's very easy.  So now there's a color switcher.  I've loved the [Nord Theme](https://www.nordtheme.com/) colors for a while, so I've adopted it to my site. So now you can view it in standard White Background, Dark Mode/Black Background, and Nord Background.  You should see the small colors to the left or top of the page.  Go ahead, have some fun.  

## Digital Garden

This is probably the most significant piece of the update.  When I write, I write about things on my mind right now.  It doesn't matter the date, really.  I realized that what I want to write about aren't things the fit nicely in a chronological flow of ideas.  Most of what I want to write about has sticking power, something to come back at and look at later, and maybe have the same or better influence on me a few years later as it has today.

That's why I established this [Digital Garden](/#garden "Home-Digital Garden Area").  This is based off of something I read [Tom Critchlow](https://tomcritchlow.com/2019/02/17/building-digital-garden/ "Building a Digital Garden"), where he moved to create an area that may seem a bit scattered but is like walking through a garden as opposed to a museum type, curated timeline. One key aspect about this, is that the digital garden will also hold my "Drafts".  When I start a post it may be a few weeks/months before I finalize it.  The garden metaphor allows these to be available even if they aren't done, like something sprouting but not fully developed.

I really dig this process, I always look at this point in the year and say: "I'm going to write more this next year." Then life takes over and it's stays pretty empty.  I think with the garden metaphor, maybe I can ignore the stress of finishing something and just write. It's a plan, but who knows.

## Quite Interesting Links

I like to share certain links I've discovered, good reads, etc.  But never felt like Twitter was a great place for this to foster and grow.  I started using [Refind](https://refind.com) this past year and like how it works.  I even setup a [Newsletter](/blog/i-got-a-newsletter/) to supply these out in the world. But I rather like the ephemeral nature of some of these with the Refind back-end as the record.  So on this site, you should see a new link every once in a while for something that I find: ["Quite Interesting"](/#sectionQI "Home-Section Quite Interesting").

## Netlify Functions

Restlet died :skull:.  This made me really sad.  It was the easiest way I have found to generate a simple API to data I wanted to store.  It linked right back to Google Sheets and was fun to generate.  And then they decided it wasn't worth maintaining...and I got dumped.  So I was off to find something new.

I moved then to something that I could backup and transition. I looked at [RestDB](https://restdb.io "REST based Database") and [MeshyDB.com](https://meshydb.com "Mongo DB Backend"). I ended up with MeshyDB to store and get my data.  I think RestDB has a better interface and more developed API, but Meshy has a nicer Free Tier and better support.  Neither of these services, though, allow for a public GET response and require authentication.  So I then needed an intermediary so that I wasn't giving away API keys and authentication passwords, etc.

I started out with [Webtask](https://webtask.io) from Auth0, which I also love, but they stopped taking new registrations and so I feared--like Restlet--they were going to dump it soon. Then I remembered [Netlify](https://netlify.com) who hosts this site, recently offered a Functions service.  Functions (as well as Webtasks) are short pieces of code that get called up and executed based on a web address.  Combined with a "pre-compile" set of code that gets the latest data from my MeshyDB, I can execute and rebuild the site with the latest data in near real time.  I do this by [IFTTT](https://ifttt.com "If This Then That") monitoring of data (i.e. Twitter, Refind, Goodreads, etc.) and executing these functions when something is found.  Then these functions deploy a rebuild of my site giving the site a near dynamic/fresh feel all the while still being a static site.

My previous site shot 3-4 additional web requests to my old API to be able to render the site.  This new version, is compiled with the new data ready to go so there's less overhead on your end.  It was quite fun to implement. 

## Lack of Activity Section

As you may notice, I don't have any _Activity_ data on the homepage.  Ever since Google bought Fitbit, I'm tired of turning over every aspect of my personal life to the Google.  In fact, I'm constantly searching for ways to dump their services or at lease minimize my exposure to them.  I use [DuckDuckGo](https://duckduckgo.com "Privacy Centered Search Engine") near exclusively, I stopped using Google Maps for **Apple Maps** or [OpenStreetMap](https://www.openstreetmap.org/), and in the process of getting my email and calendar out of their services.  _(Can't seem to dump Photos, though, that service is too good and can't really find a good alternative.)_ 

So with that I got a Garmin watch this Christmas and will look to integrate that in the future.  Unfortunately, Garmin restricts their API to _approved_ application developers...which means my personal needs probably won't qualify.  This is sad, as the [Garmin Connect](https://connect.garmin.com/) service is really nice and it would be awesome to get the data out.  I'll be exploring that in the future to see if I can get that setup.

## And Finally

All in all, I hope you like the new look.  There's a couple of thoughts that I am mulling over.  For instance, re-introducing Disqus comments, Webmentions, or something similar (I'm really liking [Hypothes.is](https://web.hypothes.is/)).  More things I can do with the Netlify Functions.  And of course, writing more.

Feel free to share this to your preferred social media outlet.  Or just give me some cheers.

_Photo courtesy of [Jon Tyson](https://unsplash.com/@jontyson)._
