/*
const variable_name = (parameter) => {
    code to run
}
*/

/* let firstNum = parseFloat(prompt('Enter first number'));
let secondNum = parseFloat(prompt('Enter second number'));
const sum = (a, b) => {
    alert(`${a + b}`);
};

sum(firstNum, secondNum); */

//omitting parenthesis when there is just one argument
/* const username = prompt('Enter your user name');

const greet = username => alert(`Hello, ${username}`);

greet(); */

// use curly braces when it has a return type 
const displayGreet = () => {
    let greet = 'hello' + ' ' + 'world';
    return greet;
};

alert(displayGreet());