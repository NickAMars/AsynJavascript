BIG O of HASH TABLES
Insert: O(1)
DELETION: O(1)
ACCESS: O(1)

HASH FUNCTION ARE USE IN CRYPTOGRAPHY

Hash table is already built in JavaScript (maps).

BUT I'm going to use a hash table with an array.

In order to look up values by key, need to convert keys into valid array indices.
A function that performs this task is called a hash function;

WHAT MAKES A GOOD HASH FUNCTION?
1.Fast
2.Doesn't cluster outputs at specific indices, but distributes uniformly.
3.Deterministic(same input yields same output)


DEALING WITH COLLISIONS in hash tables
THERE ARE MANY STRATEGIES FOR DEALING WITH COLLISIONS:
1. SEPARATE CHAINING
2. LINEAR PROBING


Separate chaining - nested data structure array or Link List
Linear Probing - With linear probing, when we find a collision, we search through the array to find the next empty slot.
