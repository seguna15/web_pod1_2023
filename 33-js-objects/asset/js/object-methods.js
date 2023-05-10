//object methods

const employee = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  role: "Backend Engineer",
  monthlySalary: 2500,
  "country of origin": "South Africa",
  tax: 0.35,
  yearlyEmploymentDuration: 12,
  annualGrossIncome: () => {
    return employee.monthlySalary * employee.yearlyEmploymentDuration;
  },
  annualNetIncome: () => {
    return employee.annualGrossIncome() - (employee.annualGrossIncome() * employee.tax)
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