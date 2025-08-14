## Day 1 – JavaScript Array Methods
Methods Covered

forEach()

map()

filter()

concat()

find()

findIndex()



## Plain-Language Explanations

forEach() – Loops through each element in the array and performs an action. Does not return a new array or modify the original (unless you explicitly change it inside the loop).

map() – Similar to forEach, but creates and returns a new array based on the results of a callback function.

filter() – Returns a new array containing only elements that pass a given condition.

concat() – Combines two or more arrays (or arrays + values) into a new array.

find() – Returns the first element in the array that matches a condition. Stops searching after it finds one.

findIndex() – Returns the index (position) of the first matching element found.



## When to Use Them (Use Cases)

forEach() → When you need to perform an action on each element, but don’t need a returned array. Example: logging data, updating UI elements.

map() → When you need to transform each element and get a new array back. Example: converting prices from USD to EUR.

filter() → When you need to select specific items from a list based on conditions. Example: filtering active users.

find() → When you only need the first match. Example: finding a user by ID.

findIndex() → When you need the position of the first match. Example: updating a specific element in an array.

concat() → When you need to join multiple arrays or add values without mutating the original arrays. Example: merging product lists.

## Key Takeaways

map, filter, and find all take a callback function.

forEach doesn’t return anything, while map and filter return new arrays.

find and findIndex stop searching once they find the first match.

None of these methods change the original array unless you deliberately mutate it inside the callback.

## Reflection

Today’s session reminded me that even familiar methods have subtle differences in how they handle data. Revisiting them helped me reinforce which method to choose for a given task.