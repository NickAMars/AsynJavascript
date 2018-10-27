BIG O of HASH TABLES
Insert: O(1)
DELETION: O(1)
ACCESS: O(1)

HASH FUNCTION ARE USE IN CRYPTOGRAPHY

Hash table is already built in JavaScript (maps).
const question = new Map();
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES7');
question.set(4, 'ES8');
question.set(5, 'ES9');
question.get(4);
question.has(5);
question.delete(5);
question.size // get the size of the hash table function
LOOP THROUGH HASH FUNCTION
question.forEach((value, key)=> console.log(`This is ${key}, and it's set to ${value}`)  );
for (let [key, value] of question.entries()){}


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
3. QUADRATIC PROBING
4. DOUBLE HASHING


Separate chaining - nested data structure array or Link List
Linear Probing - With linear probing, when we find a collision, we search through the array to find the next empty slot.
h(k) = k % m; where m is a prime number
QUADRATIC PPROBING -
h(k,i) = (h(k) + c_1)[i] + c_2[i]^2)
DOUBLE HASHING
h'(k) = k % (m-1)
h(k,i) = (h(k) + ih'(k)) % m
