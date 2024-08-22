---
title: "Are objects the same as Maps in Javascript?"
description: "Addressing a common practice of using objects as maps."
pubDate: 2023-09-25
tags: ["js"]
heroImage: "https://u.cubeupload.com/serenevoid/QDBREI.png"
---
## Javascript Objects
An Object is a value in memory that can be referenced by an identifier like a variable.
It acts like a dictionary in which we can store key-value pairs for our program.

### Basic operations on objects

#### Creation of an object
An object can be created with the object class constructor or by literal syntax.
The statement to create an empty object using both ways are shown below.

1. Constructor syntax: 
```javascript 
let newObj = new Object();
```
2. Literal syntax: 
```javascript
let newObj = {};
```

#### Adding and Removing properties
In javascript objects, we should use strings as keys or properties of the object. We can create
a new property as shown below.
```javascript
newObj.isReal = true;
newObj["isReal"] = true;
```
The same syntax can be used to modify the value of a property as well.

When you have multiple keys that you need to open, using the second case would be much easier 
since you can store the key as a string on a variable and then access the key using that variable inside
the square brackets.

For removing a property, we can use the delete keyword on that property of the object.
```javascript
delete newObj.isReal;
```

### Mutability
> In Javascript, objects are the only _mutable_ values.

"Aren't normal variables mutable too? We can change the value of any variables inside JS."
Atleast some of you might have this question in your mind. When you modify a variable in 
javascript, the variable is reassigned to a new memory location with the new value.
But in case of Objects, the inner value is replaced and not the object. Which makes objects mutable.
This is also the same reason why some data are passed as Objects to some functions so that the
changes that are applied to the object stays even after the function ends.

### Usage of object as a dictionary
JS objects can be used as a simple dictionary to store key value pairs. But they
were not designed for cases where the dictionary will have huge amount of modifications.
The hash table implementation gets slower as the number of keys in the object increases.
The hash table uses linear probing to find out the next free slot of memory to 
store the value of a new key. This process gets slower as the objects gets populated
with more keys.
So using a simple javascript object as a dictionary is not ideal if you are trying to build
a highly scalable and performant application. Javascript has another datatype for 
this specific usecase where we require good performance for dictionaries.

## Maps
Maps are specially designed to be used as a dictionary for javascript applications.
It holds key-value pairs just like objects do. But it holds the order of insertion
for later use. We can also use keys of types other than just string. Both objects or
any primitive types can be used as a key or value inside Maps. Even functions can be used as keys
inside a map. How? Because functions are basically objects with an additional functionality which
makes it _callable_.

### Basic operations on a Map

#### Creation of a map
A map is created with the constructor of Map class.
```javascript
let map = new Map();
```
#### Read, Write, Update and Delete key-value pair in maps
Writing a new key or updating an existing key in a map is possible with the help of the
set function that is associated with the map object.
```javascript
map.set('a', 44);
```
Reading a key from the map is done with the get fuction.
```javascript
let data = map.get('a');
```
Deleting a key is though the delete function.
```javascript
map.delete('a');
```

### Performance difference statistics
When a performance difference is being mentioned anywhere, everyone looks for the valid data.
So here I created a simple program to create an object and a map and then add and read 1 million keys.

```javascript
const iterations = 1000000; // Number of iterations for the test

// Performance test using JavaScript objects as dictionaries
const testObjectPerformance = () => {
  const start = performance.now();
  const obj = {};
  for (let i = 0; i < iterations; i++) {
    obj['key' + i] = i;
  }
  for (let i = 0; i < iterations; i++) {
    const value = obj['key' + i];
  }
  const end = performance.now();
  return end - start;
};

// Performance test using JavaScript Maps as dictionaries
const testMapPerformance = () => {
  const start = performance.now();
  const map = new Map();
  for (let i = 0; i < iterations; i++) {
    map.set('key' + i, i);
  }
  for (let i = 0; i < iterations; i++) {
    const value = map.get('key' + i);
  }
  const end = performance.now();
  return end - start;
};

// Run the performance tests and log the results
const objectTime = testObjectPerformance();
const mapTime = testMapPerformance();

console.log(`Using Objects took ${objectTime} milliseconds.`);
console.log(`Using Maps took ${mapTime} milliseconds.`);

if (objectTime < mapTime) {
  console.log('Objects are faster.');
} else if (objectTime > mapTime) {
  console.log('Maps are faster.');
} else {
  console.log('Both have similar performance.');
}
```

Data from executing this script on my system:
```plaintext
+--------+-------------+-------------+
| Trials | Object Time |  Map  Time  |
+--------+-------------+-------------+
|    1   |  1961.7186  |  1071.3730  |
|    2   |  1729.8827  |  0984.2493  |
|    3   |  1950.5202  |  0955.6944  |
|    4   |  1955.8236  |  1050.4110  |
|    5   |  1951.1201  |  1006.1277  |
+--------+-------------+-------------+
|   Avg  |  1909.8130  |  1013.5710  |
+--------+-------------+-------------+
```

This shows that using Maps is **89%** faster than using objects as dictionaries.

## Conclusion
Maps and objects can be used as dictionaries. If you are creating a dictionary in your application
and rarely modify it's values, using an object to create the dictionary is fine. But when you are
creating a dictionary which is expected to be modified frequently, it is a good practice to use a Map
instead of an object.
