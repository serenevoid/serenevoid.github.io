---
title: "WebRelay: A remote controlled power switch board - Part 1"
description: "A DIY solution to control the power of devices from anywhere"
pubDate: 2025-3-06
tags: ["embedded", "c", "electronics"]
---
Controlling power remotely shouldn’t require expensive smart plugs or overly complex automation systems.
I wanted something lightweight, reliable, flexible, hackable and completely open—so I built it from scratch.

This is the first post in a blog series documenting the process of ideating, designing, and building a
custom solution to meet the needs of myself and my colleagues. This will be a bit long
that mentioned the mistakes and upgrades I added to the project during each stages. So feel free
to skip through portions that you don't require.

### The Spark
This all started at work when my coworker was testing a remote server. She wanted to
turn off the system for a time period and turn it back on. But since she was working
from home, there was no way she could test this without asking for help from others
who would be available on-site. But what if no one was available when she needed it?

There should be a way to resolve this issue, right? Maybe a remote controlled power
switch that can be controlled from anywhere?

This idea reignited my passion for hands-on engineering.
I went back to my old university projects and write-ups for inspiration. I dug out my trusty Arduino Uno
from the tinkering kit I hadn’t touched in years. As tradition goes, I flashed the Blink program to test
if the board was still alive and it was.

### The Prototype
#### Components
- 1 × Arduino Uno Development Board
- 4 × Jumper Wires (Male-to-Female)
- 1 × 5V 2-channel Relay Module

#### Circuit Diagram
![prototype-1](https://u.cubeupload.com/serenevoid/Nt6SQC.jpg)

#### Arduino Program
```c
const relays[] = [2, 3];
const count = sizeof(relays) / sizeof(relays[0]);
bool isActive = false;

void setup() {
    // Set relay pins as OUTPUT pins
    for (int i = 0; i < count; i++) {
        pinMode(relays[i]);
    }
    // Initialize all Relays in OFF state
    // By default, most relays are ACTIVE LOW
    for (int i = 0; i < count; i++) {
        digitalWrite(relays[i], HIGH);
    }
}

void loop() {
    for (int i = 0; i < count; i++) {
        digitalWrite(relays[i], isActive ? HIGH : LOW);
        delay(1000);
    }
    isActive = !isActive;
}
```

The above program toggles both relays in a pattern with a delay of 1 second
for each relay.

### Outcome
This was just a test program I wanted to run to get a quick dopamine boost before
diving into the constraints and challenges of this project. With that accomplished,
I decided to expand it into a version 0 of the project.
