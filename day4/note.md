## Day 4 – JavaScript Array Methods
Methods Covered

join()

slice()

sort()
    toSorted()

reverse()
    toReversed()

keys()

## Plain-Language Explanations

join() – Joins all elements of an array into a single string, separated by a specified delimiter (default is a comma).

slice() – Returns a shallow copy of part of an array into a new array. Does not modify the original array.

sort() – Sorts the elements of an array in place. By default, sorts as strings (lexicographically).

toSorted() – Returns a new sorted array without modifying the original array (immutable version of sort()).

reverse() – Reverses the order of elements in place, modifying the original array.

toReversed() – Returns a new reversed array while leaving the original array unchanged.

keys() – Returns an iterator containing the array’s keys (indexes) which can be looped over or expanded.
## When to Use Them (Use Cases)

join() → When you need to turn an array into a string for display or saving.
Example: Turning a list of tags [“JS”, “React”, “Firebase”] into "JS, React, Firebase".

slice() → When you need a portion of an array without mutating it.
Example: Paginating products (getting items 0–9 for page 1, 10–19 for page 2).

sort() → When you want to permanently arrange elements.
Example: Sorting leaderboard scores or alphabetizing a list of names when original order doesn’t matter.

toSorted() → When you need a sorted version but also want to preserve the original order.
Example: Displaying users alphabetically in a dropdown while keeping the raw user data order intact in state.

reverse() → When you want to flip the order permanently.
Example: Displaying the most recent blog posts first by mutating the posts array.

toReversed() → When you want a reversed view without touching the source data.
Example: Showing chat messages newest → oldest on screen, but still keeping the original data chronological in state.

keys() → When you need the indexes of an array, often to pair with data.
Example: Generating row numbers in a table or creating [0,1,2,...] using [...array.keys()] for mapping UI lists.

## Key Takeaways

slice, toSorted, and toReversed are immutable (don’t change the original).
sort and reverse are mutable (they directly change the array).
join is for conversion (array → string).
keys helps with iteration (working with indexes instead of values).
