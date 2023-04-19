//implicit conversion 
let sum = 3 - '2';
alert(sum); // 1

let sum2 = 3 + '2';
alert(sum2); // 32 because + with a string value will concatenate the values

//String conversion
let myNum = 45;
alert(`typeof myNum: ${typeof myNum}`);
let newString = String(myNum);
alert(`typeof newString: ${typeof newString}`);

//Number conversion
let myString = '52';
alert(`typeof myString: ${typeof myString}`);
let myNewNum = Number(myString);
alert(`typeof myNewNum: ${typeof myNewNum}`);
alert(`convert true to number: ${Number(true)}`);

//Boolean conversion

let numOne = 1;
let stringHello = "hello";
let numZero = 0;
let emptyString = '';

alert(`converting 1 to boolean: ${Boolean(numOne)}`);
alert(`converting hello to boolean: ${Boolean(stringHello)}`);
alert(`converting 0 to boolean: ${Boolean(numZero)}`);
alert(`converting '' to boolean: ${Boolean(emptyString)}`);