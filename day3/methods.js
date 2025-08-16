//array
const food = ["🍎", "🍌", "🍕", "🍔",  "🍉", "🍩"];
console.log(food);
//output: ["🍎", "🍌", "🍕", "🍔", "🍉", "🍩"]

//push
const addFood = food.push('🍝'); //adds element to the end of an array and returns the length
console.log(addFood); 
//output:foods's length is now 7
console.log(food);
//output:['🍎', '🍌', '🍕', '🍔', '🍉', '🍩', '🍝']

//unshift
const unshiftFood = food.unshift('🍝'); //adds element to the beginning of an array and returns the length
console.log(unshiftFood);
//output:food's length is now 8
console.log(food);
//output: ['🍝', '🍎', '🍌', '🍕', '🍔', '🍉', '🍩', '🍝']

//pop
const popFood = food.pop(); //removes the last element of an array and returns it
console.log(popFood);
//output:🍝
console.log(food);
//output:

//shift
const shiftFood = food.shift(); //removes the first element of an array and returns it
console.log(shiftFood);
//output: 🍝
console.log(food)
//output:

//splice
const removeItem = food.splice(0, 2); // deletes elements in the array depending on the delete count its given and returns it/them
console.log(removeItem);
//output: ['🍎', '🍌']
console.log(food);
//output:['🍕', '🍔', '🍉', '🍩']

const addItem = food.splice(0,2,'🍝','🍝'); // this removes two items from the array and adds two items into the array... then returns the removed items 
console.log(addItem);
//output:['🍕', '🍔']
console.log(food)
//output:['🍝', '🍝', '🍉', '🍩']