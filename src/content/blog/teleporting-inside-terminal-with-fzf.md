---
title: "Teleporting inside a terminal with fzf"
description: "Traversing folders with the help of shell scripts and fzf"
pubDate: 2023-07-31
tags: ["terminal"]
heroImage: "https://u.cubeupload.com/serenevoid/evSi5Y.jpg"
---
If you are a person who uses terminal or commandline a lot, you might be knowing 
how difficult it is to jump between directoies. The default way of moving in and out 
of a folder is using cd (change directory). This is fine when you don't move a lot inside 
the terminal. But when you become a power-user, it feels like this is slowing you down.

## `fzf` - Commandline fuzzy finder

[`fzf`](https://github.com/junegunn/fzf) is a general purpose commandline fuzzy finder. It's main purpose is to provide 
a filter interface which you can use to search items from a list and send the selected choice 
to the standard output. It is cross platform. So you can use it even on Windows if you created a 
batch script or powershell script.

Executing fzf without any arguments will search all the files and it's nested files from 
the folder in which it is run. This might take a few seconds to start if you run it inside the home folder 
since it'll start moving through all the files present in the home directory and it's subdirectories.
This is still usable. But it is not fast enough.

One other way to use fzf is to prepare a list you need to search from and then pipe it 
to fzf. This will not take much time since fzf doesn't need to search up all the files 
in the current directory. This is the method I use to jump between directories.

## Implementation

If you write the command `ls | fzf` on the terminal, it will provide a filter to choose from 
the list of items you get from the `ls` command and then send that choice to the standard 
output. You can use this to choose a file or folder inside one directory. But what if you need to 
make a selection from more than one directory?

For this situation, we can use shell scripting to get the desired behaviour.
- We can use `find` instead of `ls` since find will list out the files inside multiple 
directories as a single list and it is faster than `ls`.
- By passing `-mindepth 1 -maxdepth 1` to `find`, you prevent the command from searching 
subdirectories.
- By passing `-type d` to `find`, you are limiting the result list to only include 
directories.
- Piping this result to `fzf` will provide a filter with your custom list elements.

```sh
find ~/dev/projects ~/dev/linux-tools -mindepth 1 -maxdepth 1 -type d | fzf
```

The above code will list the directories inside `~/dev/projects` and `~/dev/linux-tools` and move it to 
`fzf` for the filter interface. Once a choice is made, it will print that choice to stdout.
We need to take this and `cd` into that directory. It is a good idea to clear the screen 
before using fzf for a cleaner aesthetic view.

So finally, the required command is:
```sh
clear && cd $(find ~/dev/projects ~/dev/linux-tools ~/.config -mindepth 1 -maxdepth 1 -type d | fzf)
```

You can create and alias for this series of command and use it as you need. In my case, 
I use `jj` to jump to a directory using this command.

For my Windows system, I use `sh` from the git installation to run the script. There is a 
small adjustment that you need to make when using it in Windows. `sh` in Windows provides the locations in 
a unique format. It starts with `/c/Users/...` instead of `C:\Users\...`. We can make it work by 
removing `/c` from the path. We'll use `sed` for removeing the `/c` part.

```sh
find ~/dev/projects ~/dev/linux-tools -mindepth 1 -maxdepth 1 -type d | fzf | sed 's/c\///'
```

Add this command to a file and then run this script using git's `sh` to return the 
selected directory. For that its, easier to create a powershell function in powershell profile.

```sh
function jj { sh.exe dir_list | Set-Location }
```

Here, the script's name is dir_list. I have the path of the script added to the environment variables.
The output of the script is piped to `Set-Location`, which is a powershell specific command.

And I have a function created in powershell to call the script and move to that location.

There are more applications for fzf to simplify your workflow. So its a must have 
for commandline power-users, in their github repo and there are innumerous tutorials online on how 
you can use fzf to improve your workflow efficiently.

### `fzf` videos
- [DistroTube's Video](https://youtu.be/Ab6cWN9ZrXo)
- [Brodie Robertson's Video](https://youtu.be/gDPhsQEcY_c)
