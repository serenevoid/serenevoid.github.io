---
title: "Null vs Undefined and how to catch them"
description: "Javascript's similar but not so similar variable states"
pubDate: 2022-12-29
tags: ["js"]
heroImage: "https://i.imgur.com/hK7dV13.jpg"
---
Undefined and Null are two primitive values in javascript which denotes the absence
of a meaningful value. But even they have different meanings in terms of usage.

## Undefined
Undefined means 'not defined' by plain definition. It just means that a variable
that you are referring to is not defined in its scope. This usually happens when
you try to use a variable which does not exist or when you declare a variable without
defining it's value. Until the variable is initialized with a value, the state of
the variable remains as undefined.
```javascript
let sample; // variable declared but not initialized
console.log(sample); // Output: undefined
 
let obj = { id: "293", type: "Paper" }; // js object with keys
console.log(obj.property); // Output: undefined

function sampleFunc() {} // no return statement, so the function returns undefined 
console.log(sampleFunc()); // Output: undefined
```

### Where can we find undefined value related errors?
The most common sources of undefined errors are:
1. Accessing a non-existing property from an object.
2. Accessing a non-existing element from an array.
3. Using a variable that was declared but not initialized.
4. Using a value that you expect from a funtion that does not return anything.

## Null
Null is an explicitely assigned value that denotes the absence of a proper value
or reference to an object inside a variable.
```javascript
let sample = null; // variable declared but not initialized
console.log(sample); // Output: null
 
let obj = { id: "293", type: "Paper", property: null }; // js object with keys
console.log(obj.property); // Output: null

function sampleFunc() { return null } // function returns null 
console.log(sampleFunc()); // Output: null
```

### Where can we find null value related errors?
The most common sources of undefined errors are:
1. Accessing a property from an object whose value was changed to null.
2. Using a value that you expect from a funtion that returns null.

![analogy](https://pbs.twimg.com/media/DusCOfyXcAA9_F7.jpg)

## Null Pointer Exception in Javascript
If you have worked with Javascript, you will definitely come across the error
`TypeError: Cannot read property 'bar' of null` at some point in your work life.
This happens often to developers when they forget the possibility of null
reference in their application logic.
Some people use conditional checks to check for both undefined and null values.
```javascript
if (value !== null && value !== undefined) {
    // application logic
}
```
But this is repetitive and it can be shortened to just null check.
```javascript
if (value != null) {
    // application logic
}
```
Do note that this second form uses `!=` instead of `!==`. This condition returns
false for both null and undefined values. This way its easier to catch Null
Pointer Exceptions.
