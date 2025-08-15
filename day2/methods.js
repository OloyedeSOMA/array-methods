//array
const food = ["🍎", "🍌", "🍕","🍓", "🍔", "🍝","🍓", "🍉", "🍩"];
//output: ["🍎", "🍌", "🍕", "🍔", "🍓", "🍝", "🍉", "🍩"]

//indexOf

const index= food.indexOf("🍓"); //returns the first position of the item.... return -1 if item is not present
console.log(index)
//output:3



//lastIndexOf
const lastIndex = food.lastIndexOf("🍓");//returns the last position of the item from the back.... return -1 if item is not present
console.log(lastIndex)
//output:6

//some
const hasItem = food.some((item)=> item ==="🍔" );//checks if food array has at least one hamburger... returns true or false

//output: true

//every
const allPizza = food.every((item)=> item === "🍕"); //checks if food array items are all pizza... returns true if condition is met

//output: true

//includes
const hasPizza = food.includes("🍕"); // search if the item is  in the array... returns true if condition is met

//output: true
