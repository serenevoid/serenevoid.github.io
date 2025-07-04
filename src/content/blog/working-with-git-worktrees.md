---
title: "Git Worktrees - A tool for power users"
description: "Multi-tasking Mode of git power users"
pubDate: 2024-10-22
tags: ["git"]
---
Almost every git users use git by checking out to one branch, editing code,
committing/stashing the changes and then switching to another branch when required.
This is the norm and it works for majority of the cases.

But is that so bad? Well.... yes and no.
No, because it is perfect for small projects where you don't want to overcomplicate things.
But imagine a repository that has a branch with legacy code and some new branches with latest
development. When you need to check out to the legacy code, you will have to update the
dependencies and other build tools for that project. Doing this everytime when you switch
branches is frustrating.

Soon your reaction will be:
![interstellar](https://i.kym-cdn.com/entries/icons/original/000/032/744/maneuver.jpg)

## Enter Git Worktrees
Git worktrees let you checkout to multiple branches at a time by separating branches
into different directories of a bare repository. This is easy to set up but a little tricky
to maintain at first. Still it is more convenient than the hassle explained above.

This way you can have all the changes that you made in one branch while you make
quick changes in the other. There is no stashing/committing required for this workflow
since they are in separate directories.

### Using git worktrees

To use git worktrees, you need to clone the bare repository.
```sh
git clone --bare {url-to-remote-repository}
```
This creates a bare local repository which contains several git related data inside it.
After entering this directory, you need to add branches as worktrees.
```sh
git worktree add master
```
This creates a new worktree from the master branch.
You can create new branches and push to remote too. But it requires you to set the origin.

To delete a worktree from your local repository, you need to run:
```sh
git worktree remove master
```
This removes the worktree and related metadata from the bare repository. If you
delete the worktree directory instead of running the command, the metadata stays
in the local repository till they are pruned.

Git worktree is a good tool for power users and people who jump between branches
a lot.
