---
title: "Enums - The not so type-safe feature of Typescript"
description: "A small issue inside the typescript ecosystem which very few people notice."
pubDate: 2023-01-15
tags: ["js"]
heroImage: "https://drive.google.com/uc?export=view&id=1ktj5i-UY2yrcfBAdBVC1d2-YfTN7ALCS"
---
Enumerated Type or *enum* is a user-defined data type in most programming languages.
It is used to assign descriptive names to integral or string constants just for 
code readability and better maintainability. Enums can contain numeric or string constants.

## Enums with Numeric Constants
```typescript
enum States {
    ACTIVE = 0,
    INACTIVE = 1,
    DISABLED = 2,
    ALWAYS_ON = 3
}
```
We can skip assigning values to let it increment itself.
```typescript
enum States {
    ACTIVE, // 0
    INACTIVE, // 1
    DISABLED, // 2
    ALWAYS_ON // 3
}
```
If we want the values to start from one particular value, we can provide that to 
one of the enum constants.
```typescript
enum States {
    ACTIVE, // 0
    INACTIVE = 10, // 10
    DISABLED, // 11
    ALWAYS_ON // 12
}
```

## Enums with String Constants
```typescript
enum States {
    ACTIVE = "active",
    INACTIVE = "inactive",
    DISABLED = "disabled",
    ALWAYS_ON = "always_on"
}
```
String enums do not have auto-increment behaviour.

## Reverse mappings
A unique ability of numeric enums is that it creates reverse mappings from the 
enum values to enum names.
```typescript
enum States {
    ACTIVE,
    INACTIVE,
    DISABLED,
    ALWAYS_ON
}
console.log(States);
```
This code will provide the following output:
```
[LOG]: {
  "0": "ACTIVE",
  "1": "INACTIVE",
  "2": "DISABLED",
  "3": "ALWAYS_ON",
  "ACTIVE": 0,
  "INACTIVE": 1,
  "DISABLED": 2,
  "ALWAYS_ON": 3
}
```
This feature is not available for any enum constants other than numerical enums.

The issue however is that when you use a numerical enum as an argument of a function, 
typescript allows the function to intake any numerical value which is not part of the 
enum.
```typescript
enum Fruits {
    Apple, // 0
    Pomegranate, // 1
    Persimmon // 2
}

function getFruit(fruitType: Fruits) {
    console.log(fruitType);
}

getFruit(Fruits.Persimmon); // Valid

getFruit(1); // Valid

getFruit(100); // Invalid data but not caught by typescript
```
The output of this code will look like:
```
2
1
100
```

Okay. Then its better to use string enums, right?

Yes, if you enforce the use of enums without reverse mapping feature.

But if you feel like it feels a bit incomplete and really need the flexibility 
of using string value to get the corresponding enum value, there is a lengthy 
work around for that too.

We first initialize the enum like a regular object but as const.
```typescript
const Fruits = {
    Apple = "APPLE", // 0
    Pomegranate = "POMEGRANATE", // 1
    Persimmon = "PERSIMMON" // 2
} as const;
```
We add `as const` at the end of the object to make the values become constants.
You can use this object similar to how you use and enum.
```typescript
let x = Fruits.Apple;
```
But if you check the type of variable `x`, you'll see that it shows as "APPLE", 
which is the value of that particular key of the Fruits object. We need the type 
to be related to the enum and not a string constant value like shown now.
So we have to create the type for this object as shown.
```typescript
type FruitType = typeof Fruits[keyof typeof Fruits];
```
This gets the type of Fruits object and index into that type using the keys present 
in that object. This results in a union type of values present in the enum which we're
building. This also opens up the facility to use raw strings to match the enum values.
That is exactly the feature provided by reverse mapping in numeric enums. This also rejects 
any random string constant unlike the numeric enum which allows any integer.
The only minor inconvenience with this approach is that the enum will be called Fruit and
the type of the enum would be FruitType which are two different terms. 
This approach is useful if you really want to get the reverse mapping feature. 
```typescript
const Fruits = {
    Apple = "APPLE", // 0
    Pomegranate = "POMEGRANATE", // 1
    Persimmon = "PERSIMMON" // 2
} as const;

type FruitType = typeof Fruits[keyof typeof Fruits];

let x: FruitType = Fruits.Apple; // valid

let y: FruitType = "POMEGRANATE"; // also valid
```

I believe most of the developers, like me, won't care about the reverse mapping feature much.
So the best option for me personally is to use string constant enums since I will 
never be using string constants to access enum types. But still this is a good thing 
to know about typescript.
