---
title: "Javascript Web Workers API"
description: "The secret behind smooth UI on almost all frontend frameworks"
pubDate: 2025-01-25
tags: ["js"]
---
## What is Web Workers API?

Web Workers make it possible to run script to handle time consuming tasks in a
background thread so that the main thread (ideally UI thread) is not blocked/delayed.
This helps the main thread to be ready for any UI changes and acts instantly.

Workers can spawn other worker threads to help with complex tasks if required.

## How do you create a Worker thread?

A worker thread is created using the constructor `Worker()`. The name of the script
that has to be run is given as parameter. This worker thread executes the given
script. Almost all standard Javascript functions are available inside the Worker
thread except for some browser APIs. You cannot directly access/manipulate the DOM
through a worker script.

## How do I communicate data to and from the Worker?

Main thread and Worker thread communicates through message events.
- Sending data to one thread is done by `postMessage()`
- Listening for data data from one thread is done by `onmessage()`

The data shared to the thread is copied instead of being shared.

### Practical Guide

Assume you have the main script and the worker script in your directory.

You create your worker thread from the main thread as follows:
```javascript
const worker = new Worker('worker.js');
```
Now if you want to send some data to the worker thread from the main thread,
you use the `postMessage()` method.
```javascript
worker.postMessage("Hello");
```
And in the worker script, you listen to the data using `onmessage()`.
```javascript
onmessage = (e) => {
    let data = (e.data)
    data = `${data} world!`;
    postMessage(data);
});
```
The worker sends the modified data back to the main thread and we listen to the
event using `onmessage()`.

```javascript
worker.onmessage = (e) => {
  let modifiedData = e.data;
  console.log("Message received:", modifiedData);
};
```

These are just the basics of Web Worker API. You can dig deeper in the Mozilla
docs to learn more about the types of Web Workers and features they provide.
