---
title: "Still using console.log() for logging in JS? You can do better."
description: "A simple guide to the console object and its methods in JS."
pubDate: 2022-12-08
tags: ["js"]
---
Probably the first thing every JS developer learns is the console.log() method. 
Even the first Hello world program is written using this method in most 
tutorials. But isn't it strange that most of us never dug deep into the console 
object or it's other methods.

So I will take you through the console object and its methods in this blog.

## Console
The `console` object gives you access to the browser's debugging console. It can 
be accessed from any global object.

## Instance methods of console

### console.log()
General logging of data into the console. Support multiple parameters and string 
substitutions.

```javascript
console.log("Hello there", "Void");
```
The output will look like this:
```
Hello there Void
```

### console.warn()
Outputs warning messages. Very similar to `console.log()`.
Supports additional arguments and also supports string substitutions.

### console.error()
Outputs an error message. Can be used with string substitutions and additional 
arguments just like `console.log()`.

### console.clear()
Clears the console.

### console.assert()
Log a message and stack trace to console if the first argument is `false`.

```javascript
function min(a, b) {
    if (a > b) 
        return b;
    else 
        return a;
}

// Test the function
const result = min(2, 3);
console.assert(result === 3, 'Expected 2. Received 3');
```
The output will look like this:
```
Assertion failed: Expected 2. Received 3
```

### console.count()
Logs the number of times this particular function has been called. It normally 
stores the count under `default` key. But if we pass a string as an input, the 
string will be used as the key for the counter. This can be used to set up 
separate counters for bigger scripts.

```javascript
function count(key) {
    console.count(key);
}

// Test the function
count("void");
count("loop");
count("void");
count("loop");
count("void");
count("stage");
```
The output will look like this:
```
void: 1
loop: 1
void: 2
loop: 2
void: 3
stage: 1
```

### console.countReset()
Resets the counter value of the given key or `default` key.

### console.group()
Create an *inline* group and indents all the next logs inside this group till 
`console.groupEnd()` is called.

```javascript
console.group("Test") // Start Test group
console.log("Hello");
console.log("Void");
console.log("Its a good day");
console.groupEnd("Test") // End Test group
```

### console.table()
Displays tabular content in table form inside the console.

```javascript
console.table({"1": "2","2": "sample text"})
```
The output will look like a proper table:
```markdown
| (Index) | Value         |
|---------|---------------|
|       1 | '2'           |
|       2 | 'sample text' |
```

### console.time()
Starts a timer with a given label. Up to 10,000 simultaneous timers can be run 
on a given page. It should be stopped with `console.timeEnd()` with the label as 
parameter. to print the time in milliseconds. Timer's current time can be printed 
without stopping by using `console.timeLog()`.

```javascript
console.time()
console.timeLog() // After 2 seconds
console.timeEnd() // End after approximately 5 seconds
```
 The result would be:
 ```
default: 2130.149034298985 ms
default: 5682.704833984375 ms
 ```

### console.trace()
Outputs a [stack trace](https://developer.mozilla.org/en-US/docs/Web/API/console#stack_traces) 
to the function in which this method is called. Suitable to identify the source 
of a function call.

```javascript
function call_void() {
    console.trace()
}
function call_call_void() {
    call_void()
}
call_call_void()
```
 The result would be:
 ```
console.trace
call_void
call_call_void
 ```

You can read more about these and also see some examples at:
1. [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/console#examples)
2. [w3schools](https://www.w3schools.com/jsref/obj_console.asp)
