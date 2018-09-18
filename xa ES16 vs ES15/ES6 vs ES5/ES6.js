ES6 Comparision

// LET and Const and var
//const - cant change the variable and it stays in the block element
//let -   can change the value and it stays in the block
// var -   can be change and is function scoped
//e.g of let
let i =23;
for (let i = 0; i < 5 ; i++){
	console.log(i);
	}

console.log(i);

//Blocks and IIFEs
//blocks e.g
{
	const a = 1;
	let b = 2;
}
// Strings
let firstName  = 'John';
let lastName = 'Smith'
const yearOfBirth = 1990;
function calcAge(year){
	return 2018 - year;
}
console.log( `This is ${firstName} ${lastName}.
				He was born in ${yearOfBirth}. 
				Today he is ${calcAge(yearOfBirth)} years old. `);
				// $()
				//backtick ''
//New string methods
.startsWith('');
.endsWith('');
.include('');
.repeat('');


//ARROW function			
const years = [1990, 1965, 1982, 1937];

//e.g 1
// element, index, array these are the parameter of map
// map also returns a function

let age6 = years.maps( elem => 2016 - el); // instead of funtion(elem){} and preservess the this key word
console.log(age6);

//e.g 2
age6 = years.map((el, index) => {   // (element, index, array)
const now = new Date().getFullYear(); // get the current year
const age = now  - el ;
return ` Age element ${index + 1} : ${age}` // he didnt use ;
});
 
 // New Arrow Function -- shows a way to fix the this key word in an object
 // e.g 1
 var box5 = {
	color: 'green',
	position: 1;
	clickMe: function(){
		document.querySelector('.green').
		addEventListener('click', ()=> { // arrow function preserve the value of the this key word
		var str = 'This is box number ' + this.position + ' and it is  ' + this.color;	
		alert(str);		
		});
	}
}

box5.clickMe();
//e.g. 2 -- gives an error because the this key word is targeting the window 
var box5 = {
	color: 'green',
	position: 1;
	clickMe: () =>{
		document.querySelector('.green').
		addEventListener('click', ()=> { 
		var str = 'This is box number ' + this.position + ' and it is  ' + this.color;	
		alert(str);		
		});
	}
}


///Array Funtion
function Person(name){
	this.name = name ;
}

Person.protoype.myFriends5 = function( friends ){
	// this works here
		var arr = friends.map(   	(el) =>  `${this.name} is friends with ${el}`     );  // this key word takes its surroundings
		console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);


//DESTRUCTURING
const [name, age ] = ['John', 26];
console.log(name + ' ' + age );

const obj = {
	firstName: 'John',
	lastName: 'Smith'
};
const {firstName, lastName} = obj; //the parameters must much object
const {firstName: a, lastName: b} = obj; // change parameter values to a and b

function calcAgeRetirement(year){
	const age = new Date().getFullYear() - year;
	return [age , 65 - age ];
}
const [age2, retirement] = calcAgeRetirement(1990); // these get the array values

//ARRAYS
// example 1
const boxes = document.querySelectorAll('.box'); // return a Node list

const boxesArr6 = Array.from.(boxes); // Node to Array
boxesArr6.forEach(  elem => elem.style.blackgroundColor = 'dodgerblue'  ); // change styles of all to blue

// example 2
for (const cur of boxesArr6){
	if(cur.className === 'box blue'){ // look for the class with the name of box blue
		continue;
	}
	cur.textContent = 'I changed to blue!';
} 
// example 2 alternative
for (const cur of boxesArr6){
	if(cur.className.include('blue')){// include looks for the class
		continue;
	}
	cur.textContent = 'I changed to blue!';
}

// example 3 -- finding element in an array
var ages = [12, 7, 8, 21, 14, 31];
console.log(ages.findIndex(elem => elem >= 18)); // gives index
console.log(ages.find(elem => elem >= 18 ));   // gives the element
 


//SPREAD OPERATOR

// example 1
var ages =  [ 18, 30, 12, 21];
const sum3 = addFourAges( ...ages); // spread operator
console.log(sum3);


// example 2

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mark','Bob','Ann'];
const bigFamily = [...familySmith,'Lily', ...familyMiller];
console.log(bigFamily);

// example 3
const h = document.querySelector('h1'); // node
const boxes = document.querySelecorAll('.box'); // node list
const all = [h, ...boxes]; // node list
Array.from(all).forEach(cur => cur.style.color = 'purple'); // change text of node elemts to purple



//REST PARAMETERS
// example 1
function isFullAge6( ...years){
	
	//console.log(years); // this is aleady an array
		years.forEach(cur =>
						console.log( 
							(2016 - cur) >= 18
						)
					);
					
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

// example 2
function isFullAge6(limit , ...years){ // if you want to put a limit in
		//console.log(years); // this is aleady an array
		years.forEach(cur =>
						console.log( 
							(2016 - cur) >= limit
						)
					);
}
isFullAge6(18, 1990, 1999, 1965, 2016, 1987);




//DEFAULT PARAMETERS
// example 1

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American' ){
	this.firstname = firstname;
	this.lastname = lastname;
	this.yearofbirth = yearofbirth;
	this.nationality = nationality;
}
var john  = new SmithPerson ('John', 1990);
var emily = new SmithPerson ( 'Emily', 1983, 'Diaz', 'spanish');


// MAPS
//set (key , value), get ( key ), delete (key), has(key), size
const question = new Map();
question.set('question', 'What is the official name of the lastest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set( true, 'Correct answer :D');
question.set( false, 'Wrong, please try again!');
console.log(question.get('question')); // gets the value corisponding to the key value
console.log(question.size);  // count the number of elements in the map

if(question.has(4)){
	question.delete(4);
	console.log('Answer 4 is here');
	}
	
	//question.clear()-- clears all maps in the maps object question
	
	 // LOOP THROUGH MAP
	question.forEach((value, key) =>   console.log(`This is ${key}, and it's set to ${value}`)  );
	
	// LOOP THROUGH MAP
	//for (let key of question) // this would access the key only
		for (let [key, value] of question.entries()){ 
		// The entries property was use here to include both key and value, because it both we have a destructoring
			console.log(`This is ${key}, and it's set to ${value}`);
		}
	
	}
	
	for (let [key, value] of question.entries()){ // .entries() is new for maps
		if(typeof(key) === 'number'){   // prints out all the number values of the map
			console.log(`Answer ${key}:${value}`);
		}
	}
	
	const ans = parseInt(prompt('Write the correct Answer')); // open a prompt
	console.log(question.get(ans === question.get('correct'))); // look to see if number the user enter is correct number
	// reasons to use a map 
	//1. use anthing as he key
	//2.  iterable 
	//3. use the size property
	//4. easy add and remove data from a map
	
// CLASSES
//example 1
class Person6{
	constructor( name, yearOfBirth, job){
		this.name = name;
		this.yearOfBirth= yearOfBirth;
		this.job = job;
	}
	calculateAge(){
		var age = new Date().getFullYear - this.yearOfBirth;
		console.log(age);
	}
	static greeting() {// instantes are not inherited with static methods
		console.log('Hey there!');
	}
}

const john6 = new Person6 ('John', 1990, 'teacher');
Person6.greeting();

// CLASSES AND SUBCLASSES
//example 1
class Person6{
	constructor( name, yearOfBirth, job){
		this.name = name;
		this.yearOfBirth= yearOfBirth;
		this.job = job;
	}
	calculateAge(){
		var age = new Date().getFullYear - this.yearOfBirth;
		console.log(age);
	}
}

class Athlete6 extends Person6{
	
	constructor( name, yearOfBirth, job, olympicGames, medals){
	super(name, yearOfBirth, job);// call the super class 
	
	this.olympicGames = olympicGames;
	this.medals = medals;
	}
	
	wonMedal(){
		this.medals++;
		console.log(this.medals);
	}
}

	
var johnAthlete5 = new Athlete5( 'John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


