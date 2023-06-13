const resultList = document.querySelector('.result ul');
console.log(resultList);

async function getTitle() {
    try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        let result = await response.json();
        //result.map(item => console.log(item.title))
        //console.log(result);

        result.map((item) => resultList.innerHTML += `<li>${item.title}</li>`);
    } catch (error) {
        console.log(error);
    }
    
}

getTitle();

/* fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json)); */

