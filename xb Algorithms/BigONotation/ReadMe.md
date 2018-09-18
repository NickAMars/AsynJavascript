Who Cares?
1.Its important to have a precise vocabulary to talk about how our code performs.
2.Useful for discussing trade-offs between different approaches.
3.When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications.
4.It comes up in interviews!


What does better mean?
Faster?
Less memory-intensive?
More readable?

The Problem with TIME
--Different machines will record different times
--The same machine will record different times.
--For fast algorithms, speed measurements may not be precise enough?

If not time, then what?
--Rather than counting seconds which are so variable...
--Let's count the number of simple operations the computer has to perform!


This function:
function addUpTo2(n){return n*(n+1)/2;}
has 3 simple operations.
1 multiplication
1 addition
1 division


This function:
function addUpTo1(n){ let total = 0;
                      for(let i = 1; i <= n; i++){total +=i;}
                      return total;
                    }

Focus on the big picture.



Introducing.. Big O

Big O Notation is a way to formalize fuzzy counting.
It allows us to talk formally about how the run time of an algorithm grows as the inputs grow.
We won't care about the details, only the trends.

Big O Definition
We say that an algorithm is O(f(n)) if the number of simple operations the
computer has to do is eventually less than a constant times f(n), as n increases.

f(n)could be linear (f(n)= n)
f(n) could be quadratic (f(n) = n^2)
f(n) could be constant (f(n)= 1)
f(n) could be something entirely different!



Basically we care about the order of magnitude.
Always 3 operations O(1);
or
Number of operations is (eventually) bounded by a multiple of n (say, 10 n)  O(n)




function printAllPairs(n){
    for(var i=0; i<n; i++){                 |
      |     for( var j=0; j<n; j++){        |
  O(n)|       console.log(i,j)              |  O(n)
      |     }                               |
    }                                       |
}
O(n) operation inside of an O(n) operation.
O(n^2);




Big O Shorthands
1. Arithmetic operations are constant.
2. Variable assignment is constant.
3. Accessing elements in an array( by index) or object (by key) is constant.
4. In a loop, the  complexity is the length of the loop times the complexity of whatever happens inside of the loop.



What about the inputs?
--Auxiliary space complexity to refer to space required  by the algorithm, not including space taken up by the inputs.

Space Complexity in JS

-- Most primitives (booleans, numbers, undefined, null ) are constant space.
-- Strings require O(n) space (where n is the string length).
-- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).



RECAP

-- To analyze the performance of an algorithm, we user Big O Notation.
--Big O Notation can give us a high level understanding of the time or space complexity of an algorithm.
--Big O Notation doesn't care about precision, only about general trends (linear? quadratic constant?).
--The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm.
