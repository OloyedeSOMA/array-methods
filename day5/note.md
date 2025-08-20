## Day 5 – JavaScript Array Methods
Methods Covered

from()

isArray()

flat()

flatMap()

reduce()
    reduceRight()

## Plain-Language Explanations

from() – Creates a new array from an array-like or iterable object (like strings, NodeLists, or Sets).

isArray() – Checks if a given value is an array (returns true/false).

flat() – Flattens nested arrays into a single array, up to the specified depth.

flatMap() – Maps each element using a function and then flattens the result into a new array.

reduce() – Runs a reducer function on each element of the array, accumulating a single result from left to right.

reduceRight() – Similar to reduce, but processes the array from right to left.

## When to Use Them (Use Cases)

from() → When you need to convert array-like data into a true array.
Example: Turning a NodeList of form fields into an array so you can validate all inputs with .map() or .every().

isArray() → When you need to validate data before using array methods.
Example: Validating that an API response like user.orders is actually an array before looping, to prevent runtime errors in production

flat() → When you need to handle nested arrays.
Example: Flattening a nested comments thread into a single list for easier rendering.

flatMap() → When you need to transform + flatten in one go.
Example: Splitting sentences in an array of paragraphs into words and flattening into one word list.

reduce() → When you need to aggregate or summarize data.
Example: Calculating the total cost of items in a shopping cart.

reduceRight() → When the order of processing matters from right to left.
Example: Evaluating math expressions like (((2 + 3) * 4) - 5) stored in an array.

## Key Takeaways

from, isArray, flat, and flatMap are all about transformation and preparation of data.
reduce and reduceRight are about powerful aggregation and accumulation.