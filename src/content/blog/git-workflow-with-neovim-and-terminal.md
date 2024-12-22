---
title: "Git Blame in Neovim without a plugin"
description: "Creating small scripts for your git workflow is fun"
pubDate: 2024-06-14
tags: ["neovim", "lua", "git"]
heroImage: "https://u.cubeupload.com/serenevoid/b3AdLw.jpg"
---

Source control is a very important tool that makes software development easier.
Git is one of the most widely used version control systems. Almost all new
developers solely use git at work and even for managing personal projects.

All the major IDEs and code editors have git plugins available that provides git
signs inside a file and also helps with other git operations. Git clients like
[GitKraken](https://www.gitkraken.com/) and [SourceTree](https://www.sourcetreeapp.com/)
is available online for other big git tasks like mergeing and resolving conflicts.

All these plugins and clients use the basic git commands internally and learning
to use these commands gives you the ability to write plugins/clients on your own.

## My git plugin journey
I haven't used any git GUI clients yet. When I started learning git, most of the
tutorials explained using git commands to pull, add, commit and push. These were
the only necessary commands you need to learn as an introduction to git. I kept
using these even at work. My mentors asked me to switch to a git plugin or client
for easier git workflow. As they said, typing out the command needed several keystrokes,
meanwhile all these operations were just a click away inside the git clients/plugins.

I tried using GitHub Desktop app for a month but I found all the options overwhelming.
Maybe its just because I'm more comfortable with the terminal. I also didn't have
fine control over what happened when I pressed the buttons. I felt that running the commands
were easier for me.

I did use [neogit](https://github.com/NeogitOrg/neogit) and [vim-fugitive](https://github.com/tpope/vim-fugitive)
for a year to get the git features inside neovim.
But I noticed that it was getting more laggy as the opened project was large. This
made me go back to using terminal commands. Eventually I removed all the git plugins and 
started using a throw-away terminal for all my git requirements in another window.

I was happy with the terminal git workflow until I started debugging sensitive codebases
at work. Getting commit details for certain lines of a file was a requirement for me
to understand reasons for certain changes. Using blame inside the browser was a good way
but I preferred a way to check this locally inside my editor. The plugins had git blame
commands available as keymap for each line blame. I wanted something similar but I didn't
want to install the whole plugin again. 

## Git Blame
Git Blame provided the blame data for files tracked by the repository.
```
$ git blame README.md
32850773 (serenevoid   2023-07-26 01:13:26 +0530 1) # The Serene Void
^8156a36 (houston[bot] 2023-07-26 00:06:06 +0530 2) 
32850773 (serenevoid   2023-07-26 01:13:26 +0530 3) A humble developer's knowledge vault
```
The above command provided the blame details for all the lines inside the README.md file.
Using this command you can note the commit ID and get more details of that commit.

```
$ git blame -L 2,3 README.md
^8156a36 (houston[bot] 2023-07-26 00:06:06 +0530 2) 
32850773 (serenevoid   2023-07-26 01:13:26 +0530 3) A humble developer's knowledge vault
```
The above command limits the blame to just the range of lines that you specify. The same
command can be used to get the blame data for one line.

```
$ git blame -L 3,+1 README.md
32850773 (serenevoid 2023-07-26 01:13:26 +0530 3) A humble developer's knowledge vault
```
This would do the trick for most people since they have the necessary data here. But
formatting this data is hard. Adding a flag `--porcelain` gives you the raw data of that blame.
```
$ git blame -L 3,+1 README.md --porcelain
32850773b7a0687f706977f24d987bd523c9 3 3 1
author serenevoid
author-mail <xxxxxxxxx@xxxxx.com>
author-time 1690314206
author-tz +0230
committer serenevoid
committer-mail <xxxxxxxxx@xxxxx.com>
committer-time 1690314206
committer-tz +0230
summary docs(README): Updated README
previous ceb207f0199e2c39f90f0f45cb9f14d6d78d3141 README.md
filename README.md
        A humble developer's knowledge vault
```
Formatting this data is a lot easier since it is in separate lines and has title
as the first word. This makes filtering easier.

### Neovim scripting

I combined all this knowledge to create a lua function in my neovim config to find
and print the blame data for lines on which my cursor is placed.
```lua
function M.blame_line()
  local bufnr = vim.api.nvim_get_current_buf()
  local filename = vim.api.nvim_buf_get_name(bufnr)
  local row = vim.api.nvim_win_get_cursor(0)[1]
  local blame_info = vim.fn.systemlist('git blame -L ' .. row .. ',+1 ' .. filename .. ' --porcelain')
  if blame_info[2] ~= nil then
    local hash = string.sub(blame_info[1], 1, 8)
    local author_name = string.sub(blame_info[2], 8)
    local author_date = os.date('%Y %b %d', tonumber(string.sub(blame_info[4], 12)))
    local summary = string.sub(blame_info[10], 9)
    print(hash .. " - " .. author_name .. " - " .. author_date .. " - " ..  summary)
  else
    print(blame_info[1])
  end
end

vim.api.nvim_create_user_command("GitBlame", ":lua require('void.git').blame_line()", {})
```
This function gets the current line number to find the blame data and prints out after
formatting it.

Developing this was a fun task and there are several improvements that I plan to add
on top of this. Getting the commit ID to show that particular commit in another buffer
would be a useful feature for me. Most developers start by building things which they
would use and then publish it if they think it'll be useful to others as well. 

So if you have an idea for a tool that you would love to build, just build it.
