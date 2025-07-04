---
title: "Package Managers for Windows"
description: "A linux inspired way of installing software in Windows machines"
pubDate: 2024-9-25
tags: ["linux"]
---
Installing software has always been the same on windows machines from my childhood days.
You download a setup file and execute it, it shoots up a prompt, asking for the
installation folder, you confirm the configuration details and finally the software
gets installed and the prompt is closed.

This was became the default way of installing things to the OS for me. This was before
I was introduced to the world of linux OS. I remember watching tutorials on youtube
where people installed softwares from the command line in thier linux machines.
I used to think how inconvenient it was because you have to remove all these *enchantments*
just for getting some programs to run. But somehow after daily driving linux for
a few weeks, I started to love the commandline and the way it installs and updates
software automagically.

Now that I use windows at work, I am thankful for the package managers that are available
on windows. There are mainly 3 package managers that are most common among Windows users.
1. [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/) - Maintained by Microsoft
2. [Chocolatey](https://chocolatey.org/) - The first Windows package manager
3. [Scoop](https://scoop.sh/) - A Windows package manager for Unix enthusiasts

I personally use Scoop in my system because of the following reasons:
- Does not require Admin access to install softwares. All softwares are installed to the home directory at `~/scoop/`.
- Does not pollute PATH environmental variable
- Very little to no user intervention required
- Commands are easier to remember (just a personal opinion)
- Updates and fast and very well handled

If you are someone who constantly manages your software tools manually, I highly
recommend using a package manager for it.
