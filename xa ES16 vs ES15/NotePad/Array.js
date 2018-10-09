ARRAY.isArray(value); // check to see if value is an array
/*
(ARRAY).sort( (a,b) => a - b); -- sorts element (ascending order) with negative number
(ARRAY).sort( (a,b) => b - a); -- sorts element (descending order) with negative number
(ARRAY).sort(); -- doesnt sort elements with negative numbers

arr.sort([compareFunction])

If compareFunction(a, b) is less than 0, 
sort a to an index lower than b, i.e. a comes first.

If compareFunction(a, b) is greater than 0,
sort b to an index lower than a, i.e. b comes first.
*/