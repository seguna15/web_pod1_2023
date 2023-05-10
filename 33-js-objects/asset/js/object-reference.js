//Object copying and reference

let a  = 20;
let b = a;
console.log(`a: ${a}`);
console.log(`b: ${b}`);
b = 30;
console.log(`a: ${a}`);
console.log(`b: ${b}`); 

const user = {name: 'cypher'};
const admin  = user;

console.log(`user.name: ${user.name}`);
console.log(`is user == admin : ${user == admin}`);
console.log(`is user === admin : ${user === admin}`);
admin.name = 'superuser216';
console.log(`user.name: ${user.name}`);
const obj1 = {};
const obj2 = {};

console.log(`is obj1 == obj2 : ${obj1 == obj2}`);
console.log(`is obj1 === obj2 : ${obj1 === obj2}`);