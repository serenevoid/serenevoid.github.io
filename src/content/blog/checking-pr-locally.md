---
title: "Handling community contributions in your open source project"
description: "A guide to work together with the open source community"
pubDate: 2024-01-31
tags: ["git"]
heroImage: "https://u.cubeupload.com/serenevoid/24B7Ft.jpg"
---
Not so long ago, I created a small neovim plugin called [kiwi.nvim](https://www.github.com/serenevoid/kiwi.nvim)
and after few months, I got my first issue and first pull request.

I have created a few PRs on open source projects and tons at my work. But I never
had to verify a PR from someone else and merge it to a repository yet. This was
completely new to me. Verifying a PR that was generated from a branch of the same repository
is easy. But verifying the changes in a branch of the clone of the repository was different.
And I struggled a bit to find the proper way. I couldn't find any easy youtube videos
explaining how to verify PR changes. Most of the tutorials mentioned how I can
preview the code on the web browser and add suggestions to it.

Eventually I found the solution to check out the code from a pull request into a
local branch and carry on with normal verification and testing. 

## Steps to check out Pull Request changes
1. Get the #ID of the pull request you want to check out from the web browser.
2. Fetch changes in this pull request to a local branch using the command 
```shell
git fetch origin pull/ID/head:BRANCH_NAME
```
3. Check out to the new branch using the command.
```shell
git checkout BRANCH_NAME
```

With the new branch having the changes of the pull request, you can do all the tests and
verifications you need. If you are happy with the changes which are  provided in the pull
request, you can go to the web interface and merge the PR into your main branch.

If you need the contributor to add some changes to the PR, you can request the changes
inside the PR too.

If you need to add some changes to this and create a new pull request on your own,
(in case the real contributor abandoned the contribution but you still need the changes) you can
add the changes to the local branch you created and push it to remote repo. From there
you can create a new pull request for this and merge it.
