class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  displayUser(){
    alert(`username: ${this.username}, password: ${this.password}`);
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  set username(value) {
    if (value.length < 6) {
      alert("username is too short");
      return;
    }
    this._username = value;
  }

  set password(value) {
    if (value.length < 6 ) {
      alert("password is too short");
      return;
    }
    this._password = value;
  }
}

let user  = new User("goat", "123");

user.username = "thegoat";
user.password = "thegoat123";

user.displayUser();