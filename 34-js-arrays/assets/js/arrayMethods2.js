//array.indexOf(item, from) & array.includes(item, from);
const phones = ['iphone', 'xiaomi', 'samsung', 'google pixel', 'xiaomi'];

console.log(`phones indexOf xiaomi: ${phones.indexOf('xiaomi')}`  )
console.log(`phones includes xiaomi: ${phones.includes('xiaomi')}`  )
console.log(`phones lastIndexOf xiaomi: ${phones.lastIndexOf('xiaomi')}`  )

//array.find(function(item, index, array) {//returns true if item is found});
const users = [
    {id: 1, username: 'cypher', role: 'tutor'},
    {id: 2, username: 'peter', role: 'student'},
    {id: 3, username: 'josh', role: 'accountant'},
    {id: 4, username: 'smith', role: 'tutor'},
]

let result = users.find(user => user.id === 1);
console.log(`username: ${result.username}`);

let index = users.findIndex(user => user.role === 'tutor');
console.log(`tutor's index: ${index}`);
let index2 = users.findLastIndex(user => user.role === 'tutor');
console.log(`tutor's last index: ${index2}`);

//array.filter(function(item, index, array) {//returns all elements the match the condition});
let tutors = users
  .filter((user) => user.role === "tutor")
tutors.forEach(tutor => console.log(tutor.username));

//Array.map
const fruits = ['Apple', 'Mango', 'Orange'];
let mapResult  =  fruits.map(fruit => fruit.length );
console.log(`mapResults: ${mapResult}`);

let tutorArray = users.filter(user => user.role === 'tutor').map(user => `${user.username}@skriptapod.ng` );
console.log(`tutorArray: ${tutorArray}`); 

//Array.sort
const arrayItems = ['apple', 'pear', 'beans'];
console.log(`sorted arrayItems: ${arrayItems.sort()}`);
const arrayItems2 = [10, 1, 5];
console.log(`sorted arrayItems2: ${arrayItems2.sort()}`); //sorted arrayItems2: 1,10,5
//fixing the issue on line 40 requires a compare method

const numCompare = (a, b) => {
    if (a > b) return 1; //if the first value passed is greater than the second value
    if(a == b) return 0; //if values are equal
    if(a < b) return -1; //if the first values is less than the second. 
}

console.log(`sorted arrayItems2: ${arrayItems2.sort(numCompare)}`); 
console.log(`sorted arrayItems2: ${arrayItems2.sort((a,b) => a - b)}`); 
 
const countryArray = ['Österreich', 'Germany', 'Vietnam'];
console.log(`sorted countryArray: ${countryArray.sort()}`); //sorted countryArray: Germany,Vietnam,Österreich

//solving the issue on line 53 using local compare
console.log(`properly sorted countryArray: ${countryArray.sort((a,b) => a.localeCompare(b))}`);

//Array.reverse
const numArray = [1,2,3,4,5];
console.log(`Reversed array: ${numArray.reverse()}`);

//Array.split(delimiter)
const arrayStudents = 'John, Jane, Smith, Luke';

let splitArray = arrayStudents.split(', ');
for (let student of splitArray){
    console.log(`${student} you have been offered a provisional admission`);
}

let myString = 'Apple';

console.log(myString.split(''));

//Array.join(glue)

const words = ['I', 'am', 'going', 'to', 'the', 'market'];
let newString = words.join(' ');
console.log(newString);

//Array.reduce(accumulator, item, index, array);
const cartItems = [
    {item: 'Bournvita', price: 2500},
    {item: 'Peak Milk', price: 2000},
    {item: 'Sugar', price: 800},
    {item: 'Garri', price: 1200}
];

let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
console.log(`Total price of item is: ${totalPrice}`);

//Array.isArray()

const arr = [];
const obj = {};

console.log(typeof arr);
console.log(typeof obj)
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));