//set
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

//set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}


let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set2) console.log(value);

// the same with forEach:
set2.forEach((value, valueAgain, set) => {
  console.log(value);
});