class Staff {
  constructor(){
    this.name = '';
    this.idNumber = '';
    this.department = '';
    this.salary = '';
  }

  getStaffDetails(){
    console.log(`name: ${this.name}, idNumber: ${this.idNumber}, department: ${this.department}, salary: ${this.salary}`);
  }
}


class Developer extends Staff {
    constructor(codes, name, idNumber, department){
      super(name, idNumber, department);
      this.codes = codes;
      this.name = name;
      this.idNumber = idNumber;
      this.department = department;
    }

    getDevDetails(){
      console.log(`${this.name} with staffId ${this.idNumber} in ${this.department} department: ${this.codes}`);
    }
}

class HumanResource extends Staff{
  constructor(salary, idNumber) {
    super(idNumber,salary);
    this.salary = salary
    this.idNumber = idNumber;

  }

  getSalary(){
    console.log(`ID: ${this.idNumber}, Salary: ${this.salary}`)
  }
}

//let john = new Staff('John Doe','staff123', 'IT');
let seniorDev = new Developer(
  ["JS", "TS", "Node", "Nest JS", "Next JS"],
  "John Doe",
  "staff123",
  "IT"
);

seniorDev.getDevDetails();
seniorDev.getStaffDetails();
let staff123 = new HumanResource(30000, 'staff123',);
staff123.getSalary();
