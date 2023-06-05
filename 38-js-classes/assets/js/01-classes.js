class User {

    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    fetchUser() {
        alert(`username: ${this.username}, email: ${this.email}`)
    }
}

//initializing our object using the constructor
let user1 = new User('theGoat', 'dgoat@test.com');

user1.fetchUser();
console.log(typeof User);
//User(); error

let Car = class {
    displayCar() {
        console.log('Toyota Camry 2018');
    }
};

new Car().displayCar();

