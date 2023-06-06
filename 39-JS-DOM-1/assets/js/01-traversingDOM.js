console.log(document.documentElement);
console.log(document.body.parentElement);
console.log(document.head.nextElementSibling);
console.log(document.body.previousElementSibling);
console.log(document.body.firstElementChild);

let firstElChild = document.body.firstElementChild;
let lastElChild = document.body.lastElementChild;
console.log(lastElChild);
console.log(lastElChild.previousElementSibling);

console.log(lastElChild.previousElementSibling.children);
const listItem = lastElChild.previousElementSibling.children;

const listItemArray = Array.from(listItem);

listItemArray.forEach(
  (item, index) => (item.innerText = `${++index} ${item.innerText}  `)
);