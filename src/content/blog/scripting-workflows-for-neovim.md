---
title: "Scripting Workflows for Neovim"
description: "How I wrote my first custom script for my note taking workflow"
pubDate: 2022-10-23
tags: ["neovim", "lua"]
---
The extensibility of Neovim is loved by many because once you get to understand 
the basics of scripting, you can jump right in to start developing scripts and 
plugins to create a workflow according to your needs. All this is possible only 
because of the decision to choose lua as Neovim's scripting language.

## Why Lua?
- Small and Ideal for embedding.
- Lua 5.1 is a *complete* language. The syntax is frozen.
- Better backward compatibility.
- Nvim uses Lua *internally* as an alternative to C.
- LuaJIT is at least 10x faster than Python.


## Learning Lua
As mentioned above, Lua is a small but complete language. So familiarizing with 
Lua scripting will be quick if you know the basics of programming. The official Lua 
documentation is good enough to learn the complete language. On top of that, you 
should slowly familiarize yourself with the Nvim API which can be called through lua to 
write scripts that interact with the editor.

Useful Reference Materials
- [Lua Documentation](https://www.lua.org/pil/)
- [Nvim Lua Guide](https://github.com/nanotee/nvim-lua-guide)

----

## Custom Lua Script
Creating a custom Lua script is the first step you take before you start developing 
a full plugin. If you get confident enough to write a simple script for your config, 
that's the point at which you know you are ready to be a plugin developer.

In my case, I decided to write myself a Wiki script I can use as a replacement to 
[VimWiki](https://github.com/vimwiki/vimwiki/). 

*VimWiki is a personal wiki for Vim -- several linked text files that have 
their own syntax highlighting.*

I decided to just use markdown as the syntax for my new wiki page since I use 
markdown in many places.

The first step of that was to create a script that has a function to enable recording
diary entries. This should enable a keymap to call a lua function that can create 
a folder `~/wiki/diary/` and open a file within that directory with the current date.

One of the challenges was to get the home directory of the OS. It varied for Windows 
and Linux. So I had to take help from a plugin called 
[plenary.nvim](https://github.com/nvim-lua/plenary.nvim).

```lua
local Path = require("plenary.path")
local home = require("os").getenv("HOME")

local wiki = {}

-- Create a new Diary entry
wiki.create_diary_entry = function()
    local sep = Path.path.sep
    local diary_path = home .. sep .. "wiki" .. sep .. "diary"
    local diary_name = string.format(diary_path .. sep .. "%s.md", os.date "%Y_%m_%d")
    vim.fn.mkdir(diary_path, "p")
    local bufnr = vim.fn.bufnr(diary_name, true)
    vim.api.nvim_win_set_buf(0, bufnr)
end
```

This function was working well. Now I wanted to map this function to a key. For 
that, I used the `vim.keymap.set(op, lhs, rhs, opts)` function to set the keymap 
to call the function. 

It worked well. This made me more confident and I started to develop more features 
to this script.

I used the same function logic to open `~/wiki/index.md` file as the wiki index page.
```lua
-- Open the Index file of the wiki and change the working directory
wiki.open_index = function()
    local sep = Path.path.sep
    vim.fn.mkdir(home .. sep .. "wiki", "p")
    local index_path = home .. sep .. "wiki" .. sep .. "index.md"
    local journal_dir = home .. sep .. "wiki" .. sep .. "journal"
    vim.fn.mkdir(journal_dir, "p")
    vim.api.nvim_set_current_dir(home .. sep .. "wiki")
    local bufnr = vim.fn.bufnr(index_path, true)
    vim.api.nvim_win_set_buf(0, bufnr)
end
```

The next feature was to create a new Wiki journal when I highlight a text in index.md 
and press enter. It was hard to do this since I had to make the selected word as a 
markdown link first and then create a new entry. With some research, I achieved the 
result.

```lua
-- Create a new Wiki entry in the Journal folder by highlighting the word and pressing <CR>
wiki.create_wiki_file = function()
    local selection_start = vim.fn.getpos("'<")
    local selection_end = vim.fn.getpos("'>")
    local line = vim.fn.getline(selection_start[2], selection_end[2])
    local name = line[1]:sub(selection_start[3], selection_end[3])
    local filename = name:gsub(" ", "_"):gsub("\\", "") .. ".md"
    local sep = Path.path.sep
    local new_mkdn = '[' .. name .. "](." .. sep .. "journal" .. sep .. filename .. ")"
    local nline = line[1]:sub(0, selection_start[3] - 1) ..
        new_mkdn .. line[1]:sub(selection_end[3] + 1, string.len(line[1]))
    vim.api.nvim_set_current_line(nline)
    local journal_dir = home .. sep .. "wiki" .. sep .. "journal"
    local bufnr = vim.fn.bufnr(journal_dir .. sep .. filename, true)
    vim.api.nvim_win_set_buf(0, bufnr)
end
```

I added a keymap to toggle the states of a todo task in markdown. A todo task in 
markdown has two states.
```
- [ ] Todo
- [x] Complete
```
But I added few more states to show the status of the task.
```
- [ ] Todo
- [_] Cancelled
- [-] In Progress
- [!] Urgent
- [?] Query
- [x] Complete
```

So the toggle options cycled between these three when I pressed the keymaps.

```lua
wiki.toggle_todo = function()
    local cursor = vim.api.nvim_win_get_cursor(0)
    local line = vim.fn.getline(cursor[1])
    local box_start = 0
    local box_end = 0
    for i = 0, string.len(line) - 1, 1 do
        local char = line:sub(i, i)
        if char == "[" then
            box_start = i
            break
        end
        if i == 100 then
            error("Limit exceeded", 1)
            break
        end
    end
    if line:sub(box_start + 2, box_start + 2) == "]" then
        box_end = box_start + 2
    end
    local todo_options = { " ", "_", "-", "!", "?", "x" }
    local state = line:sub(box_start + 1, box_start + 1)
    for i, v in ipairs(todo_options) do
        if v == state then
            if i == table.maxn(todo_options) then
                i = 0
            end
            state = todo_options[i + 1]
            break
        end
    end
    local newline = line:sub(0, box_start) ..
        state .. line:sub(box_end, string.len(line))
    vim.api.nvim_set_current_line(newline)
end
```

But one issue I found was that all these keymaps get assigned to any type of file 
that I edit. If I add this to the file type plugin folder, it will be enabled for 
all markdown files I edit. But I don't want that either. So I decided to map keys 
to those particular buffers which get opened when this wiki plugin is run using 
`vim.api.nvim_buf_set_keymap(bufno, mode, lhs, rhs, opts)`.

I also used regex to jump between all the wiki entry links present.
```lua
    vim.api.nvim_buf_set_keymap(
        bufnr,
        "n",
        "<Tab>",
        ":let @/=\"\\\\[.\\\\{-}\\\\](.\\\\{-}.md)\"<CR>n",
        {
            noremap = true,
            silent = true,
            nowait = true,
        })
    vim.api.nvim_buf_set_keymap(
        bufnr,
        "n",
        "<S-Tab>",
        ":let @/=\"\\\\[.\\\\{-}\\\\](.\\\\{-}.md)\"<CR>N",
        {
            noremap = true,
            silent = true,
            nowait = true,
        })
```

The final script can be seen in this link.

I have a few more features in my mind that I would like to add to this. Maybe when 
it is ready, I'll think about moving this from my config to a separate plugin to 
make it available for everyone.

I love how open source helps in creating good software and builds new developers.
With this blog, I am trying to do the same. If one person gets the motivation to 
start doing something new after reading my blog, it's worth it for me.

Useful tutorials-
1. [Neovim Lua Plugin from scratch](https://youtu.be/n4Lp4cV8YR0)
2. [Neovim Autocmd](https://youtu.be/ekMIIAqTZ34)
3. [Why is Lua a good fit for Neovim](https://youtu.be/IP3J56sKtn0)
4. [Your first vimrc](https://youtu.be/x2QJYq4IX6M)
