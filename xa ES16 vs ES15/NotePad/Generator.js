// Function Expression
function* Foo(){
  yeild 'a';
  yeild 'b';
  yeild 'c';
}
let str = "";
for (let val of foo()){
  str+=value;
}
ENTRIES METHOD (.entries())
let array = ["a", "b", "c"];
let iterator1 = array.entries();
console.log(iterators.next());  // returns Object{ value: Array [0,"a"]}, done: false }
console.log(iterators.next());  // returns Object{ value: Array [1,"b"]}, done: false }


GENERATOR EXAMPLES
// yield --- USED to pause and resume a generator Function
// yield* --- USED to delegate to another generater
// EXAMPLE 1
function* gen(){
  yield 1;
  yield 2;
  yield 3;
}
g = gen();
console.log(g.next());// returns {value: 1, done:false}
console.log(g.next());// returns {value: 2, done:false}
console.log(g.next());// returns {value: 3, done:false}
console.log(g.next());// returns {value: undefined, done:true}

// EXAMPLE 2
function* foo(index){
  while(true){
    yield index++;
  }
}
const iterator = foo(0);
let i = 0;
while(i < 10){ // will always have a yeild
  console.log(iterator.next.value);
  i++;
}
// EXAMPLE 3
function* foo(index){
  while(index<2){
    yield index++;
  }
  while(index<100){
    yield index++;
  }
}

const iterator1 = foo(0);
let i = 0;
while(i < 10){ // will always have a yeild
  console.log(iterator1.next.value);
  i++;
}

// EXAMPLE 4
function* g1(){
  yield 2;
  yield 3;
  yield 4;
}
function* g2(){
  yield 1;
  yield* g1();
  yield 5;
}
let iterator2 = g2();


EXAMPLE 5

function g3(){
  yield [1,2];
  yield '34';
  yield Array.from(arguments);
}
var iterater5 = g3(4,5);
