//Single Line comments
/*
 Multiple line 
 comments  
*/

//before ES 6 we used Var
var a = 10;
//since ES6 we use let
let b = 10;

//declaring constants 
const VAT = 0.75;

//Redundant declaration 
var myName = 'cypher';
var myName = 'Pelumi';
let userPass = 'xycvadmin';
//let userPass = 'sdrueuirtf';

//function scope for var
function greetVar(){
    var greet = 'Hello world';
    console.log(`${greet} from var value before the block`);

    if(true){
        var greet = "Hi world";
        console.log(`${greet} from var value inside the block`);
    }

    console.log(`${greet} from var value after the block`);
}

//executing the function
greetVar();

//block scope for let
function greetLet() {
  let greet = "Hello world";
  console.log(`${greet} from let value before the block`);

  if (true) {
    let greet = "Hi world";
    console.log(`${greet} from let value inside the block`);
  }

  console.log(`${greet} from let value after the block`);
}

greetLet();

//Scope
function functionNested(){
    // var age, matricNo; this is what hoisting mean, var age is brought to the top of its scope.
    console.log(`${age} before if block`); //undefined before if block
    /*console.log(username); //Uncaught ReferenceError: username is not defined */

    if (true) {
        let username = "Samuel";
        var age = 21;
        var matricNo = "10/66ME017";
        
        console.log(`${username} from outer if`); //Samuel from outer if
        console.log(`${age} from outer if`); //12 from outer if
        if (true) {
            console.log(`${username} from inner if`); //Samuel from inner if
            console.log(`${age} from outer if`); //12 from inner if
        }
    }

    console.log(`${age} after if block`); //12 from after if block
    //console.log(username); // Uncaught ReferenceError: username is not defined
}

functionNested();

//behavior of let and var with this keyword
//** Global level: var lets you reference a value at the global level whereas let does not. Essentially, this with var outside of an object references the window global object */
var num1 = 10;
let num2 = 20;

function add (){
    console.log(this.num2); // undefined let does not recognize window global object in this case.
    console.log(`Var: ${this.num1 + 5}`); //15 same as window.num1  + 5
    console.log(`Let: ${this.num2 + 5}`); // NaN (not a number) because you're adding undefined value to a number
}
add(); 

let myNum = 10;
console.log(`myNum: ${myNum}`); //10
mynum = 15;
console.log(`myNum: ${myNum}`); //15

const name = 'Cypher';
console.log(`name: ${name}`); //Cypher
name = 'Seedorf'; // you cannot override a constant
console.log(`name: ${name}`); // ribleDec.js:96 Uncaught TypeError: Assignment to constant variable.

