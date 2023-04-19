// Logical OR ||
console.log(`true || true: ${true || true}`);   // true
console.log( `false || true: ${false || true}` );  // true
console.log( `true || false: ${true || false}` );  // true
console.log(`false || false: ${false || false}`); // false

//opening hours
/* let userSelectedAppointment = parseInt(prompt('Which hour will you like to come'));

if(userSelectedAppointment < 9 || userSelectedAppointment > 17 ){
    alert("Your appointment falls within closing hours, no one will attend to you.");
}else{
    alert("Your appointment falls within working hours, you can come.");
} */

//AND
console.log( `true && true: ${true && true}` );   // true
console.log( `false && true: ${false && true}` );  // false
console.log( `true && false: ${true && false}` );  // false
console.log(`false && false: ${false && false}`); // false

/* let gender = prompt('what is your gender?', 'male');
let age = parseInt(prompt('How old are you?', 18));

if(gender == 'male' && age >= 18){
    alert('you can enlist at the war front.');
}else{
    alert("you must be both male and above 18 to enlist.");
} */

//NOT
console.log( !true ); // false
console.log( !0 ); // true
console.log(!false); //true

/* const isLoading = true;
if(isLoading){
    alert('Wait while item loads');
}else{
    alert('item is ready for collection');
} */

//Nullish coalescing operator ??
let username;

alert(username ?? "Guest"); //if it is nullish or undefined you get Guest but if a value is supplied you get the username 
