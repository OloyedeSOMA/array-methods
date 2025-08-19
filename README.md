# 🚀 JavaScript Array Method Refresh


This repository is my space for revisiting JavaScript array methods — not because I’m seeing them for the first time, but because I believe fundamentals deserve regular attention.

# 📌 Why I’m Doing This

I’ve worked with methods like map, filter, find, and more in past projects. But I’m using this as an opportunity to:

  🔍 Spot any gaps in my understanding
  
  🧠 Strengthen my mental models for when and why to use each method
  
  ✍🏽 Share my key takeaways in simple, clear language

This is not a crash course or formal tutorial — it’s a personal learning journal I’m sharing publicly.

# ⚡ How It Works

Daily Commit → I explore 5–6 array methods each day

Notes.md → My plain-language explanations, use cases, and key takeaways

Code Examples → Short, focused snippets showing each method in action

LinkedIn Post → A short daily reflection to document progress

# 🛠 Methods Syntax Guide

This section shows the syntax for each method I’ve covered so far. I’ll keep updating it as I explore more.

## forEach()
array.forEach((element, index, array) => {
  // action to perform on each element
});

## map()
const newArray = array.map((element, index, array) => {
  // logic here
  return transformedElement;
});

## filter()
const filteredArray = array.filter((element, index, array) => {
  return condition; // true to keep the element
});

## concat()
const mergedArray = array1.concat(array2, value1, value2 /* ...more */);

## find()
const foundElement = array.find((element, index, array) => {
  return condition;
});

## findIndex()
const index = array.findIndex((element, index, array) => {
  return condition;
});

## indexOf()

const position = array.indexOf(searchElement, fromIndex);


## lastIndexOf()

const position = array.lastIndexOf(searchElement, fromIndex);


## some()

const hasMatch = array.some((element, index, array) => {
  return condition; // true if at least one element passes
});


## every()

const allMatch = array.every((element, index, array) => {
  return condition; // true only if all elements pass
});


## includes()

const exists = array.includes(searchElement, fromIndex);

## push()

const newLength = array.push(element1, element2, /* ...more */);
// element → the item(s) to add to the END of the array
// returns the new length of the array


## unshift()

const newLength = array.unshift(element1, element2, /* ...more */);
// element → the item(s) to add to the BEGINNING of the array
// returns the new length of the array


## pop()

const removedElement = array.pop();
// removes the LAST element of the array
// returns the removed element


## shift()

const removedElement = array.shift();
// removes the FIRST element of the array
// returns the removed element


## splice()

const removedElements = array.splice(startIndex, deleteCount, item1, item2, /* ...more */);
// startIndex → where to start changing the array
// deleteCount → how many items to remove
// item(s) → optional, items to add in place
// returns an array of removed elements

## join()

const str = array.join(separator);
// separator → optional string to separate elements (default is ",")


## slice()

const newArray = array.slice(start, end);
// start → index to begin extraction (inclusive)
// end → index to stop extraction (exclusive, optional)


## sort()

array.sort(compareFunction);
// compareFunction → optional function to define custom sort order
// Default: sorts as strings in ascending Unicode order


## toSorted()

const newArray = array.toSorted(compareFunction);
// compareFunction → optional function for custom sort
// Returns a new sorted array (original unchanged)


## reverse()

array.reverse();
// Reverses array elements in place


## toReversed()

const newArray = array.toReversed();
// Returns a new reversed array (original unchanged)


## keys()

const iterator = array.keys();
// Returns an iterator with the array’s keys (indexes)

for (const key of array.keys()) {
  console.log(key); // logs 0, 1, 2, ...
}


# 📎 Resources & Links

📄 MDN Web Docs – Array Methods → [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

🎥 YouTube Playlist – JavaScript Array Methods → [Watch Here](https://youtu.be/RVxuGCWZ_8E?si=2uzjoWAjG9IW4FbK)

💼 Follow My Progress on LinkedIn → [My LinkedIn Profile](https://www.linkedin.com/in/muhammed-o-012277329/)

🤝 Invitation

If you spot something I can improve or know a better way to use a method — I’d love to hear from you.
This repo is about growth, not perfection.
