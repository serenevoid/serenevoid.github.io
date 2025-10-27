---
title: "WebRelay: A remote controlled power switch board - Part 4"
description: "A DIY solution to control the power of devices from anywhere"
pubDate: 2025-6-8
tags: ["c", "electronics"]
---

Once the hardware for the project was ready, my next objective was to create a good
backend server. I could have improved up on my existing python backend server. But
I wanted to challenge myself a bit and learn a new programming language to implement
the backend server in. My first choice was to use Golang. But I have already created many
projects in Go. So I went to a higher challenge.

## A good decision? I am not that sure but I am glad I chose this
If you thought I chose C/C++ for this, you are wrong. I am not skilled enough
to build a good backend server in the holy languages yet. So I chose to learn rust.

I was learning rust at the moment using simple projects and the Rust Book. So rust
was the best choice for me at the time. But little did I know that this would be
a very steep learning curve and hair pulling experience.

### The beginning
Implementing a simple static web server and adding APIs to the server was easy
with [axum library](https://www.shuttle.dev/blog/2023/12/06/using-axum-rust). The tutorials guided me to create a simple web server without much hassle.
For me this experience boosted my confidence. I felt like I can complete this with
the same difficulty as building a go server.

Once the basic web server was ready, I had to create the next part.

### Communicating with the Relay board
The relay board was having a simple web server which ran inside the ESP01 module
that I added to the circuit. In order to send GET requests to the ESP01 module,
I needed a client.

This meant that I need to implement an http client, inside my http web server.

Again, I felt that this would be a fairly good task to do. With the help of LLMs
guiding me on how to design this web server, I was able to create a web client inside my
server that called the relay board API when I interacted with the web interface.

### The suffering starts
Things started changing when I tried to save the state of the relay and it's user details
in the server. Whenever a relay detail changed, I needed to modify the state in the
server, calculate the number to be sent to the board using the client, get the premade
client instance, and send the data in the correct json format. This was a bit difficult since
changing a shared object in rust is made safer with it's borrowing system.

I had to create a Mutex, lock the shared object inside it everytime the value changed.
This was tough and took some time for me to understand when to lock and when to release the
state, so as not to block the server's actions.

### Improvements up on the server
After this was ready, I had two features that I wanted to implement in my web server.
1. Find the IP of the relay board automatically when the web server starts running
2. Find the IP of the device that was attached to the relay system so that the user
can find the IP of that device remotely
3. Implementing a faster way to send updates back to the web interface to let the user know
about the recent changes in the relay system

#### Finding the IP of the relay
For the relay board, I implemented an API in the ESP01 module that responded with a custom
message to make sure it was the relay and not any other device in the network.
The explanation to why I chose TCP searching instead of UDP broadcast is mentioned in
the previous blog post.

So anyway, I set up a blocking process that scanned through all the 254 IPs that can be assigned to
a device in a local network. And when the server received the desired custom message, it locks on that
IP as the relay board's IP.

Once the Board IP was discovered, the web server starts running, letting the users switch the
relays on and off as necessary.

#### Finding IP of the device connected
The devices that were connected to the relay had the same network that the web server
was running in. So in this case, it was easier to send the UDP broadcast on the network to identify
the connected devices in the network. But still, how would we know which relay was
connected to which device?

For this, I scanned the network before the relay was turned on. This way I get the list
of devices connected before my device was turned on. Then after turning on the relay, I wait
for a whole minute for the device to boot up and connect to the network. I scan the network again,
and filter out the new device that is connected to the network. This works most of the time since
the device don't turn on and off as often in our office. So this hacky solution was perfect
for this scenario.

This however created more complexity to the code. This meant that the shared state had to be locked
for the whole minute to wait for the new device details. This blocked the user interaction too.
For this, I seeked help from other developers to understand how I should manage the locking and releasing
of shared states in rust. And with some gentle nudge in the right direction, I was able to release
the shared state and then lock it again when the new device IP was found.

#### Faster updates between the server and web interface
There were three ways to implement this.
1. Check for updates every 5-10 seconds from the web interface so that the server send the current state
user.
2. Long Polling
3. Web Sockets

I did not choose frequent checks since that is not a scalable solution. More clients
would load the server with frequent update requests.

I did not choose Web sockets since I felt that it would be overkill to user a full
duplex solution for my simple web server.

So I chose Long polling because of it's effectiveness. But again, in rust, implementing even
a simple feature was like carving a boulder with a fingernail. Even if the process
was harder to do, the result would be a rock-solid feature if implemented correctly.
As I was not aiming for perfection but just to get more familiar with the language,
I chose to learn the theory of long polling and started working on it on my own.
After several attempts and some hints from an LLM, I was able to complete the feature.

### Outcome
With these improvements, my web interface controlled relay system was ready for use.
It is a bit messy, hacky, imperfect, not as performant as it should be, but still it
works as expected. This was one of the big projects I have done so far.

The journey made me explore different areas of a product development even if it wasn't a big project.
These are:
1. Finding an innovative solution
2. Designing a circuit board
3. Soldering the board
4. Fixing hardware issues of the board
5. Flashing embedded chips
6. Setting up a small web server inside an embedded system
7. Setting up a proper rust backend server
8. Implementing a web client inside the server to interact with the relay board
9. Implementing a Long polling with rust
10. Scanning for devices in a network through UDP broadcast

In the end, I built a decent project while also gaining a great and valueable experience
in the process.
