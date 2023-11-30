---
title: "Javascript Object Destructuring and places where it gets weird"
description: "Object destructuring a really useful feature that helps you read from objects in a better way."
pubDate: 2023-11-30
tags: ["javascript"]
heroImage: "https://i.imgur.com/lVCFP9O.jpg"
---

## What is Object Destructuring?
The easiest analogy I can think of is "unpacking" a closed package and then
taking what's inside to use it for later. Would you open the package to check
it's contents everytime you want to use it? Or would you keep the content with
you so that its easier to use it later?

In the same way, we destructure javascript objects and store them in a local
variable so that we can use them over and over in a given scope. It is easier
to use this variable rather than taking the value from the object every single
time you need it.

```javascript
// an object with two properties is created
const user = { name: 'Void', age: '11' };

// without destructuring
console.log(`${user.name} is ${user.age} years old.`);

// with destructuring
const { name, age } = user;
console.log(`${name} is ${age} years old.`);
```

Well, this doesn't look that different, does it? Well, in this example it doesn't
make much of a difference. But when you consider a bigger object with lots of
properties and you need to use it inside a loop, it might be better to use
destructuring to refer the object data.

## Examples where destructuring could be very useful

1. Destructuring objects passed to a function makes it easier to accept the single
object parameter as multiple destructured properties. This makes using the object
properties far more easier.
```javascript
function logDetails({name, age}) {
   console.log(`${name} is ${age} years old!`)
}

const user = { name: 'Alexander', age: 49 };
logDetails(user);
```
2. When writing loops that needs to traverse through an array of objects, its
useful to destructure the objects as you move to make it easier to access the
data.
```javascript
const users = [
   { name: 'Chris', age: 43 },
   { name: 'Dave', age: 53 },
   { name: 'Louis', age: 26 }
];

for(let { name, age } of users) {
   console.log(`${name} is ${age} years old!`);
}
```
3. Destructuring can be very helpful when you extract values off of arrays. When
you know that the required values will not change their position in the array,
its easier to use them by destructuring.
```javascript
const color = [176, 225, 218];
const [ red, green, blue ] = color;

console.log(`Red: ${red} Green: ${green} Blue: ${blue}`);
```
4. Taking default values are easier with destructuring. This way, we can have
default values for properties that are not yet defined in the object.
```javascript
const user = { name: 'Alexander', age: 49 };
const { name, age, isSubscribed = false } = user;
```

## The bad side of destructuring
Despite being a really good feature for writing codes that handle lots of objects,
object destructuring can degrade the quality of the code if overused. Using destructuring
everywhere will affect the readability and the maintainability of the code. It will
not drastically affect the performance since all of the modern runtimes are well
optimized to handle both cases. So even if there is a slight difference, it will
be negligible compared to other issues.

## Examples where destructuring affects readability
1. Destructuring excessively nested objects can become a weird syntax that is
still valid but not readable.
```javascript
const { a: { b: { c: { d } } } } = someObject;
```
2. When destructuring objects passed as function parameters, its better to do that
when the number of objects taken by the function is 1. Destructuring more objects
inside the function parameters can make it unreadable.
```javascript
function handleObjects({ name, age }, [height, weight]) {
    // Logic of function
}
```
3. Using destructuring on objects that may or may not be defined could throw errors.
One way to avoid this would be providing default values for the properties or to
check the validity of the object before destructuring.
```javascript
const user = { name: 'Alexander', age: 49 };
const { name, age, isSubscribed } = user;
```
4. Destructuring in a global scope is not recommended since it would create duplicate
references or copies in some cases. So its always better to use destructuring inside
local scopes of functions or loops.
```javascript
const user = { name: 'Alexander', age: 49 };
// Destructuring here will create two new variables 
// 'name' and 'age' that will // stay throughout the program
const { name, age } = user;
```

## Conclusion
Javscript Object Destructuring is a very useful feature which was introduced to
make development a bit more easier and faster. But overusing it would take it's
advantages away and make the code an unreadable mess. Always use it where it is
necessary.
