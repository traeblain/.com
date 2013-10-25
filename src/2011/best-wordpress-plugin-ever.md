Title: Best Wordpress Plugin Ever
Date: 2011-07-15 20:21
Tags: plugin, tools, wordpress
Slug: best-wordpress-plugin-ever

![Wordpress](http://blog.traeblain.com/wp-content/uploads/wp3-logo.png)

Wordpress plugins are a love/hate relationship with me. There are a ton of plugins out there, but ultimately what you risk from every plugin you install is:

  1. The developer stops supporting it
  2. It breaks when Wordpress is updated
  3. Security
  4. Annoying quirks

So it's rare that you find one that is so amazing that it may replace multiple plugins. And this is it. When you troll the plugin directly, many of the popular plugins do one thing. They insert a contact form, they insert a gallery, they insert a poll, insert related posts, or insert the latest tweet. Or they give you a widget for display various items. Most of these are simple php codes and you have to deal with the admin area overhead that many of these add as well as other non-necessary stuff so that the plugin developers can make it feature rich.

Then comes this plugin. The [Shortcode Exec PHP](http://blog.bokhorst.biz/3626/computers-en-internet/wordpress-plugin-shortcode-exec-php/) plugin from Marcel Bokhorst takes care of nearly them all. In short, what it allows you to do is create php code that is executed using a standard Wordpress style shortcode.

The simplest example is here where Marcel says using a simple shortcode you can display a person's age by only knowing the birthdate.
    
    extract(shortcode_atts(array('birthdate' => 'Jan 1, 1980'), $atts));
    return floor((time() - strtotime($birthdate)) / (60 * 60 * 24 * 365.2425));

To use this you'd just type:
    
    [age birthdate="March 1, 1980"]

Which would display the age, as of today being 31.

So what all can you do with this? If you read my burger reviews, I use it to show the review. Instead of me putting the text and picture in the posts, instead of me adding the styling the CSS sheet that has to get loaded for all pages unnecessarily, instead of me having to remember all the different stuff for each rating...all I have to do is add my shortcode:
    
    [burger brating="4"]

And the output looks all pretty like this:

<h6 class='burger four' title='Rating of 4 indicates the burger actually tasted good. Keep doing what you are doing, bro, because it is working. Thank you, sir, may I have another.'>4<span class='burger_of'> out of </span>5</h6>

Also, I have shortcodes setup for my widgets. Whether it's a plugin that I use that doesn't have a widget with it, instead of digging in my theme files (which I'm a big proponent of child themes and only editing the CSS and functions.php) I can just add the shortcode to a text widget and the BOOM...displayed. Or if you are more adventurous, you can do just a whole mess of code and use it as a shortcode.

If you know of some great shortcode examples that you'd like to share, please do so. I'm really digging this plugin. You should as well. [Get it Now!](http://wordpress.org/extend/plugins/shortcode-exec-php/)