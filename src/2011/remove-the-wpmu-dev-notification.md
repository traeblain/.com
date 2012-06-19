Title: Remove the WPMU DEV Notification
Date: 2011-07-19 23:42
Tags: plugin, tools, wordpress
Slug: remove-the-wpmu-dev-notification

![](http://blog.traeblain.com/wp-content/uploads/anger-annoyed.jpg)

Something's been annoying me. Moving to Wordpress I got everything setup nicely, working well then a few months ago in my admin area, I start getting this horrible error message that says:

> Please install the latest version of our free Update Notifications plugin which helps you stay up-to-date with the most stable, secure versions of WPMU DEV themes and plugins. More information »

This annoyed the heck out of me. I decided the extra plugin was a 'What The Heck' move and installed the plugin...only to find out that:

  1. I have to get a Key from WPMU in order allow it to work right.
  2. I have to sign up for an account at WPMUDEV.org in order to get the key
  3. If you don't pay for your membership, this plugin will spam your Admin interface with sales items they want you to buy.
  4. You cannot disable these notifications completely (although there's an option it never works).
  5. Dismissing them only works for 1 week, then more come back.
  6. I was never able to update the plugin, it always gave me an error that WPMU's site said it has to do with a bad Key. After reworking the key and 2 manual updates, it still didn't automatically update when a new version was released.

I had enough. Not only can I not update their stupid plugin, when it's activated, it's a spam-machine. Not to mention the overhead of having a plugin enabled that you don't use. So I shot to the internets to find out how to get rid of this message. The top site is [Rhodilee Jean Dolor](http://rhodilee.com)'s site [that says](http://rhodilee.com/how-to-remove-wpmu-dev-notification/) "Stop using plugins with WPMU Dev or Incsub in the Author name". In her case, she stopped using the Google +1 plugin. The plugin I'm using is a bit different from simply the +1 plugin, and honestly I've found no plugin better (more on that later).

In Rhodilee's comments there's a [comment](http://rhodilee.com/how-to-remove-wpmu-dev-notification/#comment-53071) that says if you comment out these two items, you'll remove the nag box:
    
    add_action( 'admin_notices', 'wdp_un_check', 5 );
    add_action( 'network_admin_notices', 'wdp_un_check', 5 );

So that got me thinking, if this is in that plugin...and to keep from having multiple nag boxes if you had more than one of the offending plugins installed this has to be common. So I dug through my plugin and found the same thing. So I figured I should change it.

I created this plugin. [Check it out here at GitHub.](https://gist.github.com/1094336) So basically this plugin uses WordPress's built-in hooks to stop this from happening. It's really small, just under 20 lines of code and you can keep using your plugins without the hassle. Just put the 'tmb-wpmu-nag-remove.php' in your Plugins directory and Activate. (Considering a .zip so it will be easier to upload for people w/o FTP access, let me know if you need it.)

### Soapbox

You don't have to read this, unless you want to hear my personal thoughts on the issue.

Plugins that do this should not be supported, by use or any other form. I have often donated to plugins I've found useful and especially the ones that look like they took a ton of work and I really want them to be updated to ensure functionality. But forcing the users to download a plugin that 1) doesn't work and 2) spams the users is unacceptable behavior for developers.

So why am I still using the plugin? I do not want to give the Author/Plugin any love so I won't tell you which I'm using, but when I decided to return to Wordpress, I said I would only if a certain feature could be done. There were 3 decent plugins that could make what I wanted happen. The first one looked abandoned and was difficult to use, the second one didn't quite do what I wanted. This one appeared to be in 'active' development and did exactly what I wanted.  If I can find one in the future that works, I will probably switch but you should find a plugin that doesn't do this.

I'm really frustrated that such a large and active community would choose to do this to their members and users. It's bad practice and it's members should really question the site's leadership and whether or not this new requirement is best for their development efforts.

Officially off my soapbox...