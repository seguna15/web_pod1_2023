const client = {
    name: '',
    company: '',
    insurance: 0.20,
    salary: 0,
    calcInsurance(){
        return this.salary * this.insurance;
    },
    setValue(name, company,salary){
        this.name = name;
        this.company = company;
        this.salary = salary;
    },
    displayClient(){
        alert( `client ${this.name} working at ${this.company} with a salary of ${this.salary} at ${this.insurance} will pay ${this.calcInsurance()} monthly `);
    }
}
alert(
  `Welcome SkriptaPod Insurance, kindly proceed`
);

let clientName = prompt('Enter your name');
alert(`Welcome ${clientName}, we need the other details to create your account`)
let clientCompany = prompt('Enter your company name');
let clientSalary = parseFloat(prompt('Enter your salary'))

const client1 = client;

client1.setValue(clientName, clientCompany, clientSalary);
client1.displayClient();

//Assignment make the insurance payable dynamic if someone earn between 1 - 2000 insurance is 10%, >2000 - 5000 insurance is 15%, >5000 insurance in 20%.