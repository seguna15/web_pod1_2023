const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');
const username = document.getElementById("username");
const pwd = document.getElementById("pwd");
const role = document.getElementById('role');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(username.value === '' || pwd.value === ''){
        message.style.color = 'red';
        message.textContent = 'Username and Password is required'
        return;
    }

    message.textContent = `${username.value} and ${pwd.value}`;
})

username.addEventListener('keypress',  function(e){
    
    if(this.value.length< 4){
        message.style.color = "red";
        message.textContent = 'Username should be more than 4 characters';
    }else{
        message.textContent = '';
    }
})

pwd.addEventListener("keypress", function (e) {
  if (this.value.length < 4) {
    message.style.color = "red";
    message.textContent = "Password should be more than 4 characters";
  } else {
    message.textContent = "";
  }
});

role.addEventListener('change', function(e){
    e.preventDefault();
    if(this.value.length == ''){
        message.style.color = "red";
        message.textContent = 'Kindly select a role';
        return false
    }
    message.textContent = '';
})