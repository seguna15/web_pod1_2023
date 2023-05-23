//Map

let map = new Map()

map.set('1', 'str1'); //setting a string key
map.set(1, 'num1'); //setting number key
map.set(true, 'bool1'); //setting boolean key

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);

//looping over map
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 200],
    ['onions', 700],
])

for (let vegetable of recipeMap.keys()){
    console.log(vegetable);
}

for (let vegetable of recipeMap.values()){
    console.log(vegetable);
}

for (let vegetable of recipeMap){
    console.log(vegetable);
}
