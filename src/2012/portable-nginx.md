Title: Portable Nginx
Date: 2012-03-22 15:35
Tags: web, tools, server
Slug: portable-nginx

![Nginx Logo](/static/images/2012/nginx.png "Nginx Logo")

If you are going to do web development, having a personal web server is invaluable. Having the capability to load up your work locally and view the results is almost necessary. Having an excellent development environment is key.

I've been using [Nginx][] when I found out how small it is, better at serving static pages (as I am using a [static site generator now](/2011/a-new-engine/)), and how easier it is to use than [Apache][]. But, I haven't used an installable web server since abandoning [Windows Web Platform Installer][wwpi]. I've used a [Portable XAMPP][xampp] but configuring and changing is a bit of a pain. And it was heavily taxing an old system I was using because of Apache's memory usage. 

### Portable Nginx/MySQL/PHP

I've been working on this side project of having an install-less web server (like Portable XAMPP), but utilizing [Nginx][], pronounced Engine-EX. [David Pennington][dp] set the groundwork for this, and his base system has been running strong for me for months. I then took his work and (as a limited work) took it a little further. David's version was based on a [BATCH][] script that would kick off the servers as well as stop them. This worked well, but you'd get the annoying things like Windows 7 is not a big fan of batch files and likes to annoy you about running them...although after clicking "OK" it would run just fine. As well as, David's files would pop up multiple CMD screens before settling down.

I've taken his work, and created a compiled [Python][] script that gives you a single program to start, stop, and eventually restart the server. Right now it's not as easy as just double clicking the BATCH file, as there are parameters, but you could create a "lnk" file take care of this. But this lays the groundwork for what I eventually want to get.

Here's the location of the project: [Portable WNMP][PWNMP]

#### Installation

You can install the script by cloning the repository to where you want, for instance a thumb drive or [Dropbox][] folder. The proceed through the download process.

Clone this way:

    :::bash
    git clone git://github.com/traeblain/wnmp.git

1. Download [PHP][] and get the 'no-install' zip--non-thread-safe will be fine--file and extract it in the "php" directory.
2. Download [Memcached][], this is the best I could find. I'd recommend the 32-bit version for now. Place it in 'memcached' directory.
3. Download [MySQL][], using the ZIP file and place it in the the 'mysql' directory.
4. Download [Nginx][], place it in the 'nginx' directory.

#### Configuration

The example.nginx.conf is a good start with PHP already enabled. It should get you started, at least. The php.ini for PHP and my.ini for MySQL are a bit more difficult, but using the mini my.ini and the development php.ini works well to get started. MySQL will take minimal initial configuration, but php.ini will take some customizing to enable the extensions.

#### Running

Like I said, just use the `server.exe` file to start everything. To run all servers and daemons simply start the server with:

    server serve

To stop the server:

    server stop

To run the server but not use MySQL:

    server start -m

It's as easy as that!

### Future

I'm working on some developments to make it easier to use with the hope of having a GUI at some time that will monitor the servers (tell you if and what is running) as well as make the command line a bit easier to use.  I also hope to prepare an installer that will automatically download the latest versions of PHP, MySQL, and Nginx so you won't have to go and dig. Then I'll have to figure out how to

I'm learning Python's Window's hook and more, so I'm moving forward in a slow fashion. 

Let me know what you think. I'll get a zip file for the non-git users as soon as I can.

[Grab it here][PWNMP]


[Nginx]: http://nginx.org/
[Apache]: http://httpd.apache.org/
[wwpi]: http://www.microsoft.com/web/downloads/platform.aspx
[xampp]: http://portableapps.com/apps/development/xampp
[dp]: http://code2design.com/
[BATCH]: https://en.wikipedia.org/wiki/Batch_file
[Python]: http://python.org/
[Dropbox]: http://db.tt/0Sx6Fxom
[PHP]: http://windows.php.net/download/
[Memcached]: http://blog.elijaa.org/index.php?post/2010/08/25/Memcached-1.4.5-for-Windows
[MySQL]: http://dev.mysql.com/downloads/mysql/
[PWNMP]: https://github.com/traeblain/wnmp