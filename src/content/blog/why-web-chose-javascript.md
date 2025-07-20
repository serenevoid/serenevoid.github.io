---
title: "Why the Web Chose JavaScript—and Never Looked Back"
description: "Why does web stick with JavaScript instead of other performant and robust languages?"
pubDate: 2025-02-21
tags: ["js"]
---
## Pre-JavaScript Era
In earlier days, the web was static. The web pages were built using HTML and some CSS for styling.
The dynamic actions needed were handled on the server side. For filling a form, the page had to be
reloaded after submission to get the submission status. This was not at all user-friendly.

## Birth of the language JavaScript
In 1995, Netscape wanted a scripting language to customize the web pages for their browser (Netscape Navigator).
So they hired an engineer (Brendan Eich) to build a scripting language to suit their needs. With Brendan's
skill and experience he quickly whipped up a good scripting language within 10 days.

It was originally called **Mocha**, then named to **LiveScript** and finally, it changed to **JavaScript**.
The name JavaScript was used to ride the hype that Java was getting during the time.
But saying Java is related to JavaScript is like saying a car is related to a carpet.

It was shipped with Netscape 2. Soon in 1997, it became the *ECMA-262* standard.
Following the standardization of JavaScript, Internet Explorer added its own version of the script and called
it **JScript**. Netscape and Internet Explorer, being the two dominant browsers at that time, implemented
JavaScript, it became a de facto standard. Being shipped with the browser meant that
JavaScript did not need any extra software or plugins other than the standard browser that
everyone used. Soon the popularity and ease of use of JavaScript triggered the trend of
building advanced applications for better user experience.

Still JavaScript was synchronous. There were still places where getting the server response was not as smooth
as it should have been
In 2005, AJAX (Asynchronous JavaScript and XML) was introduced. This was a huge boost to JavaScript's
responsiveness and dynamic abilities. AJAX was popularized by Google.
There were a few UI libraries surfacing up during this time to make JavaScript more developer friendly.

## But why is JavaScript still winning when there are better scripting languages now?
A handful of the developers might have had this question in their head at least once.

I have been thinking about this for quite a while now and even searched for browsers that supported
other scripting languages as a JavaScript alternative. But all I could find are some dead projects on GitHub
that were proof of concepts. There are plugins that enable running Lua and other scripting languages
inside the browser with the help of JavaScript but no browsers have built-in support for other languages.

It took me some research to understand how and why JavaScript won over the web world.

**JavaScript won by being born in the right place at the right time to get right backing
and browser support.**

It became the de facto standard for the web world from the start. Everyone adopted it so quickly and
applications were being developed with it all over the world. By the time other scripting languages were
getting attention, JavaScript was too popular and under use that changing the web standard was almost
impossible.

While this was a good thing for JavaScript, this also affected the language in a bad way. Enhancing the
language features and syntax was harder since deprecating certain features and modifying certain
behaviors would affect all the web applications that were built using the language. Every change made
to the language was sensitive.

This made the language messy. The bugs or non-intuitive behavior of the language would be used by
some application's logic in some way. So deprecating or modifying parts of the language meant adding a new and better
way to do things even while having backwards compatibility to support the old way of doing things.

This has made the language so messy. And it is something that could not have been avoided in any way. Lua
and other scripting languages have improved to this robust state because it had the freedom to introduce and deprecate
language features in different versions but it was not an option for JavaScript for being adopted by the web
at such a young age.

## So does that mean we are stuck with JavaScript? Will there be no other alternatives?
To be honest, yes. JavaScript is engraved into the web world so deep that changing it would mean changing
the whole internet for something new. Still there are better ways to implement performance critical applications
now. The introduction of WebAssembly has enabled developers to write complex and CPU intensive login as
WebAssembly Modules (WASM) that can be called through JavaScript. It can handle the complex logic while using JavaScript
to access the DOM.

Web is improving day by day but JavaScript will stay with us for a really long time.
