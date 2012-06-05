Title: Giving Ubuntu More Love
Date: 2012-05-27 20:41
Tags: tools, linux
Slug: giving-ubuntu-more-love

![Windows and Linux](/static/images/2012/ms-linux.jpg "Windows and Linux alignright")

I was inspired by a conversation from this [Twitter Status](https://twitter.com/slizadel/status/204734115080183812) to re-investigate the usage of Linux on my laptop. I've been strapped to Windows for a couple of reasons I'll outline below, but I wanted to know if I could get through all that are start using Linux primarily again.

## Can I?

The first question like I said was "Can I?". There were a few things keeping me tethered to Windows.

1.  Corporate VPN/Etc./Etc
2.  Skype
3.  Security Camera Software
4.  WinAmp
5.  Fitbit

Why can't I use Linux for any of these? Let elaborate. For item 1, getting to my corporate servers was difficult with Linux previously because they wanted specific setups through their specific VPN software. Now that's not much of a problem with a different system.

For item 2, Skype does work on Linux, but not as well as Windows/OSX. It seems to be an old version, but does work. 

I won't get into specifics as to why I purchased a surveillance system, but monitoring it utilizes some Windows only software. I dug up some information that it will work with [Wine](http://www.winehq.org/). So I'm set with item 3 as well.

Now I'm beginning to get stuck. I've actually fallen back in love with WinAmp after dumping it during the whole [WinAmp 3 debacle](https://en.wikipedia.org/wiki/Winamp3#Winamp3). It still feels a bit much at times, but mostly a great experience. The problem? As in the name, it's a Windows only program. So I'm dealing with this one...doesn't seem too big of a problem though.

Item 5 is the one that is going to probably keep Windows on my system. FitBit just doesn't support Linux like they should. Being that it's a simple protocol to an ANT receiver, they shouldn't have neglected this aspect. And since (as to what [libfitbit](https://github.com/qdot/libfitbit) has shown) it is nothing trivial to get the data to their website, it makes the fact that they don't have a Linux suite annoying.

## What I Did...

What I did, instead of re-partitioning my drive and having all those issues, I simply downloaded Ubuntu's Windows installer system: [Wubi](http://www.ubuntu.com/download/desktop/windows-installer). Although I'll be taking a little bit of a performance hit, it will allow me to to continue using Windows easily with Ubuntu. And if I'm done...uninstall it.

## Almost There

Since the main programs I use on my computer everyday is [Chrome](https://www.google.com/chrome) and [Sublime Text](http://www.sublimetext.com/), both are running well. I'm almost to the point where I'd like to be.

There are a couple of sketchy things. Getting Dropbox to work correctly was a bit of a fight. They don't have a supported version in the default repositories, so that was a fight. Then to keep from storing two sync'd but separate files on my computer from Dropbox, I had to create a symbolic link to the Windows store. Not a problem, just a task.

    :::bash
    ln -s /path/to/Windows/Dropbox /home/me/Dropbox

Finally I'm concerned with CrashPlan. Since I only have a single computer license and it's being used on this computer, I am confused as to what I'm going to do here. I wouldn't mind it keeping my system backed up but due to the change in the file structure and the fact that it's going want a used license, I don't think I'll be able to fix this. Any thoughts would be great.

## We'll see...

I'll play with Ubuntu for a while before committing to it. Normally it has been nice to have one Windows system at my disposal for myself and my wife. So this might be for naught. I most likely will continue to boot into Windows and use Ubuntu sparingly. I do have an extra system lying around that I might be able to work, I'll have to do some swapping and shuffling if that's going to work though. Things to play with...we'll see...