---
title: "My experience of learning Rust"
description: "Finally finished the rust book and this is my thoughts about it."
pubDate: 2024-4-26
tags: ["rust"]
heroImage: "https://i.imgur.com/l7rW5FB.jpg"
---

# Background

My introduction to the Rust Programming Language was from the Twitch streamer [ThePrimeagen](https://www.twitch.tv/theprimeagen)
back in 2022. After hearing about it in a few of his streams and also from few other
streamers, I wanted to try it out. It was gaining more popularity through youtube
and other social media as well for being difficult to learn but fun to program in.

# My Failed attempts

It was my new year resolution in 2023 to finish the Rust Book within 2-3 months.
I thought it was possible since there were 20 chapters + Appendix in the rust book.
So if I take 3 days at max for each chapter, I should be able to complete the book
on time. But I was wrong. I finished the Rust book in April 2024. On the 16th month
after the new year resolution. 

> I couldn't finish it on time but atleast I didn't abandon it.

![absolute_win](https://media1.tenor.com/m/1PMq-CFZno4AAAAd/avengers-endgame-hulk.gif)

# Summary of the journey

## Introduction and hands-on Guessing Game

The beginning of the book was a proper introduction and the simple Guessing Game.
This is a very good introdction to express the highlights of the language. It gives
you a brief idea on how to think while programming rust. And it gives you a taste of
rust's well polished type system. Some things might be confusing for you but that's
how it should be. The next chapters take each parts one by one and explain how they work.

## Common Programming Concepts

This chapter included the common concepts like Data Types, Functions, Comments, Control Flow,
and the most important part, Variables and Mutability. Learning that all variables are
immutable by default taught me that this is the way it ideally should be. When creating all
variables in any language, it should ideally be immutable and then we should change it to
when needed. This avoids errors caused by changing variables that aren't supposed to be
changed.

## Understanding Ownership

This was the first chapter showing the main highlight of the language. Ownership and
Borrowing, the way of rust's memory management. This teaches the alternative approach to
manual memory management in C based languages and other Garbage collected languages.
This chapter also teaches about slices and how they operate with the ownership and
borrowing way of memory management.

## Structs

This chapter was a detailed one for dealing with structured data and having methods
associated to the struct. Coming from the javascript world, seeing methods related to
structs was a fun concept to learn. I saw the similarity it had with Go and it was
a good feature.

## Enums and Pattern Matching

This chapter showed how Enums work and how pattern matching is the best kind of syntax
to write matches similar to how a switch statement work. This also showed how the
pattern matching syntax does an exhaustive matching in order to avoid unhandled cases.

## Managing growing projects

This chapter gave an introdction to rust's module system, packages and crates.
The abstraction of logic inside files and only exposing the necessary API functions
were similar to that of other languages.

## Common Collections

This chapter gave a proper introduction to Vectors and how String data type works.
Using a HashMap was also a sub-section of this chapter since that is a widely used
datastructure.


## Error handling

This chapter explained all the ways errors are handled in rust. We could either
terminate the program with `unwrap()` or `expect()` and print out an error message.
This was useful for skipping proper error handling while in the development phase.
Errors are properly handled using `match` statements in a production ready application.
This allowed easier development since you don't have to handle all the errors while
development which would slow down the development process.

## Generic Types, Traits and Lifetimes

This chapter was where things got tougher. The complexity of the rust language rises from
this chapter.
