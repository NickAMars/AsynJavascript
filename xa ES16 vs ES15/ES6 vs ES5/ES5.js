ES5 Fetures comparison

// LET and Const
//CALL
//SELF
//var is function scoped

//IIFEs
(function() {
	console.log('first thing thats called');
})();

//objects using other objects this key word
// emily is an object
john.presentation('friendly'); // this is the function of john
john.presentation.call(emily, 'friendly') // calling the function of john with emily as the this key word

// Strings
let firstName  = 'john';
const yearOfBirth = 1990;
function calcAge(year){
	return 2018 - year;
}
console.log('This is ' + ' ' + ' he was born in ' + yearOfBirth
			+ '. Today, he is ' + calcAge(yearOfBirth) +'years old. ');

//MAPS
const years = [1990, 1965, 1982, 1937];

var age5 = years.maps(function(element, index , array){ 
return 2016 - el;
});

console.log(age5);


//THIS KEY word flaws
var box5 = {
	color: 'green',
	position: 1;
	clickMe: function(){
		var self = this; // this fixes the this key word  to the object
		// without this the function would use the this key word refering to the windows
		document.querySelector('.green').  // select the class
		addEventListener('click', function () { // give it an event
		var str = 'This is box number ' + self.position + ' and it is  ' + self.color;	
		alert(str);		
		});
	}
}

box5.clickMe();


// Prototype -- Using bind to manually defind the this key word

function Person(name){
	this.name = name ;
}

Person.protoype.myFriends5 = function( friends ){
		var arr = friends.map(	function(el) {
			return this.name + 'is friends with ' + el;
		}.bind(this);// creates a new copy of the function with a manualy defind this key word
		);  
		console.log(arr);
	
}
var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);



//DESTRUCTURING
var john = ['John', 26];
var name = john[0];
var age = john[1];


//ARRAYS
// example 1 -- use for method to convert the array
const boxes = document.querySelectorAll('.box'); // return a Node list

var boxesArr5 = Array.prototype.slice.call(boxes); // Node to Array
boxesArr5.forEach(function (el) {
	el.style.backgroundColor = 'dodgerblue'; //add blue to the style of each element
});

// example 2 -- using the for for method instead
for (var i = 0 ; i < boxesArr5.length; i++){
	if(boxesArr5[i].className === 'box blue') {
		continue; // scipts over the next instructions for this iteration
		// break; would terminate the for loop
	}
	boxesArr5[i].textContent = 'I changed to blue!';
}
//example 3 - finding an element in an array
var ages = [12, 7, 8, 21, 14, 11];
var full = ages.map(function(cur){
	return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//SPREAD OPERATOR
//example 1 
function addFourAges(a,b,c,d){ // this is the function
return a + b + c + d; 
}

var sum1 = addFourAges (18, 30, 12, 21);
console.log(sum1);

// example 2
var ages =  [ 18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages); // apply makes the array a spread
console.log(sum2);


//REST PARAMETERS

// example 1

function isFullAge5(){
//console.log(arguments); // arguments is not an array but an array like structure
Array.prototype.slice.call(arguements);
argsArr.forEach(function(cur){
	console.log((2016 - cur) >= 18);
	})
}
isFullAge5(1990, 1990, 1965);


// example 2 
function is fullAge5(limit) {// makes the first element the limit
	console.log(arguements); // give all the arguement
	var argsArr = Array.prototype.slice.call(arguements, 1); // start from index 1
	console.log(argsArr);
	argsArr.forEach( function(cur) {
		
		console.log(  ( 2016 - cur ) >= limit ); // conditional operation in the console
		
	})
}


//DEFAULT PARAMETERS
// example 1
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
	lastname === undefined ? lastname = 'Smith': lastname = lastname;
	nationality === undefined? nationality = 'american' : nationality = nationality;
	this.firstname = firstname;
	this.lastname = lastname;
	this.yearofbirth = yearofbirth;
	this.nationality = nationality;
}
var john  = new SmithPerson ('John', 1990);
var emily = new SmithPerson ( 'Emily', 1983, 'Diaz', 'spanish');


// MAPS

// use object as a substitute for Maps in es5



// CLASSES
// example 1
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}
Person5.prototype.calculateAge = function(){ // this inherits the function
										var age = new Date().getFullYear - this.yearOfBirth;
										this.yearOfBirth;
										console.log(age);
										}
	var john5 = new Person5('John', 1990, 'teacher');
	

// CLASSES AND SUBCLASSES

//example 1
// super class
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}
Person5.prototype.calculateAge = function(){ // this inherits the function
										var age = new Date().getFullYear() - this.yearOfBirth;
										this.yearOfBirth;
										console.log(age);
										}
var Athlete5 = function( name, yearOfBirth, job, olymicGames, medals) // sup class
				{
				Person5.call(this, name,  yearOfBirth, job); // calling the super class
				this.olymicGames = olymicGames;
				this.medals = medals;
				}
Athlete5.prototype = Object.create(Person5.prototype); // two function constructors are connected 
// the Athlete5 prototype is the same as the Person5 prototype


// only object in athlete5 would inherit this instance
Athlete5.prototype.wonMedal = function(){
								this.medals++;
								console.log(this.medals);
							}
							
							
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// the Athlete5 prototype is the same as the Person5 prototype					
				
				
				
// PROTOTYPE
john.__proto__ === Person.prototype
//methods
.hasOwnProperty('job');
.instanceOf();
				
				
				
				