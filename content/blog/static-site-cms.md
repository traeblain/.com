---
title: Static Site CMS
description: The lack of static site content management seems like a huge oversite.  I
  think I may have a decent setup now.
date: 2023-01-24T21:08:11.151Z
images:
  - https://res.cloudinary.com/dixwznarl/image/upload/c_scale,q_auto:eco,w_1920/v1674600173/notebook/coding.jpg
draft: false
tags:
  - site
  - tools
---

Why is it that there are very few file based, git backed, content management systems (CMS) out there?  I see all over people using Hugo, Gatsby, 11ty, Jeckyll, and more to run their static site. The common denominator on all of these? They prioritize the use of .md files and flat-file systems to house their content.  Although most of these can operate by pulling remote data from an API, this wasn't the primary function.

Additionally, code repositories (i.e. git) have been the standard in storing and versioning these flat files.  With all this pseudo-standardization, you would think that there would be a plethora of options to post and edit content through the browser.  It seems like the default is that you have a development machine readily available and at your person at all times to edit/post content to your site.

## Web Browser Front End

We really need to understand that we won't always have this access, all alone. Being able to post, edit, and brainstorm through the browser is key to more and better content. This seems hard to get to.

[Netlify CMS](https://www.netlifycms.org/) was one of the groups committed to bridging this gap.  I use Netlify, and running on their system without dealing with all the sync, git commits, and more made this a fantastic tool.  But as of late last year, Netlify has ceased to continue development for the tool and it has a number of problematic quirks that make it frustrating to use.  

[Forestry.io](https://forestry.io/) was the next beautiful service for static site management. It was also able to show to details, commit to the repo and even preview the design. It worked well with Hugo (but didn't require it).  They are sunsetting Forestry to focus on their new system. This new system, [TinaCMS](https://tina.io), has a [whole slew of features](https://tina.io/docs/forestry/missing-forestry-features/) that Forestry had that Tina is not considering to support.  This really bummed me out because I was able to completely refactor this site to get rid of some custom JS that made Forestry balk.  This would have been my prefered way of updating this site.

This is where I got stuck.  I really don't see any other systems out there that work with most static site generators in how they work natively.  Most all other systems operate on the "we store your data, your site pulls from us" method. So outside of always having a development system on hand, I was stuck.

## FrontMatter to the Rescue

So I was worried that I was stuck with NetlifyCMS and fighting through all the quirks that this involves.  But at one point I remembered, I have [code-server](https://fleet.linuxserver.io/image?name=linuxserver/code-server) setup on a system.

Code-Server is basically Visual Studio Code running in a browser. Using my server's system as the base, I could run Hugo from there and both generate content and preview it from there.  This works, but it's not ideal for understanding what content you have and linking that content together.  This is what a CMS is good for.  But then a random look through the Extensions, I ran across [FrontMatter](https://open-vsx.org/extension/eliostruyf/vscode-front-matter). It basically turns VSCode into static site CMS.  It has git capability, but with VSCode already having a robust git connection and capability, it's really not necessary. Being that Code-Server runs remotely, it's like having a remote CMS and development system at my disposal!

It has some quirks of it's own, but it's still under active development.  So those should get ironed out.  It's honestly a nice system.  Go check them out: [FrontMatter CMS](https://frontmatter.codes/).
