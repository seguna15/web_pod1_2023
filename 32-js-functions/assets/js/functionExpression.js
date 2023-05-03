/*
 variable declaration = function keyword (argument){
    body of the function
    return type
 } 
 */
greet();
//sum(); will result in  an error as it cannot be called before its initialization
const sum = function(a,b) {
    return a  + b;
};

alert(sum(5, 6));

const diff = function(){
    return 6 - 5;
};

console.log(diff());
