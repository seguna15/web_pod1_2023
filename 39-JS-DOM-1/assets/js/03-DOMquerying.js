const startBtn = document.getElementById('start');
const message = document.getElementById('message');
const statusBtn = document.getElementById('status');
const firstText = document.querySelectorAll('.text');

//Assuming we do not want to do a lot with css
/* startBtn.addEventListener('click',(e) => {
    e.preventDefault();
    message.innerHTML = `<p> you clicked me</p>`
    startBtn.textContent = 'Hide me';
    startBtn.style.background = 'red';
    startBtn.style.color = 'white';
    startBtn.style.height = '50px';
})  */


//this is usually my approach
startBtn.addEventListener('click',(e) => {
    e.preventDefault();
    startBtn.classList.toggle('hide');
    message.innerHTML =`<p>Hi you clicked me</p>`
    let messageText = message.firstElementChild;
    if(startBtn.className == 'start'){
        startBtn.textContent = "Show me";
         messageText.style.display = 'none'
    }else{
        startBtn.textContent = 'Hide me';
        messageText.style.color = "Red";
        messageText.style.textAlign = 'center';
    }
}) 

statusBtn.addEventListener('click', () => {
    statusBtn.classList.toggle('inactive');
    if(statusBtn.classList.contains('inactive')){
        statusBtn.setAttribute("data-status", "inactive");
        let newStatus = statusBtn.getAttribute("data-status");
        if (newStatus === "inactive") {
          statusBtn.textContent = "Inactive";
        }
        firstText.forEach((element) => element.classList.add("hidden"));
    }else{
        statusBtn.setAttribute("data-status", "active");
        statusBtn.textContent = "Active";
        firstText.forEach((element) => element.classList.remove("hidden"));
    }
})
    

    
    





