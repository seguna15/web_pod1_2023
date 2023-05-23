//arrays can be created using two ways

//using the array constructor
let myArr = new Array();
let myArr2 = new Array(5);

console.log(myArr2.length);

//array literals

let myArr3  = [];

let phones  = ['IPhone', 'Samsung', 'Techno', 'Infinix' ];

//reading values from an array
console.log(`Phone array Index 0: ${phones[0]}`);
console.log(`Phone array Index 1: ${phones[1]}`);
console.log(`Phone array Index 2: ${phones[2]}`);
console.log(`Phone array Index 3: ${phones[3]}`);
console.log(`Phone array Index 4: ${phones[4]}`); // Phone array Index 4: undefined

//inserting values into an array
phones[4] = 'Gionee';
console.log(`Phone array Index 4: ${phones[3]}`);
phones[3] = 'Vivo';
console.log(`Phone array Index 3: ${phones[4]}`);

//arrays store other complex types 
let myArr4 = [
    'Cypher',
     {role: 'tutor'}, 
     true, 
     function() {console.log('Hello Cypher');}
];

myArr4[3]();

//getting the length of an array 
console.log(`myArr4 as a length of ${myArr4.length}`);

const clubs =  ['Real Madrid', 'Shooting Stars'];

clubs.push('Everton');
console.log(`clubs: ${clubs}`);

clubs.unshift('New York Redbull');
console.log(`clubs: ${clubs}`);

clubs.shift();
console.log(`clubs: ${clubs}`);

clubs.pop();
console.log(`clubs: ${clubs}`);

delete clubs[1];
console.log(`clubs: ${clubs}`);

//Mutability of an array
const favouriteFoods = ['Bread', 'Beans', 'Potatoes'];
console.log(`favouriteFoods: ${favouriteFoods}`);
const foods  = favouriteFoods;
console.log(`foods: ${foods}`);
foods[2] = 'Yam';
console.log(`foods: ${foods}`);
console.log(`favouriteFoods: ${favouriteFoods}`);

console.log(`is favouriteFoods == foods: ${favouriteFoods == foods}`);

const emptyArray1 = [];
const emptyArray2 = [];
console.log(`is emptyArray1 == emptyArray2: ${emptyArray1 == emptyArray2}`);