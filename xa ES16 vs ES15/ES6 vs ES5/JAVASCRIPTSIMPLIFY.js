VARIABLE DECLARATION 		(let ans const)
BLOCKS 						{}
STRING 						`${}`   .startsWith(''); , .endsWith(''); , .include(''); , .repeat('');
ARROW functions  	 		()=>{}
DESTRUCTOR 			 		const [name, age ] = ['John', 26];  const {firstName: a, lastName: b} = obj;
NODE TO ARRAY 				const arrList = Array.from.(nodeList);
FORLOOP						for(const elem of data) and for(const key in data)
SPREAD OPERATOR             var ages =  [ 18, 30, 12]; const sum3 = addFourAges( ...ages); 
DEFAULT PARAMETERS          function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American' ){}
MAPS                        const map = new Map(); ,.set( key, value),.get(key),.has(4),.delete(4)
							map.forEach((value, key) =>{}), for (let [key, value] of map.entries())
CLASSES                     class Person6{  constructor( name, yearOfBirth, job){} 	}

CLASSES AND SUBCLASSES      class Person{ constructor( name, yearOfBirth, job){}}  class Athlete extends Person{
																constructor( name, yearOfBirth, job, olympicGames, medals){
																super(name, yearOfBirth, job);// call the super class  Person
																this.olympicGames = olympicGames;
																this.medals = medals;
																}
															}





ARRAY EXTRA
console.log(ages.findIndex(elem => elem >= 18)); // gives index of array that has the condition met		
console.log(ages.find(elem => elem >= 18 ));	// gives element of array that has the condition met	

CLASSES EXTRA	
static greeting() {// instantes are not inherited with static methods
		console.log('Hey there!');
	}		