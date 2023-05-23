const countries = ['Nigeria', 'South Africa', 'Kenya', 'Egypt'];

// for loop
console.log('for loop results')
for(let index = 0; index < countries.length; index++){
    console.log(`country: ${countries[index]}`);
}

//for of 
console.log("for of loop results");
for( let country of countries){
    console.log(`country: ${country}`);
}

//for in 
console.log("for in loop results");
for(let key in countries){
    console.log(`county: ${countries[key]}`)
}