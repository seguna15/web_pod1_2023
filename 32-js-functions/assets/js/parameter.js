//dynamically supplied parameters

//let gender = prompt("enter your gender?").toLowerCase();
function genderGreeting(myGender) {
  if (myGender == "male") {
    alert(`welcome sir`);
  } else if (myGender == "female") {
    alert("welcome ma");
  } else {
    alert("genderless user");
  }
}

//genderGreeting(gender);

//default parameters
const username = prompt("kindly supply your username");
const text = prompt('enter your preferred greeting');
function displayUser(username, text ='Welcome'){
    console.log(`${text}, ${username}`);
}
displayUser(username);
displayUser(username, 'hello');