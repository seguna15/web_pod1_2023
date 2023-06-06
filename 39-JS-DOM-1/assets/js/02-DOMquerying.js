const firstText =  document.querySelector('.listItem');
console.log(firstText.textContent);
const text = document.querySelectorAll('.listItem');
console.log(text);
text.forEach(item => console.log(item.textContent));

const startButton = document.getElementById('start');
console.log(startButton.textContent);
const paragraph = document.getElementsByTagName('p');
console.log(paragraph);

const tel = document.getElementsByName("telephone");
console.log(tel);

const paragraphs = document.getElementsByClassName("text");
console.log(paragraphs);