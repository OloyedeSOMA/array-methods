//data--- arrayLike
const string = "1234";
console.log(string);
//output: 1234

//from -- converts an array-like to an array, takes in the array like as parameter and also an optional mapFn
const createdArr = Array.from(string);
console.log(createdArr);
//output: ['1', '2', '3', '4']

//with a mapFn -- this runs a conversion logic 
const createdArrFn = Array.from(string, (element)=>{
    return Number(element); // string to number
});
console.log(createdArrFn);
//output: [1, 2, 3, 4]

//isArray -- checks if a value is an array or not, returns true or false
const arrCheck = Array.isArray(string);
console.log(arrCheck);
//output: false

//multi-dimensional array
const numbers = [1,2,3,[4,[5,[6]]]];
console.log(numbers)
//output: [1,2,3,[4,[5,[6]]]]

//flat--- used to flatten nested arrays into a one dimensional array, takes in a depth parameter

//without depth parameter
const newArr_1 = numbers.flat() // default depth parameter is 1
console.log(newArr_1);
//output: [1,2,3,4,[5,[6]]]

const newArr_2 = numbers.flat(3);
console.log(newArr_2);
//output: [1, 2, 3, 4, 5, 6]

//array
const data = ["🍎", "🍌",[ "🍕", "🍔"],  ["🍉", "🍩"]];

//flatMap--- basically a combination of map() and flat()... takes in a callbackFn with runs a specific action on elements in each nested array

const result = data.flatMap((array)=>{
    return array[0] + array[1]
})
console.log(result)
//output: ['🍎', '🍌', '🍕🍔', '🍉🍩']

//array
const array_1 = [1,2,3,4];
//output: [1,2,3,4]

//reduce -- used to reduce elments in an array into a single value... takes in a reducerFn and an optional initial value parameter

function reducer(prev, current){ //reducerFn takes in two parameters(previous value and current value)
    return prev + current;
};

const sum = array_1.reduce(reducer, 0); //if initialValue  is not given, the first element is used
console.log(sum)
//output: 10





