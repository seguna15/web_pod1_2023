/*
    do{
        code to run
        post increment/decrement
    } while(condition)
*/

let i = 11; //initial value of i
do {
  console.log(i);
  i++;
} while (i <= 10); // even though the condition set above is false it will print out 11 meaning it ran the loop once before terminating it.

let x = 4;

do {
  console.log(x * 2);
  x--;
} while (x >= 1);