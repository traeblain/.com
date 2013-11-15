Title: Encryption for Everyone
Slug: encryption-for-everyone
Date: 2013-11-01 17:01:37
Tags: email, internet, commentary

![Encryption for Everyone]({filename}/static/images/2013/security-lock.jpg "Encryption for Everyone")

Ok, everyone knows the [NSA is watching us][1].  They are actively pulling our information and under the guise of terrorist surveillance they are watching everyone.  [As Lavabit has shown][2], the courts and the government are no longer simply watching the terrorists, but asking for the tools for mass surveillance.  I liken the situation with Lavabit to asking the telephone company for access to an entire apartment complexes phone lines and they will "pick and choose" who they actually listen to.

The second question is, why should I care if I'm not doing anything wrong?  This is a week argument for a number of reasons.  Many [studies have shown that your behavior is modified when you are being watched][3], but if that doesn't do anything for you, then what about this.  I'm not doing anything wrong when I'm on the toilet, but I'd highly protest a camera in my  bathroom.  And if you say, "That's a private moment anyway!?!?"  How about your bank account or love letter/email to your wife?  What you are struggling with depression and asking advice?  Are you ok with any of that stuff being out of your control?

## Encryption Tools

I figured I'd simply list out the tools you need to keep the private eyes from watching your every move \[clap\] \[clap\].  It's really not all that hard, but sometimes takes some practice.

### Password Tools

Even with good encryption, most all your data/communication is only as safe as a password supplied.  So we should get away from 'ChildsName92' and 'WearGucci200' as our passwords and start using ones like: 'IHNxZ4yWo1zY' and 'mGB9C1A9nBpT'.  But how do you remember these?

[LastPass][] and [Dashlane][] have you covered.  I like LastPass because [it's been vetted][src] and they are very open about how they keep your passwords secure.  LassPass tends to have more universal usability (devices/applications/etc.).  You no longer have to even know your passwords any more.  You just need to remember one, so that one can be something like "Kidsname-Dog-vacationspot-date-nascardriverand#-nickname-random".  This is long, pretty secure, and memorable.  All your other passwords can now be completely random and secure.

### Threema

I wanted to start with [Threema][] because I think it is the method all other systems should use.  Threema makes it very user friendly and all our systems should be capable of using this model.

Threema is a chat program.  It's basically [WhatsApp][], [Line][], [Hangouts/GTalk][hangouts], or [Viber][].  But this one contains end-to-end encryption.  The model is great though.  They run with a 3 dot system.  One dot, or red, means Threema doesn't recognize the connection (ie from your contacts) so there is no telling if this person is who they say it is.  Two dots, or orange, means this person has verified themselves in some manner, so there is a level of trust that the person is who they say they are.  So if you have their phone number in your contacts, Threema knows that person is at that number so it's secure and relatively trusted.  Finally, three dots, or green, means you have physically verified the person and scanned a QR code on their phone.

It's so simple, but a model for anything using encryption.  Where the keys are on a server and accessible, the user knows that there is no 100% guarantee until you've physically negotiated with that person.

### Red Phone

So there isn't anything at a decent cost for encrypted phone conversations.  Great services like [SilentCircle][] and [Secure Mobile][securemobile] require subscriptions for this.  If you really need it, then you should pay for it.  But for regular people, [Red Phone][red] will get the job done between Android devices.  There aren't many good cross-platform choices, so this is what it is...

### SMS

See Threema.  It's not SMS, but it does the same thing.  Due to the way encryption causes the message to expand past the 160 character maximum, encrypting SMS is difficult. I'd use Threema instead.

### Cloud Storage

This is difficult.  You need something that is secured locally, even before it is sent.  The best option I've found right now is [Tresorit][].  You could, of course, use something like [TrueCrypt][] or [BoxCryptor][].  These are great tools, but not easy to work with.  Tresorit does it all for you.  The clients take care of the encryption.  From what I can tell, the data is as safe as your password.  They have an explanation of how things are managed [here][tresoritpass].

### Email

This one is the problem.  Email is inherently insecure.  It's simply not secure by design.  So emailing securely is problematic, there is a way to do it (at least details), but it is not easy.  [Gpg4Win][], [Thunderbird][], and [Enigmail][] will get you started.  There are much better guides on how to use these than what I can explain here, but it's a start.  If you use Webmail, then [Mailvelope][] is the best option.  What this leaves is an insecure metadata, in other words anyone can still see you are sending an encrypted message from your email...to another email...and it's subject, along with other information.  It's hard...but you can be private with email.

If you'd like to email me trae \[at\] traeblain.com then you can do so with my key.  You can [download it here][pgpkey].

### Anything Else?

Am I missing anything else?

[1]: http://www.foxnews.com/tech/2013/06/26/declassified-govt-report-details-decades-nsa-computer-spying/
[2]: http://arstechnica.com/tech-policy/2013/10/lavabit-defied-order-for-snowdens-login-info-then-govt-asked-for-sites-ssl-key/
[3]: http://io9.com/5813160/people-under-surveillance-are-more-likely-to-condemn-bad-behavior-in-others
[threema]: http://threema.ch/
[whatsapp]: http://www.whatsapp.com/
[line]: http://line.naver.jp/en/
[hangouts]: http://google.com/hangouts/
[viber]: https://www.viber.com/
[silentcircle]: https://silentcircle.com/
[securemobile]: http://www.securemobile.com/
[red]: https://whispersystems.org/
[tresorit]: https://register.tresorit.com/download?mode=1&ref=UCtnuV
[truecrypt]: http://www.truecrypt.org/
[boxcryptor]: http://www.boxcryptor.com/
[tresoritpass]: https://support.tresorit.com/entries/23577091-How-is-my-password-managed-in-Tresorit-
[pgpkey]: http://traeblain.com/dl/PGPkeyTraeBlain.asc
[lastpass]: http://www.lastpass.com/
[dashlane]: http://www.dashlane.com/
[src]: http://blog.lastpass.com/2010/07/lastpass-gets-green-light-from-security.html
