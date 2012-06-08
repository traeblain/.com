Title: My Site's New Need for Speed
Date: 2012-01-9 12:32
Tags: hyde, website
Slug: my-sites-need-for-speed

![Hyde is Faster than Ever!](/static/images/2012/speedometer.png "Go Baby Go alignright")

Speed... Website speed it kind of a buzz word these days and I decided to jump into this world to try to pull up my speed rank on this site. So I dug into [Google's Page Speed site and plugin][gps] and started making modifications to my site to improve its performance. After a bit of trial and error I have finally achieved a Speed Rank of 96 out of 100. Yes!

### Smaller Main Page

First thing I did was reduce the size main page. Originally I had all my blog posts put on a single page. Which wasn't that big of a deal, but [Hyde][] has a paginator plugin `hyde.ext.plugins.paginator.PaginatorPlugin` that will split the posts up and add a `/page2` etc. for the additional pages. So this reduced the amount of HTML loaded for the main page. [Commit](https://github.com/traeblain/traeblain.com/commit/222757464ce09ebeb5dad3a3a21e68171e798e1d)

This isn't exactly a speed improvement, but I like what I did. I also used a [jQuery][] ajax call to dynamically load the additional pages. Instead of clicking the provided "Page 2" link, you can just click the "Show More" link and it will load without actually going to the next page. It also will fall-back for non-javascript users to the standard link. I'm pumped how well it worked out.

### Uglify | Minify 

One way to improve speed is to compress your CSS and Javascript. This is done by Minifying the CSS and Uglifying the Javascript. Basically it gets rid of the indentation and comments that help readability of the scripts. For the Javascripts, I used [Hyde][]'s Uglify plugin `hyde.ext.plugins.uglify.UglifyPlugin` that compressed my Javascripts down quite a bit. Real simple change and a nice boost in speed. [Commit](https://github.com/traeblain/traeblain.com/commit/289223edb55cf17fbadabb72ed7cb6b0b78f8559)

For the CSS I was using [LessCSS][] that allows me to use CSS variables and mixins, so I wasn't sure if I could Minify the CSS. Sure enough, LessCSS has a compression argument that will do just that. After figuring out how to get it to work with [Hyde][], I have a compressed CSS for speed. [Commit](https://github.com/traeblain/traeblain.com/commit/52504bb034e48c6676ef682d16c18cc9e00e2e24#L3R49)

### Server Configurations

#### Cache

First thing I did was include Caching. I setup the Cache-Control items in the HTTP headers. I did this by adding these:

    # 480 weeks
    <FilesMatch "\.(ico|pdf|flv|jpg|jpeg|png|gif|swf|svg)$">
    Header set Cache-Control "max-age=290304000, public"
    </FilesMatch>
    
    # 2 weeks
    <FilesMatch "\.(js|txt|css)$">
    Header set Cache-Control "max-age=1209600, must-revalidate"
    </FilesMatch>
    
    # 1 day
    <FilesMatch "\.(xml)$">
    Header set Cache-Control "max-age=86400, must-revalidate"
    </FilesMatch>
    
    # 2 hours
    <FilesMatch "\.(html|htm)$">
    Header set Cache-Control "max-age=7200, must-revalidate"
    </FilesMatch>

This gave me Caching on some primary files and allows for the items that most often will change to be renewed fairly soon. [Commit](https://github.com/traeblain/traeblain.com/commit/83f9a297a6a433cfbc404b4fb2836937c0521761#L0R34)

#### HTTP Compression

Apache can compress the files delivered and most all modern browsers support this. So I needed to add a handler that will compress many of the files. Using Apache's `mod_deflate.c` I was able to add compression to many of my files.

    <IfModule mod_deflate.c>
    <FilesMatch "\.(js|css|html|htm)$">
    SetOutputFilter DEFLATE
    </FilesMatch>
    </IfModule>

The only issue I have found is that my Google PageSpeed will sometimes drop to 86/100 because it thinks I'm not using compression. I found out that my host, [Bluehost](http://bluehost.com/), dynamically turns on and off compression based on CPU usage. So at any given time I may or may not have compression working. I'm not sure how I feel about that though. [Commit](https://github.com/traeblain/traeblain.com/commit/83f9a297a6a433cfbc404b4fb2836937c0521761#L0R54)

#### Character Encoding

Finally I added Character Encoding to the HTTP headers:

    AddDefaultCharset UTF-8

According to Google this helps... eh. [Commit](https://github.com/traeblain/traeblain.com/commit/e4b8e90fcded9128528c963974ef54d19d1222bc#L0R4)

### What I'm Missing and What's Left

I'm finally left with items I cannot control. Most of this is funny because Google is the one recommending these speed improvement and most of the items that are suggested are because of Google. Sad they cannot follow their own performance rules.

First, we have a Cache Validator problem with my [Google Fonts](http://www.google.com/webfonts). Apparently Google doesn't validate. hehe.

Second, I have a "Defer parsing of Javascript" this basically pushes the Javascript to only run at the end of the page load. Where I was able to fix this item, it actually hurt the page load. It actually took longer to load the page when the parsing was defered...but it still hurts my score.

Third, it recommends Minifying the HTML as well. I could do this, but I'm not sure if [Hyde][] has a plugin or way to do this during processing. If it doesn't, then it's no big deal. It says it could save 8.1k. It also incorrectly asks to Uglify a Javascript I have. It's already Uglified, but there is Copyright data that I haven't removed which makes the PageSpeed plugin think it's not.

Finally, It suggests removing unused CSS which I'm not going to do. And using efficient CSS selectors that I'm not going to modify because of CSSLess.

Sot that's my site's speed bump. What do you think? Anything I need to do further, or know of a way to force Bluehost to always compress?


[gps]: http://code.google.com/speed/page-speed/
[Hyde]: http://hyde.github.com/
[jQuery]: http://jquery.com/
[LessCSS]: http://lesscss.org/