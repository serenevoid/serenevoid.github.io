---
title: "Malicious URL detection"
description: "A data science topic which I learned after failing an interview."
pubDate: 2023-02-24
tags: ["python"]
---
Recently I had an interview in which the task I had to complete was to find a solution to the question below.

> Question: You have a set of good and bad URLs listed in this file. Use it to 
build a program that exposes a function to detect malicious URLs when it is 
passed as an argument.

I also had access to a machine-learning library.

## My solution

My simple mind had the easiest solution. 
1. Create two empty sets. One for good links. One for the malicious ones.
2. Iterate through all the URLs in the file and extract their 
domain name.
3. Place these domain names inside the respective sets.
4. Create the exposed function that takes in a URL string and matches its domain 
name with the names on the sets.

My solution somehow passed all the 315 test cases given in the task. I was so happy to find an optimal solution 
for the problem which didn't require a machine-learning library. I thought almost all malicious links had some weird 
domain names. All of them had typos in the domain name that might deceive the user. (Something like facebok.com or amaz0n.live)

But what if a hacker uses good domain names to host the malware and share 
it with people? They could host malware on Amazon S3, GitHub Pages or other 
places and share it with the public. In those cases, 
my logic would mark those URLs as good ones since S3 or GitHub is not a malicious domain. 
If I pass this URL to the initial set as a malicious URL, it would add this to 
the bad ones' set, which is not correct either. 

I wish the test cases had some new URLs outside the list. 
That would've made more sense since it is the best way to frame a question in this 
scenario.

But in any case, I decided to dig deeper into this section. My curiosity brought 
me to [this blog](https://towardsdatascience.com/predicting-the-maliciousness-of-urls-24e12067be5). 
So I'd like to summarize the procedure with this blog post for whoever faces this 
same question in interviews.

## URL Fingerprinting
Here we extract meaningful data from URLs to feed it to the classifier. This process targets three types of URL features.
1. **URL string** characteristics: Features derived from the URL string.
2. **URL domain** characteristics: Domain details like [whois](https://www.whois.com/whois/) and [shodan](https://shodan.io/) information.
3. **Page content** characteristics: Features from the URL's page (if any)

The list of features collected are:
- Entropy of the URL
- Number of digits present in the URL string
- Total characters in the URL string
- Number of parameters present in the URL string
- Number of fragments present in the URL string
- The domain extension of the URL
- Whether the URL has http or https protocol
- Whether the URL is live or expired
- Number of days since the domain registration
- Number of days since expiry (if expired)
- Response body character length
- Number of titles present inside the body
- Number of images present inside the body
- Number of links present inside the body
- Number of characters in the embedded script of the body
- Number of special characters used in the body

## Removing Correlation
Some of the characteristics listed above might be correlated. So we create a simple 
correlation grid and decide which all features contribute less to the data set and 
remove those to reduce the size of the collected data. This process finalizes the data
 to train the classification model.

## Classifier training and testing
The classifier uses this data to train and test its capabilities.
The blog uses a Decision tree as its classification algorithm. But it would be wiser to go with SVM (State Vector Machine) algorithm for better accuracy.
