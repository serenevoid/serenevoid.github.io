---
title: "I switched to Astro to rebuild my blog"
description: "A short post on why Astro caught my eye and convinced me to switch over from Hugo."
pubDate: 2023-02-09
tags: ["web"]
---
[Hugo](https://gohugo.io/), as mentioned in their website, is a fast and modern 
static site generator written in Go, and designed to make website creation fun again.
Because of its simplicity, it is used to develop the simplest or even a little complex
websites. All it basically does is, it takes a directory of files along with a template 
and combine both of them together to create a complete site.

It avoids complicated runtimes, dependencies and databases which helps in boosting the build 
time by an astronomical factor. According to the data presented in [this](https://youtu.be/CdiDYZ51a2o) 
video, hugo can build a website which contains 5000 posts at around 6-7 seconds which is 
just insanely fast when compared to all other Static Site Generators(SSGs).

### Pros
- Setup once and forget about the settings to focus on content more
- Insanely fast build times
- Better SEO since it generates pure static sites with only the JS you provide.
- Good for sites with thousands of pages.

### Cons
- Extending the site template is painful since it is not an easy task.
- Go keywords which is used to write templates is not a standard language known to people.
- Very Beginner friendly but less developer friendly.

The problem starts when you need to add more interactivity to your site. Or even 
when you want to make changes to the website template which you use. This is when 
the features which hugo blocks might turn useful for the developer. Writing new templates 
for hugo requires you to write the go specific phrases inside your template html file 
which is not a generic language like Javascript or Typescript for website building.

## [Astro](https://astro.build/)
Astro is an all-in-one web framework for building fast and content focused website.
It is very easy to build a website with just the basic HTML, CSS, JS knowledge.
Astro was designed to build big content-rich websites.
All the modern UI frameworks and libraries were developed to help create complex UI
for web applications. Astro can help you integrate these newer frameworks and libraries 
into your website if need to create complex UI for your website.

One obvious question you might ask is, "Why not use these newer frameworks and/or libraries 
to build your site directly?". While these newer frameworks and/or libraries can 
build a really beautiful website, they are often painfully slow to load once deployed 
due to the bigger JS bundles which needs to be loaded first. Astro can fix that problem 
by rendering the static contents as multi page application and only have the complex 
UI section as a separate island which will load when the user start interacting with 
it. As per [this tweet](https://twitter.com/t3dotgg/status/1437195415439360003) made 
by a famous tech content creator and twitch streamer [Theo Browne](https://www.twitch.tv/theo), 
a website built with astro can load 40% faster with 90% less amount of JS.

Since I wanted to try web development, I felt like Astro would be the perfect fit 
for my website. I can create and test custom components and features inside my own 
site.

I feel much more happier and more confident with my current site. I hope you like it too.
