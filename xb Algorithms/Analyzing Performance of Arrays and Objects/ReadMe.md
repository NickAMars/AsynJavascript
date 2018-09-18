
OBJECTIVES

--- Understand how objects and arrays work, through the lens of Big O
--- Explain why adding elements to the beginning of an array is costly.
--- Compare and contrast the runtime for arrays and objects, as well as built-in methods.

when to use objects?

when you dont' need order.
When you need fast access/ insertion and removal

Big O of objects
Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(1)


Object.keys(OBJECTNAME);
Object.values(OBJECTNAME);
Object.entries(OBJECTNAME);
Object.hasOwnProperty(OBJECTNAME);


When to use array?
--When you need order
-- when you need fast access/insertion and removal (sort of...)
Big O of Arrays
insertion - It depends...
Removal - It depends...
Searching - O(N)
Access - O(1)


Big O of Array Operations
push - O(1)
pop - O(1)
shift - O(N)
unshift - O(N)
concat - O(N) -- merge two arrays
slice - O(N) -- copy  element
splice - O(N) -- remove and add new element
sort - O(N*logN) --
forEach/map/filter/reduce ect. - O(N)
