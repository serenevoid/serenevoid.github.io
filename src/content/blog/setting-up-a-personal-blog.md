---
title: "Setting up a Personal Blog - So Simple Even Kids Do It"
description: "A guide to create your own personal blog and host it for free"
pubDate: 2022-09-20
tags: ["web"]
---
Yes, you read it correctly. This post is not a tutorial to help you write a blog 
post but to build a blog site.

But still. A personal blog? Why do you need to host one on your own? Can't you 
easily write on in [dev.to](https://www.dev.to) or [hashnode.com](https://hashnode.com/) 
or [medium.com](https://www.medium.com)?

All these were the questions I had when I decided to start writing blogs. A 
friend helped me set up an account on Medium and helped me write my first Blog 
post. She did all the writing for me. I just gave her the content.

I was happy with it, but I wanted to try more things. That is when I came across 
tutorials on CMS(Content Management Systems) and SSG(Static Site Generators) that 
make blogging easier for you. You can write your content as a markdown file. The 
CMS will take care of all the formatting and embedding. This way, you can post 
your blogs without any hassles with web development.

Out of all the CMS available out there, [Hugo](https://gohugo.io/) caught my 
attention because of the following features they had shown on their website:
1. Builds an average site in less than a second
2. Open-source SSG
3. Write content in the markdown syntax

Setting up a barebone site was very easy with tutorials like 
[this](https://youtu.be/927wgzzNMEA) that help you to get started with Hugo. 
You can set up a site template and forget about it. You can focus on the content. 
All the other website-related work will be automatically handled by Hugo very 
effectively.

The first post I wanted to add was simple. I just copied the whole blog post I 
had on Medium and reformatted it to markdown to use in this new Hugo template. 
With some adjustments in text and also after adding an image, my first Hugo blog 
with one blog post was ready.

The next task was to host it somewhere to show my new cool project to all my 
friends and family. I didn't go for a custom domain name. I chose to get a static 
site hosting solution since I don't expect any data input from the user. 

The first option I thought of trying was [000webhost](https://www.000webhost.com/) 
by Hostinger. It gives you the option to choose a template to get started. But I 
was looking for a barebone setup since I already have my static site ready. I 
gave it a try. I decided to leave this option because of three main reasons.
1. The domain name you receive for the free tier is 
`https://{project_name}.000webhostapp.com` which wasn't something easy to remember.
2. Every time I update my website, I'll have to get the updated files and replace 
the site data on the project manually. They provide an option to update the website 
data through FTP, but you should upgrade to paid tier to use it.
3. I got into a bug that locks you out of the project even if you give the 
correct password. This issue was posted and fixed long back in their forum. But 
I came across it when I was testing it. I couldn't log back in.

Because of these three reasons, I left [000webhost](https://www.000webhost.com/) 
for an alternative. The next choice was [Netlify](https://www.netlify.com/). 
It was so much better than The former. I loved the UI and ease of uploading builds 
through the premade GitHub actions workflow. But something felt odd. The URL of 
my blog site was `https://{project_name}.netlify.app`. It was better than the 
previous one. Still, it felt odd to me. And that's what convinced me to use GitHub 
pages to host my website. With this option, my website will be 
`https://{my_username}.github.io`. It was better than all the others. GitHub also 
had an easier way to update changes to the website with its workflow script. This 
new workflow updates my website when I push new changes to GitHub.

I didn't have to change anything after the initial setup. I'm happy to report that 
Hugo made me want to write more because of its simplicity and effectiveness in 
creating websites with it. All I do now is create a new markdown file under the 
posts subfolder. Everything gets updated when I push the changes. How much easier 
can this get? With this setup, even small kids can publish their writings for free 
on the internet.

>In this era of advanced technologies, you should have a simple site you can call 
yours. If this doesn't motivate you to build a website on your own, I don't know 
what will. I hope you all try Hugo once and start writing more. Contact me through 
Discord if you need help setting up your blog site. 

Stay safe. Enjoy life.
