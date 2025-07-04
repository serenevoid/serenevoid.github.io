---
title: "Boarder: A 4chan hoarding utility"
description: "A cli tool I built as a side project"
pubDate: 2022-11-06
tags: ["go", "terminal"]
---
[Boarder](https://github.com/serenevoid/boarder/) is a minimal 4chan board hoarding client which fetches post data through 
open APIs from 4chan and then downloads all it's contents as well as embedded images.

### What is 4chan?
4chan is a simple image based bulletin board which allows anyone to post comments 
or share images.

### Why Golang?
Go offers better developer experience. Achieving concurrency in go is very easy.
Personally, I just completed learning Go. So I thought Go would be a perfect fit 
for this side project. Go also provides good HTTP templating which can be used to 
develop static sites by using a template and some data.

### Why save all the data directly without using a database?
A database encrypts the data and stores it in a single file or a set of files. 
In order to view the file, one has to decrypt the data from the database. This is 
an overhead. Saving the files as such in different folders or in a json file makes 
it easier to view the files independently without bothering to read any databases.

### Features
- simple text file to add new threads
- download all media + thumbnails and their post informations
- media and thumbnails on separate folders to enable browsing media alone
- creates json file of the data on the individual folders
- creates a static html file for each thread to view the thread as a whole
- Features of Static html
    - Better UI
    - Responsive
    - Clicking on media goes to preview mode (similar to discord web client)
    - Clicking on url opens media on new tab

### WIP
This is not fully baked, but still usable. If you experience any issues, 
see some improvement you think would be amazing, or just have some feedback 
for boarder, make an issue!

#### Future Improvements
1. support for other board sites which archive 4chan data.
2. a good tui to manage threads withouth editing the file directly.

### Usage
Add `threads.txt` and `template.html` on the folder where you will be running boarder. 
The contents of the text file would be the list of threads you want to subscribe to.
The format to add a thread is `(board ID)_(thread No.)`.
```
// Anime Wallpaper
w_2185924
w_2223911

// Wallpaper General
wg_7934675
wg_7920373
```

Check out the program here - [Download](https://github.com/serenevoid/boarder/releases/latest/)
