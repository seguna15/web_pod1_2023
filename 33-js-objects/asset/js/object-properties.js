//Object properties

//defining our object
const employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
    role: 'Backend Engineer',
    monthlySalary: 2500,
    "country of origin": 'South Africa',
}

//retrieving value from object with period notation
alert(employee.firstName);
//retrieving value from object with square notation
console.log(`${employee.firstName}'s country of origin is ${employee["country of origin"]}`);
alert(employee.isDeveloper);

//adding properties to our object
employee.isDeveloper = true;
employee.stateOfOrigin = 'Oregon';

console.log(`${employee.firstName}'s state of origin is ${employee.stateOfOrigin}`);
delete employee.stateOfOrigin
console.log(
  `${employee.firstName}'s state of origin is ${employee.stateOfOrigin}`
);







