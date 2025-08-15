## Day 2 – JavaScript Array Methods
Methods Covered

indexOf()

lastIndexOf()

some()

every()

includes()

## Plain-Language Explanations

indexOf() – Returns the first index (position) of a specified element in an array, or -1 if the element is not found.

lastIndexOf() – Returns the last index of a specified element in an array, or -1 if the element is not found. i.e returns the last position of a given element provided there are duplicates of that element but you want the position of the last duplicate

some() – Checks if at least one element in the array passes the given condition. Returns true or false.

every() – Checks if all elements in the array meet the given condition. Returns true or false.

includes() – Checks if the array contains a specific value, returning true or false.

## When to Use Them (Use Cases)

indexOf() → Finding the first time a user appears in a leaderboard list so you can display their position.

lastIndexOf() → Finding the last recorded order a customer made in purchase history to display their latest transaction.

some() → Checking if a user’s playlist has any explicit songs so you can show a content warning.

every() → Verifying that all products in the cart are in stock before allowing checkout.

includes() → Checking if a user’s roles array contains ‘admin’ before showing admin-only features.

## Key Takeaways

These methods can be grouped  under search functionality arrays

indexOf() and lastIndexOf() are very much similar but indexOf() searches for the first position of an element while lastIndexOf() searches for the last position of an element 
---side note: lastIndexOf is very much needed when the element is more than one.

some() and every() are also similar but some() check if at least one element satisfies the condition while every() checks if all elements satisfy the condition. 



## Reflection

Today's session made me see the similarity in findIndex and indexOf and when they are used. findIndex is used for non-primitive types while indexOf is for primitive types. Today's section made me realize when array methods can be used in optimal function and how it can be easily misused for the wrong actions based on their similarities.