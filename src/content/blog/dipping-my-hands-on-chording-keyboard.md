---
title: "Chording keyboards - A new territory for efficiency"
description: "Wandering off deeper into the world of keyboards."
pubDate: 2024-07-14
tags: ["neovim", "lua", "git"]
heroImage: "https://u.cubeupload.com/serenevoid/BJRb55.jpg"
---

I have been using my [Ferris Sweep](/blog/split-ergo-mechanical-keyboard/) keyboard for over 6 months.
I carry it around with my laptop wherever I go. The comfort of using 34-keys for
everything is unparalleled.

But I wanted to dig deeper. So I started looking into more minimal keyboards I could try out.
I came across a lot and few of those caught my eye.
- [Tokeyo](https://github.com/Tschibo00/qmk/tree/main/tokeyo) - a unibody Ferris Sweep variants with 34 keys
![Tokeyo](https:kbd.news/pic/2024/165/2373.jpg)
- [Skeletyl](https://github.com/Bastardkb/Skeletyl) - the 34-key keywell
![Skeletyl](https://github.com/Bastardkb/Skeletyl/blob/main/pics/c1.jpg?raw=true)
- Ginny - a 10-key chording keyboard
![Ginny](https://keyboard-design.com/kb-images/ginny.jpg)

The first two were technically the same as my current setup other than the fact that
the unibody is more portable and skeletyl is more comfortable to type with. And I do plan to
create one or both of these in the future. But the one which I wanted to try so badly was the
Ginny.

## What is Ginny?

Ginny has just 10 keys on the board. One key for each finger to press. It was simple. It relied on
combinations of these keys for different letters. It used a layout called [ASETNIOP](https://www.asetniop.com/)
that used combinations of these 10 keys for all 26 alphabets and other necessary symbols as
represented below.
![asetniop_layout](https://www.asetniop.com/layouts/images/letters-diagram-large.png)

Sadly, the design files of the ginny keyboard wasn't open source because it was proprietary.
But how hard can it be? It just needs a microcontroller with 10 gpio pins attatched to 10 keys,
and all I'd need to do was to write a firmware to 
