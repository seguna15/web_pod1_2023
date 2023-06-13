const form = document.getElementById("profileForm");

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    let name = document.getElementById("profileName").value;
    let error = document.querySelector('.error-message');
    
    if(name === '') {
        error.textContent = 'Insert profile name'
        return
    } 
    error.textContent = '';
    try {
        const response = await fetch(`https://api.github.com/users/${name}`);
        const result = await response.json();
        //uncomment this to get the list of properties returned
        //console.log(result);

        //uncomment the line below to see status code
        //console.log(response.status);
        if(response.status === 200){
            displayContents(result.login, result.avatar_url, result.html_url, text = ""); 
            return
        }

        if(response.status === 404){
            displayContents(
              result.login,
              result.avatar_url,
              result.html_url,
              text =  "Sorry we could not find your profile"
            );
            
            return
        }
        
    } catch (error) {
        console.log(error);
    }
    

})

function displayContents(login, avatar_url, html_url, text = "") {
    let displayName = document.getElementById("login");
    let image = document.getElementById("avatar-url");
    let url = document.getElementById("url");
    let resultDisplay = document.getElementById("resultText");
     displayName.textContent = login;
     image.setAttribute("src", avatar_url);
     url.setAttribute("href", html_url);
     resultDisplay.textContent = text;
}