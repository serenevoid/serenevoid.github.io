---
title: "ESPHole - A network wide adblocker for your home"
description: "Building an adblocking DNS server on NodeMCU microcontroller"
pubDate: 2024-8-30
tags: ["web"]
heroImage: "https://u.cubeupload.com/serenevoid/HY1Yw1.jpg"
---
### The problem with modern day internet

Internet technology has been progressing exponentially over the past 20-30 years.
We see different innovations with website frameworks, backend technology that scales
to handle millions of users, and almost every single app getting converted to a
web app unless native performance is necessary.

But along with this amazing upgrades, we received new generation of Advertisement
providers. 
> Ever heard of the term 'Personalized Ads'? Ever thought of how they 'personalize'
ads for you?
Ads which are relevant for you is created by understanding your interests. And for that,
they collect data about almost everything you do online. Things you buy, products you search,
reviews you watch, tutorials and guides you look for, and so much more. All these data are
used to create a profile for you and then the relevant ads to your profile is catered to you.

## ESPHole

### What is ESPHole?
ESPHole is a simple DNS server created using NodeMCU microcontroller. It acts as a DNS server
that resolves DNS requests from the devices connected to a network, if set up correctly.
We add a list of DNS entries which need to be blocked and the ESPHole blocks all these
specified DNS entries when one or more devices on the network tries to access it.
This way, no device in your network will be able to get ads from that domain.

Code for ESP DNS server is open source. So I used the same source code and added
my list of blocked domains on top of this to filter out the DNS queries.

The project already exists [here](https://github.com/rubfi/esphole).

### Modifications to the code
When I tested out the code, it did work fairly well but it had some limitations.
The domain names to be blocked were so many that the file I created was over 4 MB in
size. And the ESP8266 only had around 1-2 MB of free flash storage. I had to remove most of the
domains in the list to test. It worked fine but I wanted more control over the space I used.

The first thing I tried was replacing the Storage library from SPIFFS to LittleFS.
SPIFFS is well aged and stable. But it didn't work well with directory structures.

I wanted to compress the domain list as much as possible to reduce size. And I came up
with a pretty good plan as well.

#### Attempt \#1
I noticed that the domain names were basically consisting of three or more parts.
Assume that we have 4 domain names.
``` markdown
1. adservice.google.com
2. ads.google.com
3. google-analytics.com
4. ssl.google-analytics.com
```
These are stored as normal strings in the file. They take up one byte per character.
If you notice these 4 sites, you do see common words in them. So by eliminating the
repetitive words, I knew I could reduce the file size by a lot.

Splitting the URLs by the `.` and then reversing the resulting array gave this result.
``` markdown
1. \[com,google,adservice\]
2. \[com,google,ads\]
4. \[com,google-analytics\]
5. \[com,google-analytics,ssl\]
```
Here I saw a pattern that could be reduced. This data can be converted to a JSON data
format easily like the following representation.
```json
{
    "com": {
        "google": {
            "ads": 0,
            "adservice": 0
        },
        "google-analytics": {
            "__current__": 0,
            "ssl": 0
        }
    }
}
```
I tried this with the whole 4 MB list and I was able to compress it to a JSON file
of size 1.5 MB. This was about 62.5% reduction in storage space.

Sadly this wasn't feasible since an ESP8266 has 50kB of SRAM. Even lower would be free
to load the JSON data and parse it. This wasn't a promising method. So I decided to
change the storage file type.

#### Attempt \#2

I decided to store the data like a linux file structure. All the keys in the json would be directories.
And at the end of it would be just a file with `.` as it's data.
```text
/
└── com
    ├── google
    │   ├── ads
    │   │   └── *
    │   └── adservice
    │       └── *
    └── google-analytics
        ├── *
        └── ssl
            └── *
```
Representing the above URLs as a tree would help understand the concept better.
This created a around a million files in the Flash memory. Traversing this much
directories was something the ESP module couldn't handle. So I had lost hope on
that too.

#### Attempt \#3

I wanted something more efficient. Something that the ESP can calculate easier.
One options was using [Huffman encoding algorithm](https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1206/lectures/huffman-coding/) to create a table for all the alphabets and then
the actual binary with the compressed data of the URL. This would help to construct the code
for each URLs from the table data and then search for that pattern in the compressed file byte by byte.

### Observation

After attempts 1 and 2, I couldn't work on 3 due to other priorities. But even if it
works, I don't expect it to work perfectly. There will still be issues sometimes because
of the slow speed of the ESP module. It would be better to use [pihole](https://pi-hole.net/) or
Adguard on a [RaspberryPi Zero 2W](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/) since that has more processing power
and still consumes very little power. That is something I'm planning to do later.
