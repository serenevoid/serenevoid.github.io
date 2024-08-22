---
title: "Making a discord bot in Go?" 
description: "My experience building a discord bot using the Go library, Discordgo."
pubDate: 2023-04-30
tags: ["web", "go"]
heroImage: "https://u.cubeupload.com/serenevoid/nOV7FI.jpg"
---
Bot Development is a really handy skill to have. May it be for work automation, 
personal project or even for silly entertainment, bots are really useful and fun 
to play with. 

I wanted to build a good bot that people would use for around 3 years now. But I 
didn't know where to start back then. I didn't have a good idea about what the bot 
would do or how I could make it. But very recently, I decided to go for it and create 
a discord bot with Go since I am really passionate with Go programming.

## What is this bot for?
One of the key advantages of Go is its ease of building `concurrent` softwares.
I wanted to use this to create a random chat bot to test this. The key idea was 
to create a simple bot which would allow you to start random chats between two 
users or two servers. Pretty much like [Omegle](https://omegle.com/) but within 
discord. And I wanted it to be safer than Omegle. So its a text only chat which 
filters out URLs and tags. This was the basic idea for the bot in my mind.

## Discordgo - A Discord API wrapper for Go
[Discordgo](https://github.com/bwmarrin/discordgo/) was the first library that I 
came across when I searched about creating discord bots with go. The README of 
the repository got me convinced to use this instead of the other projects. And 
the example code was easier to understand as well. With this, the initial steps 
for creating the bot was complete.

## Implementation Details
The working of the bot was designed as follows:
- When the user requests for a chat using a slash command, the user's channel ID 
will be added to a waiting list queue.
- When another user requests for a chat, the queue is checked to get a waiting 
user. If one or more users exists, you choose the first user. Its not necessary 
for you to have a queue, I think a variable to store the waiting user is enough 
since the next user will anyway pair up with the existing user. But just to be 
safe, I went ahead with the queue.
- Once two users are matched, their Channel IDs will be mapped to each other on 
an in-memory key-value store.
- A message handler was attached to the session that gets all the messages sent 
in a discord server and send it to a `channel` in go. 
- These messages will be filtered for URLs and discord tag checks before sending 
to the channel.
- A goroutine running an inifite loop will receive these messages from the 
channel. This loop will get the other user's channel ID from the key-value 
store mentioned above and forward this message to them anonymously.

This was a simple and pretty straight forward application that I built with Go.
And it was a lot of fun to build too!

## Bot Hosting
The next challenge was to find a way to host the bot. I was planning on hosting 
the bot on an online server but I didn't find any free or really cheap ones which 
I can afford to host this bot. I am not even sure if this will kick off as a 
favourable bot since there is already another one call Yggdrasil in existence which 
also has this random chat feature and it seems that a lot of people use it too.
I found a good hosting solution with some in depth searches. I decided to host my 
bot on an old android device which had a fairly decent specs and a really bad battery.
But this was the best option I could afford at this point of time for a side project 
bot. I used [Termux](https://termux.dev/en/) to get a working linux environment 
and then compiled the project for the android architecture. And I'm happy to say 
that it works really well.

## Conclusion
Bot Development is a really good learning experience. When you realise how easy 
it gets, you will start finding so many applications for this bot in your life.
I hope this post inspires you to start building bots on your own. Slack or Telegram 
or Discord. All these are good platforms that support developing bots. Please reach 
out to me if you require a bot and I'll be happy to help out.
