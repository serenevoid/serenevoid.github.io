---
title: "Chording keyboards - A new territory for efficiency"
description: "Wandering off deeper into the world of keyboards."
pubDate: 2024-07-24
tags: ["keyboard"]
---

I have been using my [Ferris Sweep](/blog/split-ergo-mechanical-keyboard/) keyboard for over 6 months.
I carry it around with my laptop wherever I go. The comfort of using 34-keys for
everything is unparalleled.

Still, I wanted to dig deeper. So I started looking into more minimal keyboards I could try out.
I came across a lot and few of those caught my eye.
- [Tokeyo](https://github.com/Tschibo00/qmk/tree/main/tokeyo) - a unibody Ferris Sweep variants with 34 keys
![Tokeyo](https://kbd.news/pic/2024/165/2373.jpg)
- [Skeletyl](https://github.com/Bastardkb/Skeletyl) - the 34-key keywell
![Skeletyl](https://github.com/Bastardkb/Skeletyl/blob/main/pics/c1.jpg?raw=true)
- Ginny - a 10-key chording keyboard
![Ginny](https://keyboard-design.com/kb-images/ginny.jpg)

The first two were technically the same as my current setup other than the fact that
the unibody is more portable and skeletyl is more comfortable to type with. And I do plan to
create one or both of these in the future. The one which I wanted to try so badly was the
Ginny.

## What is Ginny?

Ginny has just 10 keys on the board. One key for each finger to press. It was simple. It relied on
combinations of these keys for different letters. It used a layout called [ASETNIOP](https://www.asetniop.com/)
that used combinations of these 10 keys for all 26 alphabets and other necessary symbols as
represented below.
![asetniop_layout](https://www.asetniop.com/layouts/images/letters-diagram-large.png)

Sadly, the design files of the Ginny keyboard wasn't open source because it was proprietary.
How hard can it be? It just needs a microcontroller with 10 gpio pins attatched to 10 keys,
and all I'd need to create is a firmware for the microcontroller to detect keypresses and
output the corresponding alphabets through the USB interface.

I still wondered how it would be to use this ASETNIOP layout even before I invest my time in
building a Ginny prototype. So I decided to mess with my Ferris sweep to act like a Ginny.
I compiled the [QMK firmware](https://github.com/qmk/qmk_firmware) with chords feature enabled and I started to map the ASETNIOP combinations on top
of my colemak typing layer. The most interesting thing about this was that I could create 3-key combos
or more which I can map to print out words that I map to them. This is shown in [their table](https://asetniop.com/combinations/).

I added all the single keystrokes that are present in a regular keyboard and a few other words that
I use daily. Compiling and flashing this microcontroller was easy after installing all the
dependencies and a small debugging session.

## Using ASETNIOP
ASETNIOP layout was difficult at first like learning any other keyboard layout but somehow
all the chorded keys were almost around the default keys. So it started to make sense very quickly
and I was getting comfortable using it even if I was slow.

I enjoyed the feel of sticking to the home rows for all the typing. But eventually I realised what Ginny
was actually meant for.

Ginny and other similar chording keyboards are `Typing Keyboards`. They are meant to make typing faster but
using it for other workflows was hard. I use a lot of different macros and shortcuts on both my Linux, and
Windows machines. Using Ginny to switch windows, workspaces, browser tabs were hard and I had to use the mouse for
those.

## Would I build a Ginny after this experience?
Ginny is definitely a wonderful keyboard with a minimal design that is cheaper to build as well. But
as a programmer who also uses a lot of shortcuts and macros, I feel that Ginny would limit my workflow. So I switched my
keyboard firmware back to the old one. I kept the chording feature on for the moment. I liked the feeling
of chording out most common words that I use. It felt comfortable and I would the word combinations
as I feel in the future.

It was pretty valuable experience and my takeaway from this experience is the efficiency you get from using
combos and parts of a keyboard firmware.
