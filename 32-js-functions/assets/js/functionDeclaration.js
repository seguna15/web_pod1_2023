/*
    function function_declaration (parameters)
    {
        code to execute
    }
*/

//non-parameterized function
function greet(){
    let username = 'cypher';
    alert(`welcome, ${username}`);
}
//calling a function
greet();

//parameterized function
let num1 = parseInt(prompt('Enter first number'));
let num2 = parseInt(prompt('Enter second number'));

function sum(firstNumber, secondNumber){
    alert(`sum of ${firstNumber} & ${secondNumber}: ${firstNumber + secondNumber}`);
}
//calling the function
sum(num1, num2);
