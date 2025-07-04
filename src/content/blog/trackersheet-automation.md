---
title: "Automate tracker sheet using Google Forms"
description: "Automating filling of logs to google sheets with google forms"
pubDate: 2023-06-30
tags: ["web"]
---
I'm sure almost all of you might have used or is currently using sheets as trackers.
We use sheets as trackers because its easier for the management to track the work 
and its progress according to the data filled. Sheets are a good way of having a 
common place to log work and then these data will be imported to other sheets which 
aggregate the data and present the required key data in a better visual format.

Yes this makes the perfect solution for the managers and higher ups. But it can 
also become an overhead for the people who actually have to log the data to the 
sheet. Its a good practice to log work on a daily basis and it will never be an 
issue for those who keep things punctual. But what if you forgot to fill it once?
The next day you'll find it a little difficult to recollect your last progress. 
As days go on, you'll find it harder to correctly remember what happened and on 
which day.

## The issue in hand
In my case, we had to track the flow of web game builds. We had to log the 
timestamps of different stages of a game. Some of them were-
1. Time when the game was taken up for development
2. Time when the first alpha version build was ready for demo
3. Time when the subsequent alpha builds were made and sent for feedback
4. Time when the first beta version was ready
5. Time when the beta version was approved for stable release.

As a developer, it was hard for me to keep track of this for every single game that 
I made. I saw that others were having the same issue. That was when I starting thinking 
of ways to automate this process. What if there was a way to track all these with 
scripts? Will I be able to fill these data into google sheets without having to 
fill it myself?

## Possible ways to automate it
Initally I thought of writing a python script that will remind me to fill the 
data whenever I completed a build. But that would be just like an annoying alarm.

I wanted to avoid filling the data completely. I wanted to find a way to log the timestamps 
somehow with the other details like game name, version, upload link and more.
I created a python script and ran it on every build completion with git hooks.
It worked. At the end of the day, I had all the logs I needed with that scripts 
in a text file. I could then fill these onto the sheets later myself. 
Again, I wanted to make it more independent. Entering the data still required manual
work. I wanted the script to fill the data directly into the sheet. But it was challenging.
I had two goals now-
1. I need to find a way to enter data into the google sheets. 
2. And it should work for the whole project. Not just for me.

I found the solution for these two question very soon.

### Google Forms
The solution to enter the data into the google sheet was not hard. I decided to 
create a google form for taking the required data and putting it inside a single sheet.
Then I can import this sheet to other sheets and filter the data. This way, I can 
create a script which will fill the google form for me. This part solved the first goal.

### GitHub Actions
I noticed that almost all the timestamps which were needed was when a build was 
ready and deployed into the cloud(we used Amazon S3 buckets to store the build). 
And the upload process was executed inside github actions workflow. Whenever a 
build was ready and the changes were pushed to github, we used to manually run 
the workflow to upload the build folder to the cloud. 

I noticed that I can use the script I made earlier to run on github actions. I 
could collect the required timestamp and actions from the actions workflow and 
instead of just dumping the data into a text file, I can make it fill the google 
form to enter the data into the sheet. 

Using github actions workflow to run our data logging logic and google forms to 
dump all the collected data in a single master sheet, we never had to manually 
fill the sheets again.

The same master sheet was used to create other analytics dashboards since it collected 
a lot more data than what was required. I made it log all the relevant data and that
was helpful in the long run.
