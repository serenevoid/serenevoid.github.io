---
title: "Hunting buggy commits with Git Bisect"
description: "A binary search through the commits to hunt the bug introduction"
pubDate: 2024-12-29
tags: ["git"]
heroImage: "https://u.cubeupload.com/serenevoid/sQ8mGA.jpg"
---
Managing and debugging big projects with contributions from multiple people is hard.
There might be parts of code that you haven't explored or worked on. But still when
the time comes to debug a high priority issue, your only focus is to track the bug and
fix it whether you are familiar with the code or not.

In these scenarios when you are clueless about why things are breaking, one good solution
is to track down the commit that introduced the bug and to get help from the person who
submitted that commit.

## Git Bisect

Git bisect is feature of git that helps you track buggy commits from a known working commit,
and the latest broken commit. It is a binary search algorithm that you are following when
you use this tool. So pinpointing the commit is faster than just checking out each commit
one by one.

### Procedure

You start by changing git to bisect mode:
```sh
git bisect start
```
After getting into bisect mode, you assign a good commit and bad commit. You can also
specify tags/versions instead of commits.
```sh
git bisect bad              # sets current version as bad
git bisect good v0.10.2     # sets v0.10.2 as last known good version
```
After setting the good and bad versions, running `git bisect` executes a checkout to the commit
in the middle of these two commits.

After testing the current state, you should assign whether this commit is good or bad.
```sh
git bisect bad     # sets current version as bad
git bisect good    # sets current version as good
```
Then run `git bisect` again to check out to the commit in between the two known commits.

This way, you pinpoint the exact commit that introduced the bug way faster than checking
out random commits to test. After finding out the commit, you need to exit bisect mode.
```sh
git bisect reset
```
Git bisect is an effective and useful feature that everyone should know about so.
There are several other features that git provides and I am still exploring them
one by one when I have the necessity.
