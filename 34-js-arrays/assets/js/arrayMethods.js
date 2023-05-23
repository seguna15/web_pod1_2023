//array.splice(start[,deleteCount,elem1,..., elemN])

//remove and replace with splice
const myArray = [1, 2, 5, 6, 7, 10];
myArray.splice(2,3,4,6,8);
console.log(`myArray after: ${myArray}`);

// remove with splice
const myArray2 = [1,2,3,4,5];
myArray2.splice(2,2);
console.log(`myArray2 after: ${myArray2}`);

//insertion
const rappers = ['Kanye', 'Jayz', 'Dr Dre'];
rappers.splice(2,0,'Eminem','Snoop Dogg', '2Pac', 'Notorious B.I.G');
console.log(`rappers: ${rappers}`);

//Array.slice([start], [end])

const rappers2 = ['T.I', '50 cent', 'Nas', 'Nelly', 'Sisqo', 'Jarule'];
const newRappers2 = rappers2.slice(1,3);
console.log(`newRappers2: ${newRappers2}`);
const newRappers3 = rappers2.slice(2);
console.log(`newRappers3: ${newRappers3}`);

//Array.concat(arg1, arg2, ...)
const myArray3 = [1,2,3,4];
const newArray = myArray3.concat([5,6], 7, 9);
console.log(`newArray: ${newArray}`);

// Array.forEach(function(item, index, array){//body of the function})
const myNumber = [2, 4, 6, 8];
myNumber.forEach(number => console.log(`${number * 2}`));

