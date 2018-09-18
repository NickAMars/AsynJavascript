// THIS
//HOISTING
//CLOSER
//ANNONYMOUS   function (name) {}; 
//IIFE (function (){})();
//TRY{} catch(error){}finally{}
//THROW  throw ""
// OBJECT var obj = {a:1000,b:"No"}
//FOR-LOOP
//for(var index in arr) // ES5  
//for (const element in arr) // ES6
//WHILE do{}while(){}, while(){}
//ARRAY var arr = [];



// THIS
refers to the function that it is in
//HOISTING
When a variable is declare it goes to the top of its scope
//Closer
when the inner function has access to outside variables

//ANNONYMOUS
function (name) {};


// CALLING.FUNCTION in a function 
function interviewQuestion(job){
	if(job === 'designer'){
		return function(name){ console.log( name );}
	} else {
		return function(name){console.log( ' Who are you? ' ); }
	}
}

------------------------------------------------------
var teacherQuestion = interviewQuestion('teacher');  |
teacherQuestion('John');                             |
------------------------------------------------------
or 
----------------------------------------
interviewQuestion('teacher')('John');  |
---------------------------------------|
									   



//FUNCTION and ARRAY past into the function
var years = [1990, 1965, 1937, 2005]; // array
function calcateAge(el){return 2016 - el; } // function 

function arrayCalc(arr , fn){
	var arrRes =[];
	for (var i = 0 ; i < arr.lenght ; i++ ){
		arrRes.push(fn(arr[i])); // put thins in array
	}
	return arrRes;
}
var ages = arrayCalc(years, calcateAge);
console.log(ages);


// IIFE
(function (){
	var score  = Math.random()*10;
	console.log(score >= 5);
})(); // calls the function automatically

// IIFE.PARAMETER
(function (goodLuck){ 
	var score  = Math.random()*10;
	console.log(score >= 5 - goodluck);
})(5);








//TRY{} catch(error){}finally{}
//final executes regardless
throw " unknown user "; // the throw key word makes it goes to the catch state
//console.log(error.message) ;
//console.log(error);

//ARRAY
var arr = ['a', 'b', 'c', 'd', 'e'];
//FOR-LOOP
for(var index in arr) // ES5  
for (const element in arr) // ES6
// WHILE-LOOP
While(){}
do{}While();

OBJECTS.ES5
var person = { name: "Elon Musk", 
				age: 45,
				tech: ['PayPal', 'SpaceX', 'Hyperloop', 'Tesla'],
				changeName: function(new_name) {
				this.name = new_name;
				return this;
				},
				changeAge: function(new_age){
				this.age = new_age;
				return this;
				}
			}
person.children = 6; // you can add items to the element

