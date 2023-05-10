//object methods using this

const employee = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  role: "Backend Engineer",
  monthlySalary: 2500,
  "country of origin": "South Africa",
  tax: 0.35,
  yearlyEmploymentDuration: 12,
  /* annualGrossIncome(){
    return this.monthlySalary * this.yearlyEmploymentDuration;
  }, */
  /* annualNetIncome (){
    return this.annualGrossIncome() - (this.annualGrossIncome() * employee.tax)
  }, */
  //using arrow function with this
  annualGrossIncome() {
    let innerGrossIncome = () => {
      return this.monthlySalary * this.yearlyEmploymentDuration;
    }
    return innerGrossIncome();
  },
  annualNetIncome(){
    let innerNetIncome = () => {
      return this.annualGrossIncome() - (this.annualGrossIncome() * employee.tax)
    }
    return innerNetIncome();
  }
};

console.log(typeof employee.annualGrossIncome());
console.log(typeof employee.tax);
alert(`${employee.firstName} who is a ${employee.role} earns a gross salary of ${employee.annualGrossIncome()} annually`);

alert(
  `${employee.firstName} who is a ${
    employee.role
  } earns salary ${employee.annualNetIncome()} annually after tax`
);