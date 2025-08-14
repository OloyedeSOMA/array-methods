// Array variable
const food = ["apple", "banana", "carrot", "orange", "onion", "mango"];
console.log(food);
// Output: ['apple', 'banana', 'carrot', 'orange', 'onion', 'mango']

// forEach method: Iterates through the array and performs an action for each element (no return)
food.forEach(fruit => {
    console.log(fruit);
});
// Output:
// apple
// banana
// carrot
// orange
// onion
// mango

// map method: Creates a new array by applying a function to each element
const newFood = food.map(item => "fruit");
console.log(newFood);
// Output: ['fruit', 'fruit', 'fruit', 'fruit', 'fruit', 'fruit']

// Example: Duplicating each food name
const duplicateFood = food.map(item => item + " " + item);
console.log(duplicateFood);
// Output: ['apple apple', 'banana banana', 'carrot carrot', 'orange orange', 'onion onion', 'mango mango']

// filter method: Returns elements that match the condition
const filteredFruit = food.filter(item => item === "apple");
console.log(filteredFruit);
// Output: ['apple']

// concat: Merges arrays and/or values into a new array
const joinedArr = food.concat(newFood, "egg");
console.log(joinedArr);
// Output: ['apple', 'banana', 'carrot', 'orange', 'onion', 'mango', 'fruit', 'fruit', 'fruit', 'fruit', 'fruit', 'fruit', 'egg']

// find: Returns the first element that matches the condition (or undefined if none found)
const apple = food.find(item => item === "apple");
console.log(apple);
// Output: apple

// findIndex: Returns the index of the first matching element (or -1 if none found)
const appleIndex = food.findIndex(item => item === "apple");
console.log(appleIndex);
// Output: 0
