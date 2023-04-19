//Number
let num1 = 10;
let floatOne = 3.145;
//alert(`num1: ${num1}`);

// String
let nameOne = 'Cypher';
let nameTwo = "Seedorf";
let nameThree = `Pelumi${num1}`;
//alert(nameThree);

//Boolean
let status = true;
let loggedIn = false;
let boolVal = 6 > 4;
//alert(`boolVal: ${boolVal}`);

//Null
let formError = null; //I do not know if the user will submit the right data or not
/* 
let username = prompt('enter username');

if(username.length < 5){
    formError = 'username should be more than 5 characters'; // this is when user submit wrong data
}

if(formError !== null ){
    alert(formError); //alert for wrong data
}else{
    alert(username); // alert for right data
} */

//Undefined
let undefinedVal;
//alert(undefinedVal); // undefined because the value is not assigned

//Symbol
let id = Symbol(1);
let id2 = Symbol(1);
alert(id === id2); 

const emp1 = {
    id: Symbol('0001'),
    name: 'John Doe',
    gender: 'Male',
    role: 'Backend Dev'
};

const emp2 = {
    id: Symbol('0001'),
    name: 'Jane Doe',
    gender: 'Female',
    role: 'Cloud Engineer'
};

alert(emp1.id === emp2.id); //false because no two symbols are the same

// Assignment check for the data type of the variables we have declared above using the typeof operator
let testValue = 2;
alert(typeof testValue);