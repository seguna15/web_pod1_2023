//Date creation
let myTime = new Date();
console.log(myTime)

/*setting date from 01.01.1970 */
let jan01_1970 = new Date(0);
console.log(jan01_1970);

/*adding 24hours by multiplying 
24hours by 60minutes by 60seconds
and converting into milliseconds by multiplying by 1000*/
let jan02_1970 = new Date(24 * 60 * 60 * 1000);
console.log(jan02_1970);

//lets get december 31, 1969
let dec31_1969 =  new Date(-24 * 60 * 60 * 1000);
console.log(dec31_1969)

//Date string argument
let myDate = new Date("2023-05-23");
console.log(myDate);

//months starts count from 00 i.e  Jan. is 00
let midnightDateTime = new Date(2023, 04, 23, 0, 0, 0, 0);
console.log(midnightDateTime);
//setting precise time in milliseconds
let preciseTime  = new Date(2023, 04, 23, 10, 43, 0, 400)
console.log(preciseTime)

//Date accessors
let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTimezoneOffset());

console.log(date.setDate(1));

console.log(Date.now());
console.log(Date(Date.now));
