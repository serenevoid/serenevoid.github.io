---
title: "kiwi.nvim - A simple markdown note taking plugin"
description: "If you have been using neovim for taking notes and writing journals"
pubDate: 2023-08-14
tags: ["neovim", "lua"]
heroImage: "https://i.imgur.com/krxz9Jc.jpg"
---
I have been using VimWiki for a while now. It was perfect for my usecase since 
it was a minimal plugin with sensible keybinds and defaults that helped me take 
notes easily inside Neovim. It offered a lot more features but I never used it.
Even on youtube and reddit, I came to know that majority of the people never use 
all the features that it provides.

This made me think of writing a custom script which I can add to my neovim config 
that can help me with the most common features I use in my VimWiki workflow. I 
even wrote a [blog post](/blog/scripting-workflows-for-neovim) about the same script a while back.

But I was sure people won't just copy the script to try it since it was just a 
script. And I always wanted to write a neovim plugin on my own. So this is my 
attempt at writing a simple note taking plugin from scratch in Lua.

## Introducing [kiwi.nvim](https://github.com/serenevoid/kiwi.nvim)

kiwi.nvim is my first neovim plugin to handle markdown note taking with linking notes. 
You can also use this to create [zettlecasten](https://youtu.be/yqKspwjXu18) notes.

All it does is have keybindings to open an index note file and then link other files 
from inside this index note. This is basically how a Zettlekasten system works. 
There is an journal entry feature along with note taking. You can open today's diary 
entry and write down things you did. And there is a keybind to generate the diary 
index which links all the diary entries to a diary index file. This diary index is 
generated automatically.

In short, this plugin is a lightweight replacement for [VimWiki](https://github.com/vimwiki/vimwiki). It has the most important 
features provided by VimWiki and uses pure markdown to take notes. Pure markdown 
note taking has several advantages than using a custom syntax like in VimWiki. These markdown 
notes can easily be used as content files inside modern blogging tools which use markdown 
to write blogs. This pure markdown is accepted in most other note taking apps too. 

Since the files are normal markdown text files, you can sync these notes between devices 
using cloud storage services like google drive, dropbox, or even upload them to GitHub or 
GitLab to version control them.

There are a few more features built to kiwi.nvim so that it doesn't feel incomplete. 
Overall, kiwi.nvim aims to be a small note taking helper to help you take notes without 
much overhead and also lets you stay within your vim experience.

It doesn't take a lot to get started with this plugin. If you are a neovim user, and you 
have some neovim configuration skills, you can easily get started with this in under a minute.
If you are a neovim user and you have the habit of taking notes, I would definitely suggest 
you to give this a try.

## Screenshots

![index.md](https://i.imgur.com/2aZEdlS.jpg)
![custom_note.md](https://i.imgur.com/SRnBTuy.jpg)
![todays_diary.md](https://i.imgur.com/p0zM9yG.jpg)
![todo.md](https://i.imgur.com/V6FV9PA.jpg)
