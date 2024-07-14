---
title: "Configuring Neovim with Lua"
description: "An easy guide to get started with your first neovim setup"
pubDate: 2022-08-21
tags: ["neovim", "lua"]
heroImage: "https://i.imgur.com/fONpsb9.jpg"
---
Setting up your text editor to make it suitable for programming is the most 
interesting and never-ending part of using Vim or Neovim. You'll constantly see 
new plugins online and a whole community is working towards making things better 
with new features day by day. Maybe one day, you'll write your own plugin just 
because why not? It is fun and faster to script your plugin in Vim/Neovim.

## But which one to choose? Vim? Or Neovim?

Well, I'd suggest Neovim because it uses LuaJIT which is a well-known programming
language. It is very lightweight and also very performant which makes it suitable 
for embedded system programming and also game development. It is way simpler than 
Vimscript and therefore I feel using Neovim is much simpler than using Vim.

## That's all good but where should I start?

The very first thing to know is that every time Neovim starts, it reads through 
a file called init.vim or init.lua if either one of them is present in the directories
listed in the help section. So that's where you'll have to start. You'll find a 
lot of neovim config tutorial videos on youtube and also I'll link some good configs 
which you can refer to while creating your own.

> It is always better to create your configs even if you are referring to others'
config files. This helps to understand better about writing a lua script and makes 
it easier when you'll write Lua plugins later if you ever need to make one for work 
or as a hobby.

The best resource I can recommend is [the nvim-lua-guide](https://github.com/nanotee/nvim-lua-guide/blob/master/doc/nvim-lua-guide.txt)
by nanotree in GitHub. It explains everything from scratch and also helps you 
understand the concepts better. This will make you confident enough to write 
your own plugins in the future. I wrote my custom status bar with the help of the 
guide linked above. And I started watching the streams of one of the core 
developers of Neovim, [TJDevries](https://www.youtube.com/c/TJDeVries/). His 
youtube videos show us new cool features and also teach us a lot about neovim.

## How do I add plugins and which ones should I use?

There are mainly two ways to add a plugin to Neovim. Either you can clone the 
github repo to the location `~/.local/share/nvim/site/pack/*/start/`.

The other way is to use a proper plugin manager. I prefer using a plugin manager 
because that's easier to manage and track all the plugins all at once. 

There are a few very popular ones:
1. [junegunn/vim-plug](https://github.com/junegunn/vim-plug)
2. [wbthomason/packer.nvim](https://github.com/wbthomason/packer.nvim)
2. [folke/lazy.nvim](https://github.com/folke/lazy.nvim)

Out of these, I use packer because it is written in lua and also its simple to set up.

And now let us talk about choosing the right plugins. Note that all the plugins available
are cool but you can choose the best one that suits your need.

This is the list of plugins I use and a short description of them.
1. [lewis6991/gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim) - A super
fast git decoration plugin.
2. [nvim-lua/plenary.nvim](https://github.com/nvim-lua/plenary.nvim) - A library 
plugin used by most other plugins out there.
3. [nvim-lua/popup.nvim](https://github.com/nvim-lua/popup.nvim) - A plugin that 
implements the popup API as implemented in VIM.
4. [neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) - This plugin
consists of the config files used for enabling the built-in lsp client.
5. [hrsh7th/nvim-cmp](https://github.com/hrsh7th/nvim-cmp) - A plugin that 
provides LSP code completion.
6. [hrsh7th/cmp-nvim-lsp](https://github.com/hrsh7th/cmp-nvim-lsp) - A plugin that
provides LSP client recommendations in the completion plugin.
7. [hrsh7th/cmp-path](https://github.com/hrsh7th/cmp-path) - A plugin that provides
local path suggestions in the completion plugin.
8. [hrsh7th/cmp-buffer](https://github.com/hrsh7th/cmp-buffer) - A plugin that 
provides completion options from the open buffer.
9. [hrsh7th/cmp-nvim-lua](https://github.com/hrsh7th/cmp-nvim-lua) - A plugin 
that provides completion options with respect to neovim lua config.
10. [onsails/lspkind-nvim](https://github.com/onsails/lspkind-nvim) - VSCode like 
pictograms to nvim built-in lsp.
11. [glepnir/lspsaga.nvim](https://github.com/glepnir/lspsaga.nvim) - A better UI 
for the built-in LSP Client.
12. [L3MON4D3/LuaSnip](https://github.com/L3MON4D3/LuaSnip) - A snippet engine 
written in lua.
13. [saadparwaiz1/cmp_luasnip](https://github.com/saadparwaiz1/cmp_luasnip) - A plugin
that provides completion options from the snippet engine.
14. [windwp/nvim-autopairs](https://github.com/windwp/nvim-autopairs) - A plugin 
that provides pairing of brackets and parentheses that is essential for a code 
editor.
15. [numToStr/Comment.nvim](https://github.com/numToStr/Comment.nvim) - A plugin 
that has intelligent code commenting functionality.
16. [nvim-treesitter/nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) - 
A plugin that provides a simple and easy way to interact with the treesitter inside neovim.
Treesitter is an incremental parsing system for programming tools.
17. [nvim-telescope/telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) - 
An advanced fuzzy finder tool with many other features.
18. [ThePrimeagen/harpoon](https://github.com/ThePrimeagen/harpoon) - A simple 
plugin that makes file navigation inside a project easier and faster.
19. [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim) - A color scheme plugin.
20. [kyazdani42/nvim-web-devicons](https://github.com/kyazdani42/nvim-web-devicons) - A plugin
that provides the dev icons.

Have fun hacking!

Useful links:
- [My Neovim config](https://github.com/serenevoid/neovim-config-revamp)
- [Awesome Neovim Plugins list](https://github.com/rockerBOO/awesome-neovim/blob/main/README.md)
- [Distrotube's guide to setup Neovim with lua](https://youtu.be/m62UCkdQ8Ck)
