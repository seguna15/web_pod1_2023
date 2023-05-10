const employee =  {
    name: 'John Doe',
    role: 'UI/UX Designer',
    salary: 2000,
    isRemote: false,
    setRemote(){
        return !this.isRemote;
    }
}

for (let key in employee){
    console.log(key);
}

console.log(employee.setRemote());

console.log(`employee entries: ${Object.entries(employee)}`)
console.log(`employee values: ${Object.values(employee)}`)
console.log(`employee keys: ${Object.keys(employee)}`)