---
title: "Fedora Multimedia Codec is a pain to set up"
description: "A temporary fix to resolve the multimedia codec issue which is present in fedora"
pubDate: 2023-05-14
tags: ["linux"]
heroImage: "https://i.imgur.com/4Pl0EUC.jpg"
---
## Fedora Linux
Fedora Linux is a Linux distribution that was originally developed in 2003 by Fedora Project as
a contribution of Red Hat Enterprise Linux Project. It is a fast moving project that brings recent
software to the user but also not so bleeding edge like Arch. It has the stable ground between stability
bleeding edge. It has been my daily driver for the past two years now.

They provide different flavors of the installer for different use-cases. But I went for the Server install
because I like to get a base install of the linux OS and then build my desktop environment on top of it myself with
the software that I know I'll be using. It helps me keep the system clutter free and its a fun way to
configure your system to meet your needs. It is a time consuming process but its fun building
your system on your own. Its just like playing with Legos. All the base parts are there and you can pick and choose
what you need to build anything that you desire. Do keep in mind that this is not a feature of Fedora Linux.
The minimal install and building on top of it is available for almost all linux distributions out there.

## How I started using Fedora
I used to be a distro hopper in my college days and also during my first job. I have tried out different linux
distributions and I used to jump to a new one after a few months of using it because I was bored.
The joy of setting up (or ricing, as the linux enthusiasts call it) is a fun process to go through.
You find inspirations from online where people create cool looking desktops with their linux OS and
share their configuration files. Its just copy and paste mostly but then tweaking those configurations
to adapt to your system and your programs.

But soon I wanted to settle in a stable system that was in between Debian and Arch. Debian is
known for rock hard stability of the system but it ships software slower than others because of
the stability checks. Arch is a very fast moving system as it provides bleeding edge software but
they advice the users to go through the patch notes before updating the system to avoid system breakage.
I wanted the best of both worlds. This meant my system won't be as stable as a Debian or as
recent as an Arch system but it would have fairly recent software with decent stability.

### Enter Fedora

Fedora Linux was gaining more popularity around that time with the linux enthusiasts for shipping
a good gnome desktop experience. I tried it out even if I wasn't a fan of pre-made Desktops.
But I really enjoyed using the dnf package manager that Fedora provided. It was easier to use and
configuring it was simpler. So I used the server installer of fedora to set up my base system and things
just worked. Except one thing.....

## Fedora Media Codec issue
Fedora is strict about the repositories and packages it provides to it's users. They
prevent shipping closed source and non-free packages to the user through the default dnf
repository. And sadly, some of the Multimedia codecs are either closed or non-free. Fedora avoids shipping
these due to legal reasons.

The main codec that I as a required was openh264, which was necessary to play mp4 files, one of
the most common video formats out on the internet. It was a pain to search up how I could
install the codec for this. Online forums said that I had to enable RPM Fusion and install the codecs from there.

RPM Fusion is a third-party that provided restricted and non-free packages to Fedora linux users.
And once enabling the RPM Fusion repository, I had to install the plugins of the application GStreamer from these
repository that provided the necessary codecs that I might need for playing Multimedia.

Recently these multimedia packages were hosted in another safer repository called `fedora-cisco-openh264`.
This provided the necessary openh264 package which I needed to play mp4 files. I added the repository source to dnf config.
As per the Fedora docs, to install the necessary codec, I should run the following command:
```sh
sudo dnf group install Multimedia
```
I executed the command as they instructed but the next issue was that the fedora-cisco-openh264 repository
wasn't reachable and it gave a 404 error. This was something that was unexpected since the official
docs couldn't be wrong. It was updated a few months ago and it wasn't normal to see the website down. I waited for a
few days and tried again but I was greeted with the same 404 error. 

I looked up the source website and as expected, it
was unreachable. I was able to browse the folder but the file download wasn't possible.
```
https://codecs.fedoraproject.org/openh264/39/x86_64/os/Packages/o/
```

After numerous tries, I decided to try accessing the files through a Tor connection and it was successful.
I could download the rpm file for the package through the browser with the help of this Tor connection and
from here it was fairly straight forward. I could install the rpm file for openh264 and the mp4 playback
was working exactly as expected.

I am still not sure why the rpm packages were unreachable by the package manager or the browser through my connection.
But for whoever is facing the same issue, this is a temporary fix that worked for me and maybe it could work for you too.
