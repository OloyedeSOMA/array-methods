 //array 
const food = ["🍎", "🍌", "🍕", "🍔",  "🍉", "🍩"];
//output: ["🍎", "🍌", "🍕", "🍔", "🍉", "🍩"]


// join--- converts array to string and it takes in a sperator
const foodStr1 = food.join(); // converting arrays to string without a seperator
//output: 🍎,🍌,🍕,🍔,🍉,🍩

const foodStr_2 = food.join(", "); // converting arrays to string with a seperator
//output: 🍎, 🍌, 🍕, 🍔, 🍉, 🍩

//slice -- doesnt modify array and it takes in two parameters (start and end) index
const foodSlice_1 = food.slice(2); // slicing the array without end index, Slice will take in the length of array as its end index
//output: ['🍕', '🍔', '🍉', '🍩']
const foodSlice_2 = food.slice(2,4); // slicing the array with a specified end index
//output: ['🍕', '🍔']

// array
const months = ["January", "March", "April", "June"];
//output: ['January', 'March', 'April', 'June']

const number = [1, 5, 80, 9, 6];
//output: [1, 5, 80, 9, 6]

//sort --- changes the original array, converts its elements to string and sorts them

months.sort(); // converts elements to string and sorts them lexicographically(dictionary/alphabet order) based on UTF-16 code units
//output: ['April', 'January', 'June', 'March']

number.sort(); // converts elements to string and sorts them lexicographically(dictionary-style) based on UTF-16 code units
//output: [1, 5, 6, 80, 9]

//sort compare function--- used to ensure arrays are sorted according to human logic
number.sort((a,b)=>{
    return a - b 
});
//output: [1, 5, 6, 9, 80]

// toSorted() -- safer modern alternative of sort()
const sortNumber = number.toSorted((a,b)=>{
    return a - b 
});
//output: [1, 5, 6, 9, 80]

//array
const digits = [1, 2, 3, 4, 5]

//reverse 
console.log(digits.reverse()); // changes the original array
//output: [5, 4, 3, 2, 1] --- digits is now [5, 4, 3, 2, 1]


//toReversed-- safer modern alternative of reversed()
const reverseNumber = digits.toReversed();
console.log(reverseNumber)
//output: [1, 2, 3, 4, 5]  beacause digits has been changed to [5, 4, 3, 2, 1]

//keys -- returns the keys of an array and returns them in a new array iterator object
const digitKeys = digits.keys()
for(let key of digitKeys){
    console.log(key);
};
//output:
//0
//1
//2
//3
//4


