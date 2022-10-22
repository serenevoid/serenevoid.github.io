---
title: "Setting up a Personal Blog - So Simple Even Kids Do It"
description: "A guide to create your own personal blog and host it for free"
date: 2022-08-28T09:12:26+05:30
tags: ["tech", "blog"]
draft: false
---
![blog-writing](https://www.iwriter.com/blog/wp-content/uploads/2019/01/writing-blogs-748x335.jpeg#center)

Yes you read it correct. This is not a tutorial to write a blog post, but to build 
a blog site.

But still. A personal blog? Why do you need to host one on your own? Can't you 
easily write on in [medium.com](https://www.medium.com) or [dev.to](https://www.dev.to) 
or [hashnode.com](https://hashnode.com/)?

All these were the questions I had when I decided to start writing blogs. A friend 
of mine helped me set up an account on Medium and helped me write the first Blog 
post. To be honest, she did all the writing for me. I just gave her the content.

I was happy with it but I wanted to try more things and that's when I came across 
tutorials on CMS(Content Management Systems) and SSG(Static Site Generators) which 
makes blogging easier for you. You just write your content in a markdown file and 
the CMS takes care of all the formatting and embedding and you'll be able to post 
your blogs without any hassles on web development.

Out of all the CMS available out there, [Hugo](https://gohugo.io/) caught my 
attention because of the following features they had shown on their website:
1. Builds an average site in less than a seconds
2. Open source SSG
3. Write content in markdown

Setting up a basic site was very easy. There are many tutorials out there like 
[this](https://youtu.be/927wgzzNMEA) which will help you to get started with hugo.
With this tool, you can setup a site template and forget about it. You can then 
turn your focus to the content to be written. All the other website related work 
will be automatically handled by hugo very effectively.

The first post I wanted to add was simple. I just copied the whole blog post I 
had on medium and reformatted it to markdown to use in this new hugo template.
With some adjustments in text and also after adding an image, my first hugo blog
with one blog post was ready.

Next task was to host it somewhere so that I can show my new cool project to all 
my friends and family. I didn't want to go for a custom domain name and a proper 
server. I chose to go for a static site host solution since I don't expect any 
data input from the user. 

The first option I thought of trying was [000webhost](https://www.000webhost.com/) 
by Hostinger. It provided you with a simple template to begin with. But I was looking 
for a barebone setup since I already have my static site ready. I gave it a try but 
I decided to leave this option because of three main reasons.
1. The domain name you recieve for the free tier is `https://{project_name}.000webhostapp.com` 
which wasn't something easy to remember.
2. Every time I update my website, I'll have to get the updated files and replace 
the site data on the project manually. For FTP based data updation, you need to pay.
3. Somehow I got into a bug which locks you out of the project even if you give the 
correct password you started with. This issue was posted and fixed long back according 
to their forum. But I came across it once again when I was testing it and I couldn't 
log back in.

Because of these three reasons, I left [000webhost](https://www.000webhost.com/) for
and alternative. Next choice was [Netlify](https://www.netlify.com/). It was so much 
better than The former. I loved the UI and ease of uploading builds through the 
premade GitHub actions workflow. But something felt odd. I still did not like the 
url of my blog site which was `https://voice-of-the-void.netlify.app`. It felt odd.
And that's what convinced me to use GitHub pages to host my website. With this option, 
my website will be `https://www.{my_username}.github.io` which is much cooler than all 
the others. It also had an easier way to update changes to the website with its 
workflow script. With this new workflow, my website gets updated whenever a new content 
or existing content change is pushed to GitHub.

So far, I'm loving this setup and I haven't changed anything after my initial setup. 
I'm happy to report that hugo made me want to write more because of its simplicity 
effectiveness in creating websites with it. All I do now is create a new markdown file
under the posts subfolder and then everything gets updated when I push the new changes. 
How much easier can this get? With this setup, even small kids can publish their writngs
for free on the internet.

>In this era of advanced technologies, its good to have a simple site you can call 
>as yours. If this doesn't motivate you to build a website on your own, I don't know
>what will. I hope you all try hugo once and starts writing more.
>You can contact me through discord if you need any help in setting up your own 
>blog site. 

Stay safe. Enjoy life.
