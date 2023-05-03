/*
if(condition){
    code to execute
}
else if(condition){
    code to execute
}
else{
    code to execute
}
*/

const gender = prompt("Kindly provide your gender?").toLowerCase();

if (gender === 'male') {
  alert("Welcome to SkriptaPod sir.");
} 
else if(gender === 'female'){
    alert("Welcome to SkriptaPod ma.");
}
else {
    alert("Welcome to SkriptaPod anonymous.");
}

alert("your program has finished executing");
